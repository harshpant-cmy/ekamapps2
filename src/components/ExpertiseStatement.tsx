
import { useEffect, useRef, useState } from "react";
import { Users, CheckCircle2, Cpu } from "lucide-react";

const ExpertiseStatement = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const pillars = [
    {
      icon: Users,
      title: "The Right Expertise",
      description: "25+ years of cross-functional experience delivering end-to-end AI solutions focused on measurable ROI"
    },
    {
      icon: CheckCircle2,
      title: "A Proven Approach",
      description: "Our systematic Discovery → Design → Deploy → Optimize methodology ensures successful AI implementations every time"
    },
    {
      icon: Cpu,
      title: "Enterprise-Grade Solutions",
      description: "Custom LangChain agents, document AI, and workflow automation built for scale and reliability"
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-ekam-primary relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#013a37] via-[#012825] to-[#011a18]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-[#55c5d1]/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-ekam-secondary/5 rounded-full blur-[80px]" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Statement */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            It is easy to do AI.
          </h2>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#4ade80] mb-8 leading-tight">
            It is hard to do it well.
          </h2>
          <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            We act as <span className="font-semibold text-white">your strategic partner</span>, helping you navigate the AI landscape
            while maintaining control of your business logic and ensuring real, measurable outcomes.
          </p>
        </div>

        {/* Divider */}
        <div className={`w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-16 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`} />

        {/* Three Pillars */}
        <div className={`grid md:grid-cols-3 gap-8 lg:gap-12 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {pillars.map((pillar, index) => {
            const IconComponent = pillar.icon;
            return (
              <div
                key={index}
                className="text-center"
                style={{ transitionDelay: `${400 + index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-white/5 border border-white/10 mb-5">
                  <IconComponent className="h-7 w-7 text-[#4ade80]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {pillar.title}
                </h3>
                <p className="text-white/60 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseStatement;
