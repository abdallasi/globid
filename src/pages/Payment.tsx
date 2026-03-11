import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { User } from "@supabase/supabase-js";
import { ArrowLeft, Check, Shield, Globe, FileText, Loader2 } from "lucide-react";
import PaymentMethodModal from "@/components/PaymentMethodModal";

declare global {
  interface Window {
    PaystackPop: any;
  }
}

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
  const { toast } = useToast();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const [isPaid, setIsPaid] = useState(false);
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [showMethodModal, setShowMethodModal] = useState(false);

  useEffect(() => {
    // Load Paystack inline script
    const script = document.createElement("script");
    script.src = "https://js.paystack.co/v1/inline.js";
    script.async = true;
    script.onload = () => setScriptLoaded(true);
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

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

  const handlePayment = async () => {
    if (!user || !scriptLoaded) return;
    
    setLoading(true);
    
    try {
      // Get initialization data from backend
      const { data, error } = await supabase.functions.invoke("create-paystack-checkout", {
        body: {
          email: user.email,
          userId: user.id,
        },
      });

      if (error) throw error;

      // Use Paystack inline popup
      const handler = window.PaystackPop.setup({
        key: data.publicKey,
        email: user.email,
        amount: 7500000, // 75,000 NGN in kobo
        currency: "NGN",
        ref: data.reference,
        callback: function(response: { reference: string }) {
          // Use navigate for SPA routing (works on any host)
          navigate(`/verify?reference=${response.reference}`);
        },
        onClose: function() {
          setLoading(false);
          toast({
            title: "Payment cancelled",
            description: "You closed the payment window.",
          });
        },
      });

      handler.openIframe();
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

  if (isPaid) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-6">
        <div className="text-center">
          <div className="w-16 h-16 rounded-full bg-green-50 dark:bg-green-900/20 flex items-center justify-center mx-auto mb-4">
            <Check className="h-8 w-8 text-green-500" />
          </div>
          <h1 className="text-2xl font-semibold">Already Paid</h1>
          <p className="text-muted-foreground mt-2">Your passport is fully unlocked.</p>
          <Link to="/dashboard">
            <Button className="mt-6">Go to Dashboard</Button>
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
              <div className="text-5xl font-semibold">$99</div>
              <div className="text-muted-foreground mt-1">USD one-time</div>
            </div>

            <div className="space-y-3 mb-8">
              {FEATURES.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>

            <Button
              onClick={() => setShowMethodModal(true)}
              size="lg"
              className="w-full"
              disabled={loading || !scriptLoaded}
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Processing...
                </span>
              ) : "Pay"}
            </Button>

            <p className="text-xs text-muted-foreground text-center mt-4">
              Secure payment processing
            </p>
            
            <PaymentMethodModal
              open={showMethodModal}
              onClose={() => setShowMethodModal(false)}
              onSelectPaystack={handlePayment}
            />
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
