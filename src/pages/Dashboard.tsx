import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { User, Session } from "@supabase/supabase-js";
import { 
  User as UserIcon, 
  FileText, 
  CreditCard, 
  Share2, 
  LogOut,
  CheckCircle2,
  Circle,
  ArrowRight,
  ExternalLink
} from "lucide-react";

interface EmployeeProfile {
  id: string;
  payment_status: string;
  shareable_link_uid: string;
  nationality: string | null;
  residence_country: string | null;
  passport_file_url: string | null;
  bank_account_number: string | null;
  signature_file_url: string | null;
}

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [profile, setProfile] = useState<EmployeeProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setSession(session);
      setUser(session?.user ?? null);
      
      if (!session) {
        navigate("/auth");
      }
    });

    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      
      if (!session) {
        navigate("/auth");
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  useEffect(() => {
    if (user) {
      fetchProfile();
    }
  }, [user]);

  const fetchProfile = async () => {
    try {
      const { data, error } = await supabase
        .from("employee_profiles")
        .select("*")
        .eq("user_id", user?.id)
        .maybeSingle();

      if (error) throw error;
      setProfile(data);
    } catch (error) {
      console.error("Error fetching profile:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  const isPaid = profile?.payment_status === "paid";
  const hasIdentity = profile?.nationality && profile?.residence_country;
  const hasDocuments = profile?.passport_file_url;
  const hasBankInfo = profile?.bank_account_number;
  const hasSignature = profile?.signature_file_url;
  const isComplete = isPaid && hasIdentity && hasDocuments && hasBankInfo && hasSignature;

  const steps = [
    { 
      id: "identity", 
      title: "Identity & Residence", 
      description: "Nationality, country of residence",
      complete: !!hasIdentity,
      link: "/profile?step=identity"
    },
    { 
      id: "documents", 
      title: "Documents", 
      description: "Passport, national ID, visa",
      complete: !!hasDocuments,
      link: "/profile?step=documents"
    },
    { 
      id: "payment", 
      title: "Payment", 
      description: "$50 one-time fee",
      complete: isPaid,
      link: "/payment"
    },
    { 
      id: "employment", 
      title: "Employment Pack", 
      description: "Bank, tax, address details",
      complete: !!hasBankInfo,
      link: "/profile?step=employment",
      locked: !isPaid
    },
    { 
      id: "signature", 
      title: "Signature", 
      description: "Digital signature",
      complete: !!hasSignature,
      link: "/profile?step=signature",
      locked: !isPaid
    },
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-apple-gray">
      {/* Navigation */}
      <nav className="bg-background border-b border-border/50">
        <div className="apple-container">
          <div className="flex items-center justify-between h-14">
            <Link to="/" className="font-semibold text-lg tracking-tight">
              GlobID
            </Link>
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground hidden sm:block">
                {user?.email}
              </span>
              <Button variant="ghost" size="sm" onClick={handleSignOut}>
                <LogOut className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="apple-container py-8 md:py-12">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">
              Your Passport
            </h1>
            {!isComplete && (
              <span className="inline-flex items-center px-3 py-1 text-xs font-medium text-muted-foreground bg-secondary rounded-md">
                Waiting for employer tag
              </span>
            )}
          </div>
          <p className="text-muted-foreground mt-1">
            Complete all steps to generate your employment passport.
          </p>
        </div>

        {/* Status Card */}
        {isComplete && (
          <div className="apple-card p-6 mb-8 bg-success/5 border-success/20">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-success/10 flex items-center justify-center">
                <CheckCircle2 className="h-6 w-6 text-success" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-success">Passport Complete</h3>
                <p className="text-sm text-muted-foreground">Your employment passport is ready to share.</p>
              </div>
              <Link to={`/passport/${profile?.shareable_link_uid}`} target="_blank">
                <Button variant="success" size="sm">
                  View Passport
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        )}

        {/* Steps Grid */}
        <div className="grid gap-4">
          {steps.map((step, index) => (
            <Link 
              key={step.id} 
              to={step.locked ? "#" : step.link}
              className={step.locked ? "pointer-events-none" : ""}
            >
              <div className={`apple-card p-6 transition-all duration-200 ${
                step.locked 
                  ? "opacity-50" 
                  : "hover:shadow-md cursor-pointer"
              }`}>
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    step.complete 
                      ? "bg-success/10" 
                      : "bg-secondary"
                  }`}>
                    {step.complete ? (
                      <CheckCircle2 className="h-5 w-5 text-success" />
                    ) : (
                      <span className="text-sm font-medium text-muted-foreground">{index + 1}</span>
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                  {!step.locked && (
                    <ArrowRight className="h-5 w-5 text-muted-foreground" />
                  )}
                  {step.locked && (
                    <span className="text-xs text-muted-foreground bg-secondary px-2 py-1 rounded">
                      Pay to unlock
                    </span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Share Section */}
        {profile?.shareable_link_uid && (
          <div className="mt-8 apple-card p-6">
            <h3 className="font-semibold mb-2">Share Your Passport</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Send this link to employers for instant verification.
            </p>
            <div className="flex items-center gap-2">
              <code className="flex-1 bg-secondary px-4 py-3 rounded-xl text-sm truncate">
                {window.location.origin}/passport/{profile.shareable_link_uid}
              </code>
              <Button
                variant="apple-outline"
                size="sm"
                onClick={() => {
                  navigator.clipboard.writeText(`${window.location.origin}/passport/${profile.shareable_link_uid}`);
                }}
              >
                Copy
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
