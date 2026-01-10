import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatIsGlobID = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>What is GlobID? — Global Worker Identity Platform</title>
        <meta name="description" content="GlobID is a global worker identity platform that creates a single, verified profile professionals can share with any employer worldwide. Learn how it works." />
        <link rel="canonical" href="https://globid.co/what-is-globid" />
        <meta property="og:title" content="What is GlobID? — Global Worker Identity Platform" />
        <meta property="og:description" content="GlobID is a global worker identity platform that creates a single, verified profile professionals can share with any employer worldwide." />
        <meta property="og:url" content="https://globid.co/what-is-globid" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="What is GlobID? — Global Worker Identity Platform" />
        <meta name="twitter:description" content="GlobID is a global worker identity platform that creates a single, verified profile professionals can share with any employer worldwide." />
      </Helmet>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="/" className="text-xl font-semibold text-foreground">
            GlobID
          </a>
          <a href="/auth">
            <Button size="sm">Get Started</Button>
          </a>
        </div>
      </nav>

      {/* Content */}
      <main className="pt-24 pb-20">
        <article className="max-w-3xl mx-auto px-6">
          {/* Hero */}
          <header className="mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              What is GlobID?
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              GlobID is a global worker identity platform. It creates a single, verified profile that professionals can share with any employer, anywhere in the world.
            </p>
          </header>

          {/* The Problem */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              The Problem We Solve
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Every time a company hires someone internationally, they face the same challenge: how do you verify that this person is who they say they are? Traditional methods are slow, fragmented, and often unreliable.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Companies request documents. Workers scramble to gather them. HR teams manually review files they may not fully understand. The process takes weeks. Sometimes months. And even then, there's no guarantee everything is accurate.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              This friction isn't just inconvenient—it's a barrier to global opportunity. Talented professionals in MENA, Africa, and other emerging markets are locked out of the global economy because verification is too hard.
            </p>
          </section>

          {/* What GlobID Does */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              How GlobID Works
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              GlobID lets workers create a verified professional identity once. This identity includes their legal documents, work authorization, tax information, and payment details—all stored securely and ready to share.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              When an employer requests verification, the worker simply shares their GlobID. The employer receives a clear, standardized profile. No back-and-forth. No confusion about document authenticity.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              For workers, this means faster onboarding and more opportunities. For employers, it means reduced risk and faster time-to-hire.
            </p>
          </section>

          {/* Who It's For */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Who Uses GlobID
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">Remote Professionals</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Developers, designers, marketers, and specialists working across borders. GlobID gives them a portable identity that travels with their career.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">Global Companies</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Startups and enterprises hiring internationally. GlobID reduces the overhead of verifying each new hire in unfamiliar markets.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">HR and Compliance Teams</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Teams responsible for onboarding and compliance. GlobID provides structured data instead of scattered documents.
                </p>
              </div>
            </div>
          </section>

          {/* Why It Matters */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Why This Matters
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The world is moving toward borderless work. Companies are hiring from everywhere. But the infrastructure for verifying international workers hasn't kept pace.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              GlobID is that infrastructure. We believe that where you live shouldn't determine your access to opportunity. A qualified professional in Cairo should have the same access to global jobs as someone in California.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              By standardizing worker identity, we remove one of the biggest barriers to global employment.
            </p>
          </section>

          {/* Our Approach */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Our Approach
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We don't try to replace employers or become a middleman in the employment relationship. GlobID is infrastructure—a layer that makes international hiring simpler without adding complexity.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Workers own their data. Employers get clarity. The process becomes faster for everyone.
            </p>
          </section>

          {/* CTA */}
          <section className="mb-16 p-8 bg-muted/50 rounded-2xl text-center">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Ready to Create Your GlobID?
            </h2>
            <p className="text-muted-foreground mb-6">
              Join thousands of professionals building their global career with a verified identity.
            </p>
            <a href="/auth">
              <Button size="lg">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </section>

          {/* Related Links */}
          <section className="mb-12">
            <h2 className="text-xl font-semibold text-foreground mb-4">
              Learn More
            </h2>
            <div className="grid gap-3">
              <a 
                href="/global-worker-identity" 
                className="text-primary hover:underline flex items-center gap-2"
              >
                Global Worker Identity Explained <ArrowRight className="h-4 w-4" />
              </a>
              <a 
                href="/hire-international-talent" 
                className="text-primary hover:underline flex items-center gap-2"
              >
                For Employers: Hiring International Talent <ArrowRight className="h-4 w-4" />
              </a>
              <a 
                href="/worker-verification" 
                className="text-primary hover:underline flex items-center gap-2"
              >
                How Worker Verification Works <ArrowRight className="h-4 w-4" />
              </a>
              <a 
                href="/manifesto" 
                className="text-primary hover:underline flex items-center gap-2"
              >
                Our Manifesto <ArrowRight className="h-4 w-4" />
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

export default WhatIsGlobID;