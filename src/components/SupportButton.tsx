import { Mail } from "lucide-react";

const SupportButton = () => {
  return (
    <a
      href="mailto:support@globid.co"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 bg-background/80 backdrop-blur-xl border border-border/50 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
      aria-label="Contact Support"
    >
      <Mail className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
      <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
        Support
      </span>
    </a>
  );
};

export default SupportButton;
