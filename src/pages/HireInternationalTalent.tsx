import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HireInternationalTalent = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/30">
        <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link to="/" className="font-semibold text-lg tracking-tight">
            GlobID
          </Link>
          <Link to="/demo">
            <Button variant="ghost" size="sm">Book a Demo</Button>
          </Link>
        </div>
      </nav>

      {/* Content */}
      <main className="pt-32 pb-24 px-6 animate-fade-in">
        <div className="max-w-3xl mx-auto">
          
          {/* Hero */}
          <header className="mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">
              For Employers
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1]">
              How Employers Hire International Talent Safely
            </h1>
            <p className="mt-8 text-xl text-muted-foreground leading-relaxed">
              The global talent pool offers unprecedented access to skilled professionals. But international hiring comes with risks—fraud, compliance gaps, and verification challenges. This guide shows employers how to hire across borders with confidence.
            </p>
          </header>

          <hr className="border-border/40 mb-16" />

          {/* Section 1 */}
          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-6">
              The International Hiring Opportunity
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Companies that embrace international hiring gain access to diverse skill sets, competitive rates, and the ability to operate across time zones. The remote work revolution has made it possible to build truly global teams without the expense of physical offices abroad.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Regions like MENA, Africa, and South Asia produce highly skilled professionals in technology, finance, customer support, and creative fields. These markets represent some of the world's fastest-growing talent pools, with professionals eager to work for international companies.
            </p>
            <p className="text-lg text-foreground leading-relaxed font-medium">
              The opportunity is clear. The challenge is executing it safely and compliantly.
            </p>
          </section>

          <hr className="border-border/40 mb-16" />

          {/* Section 2 */}
          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-6">
              Risks of Unverified Hiring
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Without proper verification, international hiring exposes companies to significant risks:
            </p>
            <div className="space-y-4 mb-6">
              <p className="text-lg text-foreground leading-relaxed">
                <strong>Identity Fraud:</strong> Remote hiring makes it easier for bad actors to misrepresent their identity. Fake credentials, stolen identities, and impersonation are growing concerns in the remote work economy.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                <strong>Compliance Violations:</strong> Each country has unique employment, tax, and data protection laws. Hiring without understanding these requirements can result in fines, legal action, and reputational damage.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                <strong>Payment Risks:</strong> Sending payments to unverified individuals opens doors to fraud, money laundering concerns, and tax complications.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                <strong>Qualification Misrepresentation:</strong> Without verification, you rely on candidates' self-reported qualifications. Fake degrees, inflated experience, and fabricated references are more common than most employers realize.
              </p>
            </div>
            <p className="text-lg text-foreground leading-relaxed font-medium">
              These risks aren't reasons to avoid international hiring—they're reasons to verify properly.
            </p>
          </section>

          <hr className="border-border/40 mb-16" />

          {/* Section 3 */}
          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-6">
              Building a Safe Hiring Process
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Safe international hiring doesn't require building complex internal verification systems. It requires implementing the right checkpoints and using trusted verification partners.
            </p>

            <h3 className="text-xl font-semibold tracking-tight mb-4 mt-8">
              1. Establish Clear Requirements
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Before hiring, define exactly what documentation you need from international workers. This typically includes identity verification, proof of address, tax documentation, and bank details for payment. Country-specific requirements may add national IDs, work permits, or residency documentation.
            </p>

            <h3 className="text-xl font-semibold tracking-tight mb-4 mt-8">
              2. Use Verified Identity Platforms
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Rather than collecting and verifying documents manually, leverage platforms like GlobID where candidates arrive pre-verified. This shifts the verification burden away from your HR team while ensuring consistent, reliable results.
            </p>

            <h3 className="text-xl font-semibold tracking-tight mb-4 mt-8">
              3. Implement Consistent Standards
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Apply the same verification standards to all international hires, regardless of country or role. Inconsistent processes create compliance gaps and potential discrimination concerns.
            </p>

            <h3 className="text-xl font-semibold tracking-tight mb-4 mt-8">
              4. Document Everything
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Maintain clear records of verification steps, documents collected, and decisions made. This protects your company in case of audits or disputes and demonstrates good faith compliance efforts.
            </p>
          </section>

          <hr className="border-border/40 mb-16" />

          {/* Section 4 */}
          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-6">
              How GlobID Protects Employers
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              GlobID was built to solve the international hiring verification challenge. When candidates present a GlobID passport, employers receive:
            </p>
            <div className="space-y-4 mb-6">
              <p className="text-lg text-foreground leading-relaxed">
                <strong>Verified Identity:</strong> Each GlobID passport confirms the candidate's identity through government-issued documents. You know you're hiring who they claim to be.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                <strong>Country-Appropriate Documentation:</strong> GlobID collects the right documents for each country—Emirates IDs for UAE, Iqama for Saudi Arabia, NIN for Nigeria, and so on. No more guessing what you need.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                <strong>Ready-to-Pay Information:</strong> Bank details and tax information are collected and verified, enabling smooth payment processing from day one.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                <strong>Shareable Verification:</strong> Candidates share their passport via secure link. You get instant access to their verified profile without handling sensitive documents directly.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                <strong>Compliance Confidence:</strong> GlobID's verification process provides documentation that demonstrates your due diligence in the hiring process.
              </p>
            </div>
          </section>

          <hr className="border-border/40 mb-16" />

          {/* Section 5 */}
          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-6">
              Best Practices for Ongoing Compliance
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Safe hiring extends beyond the initial verification:
            </p>
            <div className="space-y-4">
              <p className="text-lg text-foreground leading-relaxed">
                <strong>Regular Documentation Updates:</strong> Some documents expire or need refreshing. Establish processes to keep worker documentation current.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                <strong>Stay Current on Regulations:</strong> International employment law evolves. Stay informed about changes in the countries where you hire.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                <strong>Work with Local Experts:</strong> For significant hiring in specific regions, consider partnering with local legal or HR experts who understand nuances.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                <strong>Use Compliant Payment Methods:</strong> Ensure your payment processes meet anti-money laundering and tax withholding requirements for each jurisdiction.
              </p>
            </div>
          </section>

          <hr className="border-border/40 mb-16" />

          {/* CTA */}
          <section className="mb-16 p-8 bg-apple-gray rounded-2xl">
            <h2 className="text-2xl font-semibold tracking-tight mb-4">
              Ready to Hire Globally with Confidence?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              See how GlobID can streamline your international hiring process. Book a demo to learn how verified employment passports reduce risk and accelerate onboarding.
            </p>
            <Link to="/demo">
              <Button variant="apple-blue" size="lg" className="rounded-full">
                Book a Demo
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
                <h3 className="text-lg font-semibold mb-2">What's the difference between GlobID and traditional background checks?</h3>
                <p className="text-muted-foreground leading-relaxed">Traditional background checks are employer-initiated, slow, and country-specific. GlobID creates a portable, verified identity that candidates own and share. It's faster, more comprehensive, and designed for international hiring.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">How quickly can we onboard verified candidates?</h3>
                <p className="text-muted-foreground leading-relaxed">Candidates with complete GlobID passports can be onboarded in minutes. Their identity, documents, and payment information are already verified and ready.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Do we still need to collect documents ourselves?</h3>
                <p className="text-muted-foreground leading-relaxed">When a candidate shares their GlobID passport, you have access to all verified documents in one place. You can download what you need for your records without handling collection and verification.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Is GlobID verification legally sufficient for compliance?</h3>
                <p className="text-muted-foreground leading-relaxed">GlobID verification provides strong identity confirmation and document authentication. For specific regulatory requirements, consult with legal counsel familiar with your jurisdiction.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">What countries does GlobID support?</h3>
                <p className="text-muted-foreground leading-relaxed">GlobID currently supports 16+ countries across MENA, Africa, and beyond, including UAE, Saudi Arabia, Egypt, Nigeria, Kenya, South Africa, India, and Canada. We're continuously expanding.</p>
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
              <Link to="/mena-remote-work" className="text-primary hover:underline">MENA Remote Work →</Link>
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

export default HireInternationalTalent;
