import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { User } from "@supabase/supabase-js";
import { ArrowLeft, Check, Shield, Globe, FileText } from "lucide-react";

const FEATURES = [
  "Verified global employment identity",
  "MENA-specific compliance documents",
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
    if (!user) return;
    
    setLoading(true);
    
    // For MVP, we'll simulate payment success
    // In production, integrate with Paystack
    try {
      // Simulate Paystack redirect
      toast({
        title: "Redirecting to Paystack...",
        description: "Please complete your payment.",
      });
      
      // Simulate successful payment after delay
      setTimeout(async () => {
        const { error } = await supabase
          .from("employee_profiles")
          .update({ payment_status: "paid" })
          .eq("user_id", user.id);

        if (error) throw error;

        toast({
          title: "Payment successful!",
          description: "Your passport is now unlocked.",
        });
        
        navigate("/dashboard");
      }, 2000);
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
              {loading ? "Processing..." : "Pay with Paystack"}
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
