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
import WhatIsGlobID from "./pages/WhatIsGlobID";
import GlobalWorkerIdentity from "./pages/GlobalWorkerIdentity";
import GlobalHiringCompliance from "./pages/GlobalHiringCompliance";
import EmployerOfRecordAlternative from "./pages/EmployerOfRecordAlternative";
import DeelAlternative from "./pages/DeelAlternative";
import HireInMena from "./pages/HireInMena";
import HireInAfrica from "./pages/HireInAfrica";
import HireInNigeria from "./pages/HireInNigeria";
import WorkerVerification from "./pages/WorkerVerification";
import RemoteHiringRisks from "./pages/RemoteHiringRisks";

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
            <Route path="/global-worker-verification" element={<GlobalWorkerVerification />} />
            <Route path="/remote-work-documents" element={<RemoteWorkDocuments />} />
            <Route path="/hire-international-talent" element={<HireInternationalTalent />} />
            <Route path="/identity-for-remote-jobs" element={<IdentityForRemoteJobs />} />
            <Route path="/mena-remote-work" element={<MenaRemoteWork />} />
            <Route path="/what-is-globid" element={<WhatIsGlobID />} />
            <Route path="/global-worker-identity" element={<GlobalWorkerIdentity />} />
            <Route path="/global-hiring-compliance" element={<GlobalHiringCompliance />} />
            <Route path="/employer-of-record-alternative" element={<EmployerOfRecordAlternative />} />
            <Route path="/deel-alternative" element={<DeelAlternative />} />
            <Route path="/hire-in-mena" element={<HireInMena />} />
            <Route path="/hire-in-africa" element={<HireInAfrica />} />
            <Route path="/hire-in-nigeria" element={<HireInNigeria />} />
            <Route path="/worker-verification" element={<WorkerVerification />} />
            <Route path="/remote-hiring-risks" element={<RemoteHiringRisks />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </VerificationProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;