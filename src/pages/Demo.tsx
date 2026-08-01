import { useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, Check, Building2 } from "lucide-react";
import { z } from "zod";
import Seo from "@/components/Seo";

const COUNTRIES = [
  { code: "AE", name: "United Arab Emirates" },
  { code: "SA", name: "Saudi Arabia" },
  { code: "EG", name: "Egypt" },
  { code: "MA", name: "Morocco" },
  { code: "JO", name: "Jordan" },
  { code: "TN", name: "Tunisia" },
  { code: "NG", name: "Nigeria" },
  { code: "IN", name: "India" },
  { code: "KE", name: "Kenya" },
  { code: "RW", name: "Rwanda" },
  { code: "UG", name: "Uganda" },
  { code: "ZA", name: "South Africa" },
  { code: "TZ", name: "Tanzania" },
  { code: "SN", name: "Senegal" },
  { code: "GH", name: "Ghana" },
  { code: "US", name: "United States" },
  { code: "GB", name: "United Kingdom" },
  { code: "DE", name: "Germany" },
  { code: "OTHER", name: "Other" },
];

const COMPANY_SIZES = [
  { value: "1-10", label: "1-10 employees" },
  { value: "11-50", label: "11-50 employees" },
  { value: "51-200", label: "51-200 employees" },
  { value: "201-500", label: "201-500 employees" },
  { value: "500+", label: "500+ employees" },
];

// List of free email domains to reject
const FREE_EMAIL_DOMAINS = [
  "gmail.com", "yahoo.com", "hotmail.com", "outlook.com", "aol.com",
  "icloud.com", "mail.com", "protonmail.com", "zoho.com", "yandex.com",
  "gmx.com", "tutanota.com", "fastmail.com", "hushmail.com", "live.com",
  "msn.com", "me.com", "qq.com", "163.com", "126.com"
];

const isWorkEmail = (email: string): boolean => {
  const domain = email.split("@")[1]?.toLowerCase();
  return domain ? !FREE_EMAIL_DOMAINS.includes(domain) : false;
};

const demoSchema = z.object({
  name: z.string().min(2, "Name is required"),
  company_name: z.string().min(2, "Company name is required"),
  email: z.string().email("Please enter a valid email").refine(
    (email) => isWorkEmail(email),
    "Please use your work email address"
  ),
  phone: z.string().optional(),
  country: z.string().min(1, "Please select a country"),
  company_size: z.string().min(1, "Please select company size"),
  message: z.string().optional(),
});

const Demo = () => {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  const [form, setForm] = useState({
    name: "",
    company_name: "",
    email: "",
    phone: "",
    country: "",
    company_size: "",
    message: "",
  });

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      demoSchema.parse(form);
      setErrors({});
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0] as string] = err.message;
          }
        });
        setErrors(newErrors);
        return;
      }
    }
    
    setLoading(true);
    
    try {
      const { error } = await supabase
        .from("company_demos")
        .insert([form]);

      if (error) throw error;

      setSubmitted(true);
    } catch (error) {
      console.error("Error submitting demo request:", error);
      toast({
        title: "Error",
        description: "Failed to submit. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-6">
      <Seo
        title="Book a GlobID Demo — Compliant Global Hiring for Companies"
        description="See how GlobID lets your company hire, verify and pay international talent in 60+ countries without opening a local entity. Book a live demo with our team."
        path="/demo"
        breadcrumbs={[{ name: "Book a Demo", path: "/demo" }]}
      />
        <div className="text-center max-w-md">
          <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-6">
            <Check className="h-8 w-8 text-success" />
          </div>
          <h1 className="text-2xl font-semibold">Thank you!</h1>
          <p className="text-muted-foreground mt-2">
            We've received your demo request and will be in touch within 24 hours.
          </p>
          <Link to="/">
            <Button variant="apple-blue" className="mt-8">Back to Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <nav className="border-b border-border/50">
        <div className="apple-container">
          <div className="flex items-center h-14">
            <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="h-4 w-4" />
              <span className="text-sm">Back</span>
            </Link>
          </div>
        </div>
      </nav>

      <div className="apple-container py-12 md:py-20">
        <div className="max-w-xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Building2 className="h-7 w-7 text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
              For Companies
            </h1>
            <p className="text-muted-foreground mt-2 max-w-md mx-auto">
              See how GlobID can streamline your MENA & Africa hiring compliance.
            </p>
          </div>

          {/* Form */}
          <div className="apple-card p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name</Label>
                  <Input
                    id="name"
                    value={form.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    className="apple-input"
                    placeholder="John Doe"
                  />
                  {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company_name">Company Name</Label>
                  <Input
                    id="company_name"
                    value={form.company_name}
                    onChange={(e) => handleChange("company_name", e.target.value)}
                    className="apple-input"
                    placeholder="Acme Inc"
                  />
                  {errors.company_name && <p className="text-sm text-destructive">{errors.company_name}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Work Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  className="apple-input"
                  placeholder="john@company.com"
                />
                {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
                <p className="text-xs text-muted-foreground">Please use your company email address</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone (Optional)</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={form.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  className="apple-input"
                  placeholder="+1 234 567 8900"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Country</Label>
                  <Select
                    value={form.country}
                    onValueChange={(value) => handleChange("country", value)}
                  >
                    <SelectTrigger className="apple-input">
                      <SelectValue placeholder="Select country" />
                    </SelectTrigger>
                    <SelectContent>
                      {COUNTRIES.map((c) => (
                        <SelectItem key={c.code} value={c.code}>{c.name}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.country && <p className="text-sm text-destructive">{errors.country}</p>}
                </div>

                <div className="space-y-2">
                  <Label>Company Size</Label>
                  <Select
                    value={form.company_size}
                    onValueChange={(value) => handleChange("company_size", value)}
                  >
                    <SelectTrigger className="apple-input">
                      <SelectValue placeholder="Select size" />
                    </SelectTrigger>
                    <SelectContent>
                      {COMPANY_SIZES.map((s) => (
                        <SelectItem key={s.value} value={s.value}>{s.label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.company_size && <p className="text-sm text-destructive">{errors.company_size}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message (Optional)</Label>
                <Textarea
                  id="message"
                  value={form.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  className="apple-input min-h-[100px]"
                  placeholder="Tell us about your hiring needs..."
                />
              </div>

              <Button
                type="submit"
                variant="apple-blue"
                size="lg"
                className="w-full"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Request Demo"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demo;
