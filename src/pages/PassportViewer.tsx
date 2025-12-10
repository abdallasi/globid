import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { 
  Download, 
  User, 
  FileText, 
  Building2, 
  CreditCard, 
  MapPin,
  CheckCircle2,
  Globe,
  Shield
} from "lucide-react";

const COUNTRY_NAMES: Record<string, string> = {
  AE: "United Arab Emirates",
  SA: "Saudi Arabia",
  EG: "Egypt",
  MA: "Morocco",
  JO: "Jordan",
  TN: "Tunisia",
  NG: "Nigeria",
  IN: "India",
  KE: "Kenya",
  RW: "Rwanda",
  UG: "Uganda",
  ZA: "South Africa",
  TZ: "Tanzania",
  SN: "Senegal",
  GH: "Ghana",
  CA: "Canada",
  US: "United States",
  GB: "United Kingdom",
  DE: "Germany",
  FR: "France",
};

const VISA_STATUS_LABELS: Record<string, string> = {
  citizen: "Citizen",
  resident: "Resident",
  work_permit: "Work Permit",
  tourist: "Tourist",
  other: "Other",
};

interface PassportData {
  id: string;
  nationality: string | null;
  residence_country: string | null;
  visa_status: string | null;
  passport_file_url: string | null;
  national_id_file_url: string | null;
  residency_permit_file_url: string | null;
  emirates_id_file_url: string | null;
  iqama_file_url: string | null;
  cnie_file_url: string | null;
  national_number: string | null;
  nin: string | null;
  bvn: string | null;
  tax_id: string | null;
  bank_account_country: string | null;
  bank_account_number: string | null;
  swift_code: string | null;
  address: string | null;
  address_proof_file_url: string | null;
  signature_file_url: string | null;
  payment_status: string;
  created_at: string;
  user_id: string;
  shareable_link_uid: string;
}

interface ProfileData {
  full_name: string | null;
  email: string | null;
}

