import { useEffect, useState } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CompletionModalProps {
  isOpen: boolean;
  onContinue: () => void;
}

const CompletionModal = ({ isOpen, onContinue }: CompletionModalProps) => {
  const [showCheck, setShowCheck] = useState(false);
  const [showText, setShowText] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => setShowCheck(true), 200);
      setTimeout(() => setShowText(true), 600);
      setTimeout(() => setShowButton(true), 1000);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-background flex items-center justify-center">
      <div className="text-center px-6 max-w-md">
        {/* Animated Check */}
        <div className={`mb-8 transition-all duration-500 ease-out ${
          showCheck ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
        }`}>
          <div className="w-20 h-20 mx-auto rounded-full bg-success/10 flex items-center justify-center">
            <Check className="w-10 h-10 text-success" strokeWidth={2} />
          </div>
        </div>

        {/* Text */}
        <div className={`transition-all duration-500 ease-out ${
          showText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <h1 className="text-2xl md:text-3xl font-semibold tracking-tight mb-2">
            Your GlobID Passport is Ready.
          </h1>
          <p className="text-muted-foreground">
            Share it with employers worldwide.
          </p>
        </div>

        {/* Button */}
        <div className={`mt-10 transition-all duration-500 ease-out ${
          showButton ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <Button 
            onClick={onContinue} 
            variant="apple-blue" 
            size="lg"
            className="min-w-[180px] rounded-lg"
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CompletionModal;
