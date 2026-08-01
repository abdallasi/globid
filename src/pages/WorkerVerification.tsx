import { Helmet } from "react-helmet-async";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const WorkerVerification = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Worker Verification — International Hiring Verification | GlobID</title>
        <meta name="description" content="Learn how worker verification works for international hiring. Verify identity, work authorization, tax status, and banking information." />
        <link rel="canonical" href="https://globid.co/worker-verification" />
        <meta property="og:title" content="Worker Verification — International Hiring Verification" />
        <meta property="og:description" content="Learn how worker verification works for international hiring." />
        <meta property="og:url" content="https://globid.co/worker-verification" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Worker Verification — International Hiring Verification" />
        <meta name="twitter:description" content="Learn how worker verification works for international hiring." />
        <script type="application/ld+json">{`{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://globid.co/"}, {"@type": "ListItem", "position": 2, "name": "Worker Verification", "item": "https://globid.co/worker-verification"}]}`}</script>
      </Helmet>

      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="/" className="text-xl font-semibold text-foreground">GlobID</a>
          <a href="/auth"><Button size="sm">Get Started</Button></a>
        </div>
      </nav>
      <main className="pt-24 pb-20">
        <article className="max-w-3xl mx-auto px-6">
          <header className="mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">Worker Verification</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">Understanding how to verify international workers for remote hiring.</p>
          </header>
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">What is Worker Verification?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">Worker verification is the process of confirming that a potential hire is who they claim to be. This includes validating their identity, work authorization, professional background, and payment information.</p>
            <p className="text-muted-foreground leading-relaxed">For international hiring, this process is more complex because employers must understand documentation from unfamiliar countries and legal systems.</p>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Key Verification Elements</h2>
            <div className="space-y-4">
              <div><h3 className="text-lg font-medium text-foreground mb-2">Identity Verification</h3><p className="text-muted-foreground">Confirming legal identity through government-issued documents like passports, national IDs, or driver's licenses.</p></div>
              <div><h3 className="text-lg font-medium text-foreground mb-2">Work Authorization</h3><p className="text-muted-foreground">Ensuring the person has the legal right to work, whether as a citizen, resident, or visa holder.</p></div>
              <div><h3 className="text-lg font-medium text-foreground mb-2">Tax Status</h3><p className="text-muted-foreground">Collecting tax identification numbers and understanding residency for compliance purposes.</p></div>
              <div><h3 className="text-lg font-medium text-foreground mb-2">Banking Information</h3><p className="text-muted-foreground">Verifying payment details to ensure salary can be delivered securely.</p></div>
            </div>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">GlobID's Approach</h2>
            <p className="text-muted-foreground leading-relaxed">GlobID creates standardized worker profiles by collecting and organizing verification documents. Workers verify once; employers receive clear, trustworthy profiles.</p>
          </section>
          <section className="mb-16 p-8 bg-muted/50 rounded-2xl text-center">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Get Verified</h2>
            <p className="text-muted-foreground mb-6">Create your verified worker profile and unlock global opportunities.</p>
            <a href="/auth"><Button size="lg">Create Your GlobID <ArrowRight className="ml-2 h-4 w-4" /></Button></a>
          </section>
          <section className="mb-12">
            <h2 className="text-xl font-semibold text-foreground mb-4">Related Topics</h2>
            <div className="grid gap-3">
              <a href="/global-worker-verification" className="text-primary hover:underline flex items-center gap-2">Global Worker Verification <ArrowRight className="h-4 w-4" /></a>
              <a href="/global-worker-identity" className="text-primary hover:underline flex items-center gap-2">Global Worker Identity <ArrowRight className="h-4 w-4" /></a>
              <a href="/remote-hiring-risks" className="text-primary hover:underline flex items-center gap-2">Remote Hiring Risks <ArrowRight className="h-4 w-4" /></a>
            </div>
          </section>
          <div className="pt-8 border-t border-border"><a href="/" className="text-muted-foreground hover:text-foreground flex items-center gap-2"><ArrowLeft className="h-4 w-4" /> Back to Home</a></div>
        </article>
      </main>
    </div>
  );
};
export default WorkerVerification;