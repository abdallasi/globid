import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HireInMena = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">Hire in MENA</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">Access world-class talent in the Middle East and North Africa region.</p>
          </header>
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Why MENA Talent?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">The MENA region represents one of the world's largest untapped talent pools. Countries like Egypt, Morocco, Jordan, Tunisia, UAE, and Saudi Arabia produce thousands of highly educated professionals annually.</p>
            <p className="text-muted-foreground leading-relaxed">These professionals offer strong technical skills, multilingual capabilities (Arabic, English, French), and favorable time zone overlap with Europe and parts of the Americas.</p>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Key Markets</h2>
            <div className="space-y-4">
              <div><h3 className="text-lg font-medium text-foreground mb-2">Egypt</h3><p className="text-muted-foreground">Large, young population with strong tech and engineering education. Competitive rates and growing startup ecosystem.</p></div>
              <div><h3 className="text-lg font-medium text-foreground mb-2">Morocco</h3><p className="text-muted-foreground">Francophone talent with European cultural alignment. Strong in customer support, development, and design.</p></div>
              <div><h3 className="text-lg font-medium text-foreground mb-2">UAE & Saudi Arabia</h3><p className="text-muted-foreground">Premium talent markets with international experience and strong English proficiency.</p></div>
              <div><h3 className="text-lg font-medium text-foreground mb-2">Jordan & Tunisia</h3><p className="text-muted-foreground">Emerging tech hubs with government support for remote work and outsourcing industries.</p></div>
            </div>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Verification Challenges</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">Each MENA country has different identity documents, tax systems, and work authorization requirements. Companies unfamiliar with the region struggle to verify workers properly.</p>
            <p className="text-muted-foreground leading-relaxed">GlobID specializes in MENA verification, understanding local documents and providing standardized profiles that international employers can trust.</p>
          </section>
          <section className="mb-16 p-8 bg-muted/50 rounded-2xl text-center">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Start Hiring in MENA</h2>
            <p className="text-muted-foreground mb-6">See how GlobID makes MENA hiring simple and compliant.</p>
            <Link to="/demo"><Button size="lg">Book a Demo <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
          </section>
          <section className="mb-12">
            <h2 className="text-xl font-semibold text-foreground mb-4">Related Topics</h2>
            <div className="grid gap-3">
              <Link to="/hire-in-africa" className="text-primary hover:underline flex items-center gap-2">Hire in Africa <ArrowRight className="h-4 w-4" /></Link>
              <Link to="/mena-remote-work" className="text-primary hover:underline flex items-center gap-2">MENA Remote Work <ArrowRight className="h-4 w-4" /></Link>
              <Link to="/global-hiring-compliance" className="text-primary hover:underline flex items-center gap-2">Global Hiring Compliance <ArrowRight className="h-4 w-4" /></Link>
            </div>
          </section>
          <div className="pt-8 border-t border-border"><Link to="/" className="text-muted-foreground hover:text-foreground flex items-center gap-2"><ArrowLeft className="h-4 w-4" /> Back to Home</Link></div>
        </article>
      </main>
    </div>
  );
};
export default HireInMena;