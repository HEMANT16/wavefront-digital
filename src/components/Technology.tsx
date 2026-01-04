import { useInView } from "@/hooks/useInView";
import { 
  Smartphone, 
  Globe, 
  Server, 
  Zap, 
  Cloud, 
  CreditCard 
} from "lucide-react";

const capabilities = [
  {
    icon: Smartphone,
    title: "Mobile",
    description: "Android & iOS",
    details: "Native and cross-platform mobile applications",
  },
  {
    icon: Globe,
    title: "Web",
    description: "Modern JavaScript",
    details: "Responsive web applications and progressive web apps",
  },
  {
    icon: Server,
    title: "Backend",
    description: "APIs & Microservices",
    details: "Secure, scalable server-side architecture",
  },
  {
    icon: Zap,
    title: "Real-Time",
    description: "Live Systems",
    details: "WebSockets, messaging, and live data streaming",
  },
  {
    icon: Cloud,
    title: "Cloud",
    description: "Infrastructure",
    details: "Cloud-native deployments and DevOps",
  },
  {
    icon: CreditCard,
    title: "Integrations",
    description: "Payment & Identity",
    details: "Third-party services and secure payment processing",
  },
];

const Technology = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="technology" className="section-padding">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16" ref={ref}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Technology
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our Capabilities
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We leverage modern technologies to build robust, scalable solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {capabilities.map((cap, index) => (
            <div
              key={cap.title}
              className={`group relative p-6 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 overflow-hidden hover-lift ${
                isInView ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Animated background gradient on hover */}
              <div className="absolute inset-0 wave-gradient opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
              
              {/* Shimmer effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-shimmer" />
              
              <div className="relative">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl wave-gradient text-primary-foreground flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <cap.icon className="h-6 w-6 group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {cap.title}
                    </h3>
                    <p className="text-sm text-primary font-medium">
                      {cap.description}
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-foreground/80 transition-colors">
                  {cap.details}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Confidentiality Note */}
        <p
          className={`text-center text-sm text-muted-foreground max-w-xl mx-auto ${
            isInView ? "animate-fade-in animation-delay-500" : "opacity-0"
          }`}
        >
          Specific project details are shared only with partners and team members 
          under appropriate agreements.
        </p>
      </div>
    </section>
  );
};

export default Technology;