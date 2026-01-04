import { useInView } from "@/hooks/useInView";
import { Heart, Eye, Lightbulb, Clock, BookOpen } from "lucide-react";

const values = [
  { icon: Heart, text: "Integrity in engineering" },
  { icon: Eye, text: "Respect for user privacy" },
  { icon: Lightbulb, text: "Responsible innovation" },
  { icon: Clock, text: "Long-term thinking" },
  { icon: BookOpen, text: "Continuous learning" },
];

const About = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16" ref={ref}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            About Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Who We Are
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Description */}
          <div
            className={`space-y-6 ${isInView ? "animate-fade-in-up" : "opacity-0"}`}
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              HB WAVE Tech is a technology company specializing in digital product engineering. 
              We partner with businesses to build scalable, secure, and reliable software solutions 
              that power modern digital experiences.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our team brings together expertise in mobile development, web applications, 
              cloud infrastructure, and real-time systems. We focus on building products 
              that not only meet today's needs but are architected for tomorrow's growth.
            </p>
            
            {/* Vision Card */}
            <div className="p-6 rounded-xl wave-gradient text-primary-foreground mt-8">
              <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
              <p className="text-primary-foreground/90 leading-relaxed">
                To be a trusted partner in building digital platforms that respect user privacy, 
                scale effortlessly, and stand the test of time.
              </p>
            </div>
          </div>

          {/* Right: Values */}
          <div
            className={`${isInView ? "animate-fade-in-up animation-delay-200" : "opacity-0"}`}
          >
            <h3 className="text-2xl font-semibold text-foreground mb-8">
              Our Values
            </h3>
            <div className="space-y-4">
              {values.map((value, index) => (
                <div
                  key={value.text}
                  className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-md transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <value.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">{value.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;