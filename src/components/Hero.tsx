
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown, Play } from "lucide-react";
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
    <section id="home" className="relative min-h-screen overflow-hidden bg-ekam-primary">
      {/* Background effects - matching ExpertiseStatement */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#013a37] via-[#012825] to-[#011a18]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-[#55c5d1]/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-ekam-secondary/5 rounded-full blur-[80px]" />
      <div className="absolute top-1/4 right-1/3 w-[300px] h-[300px] bg-[#4ade80]/5 rounded-full blur-[120px]" />

      {/* Horizontal accent lines */}
      <div className="absolute top-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4ade80]/20 to-transparent" />
      <div className="absolute top-2/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4ade80]/10 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 lg:pt-40 pb-20 min-h-screen flex flex-col justify-center">
        <div className="text-center max-w-5xl mx-auto">
          {/* Main headline */}
          <h1
            className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 transition-all duration-700 delay-100 tracking-tight leading-[1.1] ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <span className="block">We Build AI Systems</span>
            <span className="block mt-2">
              That <span className="relative inline-block">
                <span className="text-[#4ade80]">Actually Work</span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 10C50 4 150 2 298 10" stroke="#4ade80" strokeWidth="3" strokeLinecap="round" className="animate-draw" />
                </svg>
              </span>
            </span>
          </h1>

          {/* Subtitle */}
          <div
            className={`text-lg sm:text-xl text-white/60 max-w-3xl mx-auto mb-10 transition-all duration-700 delay-200 leading-relaxed ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <p className="mb-2">
              We engineer production-grade AI agents, voice systems, and automation infrastructure that scales with your business.
            </p>
            <p className="text-white/80 font-medium">
              No templates. No fluff. Custom-built for real business impact.
            </p>
          </div>

          {/* CTA Group */}
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <Button
              size="lg"
              className="h-14 px-8 bg-[#4ade80] text-[#012825] hover:bg-[#22c55e] text-base font-semibold rounded-full shadow-[0_0_30px_rgba(74,222,128,0.3)] hover:shadow-[0_0_40px_rgba(74,222,128,0.5)] transition-all duration-300 group"
              onClick={() => window.open('https://calendar.app.google/p5iQtkxptFhS75GW8', '_blank')}
            >
              Start Building
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-14 px-8 border-2 border-white/30 bg-white/5 text-white hover:bg-white/10 hover:border-white/50 text-base font-semibold rounded-full transition-all duration-300 group backdrop-blur-sm"
              onClick={() => {
                const projectsSection = document.getElementById('projects');
                if (projectsSection) {
                  projectsSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <div className="w-10 h-10 rounded-full border-2 border-[#4ade80]/50 bg-[#4ade80]/10 flex items-center justify-center mr-3 group-hover:border-[#4ade80] group-hover:bg-[#4ade80]/20 transition-all">
                <Play className="h-4 w-4 ml-0.5 text-[#4ade80]" fill="currentColor" />
              </div>
              See Case Studies
            </Button>
          </div>

          {/* Stats */}
          <div
            className={`flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-16 transition-all duration-700 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-white mb-1 font-mono">
                  {stat.value}
                </div>
                <div className="text-sm text-white/40 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <button
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
            className="flex flex-col items-center gap-2 text-white/30 hover:text-[#4ade80] transition-colors group"
          >
            <span className="text-xs uppercase tracking-[0.2em]">Explore</span>
            <ChevronDown className="h-5 w-5 animate-bounce" />
          </button>
        </div>
      </div>

      {/* Tech stack marquee */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-white/5 bg-[#012825]/80 backdrop-blur-sm z-10">
        <div className="overflow-hidden py-4">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex items-center gap-12 mx-6">
                {['OpenAI', 'Anthropic', 'LangChain', 'Pinecone', 'Vercel', 'AWS', 'Make.com', 'n8n', 'Twilio', 'WhatsApp API'].map((tech) => (
                  <span key={tech} className="text-white/20 text-sm font-medium uppercase tracking-wider">
                    {tech}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes draw {
          0% { stroke-dasharray: 300; stroke-dashoffset: 300; }
          100% { stroke-dasharray: 300; stroke-dashoffset: 0; }
        }
        .animate-draw {
          animation: draw 1.5s ease-out forwards;
          animation-delay: 0.5s;
          stroke-dasharray: 300;
          stroke-dashoffset: 300;
        }

        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
