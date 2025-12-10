import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";

const SUPPORTED_COUNTRIES = [
  { name: "UAE", flag: "🇦🇪" },
  { name: "Saudi Arabia", flag: "🇸🇦" },
  { name: "Egypt", flag: "🇪🇬" },
  { name: "Morocco", flag: "🇲🇦" },
  { name: "Jordan", flag: "🇯🇴" },
  { name: "Tunisia", flag: "🇹🇳" },
  { name: "Nigeria", flag: "🇳🇬" },
  { name: "India", flag: "🇮🇳" },
  { name: "Kenya", flag: "🇰🇪" },
  { name: "Rwanda", flag: "🇷🇼" },
  { name: "Uganda", flag: "🇺🇬" },
  { name: "South Africa", flag: "🇿🇦" },
  { name: "Tanzania", flag: "🇹🇿" },
  { name: "Senegal", flag: "🇸🇳" },
  { name: "Ghana", flag: "🇬🇭" },
  { name: "Canada", flag: "🇨🇦" }
];

const INDIVIDUAL_BENEFITS = [
  "One verification for global work.",
  "Store legal documents securely.",
  "Companies instantly see what they need.",
  "Get paid with precision—no mistakes.",
  "Ready for onboarding in minutes."
];

const COMPANY_BENEFITS = [
  "Compliant hiring in 60+ countries.",
  "Fast onboarding.",
  "Local legal coverage.",
  "Automated payments.",
  "Zero setup cost."
];

const TESTIMONIALS = [
  "GlobID made hiring in MENA feel like hiring locally.",
  "Our onboarding time dropped from weeks to minutes.",
  "Finally—compliance that doesn't feel like punishment."
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
        <div className="apple-container">
          <div className="flex items-center justify-between h-14">
            <Link to="/" className="font-semibold text-lg tracking-tight">
              GlobID
            </Link>
            <div className="flex items-center gap-4">
              <Link to="/manifesto" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Manifesto
              </Link>
              <Link to="/demo" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                For Companies
              </Link>
              <Link to="/auth">
                <Button variant="ghost" size="sm">Sign In</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32">
        <div className="apple-container">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h1 className="text-[2.75rem] md:text-7xl lg:text-8xl font-semibold tracking-tight leading-[1.05] fade-in opacity-0">
              Your Global Work Passport
            </h1>
            <div className="mt-8 md:mt-12 space-y-2 fade-in opacity-0 stagger-1">
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                Get a universal employment ID.
              </p>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                Onboard instantly.
              </p>
              <p className="text-xl md:text-2xl text-foreground font-medium leading-relaxed">
                Let companies hire and pay you—anywhere.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12 md:mt-16 fade-in opacity-0 stagger-2">
              <Link to="/auth?mode=signup">
                <Button variant="apple-blue" size="lg" className="min-w-[240px] rounded-full text-base py-6">
                  Create Your Passport — $50
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/demo">
                <Button variant="ghost" size="lg" className="text-muted-foreground hover:text-foreground rounded-full">
                  Book a Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why GlobID Exists */}
      <section className="py-24 md:py-40 border-t border-border/30">
        <div className="apple-container">
          <div className="max-w-3xl mx-auto text-center px-4">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight">
              You shouldn't need a local entity to get hired.
            </h2>
            <div className="mt-10 md:mt-14 space-y-4">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Companies struggle with compliance.
              </p>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Talent struggles with opportunity.
              </p>
              <p className="text-lg md:text-xl text-foreground font-medium leading-relaxed">
                GlobID removes the friction—for both.
              </p>
              <p className="text-lg md:text-xl text-primary font-semibold leading-relaxed pt-2">
                Verification once. Employment everywhere.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Global Coverage */}
      <section className="py-24 md:py-36 bg-apple-gray">
        <div className="apple-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
              Global Coverage
            </h2>
            <p className="text-muted-foreground mt-4 text-lg">
              MENA-first. Built for the world.
            </p>
          </div>
          <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-8 gap-3 max-w-4xl mx-auto">
            {SUPPORTED_COUNTRIES.map(country => (
              <div key={country.name} className="apple-card p-4 text-center hover:shadow-md transition-shadow duration-200">
                <div className="text-3xl mb-1">{country.flag}</div>
                <div className="text-xs font-medium truncate">{country.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Individuals */}
      <section className="py-24 md:py-40">
        <div className="apple-container">
          <div className="max-w-3xl mx-auto px-4">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight">
                Your employment identity.<br />
                <span className="text-muted-foreground">Portable and universal.</span>
              </h2>
            </div>
            <div className="space-y-5 max-w-xl mx-auto">
              {INDIVIDUAL_BENEFITS.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                    <Check className="h-3.5 w-3.5 text-primary" />
                  </div>
                  <p className="text-lg md:text-xl text-foreground leading-relaxed">{benefit}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-14">
              <Link to="/auth?mode=signup">
                <Button variant="apple-blue" size="lg" className="rounded-full text-base py-6 px-8">
                  Get Verified — $50
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* For Companies */}
      <section className="py-24 md:py-40 bg-apple-gray">
        <div className="apple-container">
          <div className="max-w-3xl mx-auto px-4">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight">
                Hire anyone in MENA<br />
                <span className="text-muted-foreground">(and beyond) without opening an entity.</span>
              </h2>
            </div>
            <div className="space-y-5 max-w-xl mx-auto">
              {COMPANY_BENEFITS.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                    <Check className="h-3.5 w-3.5 text-primary" />
                  </div>
                  <p className="text-lg md:text-xl text-foreground leading-relaxed">{benefit}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-14">
              <Link to="/demo">
                <Button variant="apple-blue" size="lg" className="rounded-full text-base py-6 px-8">
                  Book a Demo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 md:py-40">
        <div className="apple-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
              What people are saying.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto px-4">
            {TESTIMONIALS.map((testimonial, index) => (
              <div key={index} className="apple-card p-8 md:p-10">
                <p className="text-lg md:text-xl text-foreground leading-relaxed font-medium">
                  "{testimonial}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="apple-container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <div>© 2024 GlobID. All rights reserved.</div>
            <div className="flex items-center gap-6">
              <Link to="/manifesto" className="hover:text-foreground transition-colors">Manifesto</Link>
              <Link to="/demo" className="hover:text-foreground transition-colors">For Companies</Link>
              <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
              <a href="#" className="hover:text-foreground transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
