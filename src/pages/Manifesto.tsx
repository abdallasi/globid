import { Helmet } from "react-helmet-async";
import { ArrowLeft } from "lucide-react";

const Manifesto = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>The GlobID Manifesto — Work Should Be Borderless</title>
        <meta name="description" content="Work should be borderless. Employment should be effortless. Read the GlobID manifesto on building infrastructure for the borderless world of work." />
        <link rel="canonical" href="https://globid.co/manifesto" />
        <meta property="og:title" content="The GlobID Manifesto — Work Should Be Borderless" />
        <meta property="og:description" content="Work should be borderless. Employment should be effortless. Read the GlobID manifesto." />
        <meta property="og:url" content="https://globid.co/manifesto" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="The GlobID Manifesto — Work Should Be Borderless" />
        <meta name="twitter:description" content="Work should be borderless. Employment should be effortless." />
      </Helmet>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/30">
        <div className="max-w-4xl mx-auto px-6 h-14 flex items-center">
          <a href="/" className="font-semibold text-lg tracking-tight">
            GlobID
          </a>
        </div>
      </nav>

      {/* Content */}
      <main className="pt-32 pb-24 px-6 animate-fade-in">
        <div className="max-w-3xl mx-auto">
          
          {/* Hero Title */}
          <header className="mb-24">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">
              Our Belief
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1]">
              THE GLOBID<br />MANIFESTO
            </h1>
          </header>

          {/* Opening Statement */}
          <section className="mb-20">
            <p className="text-2xl sm:text-3xl font-light leading-relaxed text-foreground/90">
              Work should be borderless.<br />
              Employment should be effortless.
            </p>
          </section>

          <hr className="border-border/40 mb-20" />

          {/* The Problem */}
          <section className="mb-20 space-y-6">
            <p className="text-lg sm:text-xl leading-relaxed text-muted-foreground">
              The world has outgrown its borders.
            </p>
            <p className="text-lg sm:text-xl leading-relaxed text-muted-foreground">
              Talent has outgrown geography.
            </p>
            <p className="text-lg sm:text-xl leading-relaxed text-muted-foreground">
              But employment systems never evolved.
            </p>
            <p className="text-lg sm:text-xl leading-relaxed text-foreground font-medium">
              They stayed heavy, slow, bureaucratic, and built for companies—not people.
            </p>
          </section>

          <hr className="border-border/40 mb-20" />

          {/* Our Purpose */}
          <section className="mb-20">
            <p className="text-2xl sm:text-3xl font-semibold leading-relaxed">
              GlobID exists to fix that imbalance.
            </p>
          </section>

          <hr className="border-border/40 mb-20" />

          {/* Our Belief */}
          <section className="mb-20 space-y-6">
            <p className="text-lg sm:text-xl leading-relaxed text-muted-foreground">
              We believe every individual—whether in MENA, Africa, Europe, or the global South—deserves the right to work globally without begging for structure, without waiting for approvals, without battling broken systems.
            </p>
          </section>

          <hr className="border-border/40 mb-20" />

          {/* Principles */}
          <section className="mb-20 space-y-6">
            <p className="text-lg sm:text-xl leading-relaxed text-foreground">
              Work shouldn't require visas to begin.
            </p>
            <p className="text-lg sm:text-xl leading-relaxed text-foreground">
              Opportunity shouldn't depend on where you were born.
            </p>
            <p className="text-2xl sm:text-3xl font-semibold leading-relaxed">
              Freedom should be default.
            </p>
          </section>

          <hr className="border-border/40 mb-20" />

          {/* Vision */}
          <section className="mb-20">
            <p className="text-lg sm:text-xl leading-relaxed text-muted-foreground mb-10">
              We are building a future where:
            </p>
            <div className="space-y-5 pl-6 border-l-2 border-primary/30">
              <p className="text-lg sm:text-xl leading-relaxed text-foreground">
                Employment IDs are universal.
              </p>
              <p className="text-lg sm:text-xl leading-relaxed text-foreground">
                Onboarding is instant.
              </p>
              <p className="text-lg sm:text-xl leading-relaxed text-foreground">
                Compliance feels invisible.
              </p>
              <p className="text-lg sm:text-xl leading-relaxed text-foreground">
                Companies hire in minutes.
              </p>
              <p className="text-lg sm:text-xl leading-relaxed text-foreground font-medium">
                People get verified once and work everywhere.
              </p>
            </div>
          </section>

          <hr className="border-border/40 mb-20" />

          {/* What We Are */}
          <section className="mb-20 space-y-6">
            <p className="text-lg sm:text-xl leading-relaxed text-muted-foreground">
              This is not "HR."
            </p>
            <p className="text-2xl sm:text-3xl font-semibold leading-relaxed">
              This is infrastructure for the borderless world.
            </p>
          </section>

          <hr className="border-border/40 mb-20" />

          {/* The Product */}
          <section className="mb-20 space-y-6">
            <p className="text-2xl sm:text-3xl font-semibold leading-relaxed">
              GlobID is the passport to global employment.
            </p>
            <p className="text-lg sm:text-xl leading-relaxed text-muted-foreground">
              Not a document—an identity layer.
            </p>
            <p className="text-lg sm:text-xl leading-relaxed text-foreground font-medium">
              One profile, one verification, infinite opportunity.
            </p>
          </section>

          <hr className="border-border/40 mb-20" />

          {/* How We Build */}
          <section className="mb-20 space-y-6">
            <p className="text-lg sm:text-xl leading-relaxed text-foreground">
              We build with precision.
            </p>
            <p className="text-lg sm:text-xl leading-relaxed text-foreground">
              We simplify with obsession.
            </p>
            <p className="text-lg sm:text-xl leading-relaxed text-muted-foreground">
              We operate with the elegance of Apple and the discipline of a world-class compliance engine.
            </p>
          </section>

          <hr className="border-border/40 mb-20" />

          {/* Our Philosophy */}
          <section className="mb-20 space-y-6">
            <p className="text-lg sm:text-xl leading-relaxed text-foreground font-medium">
              Everything unnecessary dies here.
            </p>
            <p className="text-lg sm:text-xl leading-relaxed text-foreground font-medium">
              Everything essential becomes effortless.
            </p>
          </section>

          <hr className="border-border/40 mb-20" />

          {/* Closing */}
          <section className="mb-24 space-y-4">
            <p className="text-2xl sm:text-3xl font-semibold leading-relaxed">
              This is our stance.
            </p>
            <p className="text-2xl sm:text-3xl font-semibold leading-relaxed">
              This is our revolution.
            </p>
            <p className="text-3xl sm:text-4xl font-bold leading-relaxed text-primary">
              This is GlobID.
            </p>
          </section>

          <hr className="border-border/40 mb-16" />

          {/* Explore More */}
          <section className="mb-16">
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-8">
              Learn More
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <a 
                href="/global-worker-verification" 
                className="p-4 border border-border/50 rounded-xl hover:border-primary/30 hover:bg-primary/5 transition-all"
              >
                <p className="font-medium">Global Worker Verification</p>
                <p className="text-sm text-muted-foreground mt-1">Why verification matters for remote hiring</p>
              </a>
              <a 
                href="/remote-work-documents" 
                className="p-4 border border-border/50 rounded-xl hover:border-primary/30 hover:bg-primary/5 transition-all"
              >
                <p className="font-medium">Remote Work Documents</p>
                <p className="text-sm text-muted-foreground mt-1">What employers require for compliance</p>
              </a>
              <a 
                href="/hire-international-talent" 
                className="p-4 border border-border/50 rounded-xl hover:border-primary/30 hover:bg-primary/5 transition-all"
              >
                <p className="font-medium">Hire International Talent</p>
                <p className="text-sm text-muted-foreground mt-1">Safe global hiring for employers</p>
              </a>
              <a 
                href="/identity-for-remote-jobs" 
                className="p-4 border border-border/50 rounded-xl hover:border-primary/30 hover:bg-primary/5 transition-all"
              >
                <p className="font-medium">Identity for Remote Jobs</p>
                <p className="text-sm text-muted-foreground mt-1">Why identity matters more than resumes</p>
              </a>
              <a 
                href="/mena-remote-work" 
                className="p-4 border border-border/50 rounded-xl hover:border-primary/30 hover:bg-primary/5 transition-all sm:col-span-2"
              >
                <p className="font-medium">MENA Remote Work</p>
                <p className="text-sm text-muted-foreground mt-1">Opportunities in MENA, Africa & Canada</p>
              </a>
            </div>
          </section>

          {/* Back Link */}
          <footer>
            <a 
              href="/" 
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </a>
          </footer>

        </div>
      </main>
    </div>
  );
};

export default Manifesto;