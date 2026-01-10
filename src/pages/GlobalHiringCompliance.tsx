import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const GlobalHiringCompliance = () => {
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
              Global Hiring Compliance
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Understanding the legal and regulatory requirements for hiring workers across international borders.
            </p>
          </header>

          {/* Definition */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              What is Global Hiring Compliance?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Global hiring compliance refers to the rules and regulations companies must follow when employing people in different countries. This includes tax obligations, work authorization requirements, employment laws, and data protection standards.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Every country has its own employment regulations. When a company hires internationally, they must navigate the requirements of both their home country and the worker's country of residence.
            </p>
          </section>

          {/* The Challenge */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Why Compliance is Challenging
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Compliance complexity increases exponentially with each new country. A company hiring in one country faces one set of rules. A company hiring in ten countries faces ten overlapping, sometimes contradictory, regulatory frameworks.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Common compliance challenges include:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Understanding local tax withholding requirements</li>
              <li>Verifying work authorization for different visa types</li>
              <li>Meeting data protection standards across jurisdictions</li>
              <li>Ensuring proper employment classification (employee vs. contractor)</li>
              <li>Managing local labor law requirements</li>
            </ul>
          </section>

          {/* Key Areas */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Key Compliance Areas
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">Work Authorization</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Before hiring someone internationally, companies must verify they have the legal right to work. This varies by country—citizens, permanent residents, and visa holders each have different rights and restrictions.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">Tax Compliance</h3>
                <p className="text-muted-foreground leading-relaxed">
                  International workers may be subject to tax in multiple jurisdictions. Companies need to understand their obligations for withholding, reporting, and remitting taxes appropriately.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">Employment Classification</h3>
                <p className="text-muted-foreground leading-relaxed">
                  The distinction between employees and independent contractors varies by country. Misclassification can result in significant penalties and back-taxes.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">Data Protection</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Collecting and storing worker information across borders requires compliance with local data protection laws, including GDPR in Europe and similar frameworks elsewhere.
                </p>
              </div>
            </div>
          </section>

          {/* Common Mistakes */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Common Compliance Mistakes
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Many companies make the same errors when expanding internationally:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Assuming all countries have similar employment laws</li>
              <li>Not verifying work authorization properly</li>
              <li>Treating international contractors as employees (or vice versa)</li>
              <li>Ignoring local tax obligations</li>
              <li>Failing to keep proper documentation</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              These mistakes can lead to fines, legal disputes, and damaged relationships with workers.
            </p>
          </section>

          {/* How GlobID Helps */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              How GlobID Supports Compliance
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              GlobID helps companies meet compliance requirements by providing standardized worker verification. When a worker shares their GlobID, employers receive:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Verified identity documentation</li>
              <li>Work authorization status</li>
              <li>Tax identification information</li>
              <li>Country of residence and nationality</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              This standardized format reduces the risk of missing critical information and creates a clear audit trail for compliance purposes.
            </p>
          </section>

          {/* CTA */}
          <section className="mb-16 p-8 bg-muted/50 rounded-2xl text-center">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Simplify Your Global Hiring
            </h2>
            <p className="text-muted-foreground mb-6">
              See how GlobID can help your company hire internationally with confidence.
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
                to="/hire-international-talent" 
                className="text-primary hover:underline flex items-center gap-2"
              >
                Hiring International Talent <ArrowRight className="h-4 w-4" />
              </Link>
              <Link 
                to="/remote-hiring-risks" 
                className="text-primary hover:underline flex items-center gap-2"
              >
                Remote Hiring Risks <ArrowRight className="h-4 w-4" />
              </Link>
              <Link 
                to="/employer-of-record-alternative" 
                className="text-primary hover:underline flex items-center gap-2"
              >
                Employer of Record Alternatives <ArrowRight className="h-4 w-4" />
              </Link>
              <Link 
                to="/worker-verification" 
                className="text-primary hover:underline flex items-center gap-2"
              >
                Worker Verification <ArrowRight className="h-4 w-4" />
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

export default GlobalHiringCompliance;
