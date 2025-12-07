import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { XCircle } from "lucide-react";

const PaymentError = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="text-center animate-fade-in max-w-md">
        <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-destructive/10 flex items-center justify-center">
          <XCircle className="w-10 h-10 text-destructive" strokeWidth={1.5} />
        </div>
        <h1 className="text-3xl font-semibold text-foreground mb-3">
          Payment Could Not Be Verified
        </h1>
        <p className="text-lg text-muted-foreground mb-10">
          Something went wrong with your payment. Please try again.
        </p>
        <Button 
          onClick={() => navigate("/payment")}
          size="lg"
          className="px-10 py-6 text-base"
        >
          Try Again
        </Button>
      </div>
    </div>
  );
};

export default PaymentError;
