import { Helmet } from "react-helmet-async";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HireInAfrica = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Hire in Africa — Emerging Talent Markets | GlobID</title>
        <meta name="description" content="Access emerging talent across the African continent. Hire in Nigeria, Kenya, South Africa, Ghana, Rwanda and more with verified worker profiles." />
        <link rel="canonical" href="https://globid.co/hire-in-africa" />
        <meta property="og:title" content="Hire in Africa — Emerging Talent Markets" />
        <meta property="og:description" content="Access emerging talent across the African continent with verified worker profiles." />
        <meta property="og:url" content="https://globid.co/hire-in-africa" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hire in Africa — Emerging Talent Markets" />
        <meta name="twitter:description" content="Access emerging talent across the African continent." />
      </Helmet>

      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="/" className="text-xl font-semibold text-foreground">GlobID</a>
          <a href="/demo"><Button size="sm">Book a Demo</Button></a>
        </div>
      </nav>
      <main className="pt-24 pb-20">
        <article className="max-w-3xl mx-auto px-6">
          <header className="mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">Hire in Africa</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">Access emerging talent across the African continent.</p>
          </header>
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Africa's Growing Talent Pool</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">Africa has the world's youngest population and fastest-growing workforce. Countries like Nigeria, Kenya, South Africa, Ghana, and Rwanda are producing skilled professionals in technology, finance, and creative fields.</p>
            <p className="text-muted-foreground leading-relaxed">With improving internet infrastructure and a culture of entrepreneurship, African talent is increasingly competitive on the global stage.</p>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Key Markets</h2>
            <div className="space-y-4">
              <div><h3 className="text-lg font-medium text-foreground mb-2">Nigeria</h3><p className="text-muted-foreground">Africa's largest economy with a massive tech talent pool. Strong in software development, fintech, and digital marketing.</p></div>
              <div><h3 className="text-lg font-medium text-foreground mb-2">Kenya</h3><p className="text-muted-foreground">East Africa's tech hub with strong mobile innovation. Excellent English proficiency and growing remote work culture.</p></div>
              <div><h3 className="text-lg font-medium text-foreground mb-2">South Africa</h3><p className="text-muted-foreground">Advanced infrastructure and sophisticated talent. Strong in finance, professional services, and enterprise technology.</p></div>
              <div><h3 className="text-lg font-medium text-foreground mb-2">Ghana & Rwanda</h3><p className="text-muted-foreground">Emerging destinations with government support for tech and favorable business environments.</p></div>
            </div>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">How GlobID Helps</h2>
            <p className="text-muted-foreground leading-relaxed">GlobID provides verified worker profiles for African professionals, handling country-specific documentation requirements so employers can hire with confidence.</p>
          </section>
          <section className="mb-16 p-8 bg-muted/50 rounded-2xl text-center">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Start Hiring in Africa</h2>
            <p className="text-muted-foreground mb-6">See how GlobID simplifies African talent acquisition.</p>
            <a href="/demo"><Button size="lg">Book a Demo <ArrowRight className="ml-2 h-4 w-4" /></Button></a>
          </section>
          <section className="mb-12">
            <h2 className="text-xl font-semibold text-foreground mb-4">Related Topics</h2>
            <div className="grid gap-3">
              <a href="/hire-in-nigeria" className="text-primary hover:underline flex items-center gap-2">Hire in Nigeria <ArrowRight className="h-4 w-4" /></a>
              <a href="/hire-in-mena" className="text-primary hover:underline flex items-center gap-2">Hire in MENA <ArrowRight className="h-4 w-4" /></a>
              <a href="/worker-verification" className="text-primary hover:underline flex items-center gap-2">Worker Verification <ArrowRight className="h-4 w-4" /></a>
            </div>
          </section>
          <div className="pt-8 border-t border-border"><a href="/" className="text-muted-foreground hover:text-foreground flex items-center gap-2"><ArrowLeft className="h-4 w-4" /> Back to Home</a></div>
        </article>
      </main>
    </div>
  );
};
export default HireInAfrica;