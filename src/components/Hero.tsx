
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { value: "24/7", label: "Autonomous Systems" },
    { value: "99%", label: "Accuracy Rate" },
    { value: "80%", label: "Time Saved" },
  ];

  return (
    <section id="home" className="relative min-h-screen bg-ekam-primary overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#013a37] via-[#012825] to-[#011a18]" />

        {/* Noise texture overlay */}
        <div className="absolute inset-0 noise-overlay" />

        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#55c5d1]/10 rounded-full blur-[120px] animate-gradient-shift-1" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-ekam-secondary/10 rounded-full blur-[100px] animate-gradient-shift-2" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#026560]/5 rounded-full blur-[150px]" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 lg:pt-40 pb-20">
        <div className="text-center">
          {/* Badge */}
          <div
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass mb-8 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <Sparkles className="h-4 w-4 text-[#55c5d1]" />
            <span className="text-sm font-medium text-white/80">Enterprise AI Solutions</span>
          </div>

          {/* Headline */}
          <h1
            className={`heading-display text-white mb-6 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Your Operations.{' '}
            <span className="relative">
              <span className="bg-gradient-to-r from-white via-ekam-secondary to-[#55c5d1] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-x">
                Automated.
              </span>
            </span>
          </h1>

          {/* Subheading */}
          <p
            className={`subheading text-white/70 max-w-3xl mx-auto mb-10 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            We build voice agents, WhatsApp bots, custom dashboards, and AI-powered web applications
            that handle your repetitive tasks—so your team can focus on what matters.
          </p>

          {/* CTAs */}
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center mb-16 transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <Button
              size="lg"
              className="h-14 px-8 bg-white text-ekam-primary hover:bg-white/90 text-base font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group btn-premium"
              onClick={() => window.open('https://calendar.app.google/p5iQtkxptFhS75GW8', '_blank')}
            >
              Book a Consultation
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-14 px-8 border-white/20 bg-white/5 text-white hover:bg-white/10 text-base rounded-xl backdrop-blur-sm transition-all duration-300"
              onClick={() => {
                const projectsSection = document.getElementById('projects');
                if (projectsSection) {
                  projectsSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              See Our Work
            </Button>
          </div>

          {/* Stats Row */}
          <div
            className={`flex flex-wrap justify-center items-center gap-8 lg:gap-12 transition-all duration-700 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center gap-8 lg:gap-12">
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-white/50 font-medium">{stat.label}</div>
                </div>
                {index < stats.length - 1 && (
                  <div className="hidden sm:block w-px h-12 bg-white/10" />
                )}
              </div>
            ))}
          </div>

          {/* Scroll Indicator */}
          <div
            className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-700 delay-500 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="flex flex-col items-center gap-2 text-white/40">
              <span className="text-xs uppercase tracking-wider">Scroll to explore</span>
              <ChevronDown className="h-5 w-5 animate-bounce" />
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
