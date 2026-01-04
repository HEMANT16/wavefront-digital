import { useInView } from "@/hooks/useInView";
import { Button } from "@/components/ui/button";
import { Check, Mail, Briefcase } from "lucide-react";

const enjoyList = [
  "Solving complex technical problems",
  "Building products that scale",
  "Working with modern technologies",
  "Continuous learning and growth",
  "Collaborating with talented people",
];

const jobs = [
  {
    title: "Mobile App Developer",
    subtitle: "Android / iOS",
    requirements: [
      "Experience with modern mobile frameworks",
      "Understanding of scalable architecture",
    ],
  },
  {
    title: "Frontend Developer",
    subtitle: "Web Applications",
    requirements: [
      "Strong UI implementation skills",
      "Experience with modern JS frameworks",
    ],
  },
  {
    title: "Backend Developer",
    subtitle: "APIs & Services",
    requirements: [
      "API design & database management",
      "Security & performance focus",
    ],
  },
  {
    title: "UI/UX Designer",
    subtitle: "Product Design",
    requirements: [
      "Clean, modern design sense",
      "Product-first thinking",
    ],
  },
];

const Careers = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="careers" className="section-padding bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16" ref={ref}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Join Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Careers
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're always looking for talented individuals who share our passion for 
            building exceptional products.
          </p>
        </div>

        {/* "If you enjoy" section */}
        <div
          className={`max-w-3xl mx-auto mb-16 ${
            isInView ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
            If you enjoy:
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {enjoyList.map((item, index) => (
              <div
                key={item}
                className={`flex items-center gap-3 p-3 rounded-lg bg-card/50 border border-border/30 hover:border-primary/20 hover:bg-card/80 transition-all duration-300 group ${
                  isInView ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                  <Check className="h-3.5 w-3.5 text-primary" />
                </div>
                <span className="text-foreground text-sm group-hover:text-primary transition-colors">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Job Listings */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {jobs.map((job, index) => (
            <div
              key={job.title}
              className={`group p-6 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 hover-lift ${
                isInView ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${(index + 3) * 100}ms` }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl wave-gradient text-primary-foreground flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <Briefcase className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {job.title}
                  </h3>
                  <p className="text-sm text-primary">{job.subtitle}</p>
                </div>
              </div>
              <ul className="space-y-2">
                {job.requirements.map((req) => (
                  <li key={req} className="flex items-start gap-2 text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors">
                    <span className="text-primary mt-1">•</span>
                    {req}
                  </li>
                ))}
              </ul>
              {/* Animated underline */}
              <div className="mt-4 h-0.5 w-0 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className={`text-center ${
            isInView ? "animate-fade-in-up animation-delay-500" : "opacity-0"
          }`}
        >
          <Button
            size="lg"
            className="wave-gradient text-primary-foreground hover:opacity-90 transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
            asChild
          >
            <a href="mailto:careers@hbwavetech.com" className="group">
              <Mail className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Apply: careers@hbwavetech.com
            </a>
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            Project-specific details shared during interviews
          </p>
        </div>
      </div>
    </section>
  );
};

export default Careers;