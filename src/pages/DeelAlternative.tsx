import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const DeelAlternative = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="text-xl font-semibold text-foreground">
            GlobID
          </Link>
          <Link to="/demo">
            <Button size="sm">Book a Demo</Button>
          </Link>
        </div>
      </nav>

      {/* Content */}
      <main className="pt-24 pb-20">
        <article className="max-w-3xl mx-auto px-6">
          {/* Hero */}
          <header className="mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Deel Alternative
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Comparing global hiring platforms and finding the right fit for your needs.
            </p>
          </header>

          {/* Context */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              The Global Hiring Landscape
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Deel is one of the most well-known platforms in global hiring. They offer employer of record services, contractor management, payroll, and compliance tools for companies hiring internationally.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              But Deel isn't the only option—and for many companies, it may not be the right one. Understanding what you actually need is the first step to choosing the right solution.
            </p>
          </section>

          {/* What Deel Does */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              What Deel Offers
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Deel's primary services include:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Employer of Record (EOR) in 100+ countries</li>
              <li>Contractor payments and management</li>
              <li>Payroll processing for your own entities</li>
              <li>Immigration and visa support</li>
              <li>Equipment provisioning for remote workers</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              It's a comprehensive platform designed for companies building large international teams.
            </p>
          </section>

          {/* Considerations */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Things to Consider
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">Cost Structure</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Deel charges per-employee fees that can add up significantly. For small teams or occasional international hires, this may be difficult to justify.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">Feature Complexity</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Not every company needs every feature. If you primarily need worker verification, paying for a full EOR platform may be overkill.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">Regional Focus</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Global platforms spread resources across many countries. Companies focused on specific regions (like MENA or Africa) might benefit from more specialized solutions.
                </p>
              </div>
            </div>
          </section>

          {/* Alternatives */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Alternative Approaches
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">Other EOR Platforms</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Remote, Oyster, and Papaya Global offer similar EOR services. Each has different pricing, geographic strengths, and feature sets worth comparing.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">Contractor-Only Platforms</h3>
                <p className="text-muted-foreground leading-relaxed">
                  If you don't need full EOR services, contractor management platforms can handle payments and basic compliance at lower cost.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">Identity and Verification Platforms</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Platforms like GlobID focus specifically on worker verification—giving you confidence in who you're hiring without the overhead of EOR services.
                </p>
              </div>
            </div>
          </section>

          {/* GlobID Approach */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              The GlobID Approach
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              GlobID takes a different approach than Deel. We're not an EOR. We don't manage payroll or become the legal employer of your workers.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Instead, we solve the verification problem. When you hire someone internationally, you need to know who they are—their identity, work authorization, tax status, and payment details. GlobID provides that in a standardized, verified format.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              This makes GlobID a complement to EOR services or a simpler alternative when full EOR isn't needed. For companies focused on MENA and Africa, we offer deep regional expertise rather than global generalization.
            </p>
          </section>

          {/* Choosing the Right Solution */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Choosing What's Right for You
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The right platform depends on your specific needs:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li><strong>Need full EOR?</strong> Compare Deel, Remote, Oyster, and similar platforms</li>
              <li><strong>Hiring contractors only?</strong> Consider simpler contractor management tools</li>
              <li><strong>Need verification without EOR?</strong> GlobID might be the fit</li>
              <li><strong>Focused on MENA/Africa?</strong> Look for regional specialists</li>
            </ul>
          </section>

          {/* CTA */}
          <section className="mb-16 p-8 bg-muted/50 rounded-2xl text-center">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              See How GlobID Compares
            </h2>
            <p className="text-muted-foreground mb-6">
              Talk to our team about your international hiring needs.
            </p>
            <Link to="/demo">
              <Button size="lg">
                Book a Demo <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </section>

          {/* Related Links */}
          <section className="mb-12">
            <h2 className="text-xl font-semibold text-foreground mb-4">
              Related Topics
            </h2>
            <div className="grid gap-3">
              <Link 
                to="/employer-of-record-alternative" 
                className="text-primary hover:underline flex items-center gap-2"
              >
                Employer of Record Alternatives <ArrowRight className="h-4 w-4" />
              </Link>
              <Link 
                to="/hire-international-talent" 
                className="text-primary hover:underline flex items-center gap-2"
              >
                Hiring International Talent <ArrowRight className="h-4 w-4" />
              </Link>
              <Link 
                to="/global-hiring-compliance" 
                className="text-primary hover:underline flex items-center gap-2"
              >
                Global Hiring Compliance <ArrowRight className="h-4 w-4" />
              </Link>
              <Link 
                to="/what-is-globid" 
                className="text-primary hover:underline flex items-center gap-2"
              >
                What is GlobID? <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </section>

          {/* Back Link */}
          <div className="pt-8 border-t border-border">
            <Link 
              to="/" 
              className="text-muted-foreground hover:text-foreground flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" /> Back to Home
            </Link>
          </div>
        </article>
      </main>
    </div>
  );
};

export default DeelAlternative;
