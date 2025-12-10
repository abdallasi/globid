import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Loader2 } from "lucide-react";

interface PaymentMethodModalProps {
  open: boolean;
  onClose: () => void;
  onSelectPaystack: () => void;
}

const PaymentMethodModal = ({ open, onClose, onSelectPaystack }: PaymentMethodModalProps) => {
  const [opayoLoading, setOpayoLoading] = useState(false);
  const [opayoError, setOpayoError] = useState(false);

  const handleOpayoClick = () => {
    setOpayoLoading(true);
    setOpayoError(false);
    
    setTimeout(() => {
      setOpayoLoading(false);
      setOpayoError(true);
    }, 1500);
  };

  const handlePaystackClick = () => {
    onClose();
    onSelectPaystack();
  };

  const resetAndClose = () => {
    setOpayoLoading(false);
    setOpayoError(false);
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={resetAndClose}>
      <DialogContent className="sm:max-w-[340px] p-0 gap-0 rounded-2xl border-border/50 bg-background">
        <div className="p-6 pb-4">
          <h2 className="text-lg font-semibold text-center">Select Payment Method</h2>
        </div>
        
        <div className="px-6 pb-6 space-y-3">
          {/* Opayo Option */}
          <button
            onClick={handleOpayoClick}
            disabled={opayoLoading}
            className="w-full p-4 rounded-xl border border-border bg-secondary/30 hover:bg-secondary/50 transition-all duration-200 text-left"
          >
            {opayoLoading ? (
              <div className="flex items-center justify-center gap-2 py-1">
                <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Checking...</span>
              </div>
            ) : opayoError ? (
              <div className="text-center py-1">
                <span className="text-sm text-destructive">Opayo is for UK users only</span>
              </div>
            ) : (
              <>
                <div className="font-medium text-sm">Opayo</div>
                <div className="text-xs text-muted-foreground mt-0.5">UK-based payments only</div>
              </>
            )}
          </button>

          {/* Paystack Option */}
          <button
            onClick={handlePaystackClick}
            className="w-full p-4 rounded-xl border border-border bg-secondary/30 hover:bg-secondary/50 hover:border-primary/30 transition-all duration-200 text-left"
          >
            <div className="font-medium text-sm">Paystack</div>
            <div className="text-xs text-muted-foreground mt-0.5">All regions supported</div>
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PaymentMethodModal;
