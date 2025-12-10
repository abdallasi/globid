import { useEffect, useState } from "react";
import { Check } from "lucide-react";

interface VerifyModalProps {
  isOpen: boolean;
  status: string;
}

const VerifyModal = ({ isOpen, status }: VerifyModalProps) => {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const isVerified = status === "Verified ✓";

  useEffect(() => {
    if (isOpen) {
      setVisible(true);
      setProgress(0);
    } else {
      const timeout = setTimeout(() => setVisible(false), 300);
      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && !isVerified) {
      const interval = setInterval(() => {
        setProgress((p) => (p >= 100 ? 100 : p + 2));
      }, 14);
      return () => clearInterval(interval);
    } else if (isVerified) {
      setProgress(100);
    }
  }, [isOpen, isVerified]);

  if (!visible) return null;

  const circumference = 2 * Math.PI * 36;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center transition-opacity duration-300 ${
        isOpen ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />
      
      {/* Modal */}
      <div
        className={`relative bg-white/95 backdrop-blur-xl rounded-[28px] shadow-[0_12px_30px_rgba(0,0,0,0.15)] p-10 w-[280px] flex flex-col items-center transition-all duration-300 ${
          isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
      >
        {/* Progress Ring */}
        <div className="relative w-20 h-20 mb-6">
          <svg className="w-20 h-20 transform -rotate-90">
            {/* Background circle */}
            <circle
              cx="40"
              cy="40"
              r="36"
              fill="none"
              stroke="hsl(var(--muted))"
              strokeWidth="4"
            />
            {/* Progress circle */}
            <circle
              cx="40"
              cy="40"
              r="36"
              fill="none"
              stroke={isVerified ? "#00D06F" : "hsl(var(--primary))"}
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              className="transition-all duration-300 ease-out"
            />
          </svg>
          
          {/* Center icon */}
          {isVerified && (
            <div className="absolute inset-0 flex items-center justify-center animate-verify-pop">
              <Check className="w-8 h-8 text-[#00D06F]" strokeWidth={2.5} />
            </div>
          )}
        </div>
        
        {/* Status text */}
        <p className="text-lg font-medium text-foreground tracking-tight text-center">
          {status}
        </p>
      </div>
    </div>
  );
};

export default VerifyModal;
