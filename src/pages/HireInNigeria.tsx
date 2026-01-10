import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HireInNigeria = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">Hire in Nigeria</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">Access Africa's largest talent market with confidence.</p>
          </header>
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Nigeria's Tech Talent</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">Nigeria is Africa's most populous country and its largest economy. Lagos, Abuja, and other cities have developed vibrant tech ecosystems producing world-class developers, designers, and digital professionals.</p>
            <p className="text-muted-foreground leading-relaxed">Nigerian professionals are known for entrepreneurial mindsets, strong English proficiency, and adaptability to international work cultures.</p>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Key Strengths</h2>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Large pool of software developers and engineers</li>
              <li>Strong fintech and payment expertise</li>
              <li>Growing design and creative community</li>
              <li>Competitive rates with high quality output</li>
              <li>English as primary business language</li>
            </ul>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Verification Requirements</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">Nigerian workers typically provide NIN (National Identification Number), BVN (Bank Verification Number), and passport documentation. GlobID understands these requirements and provides verified profiles employers can trust.</p>
          </section>
          <section className="mb-16 p-8 bg-muted/50 rounded-2xl text-center">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Start Hiring in Nigeria</h2>
            <p className="text-muted-foreground mb-6">Get verified Nigerian talent profiles through GlobID.</p>
            <Link to="/demo"><Button size="lg">Book a Demo <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
          </section>
          <section className="mb-12">
            <h2 className="text-xl font-semibold text-foreground mb-4">Related Topics</h2>
            <div className="grid gap-3">
              <Link to="/hire-in-africa" className="text-primary hover:underline flex items-center gap-2">Hire in Africa <ArrowRight className="h-4 w-4" /></Link>
              <Link to="/worker-verification" className="text-primary hover:underline flex items-center gap-2">Worker Verification <ArrowRight className="h-4 w-4" /></Link>
              <Link to="/remote-hiring-risks" className="text-primary hover:underline flex items-center gap-2">Remote Hiring Risks <ArrowRight className="h-4 w-4" /></Link>
            </div>
          </section>
          <div className="pt-8 border-t border-border"><Link to="/" className="text-muted-foreground hover:text-foreground flex items-center gap-2"><ArrowLeft className="h-4 w-4" /> Back to Home</Link></div>
        </article>
      </main>
    </div>
  );
};
export default HireInNigeria;