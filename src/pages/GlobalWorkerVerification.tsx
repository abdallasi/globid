import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const GlobalWorkerVerification = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/30">
        <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link to="/" className="font-semibold text-lg tracking-tight">
            GlobID
          </Link>
          <Link to="/auth?mode=signup">
            <Button variant="ghost" size="sm">Get Started</Button>
          </Link>
        </div>
      </nav>

      {/* Content */}
      <main className="pt-32 pb-24 px-6 animate-fade-in">
        <div className="max-w-3xl mx-auto">
          
          {/* Hero */}
          <header className="mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">
              Understanding Verification
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1]">
              Global Worker Verification for Remote Hiring
            </h1>
            <p className="mt-8 text-xl text-muted-foreground leading-relaxed">
              In an increasingly borderless economy, verifying the identity and credentials of remote workers has become essential. This guide explains what global worker verification means, why it matters, and how modern solutions like GlobID are transforming the process.
            </p>
          </header>

          <hr className="border-border/40 mb-16" />

          {/* Section 1 */}
          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-6">
              What Is Global Worker Verification?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Global worker verification is the process of confirming the identity, legal status, and employment eligibility of individuals across international borders. Unlike traditional background checks limited to a single country, global verification must account for varying documentation standards, legal frameworks, and compliance requirements across jurisdictions.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              For employers hiring remote talent from regions like MENA, Africa, or Asia, verification serves as the foundation of trust. It confirms that the person applying is who they claim to be, that they have the legal right to work, and that their credentials are authentic.
            </p>
            <p className="text-lg text-foreground leading-relaxed font-medium">
              Without robust verification, companies expose themselves to fraud, compliance violations, and operational risk.
            </p>
          </section>

          <hr className="border-border/40 mb-16" />

          {/* Section 2 */}
          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-6">
              Why Verification Matters for Remote Hiring
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              The remote work revolution has created unprecedented opportunities for talent worldwide. However, it has also introduced new challenges for employers who must navigate complex compliance landscapes without meeting candidates in person.
            </p>
            <div className="space-y-4 mb-6">
              <p className="text-lg text-foreground leading-relaxed">
                <strong>Regulatory Compliance:</strong> Many countries require employers to verify the identity and work authorization of all employees, regardless of location. Failure to comply can result in significant fines and legal consequences.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                <strong>Fraud Prevention:</strong> Identity fraud in remote hiring is rising. Verification protects companies from hiring individuals using fake credentials or misrepresenting their qualifications.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                <strong>Trust Building:</strong> A verified workforce builds confidence across the organization. Clients, partners, and team members can trust that everyone has been properly vetted.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                <strong>Streamlined Onboarding:</strong> Pre-verified workers can be onboarded in minutes rather than weeks, reducing time-to-productivity and administrative burden.
              </p>
            </div>
          </section>

          <hr className="border-border/40 mb-16" />

          {/* Section 3 */}
          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-6">
              The Traditional Verification Problem
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Traditional verification processes were designed for a world where employment happened within national borders. They typically involve manual document collection, slow third-party checks, and fragmented systems that don't communicate with each other.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              For international hiring, these legacy approaches create significant friction. Employers must navigate different document types across countries, coordinate with multiple verification providers, and often wait weeks for results. Meanwhile, talented candidates sit in limbo, potentially accepting offers elsewhere.
            </p>
            <p className="text-lg text-foreground leading-relaxed font-medium">
              The result is a system that fails both employers seeking global talent and workers seeking global opportunity.
            </p>
          </section>

          <hr className="border-border/40 mb-16" />

          {/* Section 4 */}
          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-6">
              How GlobID Solves Global Verification
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              GlobID reimagines verification for the borderless economy. Rather than treating verification as a one-time hurdle for each job application, GlobID creates a portable employment identity that workers verify once and use everywhere.
            </p>
            <div className="space-y-4 mb-6">
              <p className="text-lg text-foreground leading-relaxed">
                <strong>Universal Employment ID:</strong> Workers create a verified identity profile that includes their passport, national ID, proof of address, tax information, and bank details—all validated and secured.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                <strong>Country-Specific Compliance:</strong> GlobID understands the documentation requirements for 16+ countries across MENA, Africa, and beyond. From Emirates IDs in the UAE to NIN verification in Nigeria, the platform captures what employers need.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                <strong>Shareable Verification:</strong> Once verified, workers can share their GlobID passport with any employer via a secure link. No need to re-submit documents or wait for new background checks.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                <strong>Instant Trust:</strong> Employers receive a complete, verified profile in seconds. They can hire with confidence, knowing compliance requirements are already met.
              </p>
            </div>
          </section>

          <hr className="border-border/40 mb-16" />

          {/* Section 5 */}
          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-6">
              Verification for Different Stakeholders
            </h2>
            <h3 className="text-xl font-semibold tracking-tight mb-4 text-muted-foreground">
              For Remote Workers
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Global worker verification puts you in control of your employment identity. Instead of repeatedly submitting documents and waiting for approval, you verify once with GlobID and present a trusted credential to any employer. This accelerates your job search and demonstrates professionalism to potential employers.
            </p>
            <h3 className="text-xl font-semibold tracking-tight mb-4 text-muted-foreground">
              For Employers
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Verification removes the guesswork from international hiring. When a candidate presents a GlobID passport, you know their identity has been validated, their documents are authentic, and they're ready to work. This reduces your compliance burden and accelerates time-to-hire.
            </p>
            <h3 className="text-xl font-semibold tracking-tight mb-4 text-muted-foreground">
              For EOR and Staffing Platforms
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Employer of Record services and staffing platforms can leverage GlobID to pre-qualify candidates before they enter the hiring pipeline. This creates a smoother experience for clients and reduces the operational overhead of document collection and verification.
            </p>
          </section>

          <hr className="border-border/40 mb-16" />

          {/* CTA */}
          <section className="mb-16 p-8 bg-apple-gray rounded-2xl">
            <h2 className="text-2xl font-semibold tracking-tight mb-4">
              Ready to Get Verified?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Join thousands of professionals who have simplified their global employment journey with GlobID. Create your verified employment passport today.
            </p>
            <Link to="/auth?mode=signup">
              <Button variant="apple-blue" size="lg" className="rounded-full">
                Create Your Passport — $50
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </section>

          <hr className="border-border/40 mb-16" />

          {/* FAQ Section */}
          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold mb-2">What documents are required for global worker verification?</h3>
                <p className="text-muted-foreground leading-relaxed">Required documents vary by country but typically include a passport or national ID, proof of address, and tax identification. GlobID guides you through the specific requirements for your country of residence and nationality.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">How long does verification take?</h3>
                <p className="text-muted-foreground leading-relaxed">With GlobID, the verification process typically takes minutes once you've uploaded your documents. Your verified passport is then ready to share with employers immediately.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Is my data secure during verification?</h3>
                <p className="text-muted-foreground leading-relaxed">Yes. GlobID uses bank-level encryption and secure storage for all documents. Your data is never shared without your explicit consent, and you control who can access your verified passport.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Can employers trust GlobID verification?</h3>
                <p className="text-muted-foreground leading-relaxed">Absolutely. GlobID verification confirms identity, document authenticity, and work eligibility. Employers can rely on GlobID passports as a trusted source of candidate information.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">What countries does GlobID support?</h3>
                <p className="text-muted-foreground leading-relaxed">GlobID supports workers from 16+ countries including UAE, Saudi Arabia, Egypt, Morocco, Nigeria, Kenya, South Africa, India, Canada, and more. We're continuously expanding our coverage.</p>
              </div>
            </div>
          </section>

          <hr className="border-border/40 mb-16" />

          {/* Internal Links */}
          <section className="mb-16">
            <h3 className="text-lg font-semibold mb-4">Related Resources</h3>
            <div className="flex flex-wrap gap-4">
              <Link to="/remote-work-documents" className="text-primary hover:underline">Documents for Remote Work →</Link>
              <Link to="/hire-international-talent" className="text-primary hover:underline">Hiring International Talent →</Link>
              <Link to="/identity-for-remote-jobs" className="text-primary hover:underline">Digital Identity for Jobs →</Link>
              <Link to="/manifesto" className="text-primary hover:underline">Our Manifesto →</Link>
            </div>
          </section>

          {/* Back Link */}
          <footer>
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </footer>

        </div>
      </main>
    </div>
  );
};

export default GlobalWorkerVerification;
