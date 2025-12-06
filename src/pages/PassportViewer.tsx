import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { 
  Download, 
  ExternalLink, 
  User, 
  FileText, 
  Building2, 
  CreditCard, 
  MapPin,
  CheckCircle2,
  Globe
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

      // Fetch profile data
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

  const handleExport = (platform: string) => {
    toast({
      title: `Exporting to ${platform}`,
      description: "Your passport data is being prepared for export.",
    });
  };

  const handleDownloadPDF = async () => {
    if (!passport?.shareable_link_uid) return;
    
    setDownloading(true);
    try {
      const { data, error } = await supabase.functions.invoke("generate-passport-pdf", {
        body: { passportUid: passport.shareable_link_uid },
      });

      if (error) throw error;

      // Create and download the file
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

  if (loading) {
    return (
      <div className="min-h-screen bg-apple-gray flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (notFound) {
    return (
      <div className="min-h-screen bg-apple-gray flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-2xl font-semibold">Passport Not Found</h1>
          <p className="text-muted-foreground mt-2">
            This passport link is invalid or has expired.
          </p>
          <Link to="/">
            <Button variant="apple-blue" className="mt-6">Go Home</Button>
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
    <div className="py-6">
      <div className="flex items-center gap-3 mb-4">
        <Icon className="h-5 w-5 text-primary" />
        <h2 className="font-semibold">{title}</h2>
      </div>
      {children}
    </div>
  );

  const InfoRow = ({ label, value }: { label: string; value: string | null }) => (
    <div className="flex justify-between py-2">
      <span className="text-muted-foreground">{label}</span>
      <span className="font-medium">{value || "—"}</span>
    </div>
  );

  const DocumentBadge = ({ label, url }: { label: string; url: string | null }) => (
    <div className={`flex items-center gap-2 px-3 py-2 rounded-lg ${
      url ? "bg-success/10 text-success" : "bg-secondary text-muted-foreground"
    }`}>
      {url ? <CheckCircle2 className="h-4 w-4" /> : <FileText className="h-4 w-4" />}
      <span className="text-sm">{label}</span>
    </div>
  );

  return (
    <div className="min-h-screen bg-apple-gray">
      {/* Header */}
      <nav className="bg-background border-b border-border/50">
        <div className="apple-container">
          <div className="flex items-center justify-between h-14">
            <Link to="/" className="font-semibold text-lg tracking-tight">
              GlobID
            </Link>
            <div className="apple-badge">
              <CheckCircle2 className="h-4 w-4 mr-1" />
              Verified
            </div>
          </div>
        </div>
      </nav>

      <div className="apple-container py-8 md:py-12">
        <div className="max-w-2xl mx-auto">
          {/* Passport Card */}
          <div className="apple-card overflow-hidden">
            {/* Header */}
            <div className="bg-primary text-primary-foreground px-8 py-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm opacity-70 mb-1">Employment Passport</div>
                  <h1 className="text-2xl font-semibold">{profile?.full_name || "—"}</h1>
                </div>
                <Globe className="h-10 w-10 opacity-50" />
              </div>
            </div>

            {/* Content */}
            <div className="px-8 divide-y divide-border">
              {/* Identity */}
              <Section icon={User} title="Identity">
                <InfoRow label="Nationality" value={passport?.nationality ? COUNTRY_NAMES[passport.nationality] : null} />
                <InfoRow label="Residence" value={passport?.residence_country ? COUNTRY_NAMES[passport.residence_country] : null} />
                <InfoRow label="Visa Status" value={passport?.visa_status ? VISA_STATUS_LABELS[passport.visa_status] : null} />
              </Section>

              {/* Documents */}
              <Section icon={FileText} title="Verified Documents">
                <div className="flex flex-wrap gap-2">
                  <DocumentBadge label="Passport" url={passport?.passport_file_url || null} />
                  <DocumentBadge label="National ID" url={passport?.national_id_file_url || null} />
                  {passport?.emirates_id_file_url && <DocumentBadge label="Emirates ID" url={passport.emirates_id_file_url} />}
                  {passport?.iqama_file_url && <DocumentBadge label="Iqama" url={passport.iqama_file_url} />}
                  {passport?.residency_permit_file_url && <DocumentBadge label="Residency Visa" url={passport.residency_permit_file_url} />}
                  {passport?.cnie_file_url && <DocumentBadge label="CNIE" url={passport.cnie_file_url} />}
                  {passport?.address_proof_file_url && <DocumentBadge label="Address Proof" url={passport.address_proof_file_url} />}
                </div>
              </Section>

              {/* Banking */}
              <Section icon={CreditCard} title="Banking Information">
                <InfoRow label="Bank Country" value={passport?.bank_account_country ? COUNTRY_NAMES[passport.bank_account_country] : null} />
                <InfoRow label="Account Number" value={passport?.bank_account_number ? `****${passport.bank_account_number.slice(-4)}` : null} />
                <InfoRow label="SWIFT/BIC" value={passport?.swift_code || null} />
              </Section>

              {/* Tax */}
              <Section icon={Building2} title="Tax Information">
                <InfoRow label="Tax ID" value={passport?.tax_id || null} />
                {passport?.nin && <InfoRow label="NIN" value={passport.nin} />}
              </Section>

              {/* Address */}
              <Section icon={MapPin} title="Address">
                <p className="text-sm">{passport?.address || "—"}</p>
              </Section>

              {/* Signature */}
              {passport?.signature_file_url && (
                <div className="py-6">
                  <div className="text-sm text-muted-foreground mb-2">Signature</div>
                  <img 
                    src={passport.signature_file_url} 
                    alt="Signature" 
                    className="h-16 object-contain"
                  />
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="px-8 py-6 bg-apple-gray border-t border-border">
              <p className="text-xs text-muted-foreground text-center">
                This passport is structured for global employment compliance.
                <br />
                Generated on {new Date(passport?.created_at || "").toLocaleDateString()}
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-8 space-y-4">
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

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <Button
                onClick={() => handleExport("Deel")}
                variant="apple-outline"
                size="default"
                className="w-full text-sm"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                Export to Deel
              </Button>
              <Button
                onClick={() => handleExport("Remote")}
                variant="apple-outline"
                size="default"
                className="w-full text-sm"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                Export to Remote
              </Button>
              <Button
                onClick={() => handleExport("Oyster")}
                variant="apple-outline"
                size="default"
                className="w-full text-sm"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                Export to Oyster
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PassportViewer;
