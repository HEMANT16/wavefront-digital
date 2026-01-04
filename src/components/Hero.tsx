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
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-in-up">
            <span className="text-sm font-medium text-primary">Digital Product Engineering</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up animation-delay-100">
            <span className="wave-gradient-text">HB WAVE</span>
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
              className="wave-gradient text-primary-foreground hover:opacity-90 transition-opacity text-base px-8 py-6"
            >
              Our Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => handleScroll("#contact")}
              className="border-primary/30 hover:bg-primary/5 text-foreground text-base px-8 py-6"
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
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          aria-label="Scroll to services"
        >
          <span className="text-sm font-medium">Scroll</span>
          <ChevronDown className="h-6 w-6 animate-scroll-indicator" />
        </button>
      </div>
    </section>
  );
};

export default Hero;