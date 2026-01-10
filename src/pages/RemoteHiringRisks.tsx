import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const RemoteHiringRisks = () => {
  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="text-xl font-semibold text-foreground">GlobID</Link>
          <Link to="/demo"><Button size="sm">Book a Demo</Button></Link>
        </div>
      </nav>
      <main className="pt-24 pb-20">
        <article className="max-w-3xl mx-auto px-6">
          <header className="mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">Remote Hiring Risks</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">Understanding and mitigating the risks of hiring internationally.</p>
          </header>
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Common Risks</h2>
            <div className="space-y-4">
              <div><h3 className="text-lg font-medium text-foreground mb-2">Identity Fraud</h3><p className="text-muted-foreground">Without proper verification, companies risk hiring someone who isn't who they claim to be.</p></div>
              <div><h3 className="text-lg font-medium text-foreground mb-2">Compliance Violations</h3><p className="text-muted-foreground">Hiring without understanding local regulations can lead to tax penalties and legal issues.</p></div>
              <div><h3 className="text-lg font-medium text-foreground mb-2">Misclassification</h3><p className="text-muted-foreground">Incorrectly classifying workers as contractors when they should be employees creates liability.</p></div>
              <div><h3 className="text-lg font-medium text-foreground mb-2">Payment Issues</h3><p className="text-muted-foreground">Unverified banking information can lead to failed payments or fraud.</p></div>
            </div>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Mitigation Strategies</h2>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Verify identity before making offers</li>
              <li>Understand local employment requirements</li>
              <li>Use standardized verification processes</li>
              <li>Document everything for compliance</li>
              <li>Work with platforms that specialize in international verification</li>
            </ul>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">How GlobID Reduces Risk</h2>
            <p className="text-muted-foreground leading-relaxed">GlobID provides verified worker profiles that give employers confidence in who they're hiring. By standardizing verification across countries, we reduce the risk of fraud and compliance issues.</p>
          </section>
          <section className="mb-16 p-8 bg-muted/50 rounded-2xl text-center">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Hire with Confidence</h2>
            <p className="text-muted-foreground mb-6">Learn how GlobID helps companies hire internationally without risk.</p>
            <Link to="/demo"><Button size="lg">Book a Demo <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
          </section>
          <section className="mb-12">
            <h2 className="text-xl font-semibold text-foreground mb-4">Related Topics</h2>
            <div className="grid gap-3">
              <Link to="/global-hiring-compliance" className="text-primary hover:underline flex items-center gap-2">Global Hiring Compliance <ArrowRight className="h-4 w-4" /></Link>
              <Link to="/worker-verification" className="text-primary hover:underline flex items-center gap-2">Worker Verification <ArrowRight className="h-4 w-4" /></Link>
              <Link to="/hire-international-talent" className="text-primary hover:underline flex items-center gap-2">Hire International Talent <ArrowRight className="h-4 w-4" /></Link>
            </div>
          </section>
          <div className="pt-8 border-t border-border"><Link to="/" className="text-muted-foreground hover:text-foreground flex items-center gap-2"><ArrowLeft className="h-4 w-4" /> Back to Home</Link></div>
        </article>
      </main>
    </div>
  );
};
export default RemoteHiringRisks;