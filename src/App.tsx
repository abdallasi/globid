import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { VerificationProvider } from "@/contexts/VerificationContext";
import SupportButton from "@/components/SupportButton";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import GlobalWorkerVerification from "./pages/GlobalWorkerVerification";
import RemoteWorkDocuments from "./pages/RemoteWorkDocuments";
import HireInternationalTalent from "./pages/HireInternationalTalent";
import IdentityForRemoteJobs from "./pages/IdentityForRemoteJobs";
import MenaRemoteWork from "./pages/MenaRemoteWork";
import Profile from "./pages/Profile";
import Payment from "./pages/Payment";
import Verify from "./pages/Verify";
import Success from "./pages/Success";
import AdminPayments from "./pages/AdminPayments";
import PassportViewer from "./pages/PassportViewer";
import Demo from "./pages/Demo";
import Manifesto from "./pages/Manifesto";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <VerificationProvider>
        <Toaster />
        <Sonner />
        <SupportButton />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/verify" element={<Verify />} />
            <Route path="/success" element={<Success />} />
            <Route path="/admin/payments" element={<AdminPayments />} />
            <Route path="/passport/:uid" element={<PassportViewer />} />
            <Route path="/passport/setup" element={<Profile />} />
            <Route path="/demo" element={<Demo />} />
            <Route path="/manifesto" element={<Manifesto />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </VerificationProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
