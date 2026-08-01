import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import { VerificationProvider } from "@/contexts/VerificationContext";
import SupportButton from "@/components/SupportButton";
import AppRoutes from "./AppRoutes";

const queryClient = new QueryClient();

export const AppShell = ({ children }: { children: React.ReactNode }) => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <VerificationProvider>
        <Toaster />
        <Sonner />
        <SupportButton />
        {children}
      </VerificationProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

const App = () => (
  <AppShell>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </AppShell>
);

export default App;
