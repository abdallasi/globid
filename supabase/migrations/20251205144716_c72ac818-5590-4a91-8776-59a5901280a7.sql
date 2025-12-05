-- Create enums
CREATE TYPE public.user_role AS ENUM ('employee', 'company', 'admin');
CREATE TYPE public.payment_status AS ENUM ('pending', 'paid');
CREATE TYPE public.visa_status AS ENUM ('citizen', 'resident', 'work_permit', 'tourist', 'other');

-- Create profiles table
CREATE TABLE public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  role user_role NOT NULL DEFAULT 'employee',
  full_name TEXT,
  email TEXT,
  phone TEXT,
  country TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create employee_profiles table
CREATE TABLE public.employee_profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL UNIQUE,
  nationality TEXT,
  residence_country TEXT,
  passport_file_url TEXT,
  national_id_file_url TEXT,
  residency_permit_file_url TEXT,
  visa_status visa_status,
  tax_id TEXT,
  bank_account_country TEXT,
  bank_account_number TEXT,
  swift_code TEXT,
  address TEXT,
  address_proof_file_url TEXT,
  signature_file_url TEXT,
  payment_status payment_status DEFAULT 'pending',
  shareable_link_uid UUID DEFAULT gen_random_uuid() UNIQUE,
  emirates_id_file_url TEXT,
  iqama_file_url TEXT,
  cnie_file_url TEXT,
  national_number TEXT,
  nin TEXT,
  bvn TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create company_demos table
CREATE TABLE public.company_demos (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  company_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  country TEXT,
  company_size TEXT,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create shared_links table
CREATE TABLE public.shared_links (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  employee_id UUID REFERENCES public.employee_profiles(id) ON DELETE CASCADE NOT NULL,
  uid UUID DEFAULT gen_random_uuid() UNIQUE NOT NULL,
  expires_at TIMESTAMP WITH TIME ZONE,
  pdf_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.employee_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.company_demos ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.shared_links ENABLE ROW LEVEL SECURITY;

-- Profiles policies
CREATE POLICY "Users can view their own profile"
  ON public.profiles FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY "Users can update their own profile"
  ON public.profiles FOR UPDATE
  USING (auth.uid() = id);

CREATE POLICY "Users can insert their own profile"
  ON public.profiles FOR INSERT
  WITH CHECK (auth.uid() = id);

-- Employee profiles policies
CREATE POLICY "Users can view their own employee profile"
  ON public.employee_profiles FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can update their own employee profile"
  ON public.employee_profiles FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own employee profile"
  ON public.employee_profiles FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Public access to employee profiles via shareable link
CREATE POLICY "Anyone can view employee profile via shareable link"
  ON public.employee_profiles FOR SELECT
  USING (shareable_link_uid IS NOT NULL);

-- Company demos - anyone can insert
CREATE POLICY "Anyone can submit demo request"
  ON public.company_demos FOR INSERT
  WITH CHECK (true);

-- Shared links policies
CREATE POLICY "Users can manage their own shared links"
  ON public.shared_links FOR ALL
  USING (employee_id IN (SELECT id FROM public.employee_profiles WHERE user_id = auth.uid()));

CREATE POLICY "Anyone can view shared links"
  ON public.shared_links FOR SELECT
  USING (true);

-- Create storage bucket for documents
INSERT INTO storage.buckets (id, name, public) VALUES ('documents', 'documents', true);

-- Storage policies
CREATE POLICY "Users can upload their own documents"
  ON storage.objects FOR INSERT
  WITH CHECK (bucket_id = 'documents' AND auth.uid()::text = (storage.foldername(name))[1]);

CREATE POLICY "Users can view their own documents"
  ON storage.objects FOR SELECT
  USING (bucket_id = 'documents');

CREATE POLICY "Users can update their own documents"
  ON storage.objects FOR UPDATE
  USING (bucket_id = 'documents' AND auth.uid()::text = (storage.foldername(name))[1]);

CREATE POLICY "Users can delete their own documents"
  ON storage.objects FOR DELETE
  USING (bucket_id = 'documents' AND auth.uid()::text = (storage.foldername(name))[1]);

-- Function to handle new user creation
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER SET search_path = public
AS $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name)
  VALUES (NEW.id, NEW.email, NEW.raw_user_meta_data ->> 'full_name');
  
  INSERT INTO public.employee_profiles (user_id)
  VALUES (NEW.id);
  
  RETURN NEW;
END;
$$;

-- Trigger for new user
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Triggers for updated_at
CREATE TRIGGER update_profiles_updated_at
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_employee_profiles_updated_at
  BEFORE UPDATE ON public.employee_profiles
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();