const PassportViewer = () => {
  const { uid } = useParams<{ uid: string }>();
  const { toast } = useToast();
  const [passport, setPassport] = useState<PassportData | null>(null);
  const [profile, setProfile] = useState<ProfileData | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [downloading, setDownloading] = useState(false);

  useEffect(() => {
    if (uid) fetchPassport();
  }, [uid]);

  const fetchPassport = async () => {
    try {
      const { data: passportData, error: passportError } = await supabase
        .from("employee_profiles")
        .select("*")
        .eq("shareable_link_uid", uid)
        .maybeSingle();

      if (passportError) throw passportError;
      
      if (!passportData || passportData.payment_status !== "paid") {
        setNotFound(true);
        return;
      }

      setPassport(passportData);

      const { data: profileData } = await supabase
        .from("profiles")
        .select("full_name, email")
        .eq("id", passportData.user_id)
        .maybeSingle();

      setProfile(profileData);
    } catch (error) {
      console.error("Error fetching passport:", error);
      setNotFound(true);
    } finally {
      setLoading(false);
    }
  };

  const handleDownloadPDF = async () => {
    if (!passport?.shareable_link_uid) return;
    
    setDownloading(true);
    try {
      const { data, error } = await supabase.functions.invoke("generate-passport-pdf", {
        body: { passportUid: passport.shareable_link_uid },
      });

      if (error) throw error;

      const blob = new Blob([data.content], { type: "text/plain" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = data.filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      toast({
        title: "PDF Downloaded",
        description: "Your passport has been downloaded successfully.",
      });
    } catch (error) {
      console.error("Download error:", error);
      toast({
        title: "Download failed",
        description: "Please try again.",
        variant: "destructive",
      });
    } finally {
      setDownloading(false);
    }
  };

  const getCountryName = (code: string | null) => {
    if (!code) return null;
    return COUNTRY_NAMES[code] || code;
  };

  const getVisaLabel = (status: string | null) => {
    if (!status) return null;
    return VISA_STATUS_LABELS[status] || status;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (notFound) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-6">
            <FileText className="h-8 w-8 text-muted-foreground" />
          </div>
          <h1 className="text-2xl font-semibold tracking-tight">Passport Not Found</h1>
          <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
            This passport link is invalid or has expired. Please check the URL or contact the passport owner.
          </p>
          <Link to="/">
            <Button variant="apple-blue" className="mt-8">Go Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  const Section = ({ 
    icon: Icon, 
    title, 
    children 
  }: { 
    icon: any; 
    title: string; 
    children: React.ReactNode;
  }) => (
    <div className="py-5 sm:py-6">
      <div className="flex items-center gap-2.5 mb-4">
        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
          <Icon className="h-4 w-4 text-primary" />
        </div>
        <h2 className="font-semibold text-[15px]">{title}</h2>
      </div>
      <div className="ml-0 sm:ml-10">{children}</div>
    </div>
  );

  const InfoRow = ({ label, value }: { label: string; value: string | null }) => (
    <div className="flex justify-between items-center py-2.5 border-b border-border/50 last:border-0">
      <span className="text-muted-foreground text-sm">{label}</span>
      <span className="font-medium text-sm text-right">{value || "Not provided"}</span>
    </div>
  );

  const DocumentBadge = ({ label, url }: { label: string; url: string | null }) => (
    <div className={`inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${
      url 
        ? "bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800" 
        : "bg-muted text-muted-foreground border border-border"
    }`}>
      {url ? <CheckCircle2 className="h-3.5 w-3.5" /> : <FileText className="h-3.5 w-3.5" />}
      <span>{label}</span>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <nav className="border-b border-border/50 bg-background/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-14">
            <Link to="/" className="font-semibold text-lg tracking-tight">
              GlobID
            </Link>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800">
              <Shield className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
              <span className="text-xs font-medium text-emerald-700 dark:text-emerald-400">Verified</span>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-6 sm:py-10">
        {/* Passport Card */}
        <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm">
          {/* Header */}
          <div className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground px-6 sm:px-8 py-6 sm:py-8">
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <div className="text-xs uppercase tracking-wider opacity-70 font-medium">Employment Passport</div>
                <h1 className="text-xl sm:text-2xl font-semibold">{profile?.full_name || "—"}</h1>
                {profile?.email && (
                  <p className="text-sm opacity-70">{profile.email}</p>
                )}
              </div>
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                <Globe className="h-6 w-6 opacity-70" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="px-6 sm:px-8 divide-y divide-border">
            {/* Identity */}
            <Section icon={User} title="Identity">
              <div className="space-y-0">
                <InfoRow label="Nationality" value={getCountryName(passport?.nationality)} />
                <InfoRow label="Country of Residence" value={getCountryName(passport?.residence_country)} />
                <InfoRow label="Visa Status" value={getVisaLabel(passport?.visa_status)} />
              </div>
            </Section>

            {/* Documents */}
            <Section icon={FileText} title="Verified Documents">
              <div className="flex flex-wrap gap-2">
                <DocumentBadge label="Passport" url={passport?.passport_file_url || null} />
                {passport?.national_id_file_url && <DocumentBadge label="National ID" url={passport.national_id_file_url} />}
                {passport?.emirates_id_file_url && <DocumentBadge label="Emirates ID" url={passport.emirates_id_file_url} />}
                {passport?.iqama_file_url && <DocumentBadge label="Iqama" url={passport.iqama_file_url} />}
                {passport?.residency_permit_file_url && <DocumentBadge label="Residency Visa" url={passport.residency_permit_file_url} />}
                {passport?.cnie_file_url && <DocumentBadge label="CNIE" url={passport.cnie_file_url} />}
                {passport?.address_proof_file_url && <DocumentBadge label="Address Proof" url={passport.address_proof_file_url} />}
              </div>
            </Section>

            {/* Banking */}
            <Section icon={CreditCard} title="Banking Information">
              <div className="space-y-0">
                <InfoRow label="Bank Country" value={getCountryName(passport?.bank_account_country)} />
                <InfoRow 
                  label="Account Number" 
                  value={passport?.bank_account_number ? `••••${passport.bank_account_number.slice(-4)}` : null} 
                />
                <InfoRow label="SWIFT/BIC" value={passport?.swift_code} />
              </div>
            </Section>

            {/* Tax */}
            <Section icon={Building2} title="Tax Information">
              <div className="space-y-0">
                <InfoRow label="Tax ID" value={passport?.tax_id} />
                {passport?.nin && <InfoRow label="NIN" value={passport.nin} />}
                {passport?.bvn && <InfoRow label="BVN" value={passport.bvn} />}
                {passport?.national_number && <InfoRow label="National Number" value={passport.national_number} />}
              </div>
            </Section>

            {/* Address */}
            <Section icon={MapPin} title="Address">
              <p className="text-sm text-foreground leading-relaxed">
                {passport?.address || "Not provided"}
              </p>
            </Section>

            {/* Signature */}
            {passport?.signature_file_url && (
              <div className="py-5 sm:py-6">
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <FileText className="h-4 w-4 text-primary" />
                  </div>
                  <h2 className="font-semibold text-[15px]">Signature</h2>
                </div>
                <div className="ml-0 sm:ml-10 p-4 bg-muted/50 rounded-xl border border-border">
                  <img 
                    src={passport.signature_file_url} 
                    alt="Signature" 
                    className="h-12 sm:h-16 object-contain"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="px-6 sm:px-8 py-5 bg-muted/30 border-t border-border">
            <p className="text-xs text-muted-foreground text-center leading-relaxed">
              This passport is structured for global employment compliance.
              <br />
              Generated on {new Date(passport?.created_at || "").toLocaleDateString("en-US", { 
                year: "numeric", 
                month: "long", 
                day: "numeric" 
              })}
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-6 sm:mt-8">
          <Button
            onClick={handleDownloadPDF}
            variant="apple-blue"
            size="lg"
            className="w-full"
            disabled={downloading}
          >
            <Download className="mr-2 h-4 w-4" />
            {downloading ? "Generating PDF..." : "Download Passport PDF"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PassportViewer;