
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

  // Technology logos organized in rows matching the screenshot
  const techRows = [
    // Row 1: AI Frameworks & Agents
    [
      { name: "CrewAI", logo: "crewai", color: "#FF6B6B" },
      { name: "LangChain", logo: "langchain", color: "#1C3C3C" },
      { name: "LangGraph", logo: "langgraph", color: "#1C3C3C" },
      { name: "Swarm", logo: "swarm", color: "#FFB800" },
      { name: "LlamaIndex", logo: "llamaindex", color: "#7C3AED" },
      { name: "OpenAI", logo: "openai", color: "#10A37F" },
    ],
    // Row 2: LLM Providers
    [
      { name: "GPT", logo: "gpt", color: "#10A37F" },
      { name: "Claude", logo: "claude", color: "#D97706" },
      { name: "Gemini", logo: "gemini", color: "#4285F4" },
      { name: "Hugging Face", logo: "huggingface", color: "#FFD21E" },
    ],
    // Row 3: Workflow & Voice
    [
      { name: "Voiceflow", logo: "voiceflow", color: "#FFFFFF" },
      { name: "FlowiseAI", logo: "flowise", color: "#5D5FEF" },
      { name: "n8n", logo: "n8n", color: "#EA4B71" },
      { name: "LandingAI", logo: "landingai", color: "#00D4AA" },
    ],
    // Row 4: Automation
    [
      { name: "Make", logo: "make", color: "#6366F1" },
      { name: "Relevance AI", logo: "relevance", color: "#10B981" },
    ],
    // Row 5: Vector DBs
    [
      { name: "Pinecone", logo: "pinecone", color: "#000000" },
      { name: "Weaviate", logo: "weaviate", color: "#00D688" },
      { name: "Qdrant", logo: "qdrant", color: "#DC2626" },
    ],
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-ekam-primary relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#012825] via-ekam-primary to-[#011a18]" />

      {/* Grid pattern overlay - matching Hero section */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Subtle gradient orbs for depth */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-[#55c5d1]/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-ekam-secondary/5 rounded-full blur-[80px]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Our Technology Stack
          </h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            We leverage cutting-edge AI technologies and platforms to build powerful, scalable solutions
          </p>
        </div>

        {/* Technology Logos Grid */}
        <div className={`space-y-8 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          {/* Row 1 */}
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
            <TechLogo name="crewai" displayName="CrewAI" />
            <TechLogo name="langchain" displayName="LangChain" icon="🦜" />
            <TechLogo name="langgraph" displayName="LangGraph" icon="🦜" />
            <TechLogo name="swarm" displayName="Swarm" icon="🐝" />
            <TechLogo name="llamaindex" displayName="LlamaIndex" icon="🦙" />
            <TechLogo name="openai" displayName="" isOpenAI />
          </div>

          {/* Row 2 */}
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
            <TechLogo name="gpt" displayName="GPT" isGPT />
            <TechLogo name="claude" displayName="Claude" isClaude />
            <TechLogo name="gemini" displayName="Gemini" isGemini />
            <TechLogo name="huggingface" displayName="Hugging Face" icon="🤗" />
          </div>

          {/* Row 3 */}
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
            <TechLogo name="voiceflow" displayName="Voiceflow" />
            <TechLogo name="flowise" displayName="FlowiseAI" isFlowise />
            <TechLogo name="n8n" displayName="n8n" isN8n />
            <TechLogo name="landingai" displayName="LandingAI" icon="🤖" />
          </div>

          {/* Row 4 */}
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
            <TechLogo name="make" displayName="make" isMake />
            <TechLogo name="relevance" displayName="Relevance AI" isRelevance />
          </div>

          {/* Row 5 */}
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
            <TechLogo name="pinecone" displayName="Pinecone" isPinecone />
            <TechLogo name="weaviate" displayName="Weaviate" isWeaviate />
            <TechLogo name="qdrant" displayName="Qdrant" isQdrant />
          </div>
        </div>
      </div>
    </section>
  );
};

// Individual tech logo component
const TechLogo = ({
  name,
  displayName,
  icon,
  isOpenAI,
  isGPT,
  isClaude,
  isGemini,
  isFlowise,
  isN8n,
  isMake,
  isRelevance,
  isPinecone,
  isWeaviate,
  isQdrant
}: {
  name: string;
  displayName: string;
  icon?: string;
  isOpenAI?: boolean;
  isGPT?: boolean;
  isClaude?: boolean;
  isGemini?: boolean;
  isFlowise?: boolean;
  isN8n?: boolean;
  isMake?: boolean;
  isRelevance?: boolean;
  isPinecone?: boolean;
  isWeaviate?: boolean;
  isQdrant?: boolean;
}) => {
  // CrewAI logo
  if (name === "crewai") {
    return (
      <div className="flex items-center gap-2 opacity-90 hover:opacity-100 transition-opacity">
        <span className="text-2xl md:text-3xl font-bold italic text-[#FF6B6B]">crewai</span>
      </div>
    );
  }

  // LangChain logo
  if (name === "langchain") {
    return (
      <div className="flex items-center gap-1.5 opacity-90 hover:opacity-100 transition-opacity">
        <span className="text-xl">🦜🔗</span>
        <span className="text-lg md:text-xl font-semibold text-white">LangChain</span>
      </div>
    );
  }

  // LangGraph logo
  if (name === "langgraph") {
    return (
      <div className="flex items-center gap-1.5 opacity-90 hover:opacity-100 transition-opacity">
        <span className="text-xl">🦜🔗</span>
        <span className="text-lg md:text-xl font-semibold text-white">LangGraph</span>
      </div>
    );
  }

  // Swarm logo
  if (name === "swarm") {
    return (
      <div className="flex items-center gap-1.5 opacity-90 hover:opacity-100 transition-opacity">
        <span className="text-xl">🐝</span>
        <span className="text-lg md:text-xl font-semibold text-[#FFB800]">Swarm</span>
      </div>
    );
  }

  // LlamaIndex logo
  if (name === "llamaindex") {
    return (
      <div className="flex items-center gap-1.5 opacity-90 hover:opacity-100 transition-opacity">
        <span className="text-xl">🦙</span>
        <span className="text-lg md:text-xl font-semibold text-[#7C3AED]">LlamaIndex</span>
      </div>
    );
  }

  // OpenAI logo
  if (isOpenAI) {
    return (
      <div className="flex items-center opacity-90 hover:opacity-100 transition-opacity">
        <svg className="w-8 h-8 md:w-10 md:h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364l2.0201-1.1638a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6099-1.4997Z"/>
        </svg>
      </div>
    );
  }

  // GPT logo
  if (isGPT) {
    return (
      <div className="flex items-center opacity-90 hover:opacity-100 transition-opacity">
        <svg className="w-8 h-8 md:w-10 md:h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364l2.0201-1.1638a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6099-1.4997Z"/>
        </svg>
      </div>
    );
  }

  // Claude logo
  if (isClaude) {
    return (
      <div className="flex items-center gap-2 opacity-90 hover:opacity-100 transition-opacity">
        <div className="w-7 h-7 md:w-8 md:h-8 rounded-lg bg-[#D97706] flex items-center justify-center">
          <span className="text-white font-bold text-sm">✦</span>
        </div>
        <span className="text-lg md:text-xl font-semibold text-white">Claude</span>
      </div>
    );
  }

  // Gemini logo
  if (isGemini) {
    return (
      <div className="flex items-center gap-2 opacity-90 hover:opacity-100 transition-opacity">
        <div className="w-7 h-7 md:w-8 md:h-8 rounded-lg bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center">
          <span className="text-white font-bold text-sm">✦</span>
        </div>
        <span className="text-lg md:text-xl font-semibold text-white">Gemini</span>
      </div>
    );
  }

  // Hugging Face
  if (name === "huggingface") {
    return (
      <div className="flex items-center gap-1.5 opacity-90 hover:opacity-100 transition-opacity">
        <span className="text-xl">🤗</span>
        <span className="text-lg md:text-xl font-semibold text-[#FFD21E]">Hugging Face</span>
      </div>
    );
  }

  // Voiceflow logo
  if (name === "voiceflow") {
    return (
      <div className="flex items-center gap-2 opacity-90 hover:opacity-100 transition-opacity">
        <div className="flex items-center">
          <div className="w-2 h-2 rounded-full bg-white mr-0.5"></div>
          <div className="w-2 h-2 rounded-full bg-white mr-0.5"></div>
          <div className="w-2 h-2 rounded-full bg-white"></div>
        </div>
        <span className="text-lg md:text-xl font-semibold text-white">Voiceflow</span>
      </div>
    );
  }

  // FlowiseAI logo
  if (isFlowise) {
    return (
      <div className="flex items-center opacity-90 hover:opacity-100 transition-opacity">
        <div className="px-3 py-1.5 bg-[#5D5FEF] rounded-lg">
          <span className="text-base md:text-lg font-bold text-white">FlowiseAI</span>
        </div>
      </div>
    );
  }

  // n8n logo
  if (isN8n) {
    return (
      <div className="flex items-center gap-1 opacity-90 hover:opacity-100 transition-opacity">
        <span className="text-lg md:text-xl font-bold text-[#EA4B71]">o</span>
        <span className="text-lg md:text-xl font-bold text-[#EA4B71]">o</span>
        <span className="text-lg md:text-xl font-bold text-white">C</span>
        <span className="text-lg md:text-xl font-bold text-[#EA4B71]">o</span>
        <span className="text-lg md:text-xl font-semibold text-white ml-1">n8n</span>
      </div>
    );
  }

  // LandingAI
  if (name === "landingai") {
    return (
      <div className="flex items-center gap-1.5 opacity-90 hover:opacity-100 transition-opacity">
        <span className="text-xl">🤖</span>
        <span className="text-lg md:text-xl font-semibold text-[#00D4AA]">LandingAI</span>
      </div>
    );
  }

  // Make logo
  if (isMake) {
    return (
      <div className="flex items-center gap-2 opacity-90 hover:opacity-100 transition-opacity">
        <div className="flex items-center">
          <div className="w-3 h-6 bg-[#6366F1] rounded-sm mr-0.5"></div>
          <div className="w-3 h-6 bg-[#6366F1] rounded-sm"></div>
        </div>
        <span className="text-lg md:text-xl font-bold text-white">make</span>
      </div>
    );
  }

  // Relevance AI logo
  if (isRelevance) {
    return (
      <div className="flex items-center opacity-90 hover:opacity-100 transition-opacity">
        <div className="px-3 py-1.5 bg-[#10B981] rounded-full flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-white"></div>
          <span className="text-base md:text-lg font-semibold text-white">Relevance AI</span>
        </div>
      </div>
    );
  }

  // Pinecone logo
  if (isPinecone) {
    return (
      <div className="flex items-center gap-2 opacity-90 hover:opacity-100 transition-opacity">
        <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-white flex items-center justify-center">
          <span className="text-black text-xs font-bold">🌲</span>
        </div>
        <span className="text-lg md:text-xl font-semibold text-white">Pinecone</span>
      </div>
    );
  }

  // Weaviate logo
  if (isWeaviate) {
    return (
      <div className="flex items-center opacity-90 hover:opacity-100 transition-opacity">
        <div className="px-3 py-1.5 bg-[#00D688]/20 rounded-lg border border-[#00D688]/30">
          <span className="text-base md:text-lg font-semibold text-[#00D688]">Weaviate</span>
        </div>
      </div>
    );
  }

  // Qdrant logo
  if (isQdrant) {
    return (
      <div className="flex items-center gap-2 opacity-90 hover:opacity-100 transition-opacity">
        <div className="w-7 h-7 md:w-8 md:h-8 rounded-lg bg-[#DC2626] flex items-center justify-center">
          <span className="text-white font-bold text-sm">Q</span>
        </div>
        <span className="text-lg md:text-xl font-semibold text-[#DC2626]">drant</span>
      </div>
    );
  }

  // Default fallback
  return (
    <div className="flex items-center gap-2 opacity-90 hover:opacity-100 transition-opacity">
      {icon && <span className="text-xl">{icon}</span>}
      <span className="text-lg md:text-xl font-semibold text-white">{displayName}</span>
    </div>
  );
};

export default TechStack;
