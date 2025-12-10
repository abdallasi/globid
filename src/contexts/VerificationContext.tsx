import { createContext, useContext, useState, useCallback, ReactNode } from "react";
import VerifyModal from "@/components/VerifyModal";

interface VerificationContextType {
  triggerVerificationSequence: (callback?: () => void) => void;
  verifiedFields: Set<string>;
  markFieldAsVerified: (fieldName: string) => void;
  isFieldVerified: (fieldName: string) => boolean;
  pulsingField: string | null;
}

const VerificationContext = createContext<VerificationContextType | null>(null);

export const useVerification = () => {
  const context = useContext(VerificationContext);
  if (!context) {
    throw new Error("useVerification must be used within VerificationProvider");
  }
  return context;
};

export const VerificationProvider = ({ children }: { children: ReactNode }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalStatus, setModalStatus] = useState("Scanning…");
  const [verifiedFields, setVerifiedFields] = useState<Set<string>>(new Set());
  const [pulsingField, setPulsingField] = useState<string | null>(null);

  const triggerVerificationSequence = useCallback((callback?: () => void) => {
    setModalStatus("Scanning…");
    setIsModalOpen(true);

    setTimeout(() => setModalStatus("Validating…"), 700);
    setTimeout(() => setModalStatus("Verified ✓"), 1400);
    setTimeout(() => {
      setIsModalOpen(false);
      if (callback) callback();
    }, 1800);
  }, []);

  const markFieldAsVerified = useCallback((fieldName: string) => {
    setVerifiedFields((prev) => new Set(prev).add(fieldName));
    setPulsingField(fieldName);
    setTimeout(() => setPulsingField(null), 400);
  }, []);

  const isFieldVerified = useCallback(
    (fieldName: string) => verifiedFields.has(fieldName),
    [verifiedFields]
  );

  return (
    <VerificationContext.Provider
      value={{
        triggerVerificationSequence,
        verifiedFields,
        markFieldAsVerified,
        isFieldVerified,
        pulsingField,
      }}
    >
      {children}
      <VerifyModal isOpen={isModalOpen} status={modalStatus} />
    </VerificationContext.Provider>
  );
};
