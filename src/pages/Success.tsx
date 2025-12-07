import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Success = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="text-center animate-fade-in max-w-md">
        {/* Animated Check */}
        <div className="w-24 h-24 mx-auto mb-8 relative">
          <svg
            className="w-full h-full"
            viewBox="0 0 96 96"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="48"
              cy="48"
              r="44"
              className="stroke-green-500"
              strokeWidth="3"
              fill="none"
              style={{
                strokeDasharray: 276,
                strokeDashoffset: 0,
                animation: "circle-draw 0.6s ease-out forwards",
              }}
            />
            <path
              d="M28 50L42 64L68 38"
              className="stroke-green-500"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              style={{
                strokeDasharray: 60,
                strokeDashoffset: 0,
                animation: "check-draw 0.4s ease-out 0.4s forwards",
              }}
            />
          </svg>
        </div>

        <h1 className="text-3xl font-semibold text-foreground mb-3">
          Payment Successful
        </h1>
        <p className="text-lg text-muted-foreground mb-10">
          Your GlobID enrollment is now active.
        </p>
        
        <Button 
          onClick={() => navigate("/profile")}
          size="lg"
          className="px-12 py-6 text-base"
        >
          Continue
        </Button>
      </div>

      <style>{`
        @keyframes circle-draw {
          from {
            stroke-dashoffset: 276;
          }
          to {
            stroke-dashoffset: 0;
          }
        }
        @keyframes check-draw {
          from {
            stroke-dashoffset: 60;
          }
          to {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default Success;
