import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const MenaRemoteWork = () => {
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
              Regional Opportunities
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1]">
              Remote Work Opportunities in MENA, Africa & Canada
            </h1>
            <p className="mt-8 text-xl text-muted-foreground leading-relaxed">
              The global remote work revolution has opened unprecedented opportunities for professionals across MENA, Africa, and emerging markets. Yet trust gaps and verification challenges often stand between talent and opportunity. Here's how to overcome them.
            </p>
          </header>

          <hr className="border-border/40 mb-16" />

          {/* Section 1 */}
          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-6">
              The Remote Work Boom in Emerging Markets
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Remote work has transformed from a niche arrangement into a mainstream employment model. For professionals in MENA, Africa, and other emerging markets, this shift represents a fundamental change in career possibilities.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Companies in North America, Europe, and developed Asia are actively seeking talent from regions they previously couldn't access. The combination of skilled professionals, competitive rates, and overlapping time zones makes these markets attractive for global employers.
            </p>
            <p className="text-lg text-foreground leading-relaxed font-medium">
              The opportunity is real. But so are the challenges in capturing it.
            </p>
          </section>

          <hr className="border-border/40 mb-16" />

          {/* Section 2 */}
          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-6">
              Understanding the Trust Gap
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Despite the growing demand for global talent, a significant trust gap exists between employers and candidates from emerging markets. This isn't about discrimination—it's about verification infrastructure.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Employers in established markets have well-developed systems for verifying local candidates. Background check providers, credit bureaus, and professional networks all contribute to candidate validation. These systems often don't extend to emerging markets, leaving employers uncertain about how to verify international candidates.
            </p>
            <div className="space-y-4 mb-6">
              <p className="text-lg text-foreground leading-relaxed">
                <strong>Documentation Differences:</strong> Each country uses different ID documents, formats, and verification methods. An employer may not recognize an Emirates ID or know how to verify a Nigerian NIN.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                <strong>Verification Gaps:</strong> Traditional background check providers often don't cover MENA or African countries, leaving employers without their usual verification tools.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                <strong>Payment Complexity:</strong> Paying workers across borders involves navigating different banking systems, currencies, and compliance requirements.
              </p>
            </div>
            <p className="text-lg text-foreground leading-relaxed font-medium">
              The trust gap isn't about capability—it's about verification. Bridge the gap, and opportunities open.
            </p>
          </section>

          <hr className="border-border/40 mb-16" />

          {/* Section 3 */}
          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-6">
              MENA: A Rising Remote Work Hub
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              The Middle East and North Africa region has emerged as a significant source of remote talent. Countries like the UAE, Saudi Arabia, Egypt, Morocco, and Jordan produce graduates in technology, finance, engineering, and business at impressive rates.
            </p>

            <h3 className="text-xl font-semibold tracking-tight mb-4 mt-8">
              United Arab Emirates
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Dubai and Abu Dhabi have become global business hubs, attracting talent from around the world. The UAE's remote work visa and freelancer permits have formalized remote work arrangements, making it easier for professionals to work for international employers.
            </p>

            <h3 className="text-xl font-semibold tracking-tight mb-4 mt-8">
              Saudi Arabia
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Vision 2030 has accelerated Saudi Arabia's economic diversification, including growing tech and professional services sectors. Saudi professionals, both nationals and residents, increasingly seek international remote opportunities.
            </p>

            <h3 className="text-xl font-semibold tracking-tight mb-4 mt-8">
              Egypt & North Africa
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Egypt, Morocco, Tunisia, and Jordan offer large pools of educated, multilingual professionals. Their time zones overlap with both European and East Coast American business hours, making collaboration convenient.
            </p>
          </section>

          <hr className="border-border/40 mb-16" />

          {/* Section 4 */}
          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-6">
              Africa: The Next Frontier
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Africa represents the fastest-growing talent market in the world. With a young, educated population and improving digital infrastructure, African professionals are increasingly competitive in the global market.
            </p>

            <h3 className="text-xl font-semibold tracking-tight mb-4 mt-8">
              Nigeria
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Africa's largest economy produces significant technical and business talent. Nigerian developers, designers, and professionals work for companies worldwide, often through platforms or direct employment.
            </p>

            <h3 className="text-xl font-semibold tracking-tight mb-4 mt-8">
              East Africa
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Kenya, Rwanda, Uganda, and Tanzania have invested heavily in education and digital infrastructure. Nairobi has become a tech hub, and Kigali is positioning itself as a center for innovation.
            </p>

            <h3 className="text-xl font-semibold tracking-tight mb-4 mt-8">
              South Africa & Southern Africa
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              South Africa offers a mature professional services sector with strong English skills and favorable time zone overlap with Europe. Ghana and Senegal in West Africa are also emerging as talent sources.
            </p>
          </section>

          <hr className="border-border/40 mb-16" />

          {/* Section 5 */}
          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-6">
              Canada: Bridging Developed and Emerging Markets
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Canada plays a unique role in the global remote work landscape. Its diverse population includes professionals who understand both Western business culture and emerging market contexts. For companies looking to hire internationally, Canadian residents often serve as bridges.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              For professionals from MENA and Africa who have immigrated to Canada, GlobID helps maintain connections to both worlds—verifying their current Canadian status while preserving documentation from their countries of origin.
            </p>
          </section>

          <hr className="border-border/40 mb-16" />

          {/* Section 6 */}
          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-6">
              How GlobID Bridges the Trust Gap
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              GlobID was built specifically to address the verification challenges facing professionals in MENA, Africa, and emerging markets. By creating a standardized, verified identity that employers recognize and trust, GlobID removes the friction that prevents qualified candidates from accessing opportunities.
            </p>
            <div className="space-y-4 mb-6">
              <p className="text-lg text-foreground leading-relaxed">
                <strong>Country-Specific Verification:</strong> GlobID understands the documentation requirements for 16+ countries. Emirates ID, Iqama, NIN, CNIE—we know what each country uses and how to verify it.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                <strong>Employer-Ready Format:</strong> When you share your GlobID passport, employers receive information in a format they understand and trust, regardless of which country issued your documents.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                <strong>Payment Infrastructure:</strong> Verified bank details and tax information enable compliant payments from day one, removing a major barrier to international hiring.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                <strong>Portable Verification:</strong> Verify once with GlobID and use your passport for any opportunity. No more repeating the verification process for each potential employer.
              </p>
            </div>
          </section>

          <hr className="border-border/40 mb-16" />

          {/* Section 7 */}
          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-6">
              Positioning Yourself for Global Opportunities
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              To compete effectively for international remote positions:
            </p>
            <div className="space-y-4 mb-6">
              <p className="text-lg text-foreground leading-relaxed">
                <strong>Get Verified:</strong> A verified GlobID passport immediately distinguishes you from unverified candidates. Employers can trust your identity and move quickly to hiring.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                <strong>Maintain Current Documentation:</strong> Keep your passport, ID, and proof of address up to date. Employers expect professionalism in documentation.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                <strong>Understand Employer Needs:</strong> Learn what international employers require for compliance. Being prepared demonstrates professionalism and reduces friction.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                <strong>Build Visible Skills:</strong> Combine your verified identity with demonstrable skills. Portfolio work, certifications, and clear communication of capabilities matter.
              </p>
            </div>
          </section>

          <hr className="border-border/40 mb-16" />

          {/* CTA */}
          <section className="mb-16 p-8 bg-apple-gray rounded-2xl">
            <h2 className="text-2xl font-semibold tracking-tight mb-4">
              Ready to Access Global Opportunities?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Don't let verification gaps stand between you and your next opportunity. Create your verified GlobID passport and show employers you're ready to work.
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
                <h3 className="text-lg font-semibold mb-2">Which MENA and African countries does GlobID support?</h3>
                <p className="text-muted-foreground leading-relaxed">GlobID currently supports UAE, Saudi Arabia, Egypt, Morocco, Jordan, Tunisia, Nigeria, Kenya, Rwanda, Uganda, South Africa, Tanzania, Senegal, Ghana, India, and Canada. We're continuously expanding coverage.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Do international employers actually hire from these regions?</h3>
                <p className="text-muted-foreground leading-relaxed">Absolutely. Companies worldwide actively hire remote talent from MENA and Africa. The key challenge has been verification, which GlobID solves. With verified credentials, you compete on equal footing with candidates anywhere.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">What types of jobs are available for remote workers from emerging markets?</h3>
                <p className="text-muted-foreground leading-relaxed">Remote opportunities span technology (developers, designers, QA), business services (finance, customer support, marketing), creative fields, and specialized professional services. The range continues to expand.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">How do international payments work?</h3>
                <p className="text-muted-foreground leading-relaxed">Employers use various methods including direct bank transfers, payment platforms like Wise or Payoneer, and payroll services. GlobID captures and verifies your bank details, ensuring payments can be processed compliantly.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Will my country's documents be recognized by international employers?</h3>
                <p className="text-muted-foreground leading-relaxed">Through GlobID, yes. We standardize the presentation of your verified documents so employers understand them regardless of which country issued them. Your GlobID passport translates local documentation into globally recognized verification.</p>
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

export default MenaRemoteWork;
