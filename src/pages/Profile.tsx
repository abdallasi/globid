import { useEffect, useState } from "react";
import { useNavigate, useSearchParams, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { User } from "@supabase/supabase-js";
import { ArrowLeft, Upload, Check, X } from "lucide-react";

const COUNTRIES = [
  { code: "AE", name: "United Arab Emirates" },
  { code: "SA", name: "Saudi Arabia" },
  { code: "EG", name: "Egypt" },
  { code: "MA", name: "Morocco" },
  { code: "JO", name: "Jordan" },
  { code: "TN", name: "Tunisia" },
  { code: "NG", name: "Nigeria" },
];

const VISA_STATUSES = [
  { value: "citizen", label: "Citizen" },
  { value: "resident", label: "Resident" },
  { value: "work_permit", label: "Work Permit" },
  { value: "tourist", label: "Tourist" },
  { value: "other", label: "Other" },
];

type VisaStatus = "citizen" | "resident" | "work_permit" | "tourist" | "other";

interface ProfileData {
  nationality?: string | null;
  residence_country?: string | null;
  visa_status?: VisaStatus | null;
  passport_file_url?: string | null;
  national_id_file_url?: string | null;
  residency_permit_file_url?: string | null;
  emirates_id_file_url?: string | null;
  iqama_file_url?: string | null;
  cnie_file_url?: string | null;
  national_number?: string | null;
  nin?: string | null;
  bvn?: string | null;
  tax_id?: string | null;
  bank_account_country?: string | null;
  bank_account_number?: string | null;
  swift_code?: string | null;
  address?: string | null;
  address_proof_file_url?: string | null;
  signature_file_url?: string | null;
}

const Profile = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { toast } = useToast();
  const step = searchParams.get("step") || "identity";
  
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [profile, setProfile] = useState<Partial<ProfileData>>({});
  const [uploading, setUploading] = useState<string | null>(null);

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
      if (!session) navigate("/auth");
    });

    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      if (!session) navigate("/auth");
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  useEffect(() => {
    if (user) fetchProfile();
  }, [user]);

  const fetchProfile = async () => {
    try {
      const { data, error } = await supabase
        .from("employee_profiles")
        .select("*")
        .eq("user_id", user?.id)
        .maybeSingle();

      if (error) throw error;
      if (data) setProfile(data);
    } catch (error) {
      console.error("Error fetching profile:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setProfile((prev) => ({ ...prev, [field]: value }));
  };

  const handleFileUpload = async (field: string, file: File) => {
    if (!user) return;
    
    setUploading(field);
    try {
      const fileExt = file.name.split(".").pop();
      const filePath = `${user.id}/${field}-${Date.now()}.${fileExt}`;

      const { error: uploadError } = await supabase.storage
        .from("documents")
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage
        .from("documents")
        .getPublicUrl(filePath);

      handleChange(field, publicUrl);
      
      toast({
        title: "File uploaded",
        description: "Your document has been uploaded successfully.",
      });
    } catch (error) {
      console.error("Upload error:", error);
      toast({
        title: "Upload failed",
        description: "Please try again.",
        variant: "destructive",
      });
    } finally {
      setUploading(null);
    }
  };

  const handleSave = async () => {
    if (!user) return;
    
    setSaving(true);
    try {
      const { error } = await supabase
        .from("employee_profiles")
        .update(profile)
        .eq("user_id", user.id);

      if (error) throw error;

      toast({
        title: "Saved",
        description: "Your profile has been updated.",
      });
      
      navigate("/dashboard");
    } catch (error) {
      console.error("Save error:", error);
      toast({
        title: "Error",
        description: "Failed to save. Please try again.",
        variant: "destructive",
      });
    } finally {
      setSaving(false);
    }
  };

  const FileUploadField = ({ 
    label, 
    field, 
    accept = ".pdf,.jpg,.jpeg,.png" 
  }: { 
    label: string; 
    field: string; 
    accept?: string;
  }) => {
    const value = profile[field as keyof ProfileData];
    const isUploading = uploading === field;
    
    return (
      <div className="space-y-2">
        <Label>{label}</Label>
        <div className="relative">
          {value ? (
            <div className="flex items-center gap-2 p-3 bg-success/5 border border-success/20 rounded-xl">
              <Check className="h-4 w-4 text-success" />
              <span className="text-sm flex-1 truncate">Document uploaded</span>
              <button
                type="button"
                onClick={() => handleChange(field, "")}
                className="text-muted-foreground hover:text-foreground"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          ) : (
            <label className="flex items-center justify-center gap-2 p-6 border-2 border-dashed border-border rounded-xl cursor-pointer hover:border-primary/50 transition-colors">
              <input
                type="file"
                accept={accept}
                className="hidden"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) handleFileUpload(field, file);
                }}
                disabled={isUploading}
              />
              {isUploading ? (
                <div className="w-5 h-5 border-2 border-primary border-t-transparent rounded-full animate-spin" />
              ) : (
                <Upload className="h-5 w-5 text-muted-foreground" />
              )}
              <span className="text-sm text-muted-foreground">
                {isUploading ? "Uploading..." : "Upload document"}
              </span>
            </label>
          )}
        </div>
      </div>
    );
  };

  const renderCountrySpecificFields = () => {
    const country = profile.residence_country;
    
    if (country === "AE") {
      return (
        <>
          <FileUploadField label="Emirates ID" field="emirates_id_file_url" />
          <FileUploadField label="Residency Visa" field="residency_permit_file_url" />
        </>
      );
    }
    
    if (country === "SA") {
      return (
        <>
          <FileUploadField label="Iqama" field="iqama_file_url" />
          <FileUploadField label="National ID" field="national_id_file_url" />
        </>
      );
    }
    
    if (country === "EG") {
      return (
        <>
          <FileUploadField label="National ID" field="national_id_file_url" />
          <div className="space-y-2">
            <Label htmlFor="tax_id">Tax Number</Label>
            <Input
              id="tax_id"
              value={profile.tax_id || ""}
              onChange={(e) => handleChange("tax_id", e.target.value)}
              className="apple-input"
              placeholder="Enter tax number"
            />
          </div>
        </>
      );
    }
    
    if (country === "MA") {
      return (
        <FileUploadField label="CNIE (National ID)" field="cnie_file_url" />
      );
    }
    
    if (country === "JO") {
      return (
        <div className="space-y-2">
          <Label htmlFor="national_number">National Number</Label>
          <Input
            id="national_number"
            value={profile.national_number || ""}
            onChange={(e) => handleChange("national_number", e.target.value)}
            className="apple-input"
            placeholder="Enter national number"
          />
        </div>
      );
    }
    
    if (country === "NG") {
      return (
        <>
          <div className="space-y-2">
            <Label htmlFor="nin">NIN (National Identification Number)</Label>
            <Input
              id="nin"
              value={profile.nin || ""}
              onChange={(e) => handleChange("nin", e.target.value)}
              className="apple-input"
              placeholder="Enter NIN"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="bvn">BVN (Bank Verification Number) - Optional</Label>
            <Input
              id="bvn"
              value={profile.bvn || ""}
              onChange={(e) => handleChange("bvn", e.target.value)}
              className="apple-input"
              placeholder="Enter BVN"
            />
          </div>
        </>
      );
    }
    
    return (
      <FileUploadField label="National ID" field="national_id_file_url" />
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <nav className="border-b border-border/50">
        <div className="apple-container">
          <div className="flex items-center h-14">
            <Link to="/dashboard" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="h-4 w-4" />
              <span className="text-sm">Dashboard</span>
            </Link>
          </div>
        </div>
      </nav>

      <div className="apple-container py-8 md:py-12 max-w-xl">
        {/* Identity Step */}
        {step === "identity" && (
          <div className="space-y-8">
            <div>
              <h1 className="text-2xl font-semibold tracking-tight">Identity & Residence</h1>
              <p className="text-muted-foreground mt-1">Tell us about yourself.</p>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Nationality</Label>
                <Select
                  value={profile.nationality || ""}
                  onValueChange={(value) => handleChange("nationality", value)}
                >
                  <SelectTrigger className="apple-input">
                    <SelectValue placeholder="Select nationality" />
                  </SelectTrigger>
                  <SelectContent>
                    {COUNTRIES.map((c) => (
                      <SelectItem key={c.code} value={c.code}>{c.name}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Country of Residence</Label>
                <Select
                  value={profile.residence_country || ""}
                  onValueChange={(value) => handleChange("residence_country", value)}
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
              </div>

              <div className="space-y-2">
                <Label>Visa Status</Label>
                <Select
                  value={profile.visa_status || ""}
                  onValueChange={(value) => handleChange("visa_status", value)}
                >
                  <SelectTrigger className="apple-input">
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    {VISA_STATUSES.map((s) => (
                      <SelectItem key={s.value} value={s.value}>{s.label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Button 
              onClick={handleSave} 
              variant="apple-blue" 
              size="lg" 
              className="w-full"
              disabled={saving}
            >
              {saving ? "Saving..." : "Save & Continue"}
            </Button>
          </div>
        )}

        {/* Documents Step */}
        {step === "documents" && (
          <div className="space-y-8">
            <div>
              <h1 className="text-2xl font-semibold tracking-tight">Documents</h1>
              <p className="text-muted-foreground mt-1">Upload your identity documents.</p>
            </div>

            <div className="space-y-4">
              <FileUploadField label="Passport" field="passport_file_url" />
              {renderCountrySpecificFields()}
            </div>

            <Button 
              onClick={handleSave} 
              variant="apple-blue" 
              size="lg" 
              className="w-full"
              disabled={saving}
            >
              {saving ? "Saving..." : "Save & Continue"}
            </Button>
          </div>
        )}

        {/* Employment Step */}
        {step === "employment" && (
          <div className="space-y-8">
            <div>
              <h1 className="text-2xl font-semibold tracking-tight">Employment Pack</h1>
              <p className="text-muted-foreground mt-1">Banking and tax details for payroll.</p>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Bank Account Country</Label>
                <Select
                  value={profile.bank_account_country || ""}
                  onValueChange={(value) => handleChange("bank_account_country", value)}
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
              </div>

              <div className="space-y-2">
                <Label htmlFor="bank_account_number">Bank Account Number / IBAN</Label>
                <Input
                  id="bank_account_number"
                  value={profile.bank_account_number || ""}
                  onChange={(e) => handleChange("bank_account_number", e.target.value)}
                  className="apple-input"
                  placeholder="Enter account number"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="swift_code">SWIFT/BIC Code</Label>
                <Input
                  id="swift_code"
                  value={profile.swift_code || ""}
                  onChange={(e) => handleChange("swift_code", e.target.value)}
                  className="apple-input"
                  placeholder="Enter SWIFT code"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="tax_id">Tax ID</Label>
                <Input
                  id="tax_id"
                  value={profile.tax_id || ""}
                  onChange={(e) => handleChange("tax_id", e.target.value)}
                  className="apple-input"
                  placeholder="Enter tax ID"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">Full Address</Label>
                <Textarea
                  id="address"
                  value={profile.address || ""}
                  onChange={(e) => handleChange("address", e.target.value)}
                  className="apple-input min-h-[100px]"
                  placeholder="Enter your full address"
                />
              </div>

              <FileUploadField label="Address Proof" field="address_proof_file_url" />
            </div>

            <Button 
              onClick={handleSave} 
              variant="apple-blue" 
              size="lg" 
              className="w-full"
              disabled={saving}
            >
              {saving ? "Saving..." : "Save & Continue"}
            </Button>
          </div>
        )}

        {/* Signature Step */}
        {step === "signature" && (
          <div className="space-y-8">
            <div>
              <h1 className="text-2xl font-semibold tracking-tight">Signature</h1>
              <p className="text-muted-foreground mt-1">Upload your digital signature.</p>
            </div>

            <div className="space-y-4">
              <FileUploadField 
                label="Signature" 
                field="signature_file_url" 
                accept=".png,.jpg,.jpeg"
              />
              <p className="text-sm text-muted-foreground">
                Please upload a clear image of your signature on a white background.
              </p>
            </div>

            <Button 
              onClick={handleSave} 
              variant="apple-blue" 
              size="lg" 
              className="w-full"
              disabled={saving}
            >
              {saving ? "Saving..." : "Complete Profile"}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
