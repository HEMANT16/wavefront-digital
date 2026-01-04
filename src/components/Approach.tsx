import { useInView } from "@/hooks/useInView";
import { Lock, TrendingUp, Shield, Code, Target } from "lucide-react";

const approaches = [
  {
    icon: Lock,
    title: "Privacy-first mindset",
    description: "User data protection is built into every decision we make.",
  },
  {
    icon: TrendingUp,
    title: "Scalable from day one",
    description: "Architecture designed to grow with your user base.",
  },
  {
    icon: Shield,
    title: "Security & compliance",
    description: "Industry-standard security practices and compliance adherence.",
  },
  {
    icon: Code,
    title: "Clean, maintainable code",
    description: "Code that future developers will thank you for.",
  },
  {
    icon: Target,
    title: "Long-term product thinking",
    description: "Building for sustainability, not just quick wins.",
  },
];

const Approach = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="approach" className="section-padding">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16" ref={ref}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Our Philosophy
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our Approach
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every project we undertake follows these core principles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {approaches.map((approach, index) => (
            <div
              key={approach.title}
              className={`group flex items-start gap-4 p-6 rounded-xl bg-card/50 border border-border/30 hover:border-primary/20 transition-all duration-300 hover:bg-card/80 hover-lift ${
                isInView ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors group-hover:scale-110 duration-300">
                <approach.icon className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                  {approach.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {approach.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Closing Statement */}
        <div
          className={`max-w-3xl mx-auto text-center ${
            isInView ? "animate-fade-in-up animation-delay-500" : "opacity-0"
          }`}
        >
          <div className="relative inline-block">
            <div className="absolute inset-0 wave-gradient opacity-10 blur-xl rounded-full" />
            <blockquote className="relative text-2xl md:text-3xl font-bold text-foreground">
              "We don't build experiments.{" "}
              <span className="wave-gradient-text">We build products meant to last.</span>"
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;