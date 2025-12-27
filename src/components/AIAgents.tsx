
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Zap, Users, Video, MessageSquare, Headphones, FileText, Plane, Camera, Phone, Scale, Bot, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const agentsData = [
  {
    id: "lead-enrichment",
    title: "Lead Enrichment Agent",
    description: "End-to-end automation: Scrapes leads from Apollo, extracts and verifies LinkedIn usernames and email addresses, and cleans raw data for downstream use.",
    features: ["Advanced email validation", "Profile & content insights", "Dynamic workflow handling", "Seamless integration"],
    image: "/lovable-uploads/cb2b96e7-c445-4928-9cfa-57ececb9641a.png",
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
    icon: Users
  },
  {
    id: "content-automation",
    title: "Content Automation Agent",
    description: "Automates the entire video production process, from script generation to final video output, using AI at each step.",
    features: ["AI script generation", "Text-to-speech voiceovers", "Dynamic visual storyboards", "Ready-to-publish videos"],
    image: "/lovable-uploads/0b96fb04-5ee0-4d44-92f5-a997063a0779.png",
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50",
    icon: Video
  },
  {
    id: "ecommerce-whatsapp",
    title: "E-Commerce WhatsApp Agent",
    description: "Connects Shopify with WhatsApp to automate order notifications, customer updates, and verification messages.",
    features: ["Order status workflows", "Automated product discovery", "Secure transaction validation", "Real-time status tracking"],
    image: "/lovable-uploads/fdd2fb40-b5d1-454c-af90-4994f08d6c6f.png",
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-50",
    icon: MessageSquare
  },
  {
    id: "customer-support",
    title: "Customer Support Agent",
    description: "Receives and processes customer queries from webhooks or integrated chat channels using AI agents.",
    features: ["AI-powered classification", "Automated ticket creation", "Structured LLM responses", "Real-time status updates"],
    image: "/lovable-uploads/2cff3895-2a4d-4b81-9b74-816d4618a560.png",
    color: "from-orange-500 to-orange-600",
    bgColor: "bg-orange-50",
    icon: Headphones
  },
  {
    id: "sales-multichannel",
    title: "Sales Multi-Channel Agent",
    description: "Automates outbound sales and follow-up calls across multiple channels, including voice and WhatsApp.",
    features: ["Multi-channel automation", "Calendar integration", "AI-powered personalized calls", "Automated follow-ups"],
    image: "/lovable-uploads/b44c65a4-4eb4-422b-8ce9-e600f090a9dc.png",
    color: "from-red-500 to-red-600",
    bgColor: "bg-red-50",
    icon: Phone
  },
  {
    id: "blog-posting",
    title: "Blog Posting Agent",
    description: "Generates high-quality blog content from topic ideas, outlines, or structured data using advanced AI models.",
    features: ["AI content generation", "Content revision workflows", "AI-driven image generation", "Direct publishing integration"],
    image: "/lovable-uploads/03993e34-5cb7-45cd-9af5-f77a345fd4b4.png",
    color: "from-indigo-500 to-indigo-600",
    bgColor: "bg-indigo-50",
    icon: FileText
  },
  {
    id: "travel-assistant",
    title: "Travel Assistant Agent",
    description: "Manages travel inquiries, lead capture, and bookings across WhatsApp, Facebook, and Instagram with a unified workflow.",
    features: ["Multi-platform management", "AI agent conversations", "Lead qualification", "Automated sales journey"],
    image: "/lovable-uploads/6173b41e-229e-4cc3-871d-3194bc7c0cb4.png",
    color: "from-teal-500 to-teal-600",
    bgColor: "bg-teal-50",
    icon: Plane
  },
  {
    id: "instagram-intelligence",
    title: "Instagram Content Intelligence Agent",
    description: "Tracks and analyzes Instagram content for your brand or any competitor account, extracting insights on engagement, reach, and trending formats.",
    features: ["Content performance tracking", "Competitor analysis", "AI-powered insights", "Structured reporting"],
    image: "/lovable-uploads/ddb2404b-f7ed-4ec6-8d0c-7647b7e0433d.png",
    color: "from-pink-500 to-pink-600",
    bgColor: "bg-pink-50",
    icon: Camera
  },
  {
    id: "callassist-ai",
    title: "CallAssist AI Agent",
    description: "Automates the entire workflow for call transcription, information extraction, and actionable task generation.",
    features: ["Automated transcription", "Information extraction", "Task generation", "Zero manual documentation"],
    image: "/lovable-uploads/e43732b8-6e83-443e-8327-169d703d61af.png",
    color: "from-yellow-500 to-yellow-600",
    bgColor: "bg-yellow-50",
    icon: Phone
  },
  {
    id: "legal-consultant",
    title: "Legal Consultant Agent",
    description: "Ingests and indexes legal documents from Google Drive, extracting summaries and key points using advanced AI models.",
    features: ["Document indexing", "Vector embeddings search", "Voice and text queries", "Citation-backed answers"],
    image: "/lovable-uploads/5020b3d0-f6f6-4c1f-9a69-ddb758ed9b09.png",
    color: "from-slate-500 to-slate-600",
    bgColor: "bg-slate-50",
    icon: Scale
  }
];

