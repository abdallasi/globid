import { Check } from "lucide-react";
import { useVerification } from "@/contexts/VerificationContext";

interface VerifiedCheckmarkProps {
  fieldName: string;
  className?: string;
}

const VerifiedCheckmark = ({ fieldName, className = "" }: VerifiedCheckmarkProps) => {
  const { isFieldVerified, pulsingField } = useVerification();
  
  if (!isFieldVerified(fieldName)) return null;

  const isPulsing = pulsingField === fieldName;

  return (
    <span
      className={`inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#00D06F]/10 ml-2 ${
        isPulsing ? "animate-verify-pop" : ""
      } ${className}`}
    >
      <Check className="w-3 h-3 text-[#00D06F]" strokeWidth={2.5} />
    </span>
  );
};

export default VerifiedCheckmark;
