import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const IdentityForRemoteJobs = () => {
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
              The Future of Hiring
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1]">
              Digital Identity for Remote Jobs
            </h1>
            <p className="mt-8 text-xl text-muted-foreground leading-relaxed">
              Resumes are relics of a localized job market. In the borderless economy, what you claim matters less than what you can prove. Digital identity is replacing the resume as the foundation of professional trust.
            </p>
          </header>

          <hr className="border-border/40 mb-16" />

          {/* Section 1 */}
          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-6">
              The Resume Is Obsolete
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              For decades, the resume served as the primary tool for job seekers to present their qualifications. A curated document of experience, education, and skills—crafted to impress and designed to persuade.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              But resumes have a fundamental flaw: they rely entirely on self-reporting. There's no verification, no authentication, no way for employers to know if what's written is true. In a local job market where references could be called and employers might know your former colleagues, this worked well enough.
            </p>
            <p className="text-lg text-foreground leading-relaxed font-medium">
              In the global remote economy, resumes are simply not enough. Identity must be verified, not claimed.
            </p>
          </section>

          <hr className="border-border/40 mb-16" />

          {/* Section 2 */}
          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-6">
              What Is Digital Identity?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Digital identity in the employment context is the verified representation of who you are, where you're located, and your eligibility to work. Unlike a resume, which anyone can write, digital identity is authenticated through official documents and verification processes.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              A robust digital identity for remote work includes:
            </p>
            <div className="space-y-4 mb-6">
              <p className="text-lg text-foreground leading-relaxed">
                <strong>Identity Verification:</strong> Confirmation through government-issued documents that you are who you claim to be.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                <strong>Location Verification:</strong> Proof of where you physically reside, which determines tax obligations and legal jurisdiction.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                <strong>Work Eligibility:</strong> Documentation showing you have the legal right to work, whether as a citizen, resident, or permit holder.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                <strong>Financial Identity:</strong> Verified bank and tax information enabling compliant payment processing.
              </p>
            </div>
            <p className="text-lg text-foreground leading-relaxed font-medium">
              Digital identity answers the questions that resumes cannot: Is this person real? Can they legally work? Can we pay them compliantly?
            </p>
          </section>

          <hr className="border-border/40 mb-16" />

          {/* Section 3 */}
          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-6">
              Why Identity Matters More Than Ever
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Several trends have elevated the importance of verified identity in remote hiring:
            </p>

            <h3 className="text-xl font-semibold tracking-tight mb-4 mt-8">
              The Rise of Remote Work
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              When employers and employees never meet in person, trust must be established through other means. Verified identity creates the foundation for a relationship that might span years without a single face-to-face interaction.
            </p>

            <h3 className="text-xl font-semibold tracking-tight mb-4 mt-8">
              Global Talent Competition
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Companies now compete for talent across borders, and professionals compete for opportunities worldwide. In this expanded market, standing out requires more than a polished resume—it requires verified credibility.
            </p>

            <h3 className="text-xl font-semibold tracking-tight mb-4 mt-8">
              Increasing Fraud
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Identity fraud in remote hiring has grown significantly. Fake credentials, impersonation, and qualification misrepresentation are increasingly common. Employers need reliable verification to protect themselves.
            </p>

            <h3 className="text-xl font-semibold tracking-tight mb-4 mt-8">
              Regulatory Complexity
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              International employment involves navigating tax laws, labor regulations, and compliance requirements across multiple jurisdictions. Verified identity documentation is essential for meeting these obligations.
            </p>
          </section>

          <hr className="border-border/40 mb-16" />

          {/* Section 4 */}
          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-6">
              Identity Over Resume: The Shift in Hiring
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Forward-thinking companies are already prioritizing verified identity over traditional resumes. The shift follows a simple logic:
            </p>
            <div className="space-y-6 mb-6 pl-6 border-l-2 border-primary/30">
              <p className="text-lg text-foreground leading-relaxed">
                Skills can be assessed through tests and interviews.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                Experience can be discussed and evaluated.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                But identity cannot be faked when properly verified.
              </p>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              This doesn't mean experience and skills don't matter. They absolutely do. But they're evaluated in context of a verified identity. Know who someone is first, then assess what they can do.
            </p>
            <p className="text-lg text-foreground leading-relaxed font-medium">
              The most valuable professional asset in the remote economy isn't your resume—it's your verified identity.
            </p>
          </section>

          <hr className="border-border/40 mb-16" />

          {/* Section 5 */}
          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-6">
              Building Your Digital Identity with GlobID
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              GlobID provides the platform for creating and managing your verified professional identity. Through a straightforward process, you build a portable credential that opens doors worldwide:
            </p>
            <div className="space-y-4 mb-6">
              <p className="text-lg text-foreground leading-relaxed">
                <strong>Verify Once:</strong> Complete identity verification through document upload and validation. Your verification is permanent and portable.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                <strong>Own Your Identity:</strong> Your verified passport belongs to you. Share it when you choose, with whom you choose.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                <strong>Work Anywhere:</strong> A single GlobID passport works for any employer. No more repeating verification for each opportunity.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                <strong>Stay Current:</strong> Update your information as needed. Your passport evolves with your career.
              </p>
            </div>
            <p className="text-lg text-foreground leading-relaxed font-medium">
              Your identity, verified. Your opportunities, unlimited.
            </p>
          </section>

          <hr className="border-border/40 mb-16" />

          {/* Section 6 */}
          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-6">
              The Future of Professional Identity
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              As remote work becomes the norm rather than the exception, verified digital identity will become as fundamental as a phone number or email address. The professionals who establish their verified identities now will be positioned for opportunities that others cannot access.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              This isn't just about getting hired—it's about participating in the global economy on equal footing. A verified identity from Nigeria carries the same weight as one from New York. Geography becomes irrelevant; identity becomes everything.
            </p>
            <p className="text-lg text-foreground leading-relaxed font-medium">
              The future belongs to the verified. The future is identity-first.
            </p>
          </section>

          <hr className="border-border/40 mb-16" />

          {/* CTA */}
          <section className="mb-16 p-8 bg-apple-gray rounded-2xl">
            <h2 className="text-2xl font-semibold tracking-tight mb-4">
              Build Your Digital Identity Today
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Join the professionals who are ready for the borderless economy. Create your verified GlobID passport and own your professional identity.
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
                <h3 className="text-lg font-semibold mb-2">Does digital identity replace my resume?</h3>
                <p className="text-muted-foreground leading-relaxed">Digital identity complements rather than replaces your resume. It answers the "who are you" and "can you work" questions, while your resume addresses "what have you done" and "what can you do." Both remain valuable.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">How is my identity information protected?</h3>
                <p className="text-muted-foreground leading-relaxed">GlobID uses bank-level encryption for all stored documents and information. Your data is only shared with parties you explicitly authorize through secure, time-limited links.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">What if an employer doesn't know about GlobID?</h3>
                <p className="text-muted-foreground leading-relaxed">You can share your GlobID passport with any employer via a secure link. They don't need a GlobID account to view your verified profile and download your documents.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">How long does verification last?</h3>
                <p className="text-muted-foreground leading-relaxed">Your core identity verification is permanent. Some documents like proof of address may need periodic updates, but your verified status remains active.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Can I use GlobID for freelance work?</h3>
                <p className="text-muted-foreground leading-relaxed">Absolutely. GlobID works for full-time employment, contract work, and freelancing. Any situation where an employer or client needs to verify your identity and work eligibility.</p>
              </div>
            </div>
          </section>

          <hr className="border-border/40 mb-16" />

          {/* Internal Links */}
          <section className="mb-16">
            <h3 className="text-lg font-semibold mb-4">Related Resources</h3>
            <div className="flex flex-wrap gap-4">
              <Link to="/global-worker-verification" className="text-primary hover:underline">Global Worker Verification →</Link>
              <Link to="/remote-work-documents" className="text-primary hover:underline">Documents for Remote Work →</Link>
              <Link to="/hire-international-talent" className="text-primary hover:underline">Hiring International Talent →</Link>
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

export default IdentityForRemoteJobs;