const AIAgents = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.05 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="agents" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ekam-primary/10 border border-ekam-primary/20 mb-6">
            <Bot className="h-4 w-4 text-ekam-primary" />
            <span className="text-sm font-medium text-ekam-primary">AI Agent Suite</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our AI-Powered Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive suite of AI agents designed to automate and optimize every aspect of your business
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {agentsData.map((agent, index) => {
            const IconComponent = agent.icon;
            return (
              <Card
                key={index}
                className={`group hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-ekam-primary/20 overflow-hidden flex flex-col h-full rounded-2xl bg-white ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${150 + index * 100}ms` }}
              >
                {/* Gradient accent line */}
                <div className={`h-1 bg-gradient-to-r ${agent.color}`}></div>

                <CardHeader className="space-y-4 flex-shrink-0 pb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-xl ${agent.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <IconComponent className="h-6 w-6 text-ekam-primary" />
                    </div>
                    <CardTitle className="text-lg font-semibold text-gray-900 group-hover:text-ekam-primary transition-colors leading-tight">
                      {agent.title}
                    </CardTitle>
                  </div>

                  <div className="aspect-video bg-gray-50 rounded-xl overflow-hidden border border-gray-100">
                    <img
                      src={agent.image}
                      alt={`${agent.title} workflow`}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </CardHeader>

                <CardContent className="space-y-4 flex flex-col flex-grow pt-0">
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                    {agent.description}
                  </p>

                  <div className="space-y-3 flex-grow">
                    <h4 className="font-semibold text-gray-900 text-sm">Key Features</h4>
                    <div className="flex flex-wrap gap-2">
                      {agent.features.slice(0, 3).map((feature, idx) => (
                        <span
                          key={idx}
                          className={`text-xs px-3 py-1.5 rounded-full ${agent.bgColor} text-gray-700 font-medium`}
                        >
                          {feature}
                        </span>
                      ))}
                      {agent.features.length > 3 && (
                        <span className="text-xs px-3 py-1.5 rounded-full bg-gray-100 text-gray-500 font-medium">
                          +{agent.features.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full justify-between text-ekam-primary hover:bg-ekam-primary/5 group/btn mt-auto h-11"
                    asChild
                  >
                    <Link to={`/agent/${agent.id}`}>
                      Learn More
                      <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className={`text-center mt-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '800ms' }}>
          <div className="bg-gradient-to-br from-ekam-primary to-ekam-primary/90 rounded-3xl p-10 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent"></div>
            <div className="relative">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                Ready to Automate Your Business?
              </h3>
              <p className="text-white/80 mb-6 max-w-xl mx-auto">
                Schedule a free consultation to discover which AI agents are right for your business needs.
              </p>
              <Button
                size="lg"
                className="bg-white text-ekam-primary hover:bg-white/90 shadow-lg h-12 px-8"
                onClick={() => window.open('https://calendly.com/nitin26gupta/callwithnitin?month=2025-06', '_blank')}
              >
                Book Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIAgents;
