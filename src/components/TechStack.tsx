
import { useEffect, useRef, useState } from "react";

const TechStack = () => {
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

  const aiStackLogos = [
    { name: "OpenAI", logo: "/lovable-uploads/1681142235openai-logo-png.webp" },
    { name: "Anthropic", logo: "/lovable-uploads/Anthropic_logo.svg.png" },
    { name: "LangChain", logo: "/lovable-uploads/LangChain_Logo.svg.png" },
    { name: "CrewAI", logo: "/lovable-uploads/crewai-brand-color.png" },
    { name: "LlamaIndex", logo: "/lovable-uploads/llama-index.png" },
    { name: "Pinecone", logo: "/lovable-uploads/Pinecone-Full-Logo-Black.svg" },
    { name: "Hugging Face", logo: "/lovable-uploads/Hf-logo-with-title.svg" },
    { name: "Google Gemini", logo: "/lovable-uploads/Google-Gemini-Logo-PNG-Photos.png" },
    { name: "Weaviate", logo: "/lovable-uploads/weaviate-logo.webp" },
    { name: "Relevance AI", logo: "/lovable-uploads/ria-Landing_AI.png" },
  ];

  const softwareStackLogos = [
    { name: "n8n", logo: "https://avatars.githubusercontent.com/u/45487711?s=200&v=4" },
    { name: "Make", logo: "/lovable-uploads/make-logo-png_seeklogo-506859.png" },
    { name: "Flowise", logo: "/lovable-uploads/logo-flowise.webp" },
    { name: "Voiceflow", logo: "/lovable-uploads/Voiceflow-wordmark-dark-MWXn_xqR.svg" },
    { name: "Vercel", logo: "https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png" },
    { name: "AWS", logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
    { name: "Supabase", logo: "https://avatars.githubusercontent.com/u/54469796?s=200&v=4" },
    { name: "PostgreSQL", logo: "https://www.postgresql.org/media/img/about/press/elephant.png" },
    { name: "React", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
    { name: "TypeScript", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" },
  ];

  const LogoItem = ({ item }: { item: { name: string; logo: string; fallbackText?: string } }) => {
    const [imgError, setImgError] = useState(false);

    return (
      <div className="flex-shrink-0 flex items-center justify-center mx-8 md:mx-12">
        {!imgError ? (
          <img
            src={item.logo}
            alt={item.name}
            className="h-10 md:h-12 w-auto max-w-[140px] md:max-w-[170px] object-contain grayscale opacity-70"
            onError={() => setImgError(true)}
          />
        ) : (
          <span className="text-base md:text-lg font-semibold text-gray-400 whitespace-nowrap">
            {item.fallbackText || item.name}
          </span>
        )}
      </div>
    );
  };

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gray-100 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gray-100 rounded-full blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            Built with <span className="text-[#012825]">Best-in-Class</span> Tech
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We leverage cutting-edge AI technologies and platforms to build powerful, production-ready solutions
          </p>
        </div>

        {/* AI Stack Label */}
        <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-gray-300" />
            <h3 className="text-lg md:text-xl font-bold text-gray-700 uppercase tracking-[0.15em]">AI Stack</h3>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-gray-300" />
          </div>
        </div>
      </div>

      {/* Full-width scrolling AI Stack */}
      <div className={`mb-16 overflow-hidden transition-all duration-700 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="flex animate-scroll-left whitespace-nowrap">
          {[...aiStackLogos, ...aiStackLogos, ...aiStackLogos].map((item, idx) => (
            <LogoItem key={`ai-${item.name}-${idx}`} item={item} />
          ))}
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Software Stack Label */}
        <div className={`transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-gray-300" />
            <h3 className="text-lg md:text-xl font-bold text-gray-700 uppercase tracking-[0.15em]">Software Stack</h3>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-gray-300" />
          </div>
        </div>
      </div>

      {/* Full-width scrolling Software Stack */}
      <div className={`pb-8 overflow-hidden transition-all duration-700 delay-400 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="flex animate-scroll-right whitespace-nowrap">
          {[...softwareStackLogos, ...softwareStackLogos, ...softwareStackLogos].map((item, idx) => (
            <LogoItem key={`software-${item.name}-${idx}`} item={item} />
          ))}
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(-33.333%); }
          100% { transform: translateX(0); }
        }
        .animate-scroll-left {
          animation: scroll-left 25s linear infinite;
        }
        .animate-scroll-right {
          animation: scroll-right 25s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default TechStack;
