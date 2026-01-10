import { Helmet } from "react-helmet-async";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const EmployerOfRecordAlternative = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Employer of Record Alternative — EOR vs Direct Hiring | GlobID</title>
        <meta name="description" content="Explore alternatives to Employer of Record services. Learn when you need an EOR and when simpler solutions like GlobID work better." />
        <link rel="canonical" href="https://globid.co/employer-of-record-alternative" />
        <meta property="og:title" content="Employer of Record Alternative — EOR vs Direct Hiring" />
        <meta property="og:description" content="Explore alternatives to Employer of Record services. Learn when you need an EOR and when simpler solutions work better." />
        <meta property="og:url" content="https://globid.co/employer-of-record-alternative" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Employer of Record Alternative — EOR vs Direct Hiring" />
        <meta name="twitter:description" content="Explore alternatives to EOR services for international hiring." />
      </Helmet>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="/" className="text-xl font-semibold text-foreground">
            GlobID
          </a>
          <a href="/demo">
            <Button size="sm">Book a Demo</Button>
          </a>
        </div>
      </nav>

      {/* Content */}
      <main className="pt-24 pb-20">
        <article className="max-w-3xl mx-auto px-6">
          {/* Hero */}
          <header className="mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Employer of Record Alternative
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Understanding when you need an EOR—and when you don't.
            </p>
          </header>

          {/* Definition */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              What is an Employer of Record?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              An Employer of Record (EOR) is a third-party organization that legally employs workers on behalf of another company. The EOR handles payroll, taxes, benefits, and compliance in countries where the hiring company doesn't have a legal entity.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              EORs became popular as companies expanded globally without wanting to establish local subsidiaries in every country. They solve a real problem—but they're not the right solution for everyone.
            </p>
          </section>

          {/* When EORs Make Sense */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              When an EOR Makes Sense
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              EORs are valuable in specific situations:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>You need to hire full-time employees in a country where you have no legal presence</li>
              <li>You want to offer local benefits packages and statutory protections</li>
              <li>You're testing a new market before establishing a local entity</li>
              <li>You have significant headcount in a specific country</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              In these cases, an EOR provides legitimate value by handling complex employment requirements.
            </p>
          </section>

          {/* Limitations */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              EOR Limitations
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              EORs come with significant tradeoffs:
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">Cost</h3>
                <p className="text-muted-foreground leading-relaxed">
                  EORs typically charge substantial monthly fees per employee, often ranging from $400-600+ per month in addition to the worker's salary. For small teams, this adds up quickly.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">Complexity</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Adding a third party between you and your workers creates friction. Communication, onboarding, and management become more complicated.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">Over-Solution</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Many companies don't actually need a full EOR. They need worker verification and payment infrastructure—not a legal employment intermediary.
                </p>
              </div>
            </div>
          </section>

          {/* Alternatives */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Alternatives to EORs
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Depending on your situation, there are simpler approaches:
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">Direct Contractor Relationships</h3>
                <p className="text-muted-foreground leading-relaxed">
                  For many international roles, hiring contractors directly is simpler and more cost-effective. This works well for project-based work, specialized skills, and flexible arrangements.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">Worker Identity Platforms</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Platforms like GlobID handle the verification and documentation side without becoming the employer. You get confidence in who you're hiring without the overhead of an EOR.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">Agent of Record</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Some services offer lighter-weight compliance support without full employment intermediation. This can be a middle ground between direct hiring and full EOR services.
                </p>
              </div>
            </div>
          </section>

          {/* How GlobID Fits */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Where GlobID Fits
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              GlobID is not an EOR. We don't become the legal employer of your workers. Instead, we solve the verification problem that often drives companies toward EORs unnecessarily.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Many companies use EORs primarily because they don't know how to verify international workers. GlobID provides that verification layer—letting you hire directly with confidence.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              For companies that genuinely need EOR services, GlobID can complement an EOR by providing standardized worker verification. For companies that don't need an EOR, GlobID can replace the need entirely.
            </p>
          </section>

          {/* CTA */}
          <section className="mb-16 p-8 bg-muted/50 rounded-2xl text-center">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Explore Simpler Global Hiring
            </h2>
            <p className="text-muted-foreground mb-6">
              See if GlobID can help you hire internationally without EOR overhead.
            </p>
            <a href="/demo">
              <Button size="lg">
                Book a Demo <ArrowRight className="ml-2 h-4 w-4" />
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
                href="/deel-alternative" 
                className="text-primary hover:underline flex items-center gap-2"
              >
                Deel Alternative <ArrowRight className="h-4 w-4" />
              </a>
              <a 
                href="/global-hiring-compliance" 
                className="text-primary hover:underline flex items-center gap-2"
              >
                Global Hiring Compliance <ArrowRight className="h-4 w-4" />
              </a>
              <a 
                href="/hire-international-talent" 
                className="text-primary hover:underline flex items-center gap-2"
              >
                Hiring International Talent <ArrowRight className="h-4 w-4" />
              </a>
              <a 
                href="/what-is-globid" 
                className="text-primary hover:underline flex items-center gap-2"
              >
                What is GlobID? <ArrowRight className="h-4 w-4" />
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

export default EmployerOfRecordAlternative;