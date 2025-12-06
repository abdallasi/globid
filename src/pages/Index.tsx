import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check, Globe, Shield, FileText, Users, ArrowRight } from "lucide-react";
const SUPPORTED_COUNTRIES = [{
  name: "UAE",
  flag: "🇦🇪"
}, {
  name: "Saudi Arabia",
  flag: "🇸🇦"
}, {
  name: "Egypt",
  flag: "🇪🇬"
}, {
  name: "Morocco",
  flag: "🇲🇦"
}, {
  name: "Jordan",
  flag: "🇯🇴"
}, {
  name: "Tunisia",
  flag: "🇹🇳"
}, {
  name: "Nigeria",
  flag: "🇳🇬"
}, {
  name: "India",
  flag: "🇮🇳"
}, {
  name: "Kenya",
  flag: "🇰🇪"
}, {
  name: "Rwanda",
  flag: "🇷🇼"
}, {
  name: "Uganda",
  flag: "🇺🇬"
}, {
  name: "South Africa",
  flag: "🇿🇦"
}, {
  name: "Tanzania",
  flag: "🇹🇿"
}, {
  name: "Senegal",
  flag: "🇸🇳"
}, {
  name: "Ghana",
  flag: "🇬🇭"
}];
const FEATURES = [{
  icon: Shield,
  title: "Verified Identity",
  description: "KYC-compliant identity verification accepted globally"
}, {
  icon: FileText,
  title: "Complete Documentation",
  description: "All employment documents in one standardized pack"
}, {
  icon: Globe,
  title: "Global Recognition",
  description: "Compatible with Deel, Remote.com, and all major EORs"
}, {
  icon: Users,
  title: "Instant Sharing",
  description: "Share your passport with employers in one click"
}];
const Index = () => {
  return <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
        <div className="apple-container">
          <div className="flex items-center justify-between h-14">
            <Link to="/" className="font-semibold text-lg tracking-tight">
              GlobID
            </Link>
            <div className="flex items-center gap-4">
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
      <section className="pt-32 pb-20 md:pt-44 md:pb-32">
        <div className="apple-container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="apple-headline fade-in opacity-0 text-5xl py-0 my-[10px]">Your Global​ <br />Work Passport​  
            </h1>
            <p className="apple-subheadline mt-6 max-w-2xl mx-auto fade-in opacity-0 stagger-1 my-[22px]">
              A verified, structured, globally recognized employment identity for MENA based professionals. Ready for global work    
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 fade-in opacity-0 stagger-2">
              <Link to="/auth?mode=signup">
                <Button variant="apple-blue" size="lg" className="min-w-[240px]">
                  Create Your Passport — $50
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/demo">
                <Button variant="apple-outline" size="lg">
                  For Companies → Book Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Countries Section */}
      <section className="apple-section bg-apple-gray">
        <div className="apple-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
              Built for MENA & African talent.
            </h2>
            <p className="text-muted-foreground mt-4 text-lg">
              Comprehensive compliance coverage for the region's top markets.
            </p>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-5 lg:grid-cols-5 gap-3 max-w-4xl mx-auto">
            {SUPPORTED_COUNTRIES.map(country => <div key={country.name} className="apple-card p-4 text-center hover:shadow-md transition-shadow duration-200">
                <div className="text-3xl mb-1">{country.flag}</div>
                <div className="text-xs font-medium truncate">{country.name}</div>
              </div>)}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="apple-section">
        <div className="apple-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
              Standardized for global employers.
            </h2>
            <p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto">
              Your passport exports directly to Deel, Remote.com, Oyster, and any Employer of Record platform.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 mt-12">
              <div className="px-5 py-2.5 bg-primary text-primary-foreground rounded-full font-semibold text-sm md:text-base whitespace-nowrap">Deel</div>
              <div className="px-5 py-2.5 bg-primary text-primary-foreground rounded-full font-semibold text-sm md:text-base whitespace-nowrap">Remote</div>
              <div className="px-5 py-2.5 bg-primary text-primary-foreground rounded-full font-semibold text-sm md:text-base whitespace-nowrap">Oyster</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="apple-section bg-apple-gray">
        <div className="apple-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
              Why it matters.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {FEATURES.map(feature => <div key={feature.title} className="apple-card p-8">
                <feature.icon className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>)}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="apple-section">
        <div className="apple-container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
              Ready for the world.
            </h2>
            <p className="text-muted-foreground mt-4 text-lg">
              Create your employment passport in minutes. Get hired globally.
            </p>
            <Link to="/auth?mode=signup" className="inline-block mt-8">
              <Button variant="apple-blue" size="lg">
                Get Started — $50
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="apple-container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <div>© 2024 GlobID. All rights reserved.</div>
            <div className="flex items-center gap-6">
              <Link to="/demo" className="hover:text-foreground transition-colors">For Companies</Link>
              <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
              <a href="#" className="hover:text-foreground transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>;
};
export default Index;