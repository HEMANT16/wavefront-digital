import { useInView } from "@/hooks/useInView";
import { 
  Smartphone, 
  MessageSquare, 
  CreditCard, 
  Cloud, 
  Palette, 
  Settings 
} from "lucide-react";

const services = [
  {
    icon: Smartphone,
    title: "Product Development",
    description: "Web & mobile applications built with modern technologies and best practices.",
  },
  {
    icon: MessageSquare,
    title: "Real-Time Communication",
    description: "Scalable messaging and communication platforms for seamless user experiences.",
  },
  {
    icon: CreditCard,
    title: "Payment & Integration",
    description: "Secure payment systems and third-party integrations that work flawlessly.",
  },
  {
    icon: Cloud,
    title: "Cloud Architecture",
    description: "Scalable backend infrastructure designed to grow with your business.",
  },
  {
    icon: Palette,
    title: "UI/UX Design Systems",
    description: "Clean, intuitive interfaces that users love and developers can maintain.",
  },
  {
    icon: Settings,
    title: "Platform Maintenance",
    description: "Ongoing optimization and support to keep your products running smoothly.",
  },
];

const Services = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="services" className="section-padding bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16" ref={ref}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            What We Do
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            End-to-end digital product engineering, from initial concept to deployment and beyond.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group p-6 lg:p-8 rounded-xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-300 ${
                isInView ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl wave-gradient text-primary-foreground mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;