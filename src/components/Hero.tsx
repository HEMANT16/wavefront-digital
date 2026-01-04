import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import WaveBackground from "./WaveBackground";

const Hero = () => {
  const handleScroll = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <WaveBackground />
      
      {/* Floating decorative elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 rounded-full bg-primary/5 animate-float blur-xl" />
      <div className="absolute bottom-1/3 right-10 w-32 h-32 rounded-full bg-accent/5 animate-float animation-delay-300 blur-xl" />
      <div className="absolute top-1/2 right-1/4 w-16 h-16 rounded-full bg-primary/10 animate-wave blur-lg" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-scale-in hover:scale-105 transition-transform cursor-default">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-sm font-medium text-primary">Digital Product Engineering</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up animation-delay-100">
            <span className="wave-gradient-text animate-gradient-shift inline-block">HB WAVE</span>
            <span className="text-foreground"> Tech</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-light mb-6 animate-fade-in-up animation-delay-200">
            Engineering digital platforms for the future
          </p>

          {/* Description */}
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-up animation-delay-300">
            We build scalable, secure, and reliable technology solutions that power modern businesses. 
            From concept to deployment, we engineer products meant to last.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-400">
            <Button
              size="lg"
              onClick={() => handleScroll("#services")}
              className="wave-gradient text-primary-foreground hover:opacity-90 transition-all text-base px-8 py-6 hover:scale-105 hover:shadow-lg hover:shadow-primary/25 animate-pulse-glow"
            >
              Our Services
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => handleScroll("#contact")}
              className="border-primary/30 hover:bg-primary/5 text-foreground text-base px-8 py-6 hover:scale-105 transition-all hover:border-primary/50"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-500">
        <button
          onClick={() => handleScroll("#services")}
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
          aria-label="Scroll to services"
        >
          <span className="text-sm font-medium group-hover:scale-110 transition-transform">Scroll</span>
          <ChevronDown className="h-6 w-6 animate-bounce-slow" />
        </button>
      </div>
    </section>
  );
};

export default Hero;