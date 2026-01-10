import { Helmet } from "react-helmet-async";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const GlobalWorkerIdentity = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Global Worker Identity — Verified Professional Profiles | GlobID</title>
        <meta name="description" content="A global worker identity is a verified professional profile that works across borders. Learn how GlobID creates portable credentials for international hiring." />
        <link rel="canonical" href="https://globid.co/global-worker-identity" />
        <meta property="og:title" content="Global Worker Identity — Verified Professional Profiles" />
        <meta property="og:description" content="A global worker identity is a verified professional profile that works across borders. Learn how GlobID creates portable credentials." />
        <meta property="og:url" content="https://globid.co/global-worker-identity" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Global Worker Identity — Verified Professional Profiles" />
        <meta name="twitter:description" content="A global worker identity is a verified professional profile that works across borders." />
      </Helmet>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="/" className="text-xl font-semibold text-foreground">
            GlobID
          </a>
          <a href="/auth">
            <Button size="sm">Get Started</Button>
          </a>
        </div>
      </nav>

      {/* Content */}
      <main className="pt-24 pb-20">
        <article className="max-w-3xl mx-auto px-6">
          {/* Hero */}
          <header className="mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Global Worker Identity
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A verified professional identity that works across borders, companies, and time zones.
            </p>
          </header>

          {/* Definition */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              What is Global Worker Identity?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Global worker identity is a standardized way for professionals to prove who they are to employers anywhere in the world. It combines legal documentation, work authorization, tax status, and payment information into a single, shareable profile.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Unlike traditional verification methods—which require workers to submit different documents to different employers repeatedly—a global worker identity is created once and reused indefinitely.
            </p>
          </section>

          {/* Why It's Needed */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Why Global Worker Identity Matters
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The rise of remote work has created a new reality: companies can hire from anywhere. But the systems for verifying workers haven't evolved to match. Most companies still rely on manual document collection, email chains, and guesswork.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              This creates friction. Workers spend hours gathering documents for each new opportunity. Employers struggle to verify information from unfamiliar countries. Both sides lose time and trust.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              A global worker identity eliminates this friction. It gives workers a portable credential. It gives employers confidence. And it makes international hiring as simple as domestic hiring.
            </p>
          </section>

          {/* Components */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              What's Included in a Global Worker Identity
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">Legal Identity</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Government-issued identification that confirms the person's legal name, nationality, and identity.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">Work Authorization</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Documentation showing the person's right to work, whether as a citizen, resident, or under a specific visa.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">Tax Information</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Tax identification numbers and residency information for compliance with local and international tax requirements.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">Payment Details</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Verified bank account information for receiving payments internationally.
                </p>
              </div>
            </div>
          </section>

          {/* How It Works */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Workers create their global identity by uploading relevant documents and completing verification. The platform checks document authenticity and organizes the information into a standardized format.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              When an employer needs to verify a worker, they receive a clear, structured profile. No more deciphering unfamiliar documents. No more guessing about document validity.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              The worker controls who sees their information. The employer gets the confidence they need. The process takes minutes instead of weeks.
            </p>
          </section>

          {/* Benefits */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Benefits of Global Worker Identity
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">For Workers</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Create once, use everywhere. No more repeating the verification process for each new job. Your identity travels with your career.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">For Employers</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Reduced verification time. Increased confidence. Standardized information across all international hires.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">For the Global Economy</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Lower barriers to international employment. More opportunity for qualified professionals regardless of location.
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="mb-16 p-8 bg-muted/50 rounded-2xl text-center">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Build Your Global Worker Identity
            </h2>
            <p className="text-muted-foreground mb-6">
              Create a verified profile that opens doors to opportunities worldwide.
            </p>
            <a href="/auth">
              <Button size="lg">
                Create Your GlobID <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </section>

          {/* Related Links */}
          <section className="mb-12">
            <h2 className="text-xl font-semibold text-foreground mb-4">
              Related Topics
            </h2>
            <div className="grid gap-3">
              <a 
                href="/what-is-globid" 
                className="text-primary hover:underline flex items-center gap-2"
              >
                What is GlobID? <ArrowRight className="h-4 w-4" />
              </a>
              <a 
                href="/worker-verification" 
                className="text-primary hover:underline flex items-center gap-2"
              >
                Worker Verification Explained <ArrowRight className="h-4 w-4" />
              </a>
              <a 
                href="/identity-for-remote-jobs" 
                className="text-primary hover:underline flex items-center gap-2"
              >
                Identity for Remote Jobs <ArrowRight className="h-4 w-4" />
              </a>
              <a 
                href="/global-hiring-compliance" 
                className="text-primary hover:underline flex items-center gap-2"
              >
                Global Hiring Compliance <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </section>

          {/* Back Link */}
          <div className="pt-8 border-t border-border">
            <a 
              href="/" 
              className="text-muted-foreground hover:text-foreground flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" /> Back to Home
            </a>
          </div>
        </article>
      </main>
    </div>
  );
};

export default GlobalWorkerIdentity;