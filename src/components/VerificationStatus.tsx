interface VerificationStatusProps {
  profile: {
    nationality?: string | null;
    residence_country?: string | null;
    bank_account_number?: string | null;
    passport_file_url?: string | null;
    address?: string | null;
  } | null;
}

type StatusType = "verified" | "pending" | "waiting" | "optional";

interface StatusItemProps {
  label: string;
  status: StatusType;
}

const StatusItem = ({ label, status }: StatusItemProps) => {
  const statusConfig = {
    verified: { color: "bg-[#00D06F]", text: "Verified" },
    pending: { color: "bg-muted-foreground/40", text: "Pending" },
    waiting: { color: "bg-amber-400", text: "Waiting" },
    optional: { color: "bg-muted-foreground/40", text: "Optional" },
  };

  const config = statusConfig[status];

  return (
    <div className="flex items-center justify-between py-2">
      <span className="text-sm text-foreground">{label}</span>
      <div className="flex items-center gap-2">
        <div className={`w-2 h-2 rounded-full ${config.color}`} />
        <span className="text-xs text-muted-foreground">{config.text}</span>
      </div>
    </div>
  );
};

const VerificationStatus = ({ profile }: VerificationStatusProps) => {
  const hasPersonalInfo = !!(profile?.nationality && profile?.residence_country);
  const hasBankDetails = !!profile?.bank_account_number;
  const hasPassport = !!profile?.passport_file_url;
  const hasAddress = !!profile?.address;

  return (
    <div className="apple-card p-6">
      <h3 className="font-semibold mb-4 text-sm tracking-tight">Verification Status</h3>
      <div className="divide-y divide-border/50">
        <StatusItem 
          label="Personal Info" 
          status={hasPersonalInfo ? "verified" : "pending"} 
        />
        <StatusItem 
          label="Bank Details" 
          status={hasBankDetails ? "verified" : "pending"} 
        />
        <StatusItem 
          label="Passport" 
          status={hasPassport ? "verified" : "pending"} 
        />
        <StatusItem 
          label="Address" 
          status={hasAddress ? "verified" : "optional"} 
        />
        <StatusItem 
          label="Employer Tag" 
          status="waiting" 
        />
      </div>
    </div>
  );
};

export default VerificationStatus;
