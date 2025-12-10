import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Check, X, Upload } from "lucide-react";
import { useVerification } from "@/contexts/VerificationContext";

interface DocumentUploadProps {
  label: string;
  field: string;
  value: string | null | undefined;
  userId: string;
  onUploadComplete: (field: string, url: string | null) => void;
  accept?: string;
  optional?: boolean;
}

const DocumentUpload = ({
  label,
  field,
  value,
  userId,
  onUploadComplete,
  accept = ".pdf,.jpg,.jpeg,.png",
  optional = false,
}: DocumentUploadProps) => {
  const [isUploading, setIsUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isPulsing, setIsPulsing] = useState(false);
  const { triggerVerificationSequence, markFieldAsVerified, isFieldVerified } = useVerification();

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !userId) return;

    setIsUploading(true);
    setProgress(0);

    // Simulate smooth progress
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.random() * 20 + 10;
        return next >= 95 ? 95 : next;
      });
    }, 100);

    // Simulate upload time
    await new Promise((resolve) => setTimeout(resolve, 1000 + Math.random() * 500));

    clearInterval(progressInterval);
    setProgress(100);

    // Create mock URL
    const mockUrl = `mock://documents/${userId}/${field}-${Date.now()}-${file.name}`;

    // Only update local state - let parent handle DB save
    onUploadComplete(field, mockUrl);
    setShowSuccess(true);

    setTimeout(() => {
      setShowSuccess(false);
      setIsUploading(false);
      setProgress(0);
      
      // Trigger verification sequence after upload
      triggerVerificationSequence(() => {
        markFieldAsVerified(field);
        setIsPulsing(true);
        setTimeout(() => setIsPulsing(false), 400);
      });
    }, 600);

    // Reset input
    e.target.value = "";
  };

  const handleClear = () => {
    onUploadComplete(field, null);
  };

  const inputId = `file-input-${field}`;

  if (showSuccess) {
    return (
      <div className="space-y-2">
        <Label className="flex items-center gap-2">
          {label}
          {optional && <span className="text-xs text-muted-foreground font-normal">(Optional)</span>}
        </Label>
        <div className="flex items-center gap-3 p-4 bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800 rounded-xl animate-fade-in">
          <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center">
            <Check className="h-3 w-3 text-white" />
          </div>
          <span className="text-sm text-emerald-700 dark:text-emerald-400 font-medium">Uploaded successfully</span>
        </div>
      </div>
    );
  }

  const fieldIsVerified = isFieldVerified(field);

  if (value) {
    return (
      <div className="space-y-2">
        <Label className="flex items-center gap-2">
          {label}
          {optional && <span className="text-xs text-muted-foreground font-normal">(Optional)</span>}
          {fieldIsVerified && (
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#00D06F]/10 ml-1">
              <Check className="w-3 h-3 text-[#00D06F]" strokeWidth={2.5} />
            </span>
          )}
        </Label>
        <div className={`flex items-center gap-3 p-4 bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800 rounded-xl ${isPulsing ? 'verify-pulse' : ''}`}>
          <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center">
            <Check className="h-3 w-3 text-white" />
          </div>
          <span className="text-sm flex-1 text-foreground">Document uploaded</span>
          <button
            type="button"
            onClick={handleClear}
            className="p-1.5 text-muted-foreground hover:text-red-500 transition-colors rounded-full hover:bg-red-50 dark:hover:bg-red-950/20"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    );
  }

  if (isUploading) {
    return (
      <div className="space-y-2">
        <Label className="flex items-center gap-2">
          {label}
          {optional && <span className="text-xs text-muted-foreground font-normal">(Optional)</span>}
        </Label>
        <div className="p-6 border border-border bg-secondary/30 rounded-xl">
          <div className="space-y-3">
            <div className="flex items-center justify-center gap-2">
              <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin" />
              <span className="text-sm text-muted-foreground">Uploading...</span>
            </div>
            <div className="w-full h-1.5 bg-secondary rounded-full overflow-hidden">
              <div
                className="h-full bg-primary rounded-full transition-all duration-200 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      <Label className="flex items-center gap-2">
        {label}
        {optional && <span className="text-xs text-muted-foreground font-normal">(Optional)</span>}
      </Label>
      <label
        htmlFor={inputId}
        className="flex flex-col items-center justify-center gap-2 p-6 border border-dashed border-border bg-secondary/20 rounded-xl cursor-pointer hover:bg-secondary/40 hover:border-primary/40 transition-all duration-200 active:scale-[0.99]"
      >
        <input
          id={inputId}
          type="file"
          accept={accept}
          onChange={handleUpload}
          className="sr-only"
        />
        <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
          <Upload className="h-5 w-5 text-muted-foreground" />
        </div>
        <span className="text-sm text-muted-foreground">Tap to upload</span>
      </label>
    </div>
  );
};

export default DocumentUpload;