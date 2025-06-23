
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Bot, Workflow, Zap } from "lucide-react";

const agentsData = [
  {
    title: "Lead Enrichment Agent",
    description: "End-to-end automation: Scrapes leads from Apollo, extracts and verifies LinkedIn usernames and email addresses, and cleans raw data for downstream use.",
    features: ["Advanced email validation", "Profile & content insights", "Dynamic workflow handling", "Seamless integration"],
    image: "/lovable-uploads/cb2b96e7-c445-4928-9cfa-57ececb9641a.png",
    color: "from-blue-500/10 to-blue-600/10"
  },
  {
    title: "Content Automation Agent",
    description: "Automates the entire video production process, from script generation to final video output, using AI at each step.",
    features: ["AI script generation", "Text-to-speech voiceovers", "Dynamic visual storyboards", "Ready-to-publish videos"],
    image: "/lovable-uploads/0b96fb04-5ee0-4d44-92f5-a997063a0779.png",
    color: "from-purple-500/10 to-purple-600/10"
  },
  {
    title: "E-Commerce WhatsApp Agent",
    description: "Connects Shopify with WhatsApp to automate order notifications, customer updates, and verification messages.",
    features: ["Order status workflows", "Automated product discovery", "Secure transaction validation", "Real-time status tracking"],
    image: "/lovable-uploads/fdd2fb40-b5d1-454c-af90-4994f08d6c6f.png",
    color: "from-green-500/10 to-green-600/10"
  },
  {
    title: "Customer Support Agent",
    description: "Receives and processes customer queries from webhooks or integrated chat channels using AI agents.",
    features: ["AI-powered classification", "Automated ticket creation", "Structured LLM responses", "Real-time status updates"],
    image: "/lovable-uploads/2cff3895-2a4d-4b81-9b74-816d4618a560.png",
    color: "from-orange-500/10 to-orange-600/10"
  },
  {
    title: "Sales Multi-Channel Agent",
    description: "Automates outbound sales and follow-up calls across multiple channels, including voice and WhatsApp.",
    features: ["Multi-channel automation", "Calendar integration", "AI-powered personalized calls", "Automated follow-ups"],
    image: "/lovable-uploads/b44c65a4-4eb4-422b-8ce9-e600f090a9dc.png",
    color: "from-red-500/10 to-red-600/10"
  },
  {
    title: "Blog Posting Agent",
    description: "Generates high-quality blog content from topic ideas, outlines, or structured data using advanced AI models.",
    features: ["AI content generation", "Content revision workflows", "AI-driven image generation", "Direct publishing integration"],
    image: "/lovable-uploads/03993e34-5cb7-45cd-9af5-f77a345fd4b4.png",
    color: "from-indigo-500/10 to-indigo-600/10"
  },
  {
    title: "Travel Assistant Agent",
    description: "Manages travel inquiries, lead capture, and bookings across WhatsApp, Facebook, and Instagram with a unified workflow.",
    features: ["Multi-platform management", "AI agent conversations", "Lead qualification", "Automated sales journey"],
    image: "/lovable-uploads/6173b41e-229e-4cc3-871d-3194bc7c0cb4.png",
    color: "from-teal-500/10 to-teal-600/10"
  },
  {
    title: "Instagram Content Intelligence Agent",
    description: "Tracks and analyzes Instagram content for your brand or any competitor account, extracting insights on engagement, reach, and trending formats.",
    features: ["Content performance tracking", "Competitor analysis", "AI-powered insights", "Structured reporting"],
    image: "/lovable-uploads/ddb2404b-f7ed-4ec6-8d0c-7647b7e0433d.png",
    color: "from-pink-500/10 to-pink-600/10"
  },
  {
    title: "CallAssist AI Agent",
    description: "Automates the entire workflow for call transcription, information extraction, and actionable task generation.",
    features: ["Automated transcription", "Information extraction", "Task generation", "Zero manual documentation"],
    image: "/lovable-uploads/e43732b8-6e83-443e-8327-169d703d61af.png",
    color: "from-yellow-500/10 to-yellow-600/10"
  },
  {
    title: "Legal Consultant Agent",
    description: "Ingests and indexes legal documents from Google Drive, extracting summaries and key points using advanced AI models.",
    features: ["Document indexing", "Vector embeddings search", "Voice and text queries", "Citation-backed answers"],
    image: "/lovable-uploads/5020b3d0-f6f6-4c1f-9a69-ddb758ed9b09.png",
    color: "from-slate-500/10 to-slate-600/10"
  }
];

const AIAgents = () => {
  return (
    <section id="agents" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our AI-Powered Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive suite of AI agents designed to automate and optimize every aspect of your business
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {agentsData.map((agent, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
              <div className={`h-2 bg-gradient-to-r ${agent.color}`}></div>
              
              <CardHeader className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${agent.color}`}>
                    <Bot className="h-6 w-6 text-ekam-primary" />
                  </div>
                  <CardTitle className="text-lg font-semibold text-gray-900 group-hover:text-ekam-primary transition-colors">
                    {agent.title}
                  </CardTitle>
                </div>
                
                <div className="aspect-video bg-gray-50 rounded-lg overflow-hidden">
                  <img 
                    src={agent.image} 
                    alt={`${agent.title} workflow`} 
                    className="w-full h-full object-contain hover:scale-105 transition-transform duration-300" 
                  />
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-gray-600 text-sm leading-relaxed">
                  {agent.description}
                </p>

                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900 text-sm">Key Features:</h4>
                  <ul className="space-y-1">
                    {agent.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-center">
                        <Zap className="h-3 w-3 text-ekam-primary mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full border-ekam-primary text-ekam-primary hover:bg-ekam-primary hover:text-white group" 
                  onClick={() => window.open('https://calendly.com/nitin26gupta/callwithnitin?month=2025-05', '_blank')}
                >
                  Learn More
                  <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Card className="bg-gradient-to-r from-ekam-primary to-ekam-primary/90 text-white">
            
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AIAgents;
