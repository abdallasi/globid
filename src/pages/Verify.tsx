import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Loader2 } from "lucide-react";

const Verify = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [status, setStatus] = useState<"verifying" | "error">("verifying");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const verifyPayment = async () => {
      const reference = searchParams.get("reference");
      
      if (!reference) {
        setStatus("error");
        setErrorMessage("No payment reference found.");
        return;
      }

      try {
        const { data: { user } } = await supabase.auth.getUser();
        
        if (!user) {
          setStatus("error");
          setErrorMessage("You must be logged in to verify payment.");
          return;
        }

        const { data, error } = await supabase.functions.invoke("verify-paystack-payment", {
          body: { reference, userId: user.id },
        });

        if (error) throw error;

        if (data?.success) {
          navigate("/success", { replace: true });
        } else {
          setStatus("error");
          setErrorMessage(data?.message || "Payment verification failed.");
        }
      } catch (err: any) {
        console.error("Payment verification error:", err);
        setStatus("error");
        setErrorMessage(err?.message || "An error occurred during verification.");
      }
    };

    verifyPayment();
  }, [searchParams, navigate]);

  if (status === "error") {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-6">
        <div className="text-center animate-fade-in max-w-md">
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-destructive/10 flex items-center justify-center">
            <svg 
              className="w-8 h-8 text-destructive" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={1.5} 
                d="M6 18L18 6M6 6l12 12" 
              />
            </svg>
          </div>
          <h1 className="text-2xl font-semibold text-foreground mb-2">
            Verification Failed
          </h1>
          <p className="text-muted-foreground mb-8">
            {errorMessage}
          </p>
          <button 
            onClick={() => navigate("/payment")}
            className="px-8 py-3 bg-primary text-primary-foreground rounded-xl font-medium hover:opacity-90 transition-opacity"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="text-center animate-fade-in">
        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-muted flex items-center justify-center">
          <Loader2 className="w-8 h-8 text-primary animate-spin" />
        </div>
        <h1 className="text-2xl font-semibold text-foreground mb-2">
          Verifying Payment
        </h1>
        <p className="text-muted-foreground">
          Please wait while we confirm your transaction...
        </p>
      </div>
    </div>
  );
};

export default Verify;
