import { useEffect, useState, useRef } from "react";
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
import DocumentUpload from "@/components/DocumentUpload";
import VerifiedCheckmark from "@/components/VerifiedCheckmark";
import { useVerification } from "@/contexts/VerificationContext";

const COUNTRIES = [
  { code: "AE", name: "United Arab Emirates" },
  { code: "SA", name: "Saudi Arabia" },
  { code: "EG", name: "Egypt" },
  { code: "MA", name: "Morocco" },
  { code: "JO", name: "Jordan" },
  { code: "TN", name: "Tunisia" },
  { code: "TR", name: "Turkey" },
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

// Haptic feedback helper
const triggerHaptic = (pattern: number | number[] = 10) => {
  if (navigator.vibrate) {
    navigator.vibrate(pattern);
  }
};

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
  const { triggerVerificationSequence, markFieldAsVerified } = useVerification();
  const step = searchParams.get("step") || "identity";
  
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [profile, setProfile] = useState<Partial<ProfileData>>({});
  
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
    triggerHaptic(5);
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

      // Trigger verification for saved fields
      const fieldsToVerify: string[] = [];
      if (step === "identity" && profile.nationality && profile.residence_country) {
        fieldsToVerify.push("personal_info");
      }
      if (step === "employment" && profile.bank_account_number) {
        fieldsToVerify.push("bank_details");
        if (profile.swift_code) fieldsToVerify.push("swift_code");
        if (profile.tax_id) fieldsToVerify.push("tax_id");
        if (profile.address) fieldsToVerify.push("address");
      }

      if (fieldsToVerify.length > 0) {
        triggerVerificationSequence(() => {
          fieldsToVerify.forEach(field => markFieldAsVerified(field));
        });
      }

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

  const handleDocUpload = async (field: string, url: string | null) => {
    triggerHaptic(15);
    
    // Update local state immediately using functional update
    setProfile(prev => ({ ...prev, [field]: url }));
    
    // Also save to database immediately to prevent data loss
    if (user) {
      try {
        await supabase
          .from("employee_profiles")
          .update({ [field]: url })
          .eq("user_id", user.id);
      } catch (error) {
        console.error("Error saving document:", error);
      }
    }
  };

  // Signature-only upload (this one works)
  const [signatureUploading, setSignatureUploading] = useState(false);
  const [signatureProgress, setSignatureProgress] = useState(0);
  const [signatureSuccess, setSignatureSuccess] = useState(false);
  const signatureRef = useRef<HTMLInputElement>(null);

  const handleSignatureUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !user) return;

    triggerHaptic(10);
    setSignatureUploading(true);
    setSignatureProgress(0);

    const interval = setInterval(() => {
      setSignatureProgress(p => (p >= 95 ? 95 : p + Math.random() * 20 + 10));
    }, 100);

    await new Promise(r => setTimeout(r, 1000 + Math.random() * 500));
    clearInterval(interval);
    setSignatureProgress(100);

    const mockUrl = `mock://documents/${user.id}/signature-${Date.now()}-${file.name}`;

    try {
      await supabase
        .from("employee_profiles")
        .update({ signature_file_url: mockUrl })
        .eq("user_id", user.id);

      setProfile(prev => ({ ...prev, signature_file_url: mockUrl }));
      setSignatureSuccess(true);
      triggerHaptic([10, 50, 20]); // Success haptic pattern

      setTimeout(() => {
        setSignatureSuccess(false);
        setSignatureUploading(false);
        setSignatureProgress(0);
      }, 1200);
    } catch (error) {
      console.error("Signature upload error:", error);
      setSignatureUploading(false);
      setSignatureProgress(0);
    }

    if (signatureRef.current) signatureRef.current.value = "";
  };

  const clearSignature = async () => {
    setProfile(prev => ({ ...prev, signature_file_url: null }));
    await supabase
      .from("employee_profiles")
      .update({ signature_file_url: null })
      .eq("user_id", user?.id);
  };

  const renderCountrySpecificFields = () => {
    const country = profile.residence_country;
    if (!user) return null;
    
    if (country === "AE") {
      return (
        <>
          <DocumentUpload label="Emirates ID" field="emirates_id_file_url" value={profile.emirates_id_file_url} userId={user.id} onUploadComplete={handleDocUpload} />
          <DocumentUpload label="Residency Visa" field="residency_permit_file_url" value={profile.residency_permit_file_url} userId={user.id} onUploadComplete={handleDocUpload} />
        </>
      );
    }
    
    if (country === "SA") {
      return (
        <>
          <DocumentUpload label="Iqama" field="iqama_file_url" value={profile.iqama_file_url} userId={user.id} onUploadComplete={handleDocUpload} />
          <DocumentUpload label="National ID" field="national_id_file_url" value={profile.national_id_file_url} userId={user.id} onUploadComplete={handleDocUpload} />
        </>
      );
    }
    
    if (country === "EG") {
      return (
        <>
          <DocumentUpload label="National ID" field="national_id_file_url" value={profile.national_id_file_url} userId={user.id} onUploadComplete={handleDocUpload} />
          <div className="space-y-2">
            <Label htmlFor="tax_id">Tax Number</Label>
            <Input id="tax_id" value={profile.tax_id || ""} onChange={(e) => handleChange("tax_id", e.target.value)} className="apple-input" placeholder="Enter tax number" />
          </div>
        </>
      );
    }
    
    if (country === "MA") {
      return <DocumentUpload label="CNIE (National ID)" field="cnie_file_url" value={profile.cnie_file_url} userId={user.id} onUploadComplete={handleDocUpload} />;
    }
    
    if (country === "JO") {
      return (
        <div className="space-y-2">
          <Label htmlFor="national_number">National Number</Label>
          <Input id="national_number" value={profile.national_number || ""} onChange={(e) => handleChange("national_number", e.target.value)} className="apple-input" placeholder="Enter national number" />
        </div>
      );
    }
    
    if (country === "NG") {
      return (
        <>
          <div className="space-y-2">
            <Label htmlFor="nin">NIN (National Identification Number)</Label>
            <Input id="nin" value={profile.nin || ""} onChange={(e) => handleChange("nin", e.target.value)} className="apple-input" placeholder="Enter NIN" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="bvn">BVN (Bank Verification Number) - Optional</Label>
            <Input id="bvn" value={profile.bvn || ""} onChange={(e) => handleChange("bvn", e.target.value)} className="apple-input" placeholder="Enter BVN" />
          </div>
        </>
      );
    }
    
    return <DocumentUpload label="National ID" field="national_id_file_url" value={profile.national_id_file_url} userId={user.id} onUploadComplete={handleDocUpload} />;
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
              onClick={() => {
                triggerHaptic(20);
                handleSave();
              }}
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
              {user && <DocumentUpload label="Passport Photo" field="passport_file_url" value={profile.passport_file_url} userId={user.id} onUploadComplete={handleDocUpload} />}
              {renderCountrySpecificFields()}
            </div>

            <Button 
              onClick={() => {
                triggerHaptic(20);
                handleSave();
              }}
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
                  SWIFT/BIC Code or Bank Name
                  <span className="text-xs text-muted-foreground font-normal">(Optional)</span>
                </Label>
                <Input
                  id="swift_code"
                  value={profile.swift_code || ""}
                  onChange={(e) => handleChange("swift_code", e.target.value)}
                  className="apple-input"
                  placeholder="Enter SWIFT/BIC code or bank name"
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

              {user && <DocumentUpload label="Proof of Address" field="address_proof_file_url" value={profile.address_proof_file_url} userId={user.id} onUploadComplete={handleDocUpload} optional />}
            </div>

            <Button 
              onClick={() => {
                triggerHaptic(20);
                handleSave();
              }}
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
              <div className="space-y-2">
                <Label>Signature</Label>
                {signatureSuccess ? (
                  <div className="flex items-center gap-3 p-4 bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800 rounded-xl animate-fade-in">
                    <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-sm text-emerald-700 dark:text-emerald-400 font-medium">Uploaded successfully</span>
                  </div>
                ) : profile.signature_file_url ? (
                  <div className="flex items-center gap-3 p-4 bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800 rounded-xl">
                    <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-sm flex-1 text-foreground">Signature uploaded</span>
                    <button type="button" onClick={clearSignature} className="p-1.5 text-muted-foreground hover:text-red-500 transition-colors rounded-full hover:bg-red-50 dark:hover:bg-red-950/20">
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                ) : signatureUploading ? (
                  <div className="p-6 border border-border bg-secondary/30 rounded-xl">
                    <div className="space-y-3">
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                        <span className="text-sm text-muted-foreground">Uploading...</span>
                      </div>
                      <div className="w-full h-1.5 bg-secondary rounded-full overflow-hidden">
                        <div className="h-full bg-primary rounded-full transition-all duration-200 ease-out" style={{ width: `${signatureProgress}%` }} />
                      </div>
                    </div>
                  </div>
                ) : (
                  <label htmlFor="signature-input" className="flex flex-col items-center justify-center gap-2 p-6 border border-dashed border-border bg-secondary/20 rounded-xl cursor-pointer hover:bg-secondary/40 hover:border-primary/40 transition-all duration-200 active:scale-[0.99]">
                    <input id="signature-input" ref={signatureRef} type="file" accept=".png,.jpg,.jpeg" onChange={handleSignatureUpload} className="sr-only" />
                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                      <Upload className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <span className="text-sm text-muted-foreground">Tap to upload</span>
                  </label>
                )}
              </div>
              <p className="text-sm text-muted-foreground">
                Please upload a clear image of your signature on a white background.
              </p>
            </div>

            <Button 
              onClick={() => {
                triggerHaptic(20);
                handleSave(true);
              }} 
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
