import { useInView } from "@/hooks/useInView";
import { Button } from "@/components/ui/button";
import { Waves, Mail, Users, MapPin } from "lucide-react";

const Contact = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16" ref={ref}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Get in Touch
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Contact Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to start your next project? We'd love to hear from you.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div
            className={`grid grid-cols-1 md:grid-cols-2 gap-8 ${
              isInView ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            {/* Contact Info */}
            <div className="space-y-6">
              {/* Brand */}
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl wave-gradient text-primary-foreground flex items-center justify-center">
                  <Waves className="h-6 w-6" />
                </div>
                <div>
                  <span className="text-xl font-bold">
                    <span className="wave-gradient-text">HB WAVE</span>
                    <span className="text-foreground"> Tech</span>
                  </span>
                  <p className="text-sm text-muted-foreground">Digital Product Engineering</p>
                </div>
              </div>

              {/* Contact Details */}
              <div className="space-y-4">
                <a
                  href="mailto:contact@hbwavetech.com"
                  className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-md transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">General Inquiries</p>
                    <p className="text-foreground font-medium">contact@hbwavetech.com</p>
                  </div>
                </a>

                <a
                  href="mailto:careers@hbwavetech.com"
                  className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-md transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Careers</p>
                    <p className="text-foreground font-medium">careers@hbwavetech.com</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border/50">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="text-foreground font-medium">India 🇮🇳</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Card */}
            <div
              className={`p-8 rounded-2xl wave-gradient text-primary-foreground ${
                isInView ? "animate-fade-in-up animation-delay-200" : "opacity-0"
              }`}
            >
              <h3 className="text-2xl font-bold mb-4">
                Let's Build Something Great
              </h3>
              <p className="text-primary-foreground/90 mb-8 leading-relaxed">
                Whether you have a project in mind or just want to explore possibilities, 
                we're here to help. Reach out and let's discuss how we can work together.
              </p>
              <div className="space-y-4">
                <Button
                  size="lg"
                  className="w-full bg-white text-primary hover:bg-white/90 transition-colors font-semibold"
                  asChild
                >
                  <a href="mailto:contact@hbwavetech.com">
                    <Mail className="mr-2 h-5 w-5" />
                    Send us an Email
                  </a>
                </Button>
                <p className="text-sm text-primary-foreground/70 text-center">
                  We typically respond within 24-48 hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;