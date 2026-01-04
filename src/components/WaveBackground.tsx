const WaveBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      
      {/* Animated wave SVG */}
      <svg
        className="absolute bottom-0 left-0 w-full h-[300px] md:h-[400px]"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(207 100% 40% / 0.1)" />
            <stop offset="50%" stopColor="hsl(195 100% 45% / 0.15)" />
            <stop offset="100%" stopColor="hsl(207 100% 40% / 0.1)" />
          </linearGradient>
          <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(195 100% 45% / 0.08)" />
            <stop offset="50%" stopColor="hsl(207 100% 40% / 0.12)" />
            <stop offset="100%" stopColor="hsl(195 100% 45% / 0.08)" />
          </linearGradient>
        </defs>
        
        {/* Wave 1 - Back */}
        <path
          fill="url(#waveGradient1)"
          className="animate-wave"
          style={{ animationDuration: "8s" }}
          d="M0,160L48,170.7C96,181,192,203,288,197.3C384,192,480,160,576,165.3C672,171,768,213,864,218.7C960,224,1056,192,1152,176C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
        
        {/* Wave 2 - Middle */}
        <path
          fill="url(#waveGradient2)"
          className="animate-wave"
          style={{ animationDuration: "6s", animationDelay: "-2s" }}
          d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,208C672,213,768,203,864,186.7C960,171,1056,149,1152,149.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
        
        {/* Wave 3 - Front */}
        <path
          fill="hsl(207 100% 40% / 0.05)"
          className="animate-wave"
          style={{ animationDuration: "4s", animationDelay: "-1s" }}
          d="M0,256L48,261.3C96,267,192,277,288,272C384,267,480,245,576,234.7C672,224,768,224,864,234.7C960,245,1056,267,1152,261.3C1248,256,1344,224,1392,208L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
      </svg>

      {/* Floating orbs */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute top-40 right-20 w-48 h-48 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
      <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "-5s" }} />
    </div>
  );
};

export default WaveBackground;