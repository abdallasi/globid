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
import CompletionModal from "@/components/CompletionModal";

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
  { code: "CA", name: "Canada" },
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
  const [showCompletion, setShowCompletion] = useState(false);

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


  const handleSave = async (isSignatureStep = false) => {
    if (!user) return;
    
    setSaving(true);
    try {
      const { error } = await supabase
        .from("employee_profiles")
        .update(profile)
        .eq("user_id", user.id);

      if (error) throw error;

      // Check if profile is complete after signature step
      if (isSignatureStep && profile.signature_file_url) {
        const { data: fullProfile } = await supabase
          .from("employee_profiles")
          .select("*")
          .eq("user_id", user.id)
          .single();
        
        const isComplete = fullProfile?.payment_status === "paid" && 
                          fullProfile?.nationality && 
                          fullProfile?.passport_file_url && 
                          fullProfile?.bank_account_number && 
                          fullProfile?.signature_file_url;
        
        if (isComplete) {
          setShowCompletion(true);
          return;
        }
      }

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

  const [uploadProgress, setUploadProgress] = useState<Record<string, number>>({});
  const [uploadSuccess, setUploadSuccess] = useState<Record<string, boolean>>({});

  const handleFileUploadWithProgress = async (field: keyof ProfileData, file: File) => {
    if (!user) {
      console.log("No user found, aborting upload");
      return;
    }
    
    console.log("Starting upload for field:", field, "file:", file.name);
    
    setUploading(field);
    setUploadProgress(prev => ({ ...prev, [field]: 0 }));
    setUploadSuccess(prev => ({ ...prev, [field]: false }));
    
    // Simulate progress
    const progressInterval = setInterval(() => {
      setUploadProgress(prev => {
        const current = prev[field] || 0;
        if (current >= 90) {
          clearInterval(progressInterval);
          return prev;
        }
        return { ...prev, [field]: current + 10 };
      });
    }, 100);
    
    try {
      const fileExt = file.name.split(".").pop();
      const fileName = `${String(field)}-${Date.now()}.${fileExt}`;
      const filePath = `${user.id}/${fileName}`;

      console.log("Uploading to path:", filePath);

      const existingUrl = profile[field] as string;
      if (existingUrl) {
        const existingPath = existingUrl.split('/').slice(-2).join('/');
        console.log("Removing existing file:", existingPath);
        await supabase.storage.from("documents").remove([existingPath]);
      }

      const { data: uploadData, error: uploadError } = await supabase.storage
        .from("documents")
        .upload(filePath, file, { upsert: true });

      console.log("Upload result:", { uploadData, uploadError });

      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage
        .from("documents")
        .getPublicUrl(filePath);

      console.log("Public URL:", publicUrl);

      const updateData = { [field]: publicUrl };
      const { data: updateResult, error: updateError } = await supabase
        .from("employee_profiles")
        .update(updateData)
        .eq("user_id", user.id)
        .select();

      console.log("Update result:", { updateResult, updateError });

      if (updateError) throw updateError;

      clearInterval(progressInterval);
      setUploadProgress(prev => ({ ...prev, [field]: 100 }));
      setProfile(prev => ({ ...prev, [field]: publicUrl }));
      setUploadSuccess(prev => ({ ...prev, [field]: true }));
      
      setTimeout(() => {
        setUploadSuccess(prev => ({ ...prev, [field]: false }));
      }, 2000);
      
    } catch (error) {
      console.error("Upload error for field", field, ":", error);
      clearInterval(progressInterval);
      toast({
        title: "Upload failed",
        description: error instanceof Error ? error.message : "Please try again.",
        variant: "destructive",
      });
    } finally {
      setUploading(null);
      setUploadProgress(prev => ({ ...prev, [field]: 0 }));
    }
  };

  const FileUploadField = ({ 
    label, 
    field, 
    accept = ".pdf,.jpg,.jpeg,.png",
    optional = false
  }: { 
    label: string; 
    field: keyof ProfileData; 
    accept?: string;
    optional?: boolean;
  }) => {
    const value = profile[field];
    const isUploading = uploading === field;
    const progress = uploadProgress[field] || 0;
    const showSuccess = uploadSuccess[field];

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
        handleFileUploadWithProgress(field, file);
      }
      // Reset input to allow re-upload of same file
      e.target.value = '';
    };
    
    return (
      <div className="space-y-2">
        <Label className="flex items-center gap-2">
          {label}
          {optional && <span className="text-xs text-muted-foreground font-normal">(Optional)</span>}
        </Label>
        <div className="relative">
          {showSuccess ? (
            <div className="flex items-center gap-2 p-4 bg-success/5 border border-success/20 rounded-xl animate-fade-in">
              <Check className="h-4 w-4 text-success" />
              <span className="text-sm text-success font-medium">Uploaded ✓</span>
            </div>
          ) : value ? (
            <div className="flex items-center gap-2 p-4 bg-success/5 border border-success/20 rounded-xl">
              <Check className="h-4 w-4 text-success" />
              <span className="text-sm flex-1 truncate text-foreground">Document uploaded</span>
              <button
                type="button"
                onClick={() => handleChange(field, "")}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          ) : (
            <div 
              className={`flex flex-col items-center justify-center gap-2 p-6 border border-border bg-secondary/30 rounded-xl transition-all duration-200 ${
                isUploading ? '' : 'hover:bg-secondary/50 hover:border-primary/30 cursor-pointer'
              }`}
              onClick={() => {
                if (!isUploading) {
                  document.getElementById(`file-input-${field}`)?.click();
                }
              }}
            >
              <input
                id={`file-input-${field}`}
                type="file"
                accept={accept}
                className="hidden"
                onChange={handleFileChange}
                disabled={isUploading}
              />
              {isUploading ? (
                <div className="w-full space-y-3">
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                    <span className="text-sm text-muted-foreground">Uploading...</span>
                  </div>
                  <div className="w-full h-1 bg-secondary rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primary transition-all duration-300 ease-out rounded-full"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
              ) : (
                <>
                  <Upload className="h-5 w-5 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Upload document</span>
                </>
              )}
            </div>
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
              onClick={() => handleSave()}
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
              <FileUploadField label="Passport Photo" field="passport_file_url" />
              {renderCountrySpecificFields()}
            </div>

            <Button 
              onClick={() => handleSave()}
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
                <Label htmlFor="swift_code" className="flex items-center gap-2">
                  SWIFT/BIC Code
                  <span className="text-xs text-muted-foreground font-normal">(Optional)</span>
                </Label>
                <Input
                  id="swift_code"
                  value={profile.swift_code || ""}
                  onChange={(e) => handleChange("swift_code", e.target.value)}
                  className="apple-input"
                  placeholder="Enter SWIFT code"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="tax_id" className="flex items-center gap-2">
                  Tax ID
                  <span className="text-xs text-muted-foreground font-normal">(Optional)</span>
                </Label>
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

              <FileUploadField label="Proof of Address" field="address_proof_file_url" optional={true} />
            </div>

            <Button 
              onClick={() => handleSave()}
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
              onClick={() => handleSave(true)} 
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

      {/* Completion Modal */}
      <CompletionModal 
        isOpen={showCompletion} 
        onContinue={() => navigate("/dashboard")} 
      />
    </div>
  );
};

export default Profile;
