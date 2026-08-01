import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Seo from "@/components/Seo";

const RemoteWorkDocuments = () => {
  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="Remote Work Documents — What Employers Ask For"
        description="The documents international remote workers need: identity, proof of address, tax and payment details. Learn what to prepare and how to store them securely."
        path="/remote-work-documents"
        type="article"
        breadcrumbs={[{ name: "Remote Work Documents", path: "/remote-work-documents" }]}
      />
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
              Document Requirements
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1]">
              Documents Employers Require for Remote Work
            </h1>
            <p className="mt-8 text-xl text-muted-foreground leading-relaxed">
              Whether you're a freelancer, contractor, or full-time remote employee, understanding what documents employers need is essential. This comprehensive guide covers the documentation requirements for remote work across different countries and employer types.
            </p>
          </header>

          <hr className="border-border/40 mb-16" />

          {/* Section 1 */}
          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-6">
              Why Document Collection Matters
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              When companies hire remote workers internationally, they take on legal and compliance obligations. Documents serve as proof of identity, work authorization, and tax status. They protect both the employer and the worker by establishing a clear, legitimate employment relationship.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              For workers, having documents ready and verified accelerates the hiring process. Employers can move quickly when candidates present organized, authenticated documentation. This preparation often distinguishes successful candidates from those stuck in administrative limbo.
            </p>
            <p className="text-lg text-foreground leading-relaxed font-medium">
              The right documents, properly verified, transform a weeks-long onboarding process into a matter of minutes.
            </p>
          </section>

          <hr className="border-border/40 mb-16" />

          {/* Section 2 */}
          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-6">
              Universal Document Requirements
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              While specific requirements vary by country and employer, certain documents are universally expected in remote hiring:
            </p>
            
            <h3 className="text-xl font-semibold tracking-tight mb-4 mt-8">
              Passport or Government-Issued ID
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              The passport remains the gold standard for international identity verification. It confirms your identity, nationality, and serves as a primary document for most compliance requirements. For domestic remote work, a national ID card often suffices, but international employers typically require a passport.
            </p>

            <h3 className="text-xl font-semibold tracking-tight mb-4 mt-8">
              Proof of Address
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Employers need to know where you're physically located for tax, legal, and compliance purposes. Acceptable proof typically includes utility bills, bank statements, or government correspondence dated within the last three months. This document establishes your tax jurisdiction and helps employers understand their obligations.
            </p>

            <h3 className="text-xl font-semibold tracking-tight mb-4 mt-8">
              Tax Identification Number
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Most countries issue tax identification numbers to residents and workers. While not always mandatory for contractors, having your tax ID ready demonstrates professionalism and simplifies payment processing. Common examples include SSN (USA), NIN (Nigeria), TIN (various countries), and similar national identifiers.
            </p>

            <h3 className="text-xl font-semibold tracking-tight mb-4 mt-8">
              Bank Account Details
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              To receive payment, you'll need to provide bank account information including account number, bank name, and often SWIFT/BIC codes for international transfers. Some employers use payment platforms that may require additional verification steps.
            </p>
          </section>

          <hr className="border-border/40 mb-16" />

          {/* Section 3 */}
          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-6">
              Country-Specific Requirements
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Different countries have unique documentation requirements. Understanding these helps you prepare the right documents based on your nationality and residence:
            </p>

            <h3 className="text-xl font-semibold tracking-tight mb-4 mt-8">
              United Arab Emirates
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              UAE residents must provide an Emirates ID, which serves as the primary identification document. Additionally, a valid residency visa demonstrates legal status in the country. The Emirates ID contains biometric data and is essential for most official transactions.
            </p>

            <h3 className="text-xl font-semibold tracking-tight mb-4 mt-8">
              Saudi Arabia
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              In KSA, the Iqama (residency permit) is the key document for expatriate workers. Saudi nationals will provide their National ID. Both documents are linked to government databases and serve as primary verification sources.
            </p>

            <h3 className="text-xl font-semibold tracking-tight mb-4 mt-8">
              Nigeria
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Nigerian workers typically provide their National Identification Number (NIN), which is increasingly required for various official purposes. The Bank Verification Number (BVN) may also be requested for payment processing and fraud prevention.
            </p>

            <h3 className="text-xl font-semibold tracking-tight mb-4 mt-8">
              Egypt
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Egyptian National ID cards are the primary identification document. For tax purposes, workers should have their tax registration number available. Non-citizens working in Egypt will need to provide their residency documentation.
            </p>

            <h3 className="text-xl font-semibold tracking-tight mb-4 mt-8">
              Morocco
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              The CNIE (Carte Nationale d'Identité Électronique) is Morocco's electronic national ID card and serves as the primary identification document for citizens. International workers may need residency permits depending on their work arrangement.
            </p>
          </section>

          <hr className="border-border/40 mb-16" />

          {/* Section 4 */}
          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-6">
              Optional but Recommended Documents
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Beyond mandatory requirements, certain documents can strengthen your profile and accelerate hiring:
            </p>
            <div className="space-y-4">
              <p className="text-lg text-foreground leading-relaxed">
                <strong>Professional Certifications:</strong> Industry-specific credentials demonstrate expertise and may be required for certain roles.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                <strong>Educational Transcripts:</strong> Particularly relevant for positions requiring specific degrees or qualifications.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                <strong>Work Permits or Visas:</strong> If you're working from a country where you're not a citizen, documentation of your legal right to work may be required.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                <strong>Reference Letters:</strong> While not identity documents, professional references can support your application and provide additional verification of your work history.
              </p>
            </div>
          </section>

          <hr className="border-border/40 mb-16" />

          {/* Section 5 */}
          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-6">
              Simplifying Document Management with GlobID
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Managing multiple documents across different formats and platforms is challenging. GlobID consolidates all your employment documents into a single, verified profile. Upload once, verify once, and share with any employer via a secure link.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              GlobID automatically identifies which documents you need based on your nationality and residence country. The platform guides you through collection and verification, ensuring you're always ready for new opportunities.
            </p>
            <p className="text-lg text-foreground leading-relaxed font-medium">
              Your documents, verified and portable. Ready when opportunity calls.
            </p>
          </section>

          <hr className="border-border/40 mb-16" />

          {/* CTA */}
          <section className="mb-16 p-8 bg-apple-gray rounded-2xl">
            <h2 className="text-2xl font-semibold tracking-tight mb-4">
              Get Your Documents Verified Today
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Stop scrambling for documents with each new opportunity. Create your GlobID passport and have everything verified and ready to share.
            </p>
            <Link to="/auth?mode=signup">
              <Button variant="apple-blue" size="lg" className="rounded-full">
                Create Your Passport — $99
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
                <h3 className="text-lg font-semibold mb-2">What if I don't have all the required documents?</h3>
                <p className="text-muted-foreground leading-relaxed">GlobID shows you exactly which documents are required and which are optional for your situation. Start with what you have, and add documents as you obtain them. Many employers will work with partial documentation while you complete your profile.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">How should I prepare my documents for upload?</h3>
                <p className="text-muted-foreground leading-relaxed">Ensure documents are clear, legible, and show all corners. Use high-resolution scans or photos. Avoid glare and shadows. Documents should be current—typically issued within the last 3 months for proof of address.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Do I need to translate my documents?</h3>
                <p className="text-muted-foreground leading-relaxed">Most international employers accept documents in their original language. However, if an employer requires English translations, certified translations from a recognized service are typically needed.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">How long are uploaded documents valid?</h3>
                <p className="text-muted-foreground leading-relaxed">Passports remain valid until expiration. Proof of address should typically be updated every 3-6 months. GlobID will remind you when documents need refreshing.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Can I use digital versions of my documents?</h3>
                <p className="text-muted-foreground leading-relaxed">Yes, many countries now issue digital IDs and documents. GlobID accepts both physical document scans and digital document exports where available and recognized.</p>
              </div>
            </div>
          </section>

          <hr className="border-border/40 mb-16" />

          {/* Internal Links */}
          <section className="mb-16">
            <h3 className="text-lg font-semibold mb-4">Related Resources</h3>
            <div className="flex flex-wrap gap-4">
              <Link to="/global-worker-verification" className="text-primary hover:underline">Global Worker Verification →</Link>
              <Link to="/mena-remote-work" className="text-primary hover:underline">MENA Remote Work →</Link>
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

export default RemoteWorkDocuments;
