import { useEffect, useState } from "react";
import { useNavigate, Link, useSearchParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { User } from "@supabase/supabase-js";
import { ArrowLeft, Check, Shield, Globe, FileText } from "lucide-react";

const FEATURES = [
  "Verified global employment identity",
  "MENA & Africa-specific compliance documents",
  "Shareable passport link",
  "PDF export",
  "Deel, Remote, Oyster integration",
  "Lifetime access",
];

const Payment = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { toast } = useToast();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const [verifying, setVerifying] = useState(false);
  const [isPaid, setIsPaid] = useState(false);

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
    if (user) checkPaymentStatus();
  }, [user]);

  // Handle Paystack callback
  useEffect(() => {
    const reference = searchParams.get("reference");
    if (reference && user && !verifying) {
      verifyPayment(reference);
    }
  }, [searchParams, user]);

  const checkPaymentStatus = async () => {
    const { data } = await supabase
      .from("employee_profiles")
      .select("payment_status")
      .eq("user_id", user?.id)
      .maybeSingle();

    if (data?.payment_status === "paid") {
      setIsPaid(true);
    }
  };

  const verifyPayment = async (reference: string) => {
    setVerifying(true);
    try {
      const { data, error } = await supabase.functions.invoke("verify-paystack-payment", {
        body: { reference, userId: user?.id },
      });

      if (error) throw error;

      if (data.success) {
        toast({
          title: "Payment successful!",
          description: "Your passport is now unlocked.",
        });
        navigate("/dashboard");
      } else {
        toast({
          title: "Payment verification failed",
          description: "Please try again or contact support.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Verification error:", error);
      toast({
        title: "Verification failed",
        description: "Please try again.",
        variant: "destructive",
      });
    } finally {
      setVerifying(false);
    }
  };

  const handlePayment = async () => {
    if (!user) return;
    
    setLoading(true);
    
    try {
      const callbackUrl = `${window.location.origin}/payment`;
      
      const { data, error } = await supabase.functions.invoke("create-paystack-checkout", {
        body: {
          email: user.email,
          userId: user.id,
          amount: 50,
          callbackUrl,
        },
      });

      if (error) throw error;

      if (data.url) {
        window.location.href = data.url;
      } else {
        throw new Error("No payment URL received");
      }
    } catch (error) {
      console.error("Payment error:", error);
      toast({
        title: "Payment failed",
        description: "Please try again.",
        variant: "destructive",
      });
      setLoading(false);
    }
  };

  if (verifying) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-6">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-muted-foreground">Verifying your payment...</p>
        </div>
      </div>
    );
  }

  if (isPaid) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-6">
        <div className="text-center">
          <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-4">
            <Check className="h-8 w-8 text-success" />
          </div>
          <h1 className="text-2xl font-semibold">Already Paid</h1>
          <p className="text-muted-foreground mt-2">Your passport is fully unlocked.</p>
          <Link to="/dashboard">
            <Button variant="apple-blue" className="mt-6">Go to Dashboard</Button>
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
            <Link to="/dashboard" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="h-4 w-4" />
              <span className="text-sm">Dashboard</span>
            </Link>
          </div>
        </div>
      </nav>

      <div className="apple-container py-12 md:py-20">
        <div className="max-w-lg mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Unlock Your Passport
            </h1>
            <p className="text-muted-foreground mt-2">
              One-time payment. Lifetime access.
            </p>
          </div>

          {/* Pricing Card */}
          <div className="apple-card p-8">
            <div className="text-center mb-8">
              <div className="text-5xl font-semibold">$50</div>
              <div className="text-muted-foreground mt-1">USD one-time</div>
            </div>

            <div className="space-y-3 mb-8">
              {FEATURES.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-success flex-shrink-0" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>

            <Button
              onClick={handlePayment}
              variant="apple-blue"
              size="lg"
              className="w-full"
              disabled={loading}
            >
              {loading ? "Redirecting to Paystack..." : "Pay with Paystack"}
            </Button>

            <p className="text-xs text-muted-foreground text-center mt-4">
              Secure payment powered by Paystack
            </p>
          </div>

          {/* Trust Badges */}
          <div className="flex items-center justify-center gap-8 mt-8 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4" />
              <span className="text-xs">Secure</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="h-4 w-4" />
              <span className="text-xs">Global</span>
            </div>
            <div className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              <span className="text-xs">Verified</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
