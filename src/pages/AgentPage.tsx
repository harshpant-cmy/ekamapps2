
import { useParams, Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle, Star, Calendar } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const agentsData = {
  "lead-enrichment": {
    title: "Lead Enrichment Agent",
    description: "End-to-end automation that scrapes leads from Apollo, extracts and verifies LinkedIn usernames and email addresses, and cleans raw data for downstream use.",
    image: "/lovable-uploads/cb2b96e7-c445-4928-9cfa-57ececb9641a.png",
    features: ["Advanced email validation", "Profile & content insights", "Dynamic workflow handling", "Seamless integration"],
    benefits: [
      "Save 15+ hours per week on manual lead research",
      "Increase lead quality by 80% with verified contact information",
      "Reduce bounce rates with advanced email validation",
      "Scale your outreach campaigns effortlessly"
    ],
    color: "from-blue-500/10 to-blue-600/10"
  },
  "content-automation": {
    title: "Content Automation Agent",
    description: "Automates the entire video production process, from script generation to final video output, using AI at each step of the creative workflow.",
    image: "/lovable-uploads/0b96fb04-5ee0-4d44-92f5-a997063a0779.png",
    features: ["AI script generation", "Text-to-speech voiceovers", "Dynamic visual storyboards", "Ready-to-publish videos"],
    benefits: [
      "Produce professional videos 10x faster",
      "Reduce video production costs by 90%",
      "Maintain consistent brand messaging across all content",
      "Scale content creation without hiring additional staff"
    ],
    color: "from-purple-500/10 to-purple-600/10"
  },
  "ecommerce-whatsapp": {
    title: "E-Commerce WhatsApp Agent",
    description: "Connects Shopify with WhatsApp to automate order notifications, customer updates, and verification messages for seamless customer communication.",
    image: "/lovable-uploads/fdd2fb40-b5d1-454c-af90-4994f08d6c6f.png",
    features: ["Order status workflows", "Automated product discovery", "Secure transaction validation", "Real-time status tracking"],
    benefits: [
      "Reduce customer service inquiries by 70%",
      "Increase customer satisfaction with instant updates",
      "Boost repeat purchases through personalized messaging",
      "Streamline order management processes"
    ],
    color: "from-green-500/10 to-green-600/10"
  },
  "customer-support": {
    title: "Customer Support Agent",
    description: "Receives and processes customer queries from webhooks or integrated chat channels using AI agents for intelligent response handling.",
    image: "/lovable-uploads/2cff3895-2a4d-4b81-9b74-816d4618a560.png",
    features: ["AI-powered classification", "Automated ticket creation", "Structured LLM responses", "Real-time status updates"],
    benefits: [
      "Resolve 80% of customer queries instantly",
      "Reduce support response time from hours to seconds",
      "Maintain 24/7 customer support availability",
      "Lower support costs while improving satisfaction"
    ],
    color: "from-orange-500/10 to-orange-600/10"
  },
  "sales-multichannel": {
    title: "Sales Multi-Channel Agent",
    description: "Automates outbound sales and follow-up calls across multiple channels, including voice and WhatsApp for comprehensive prospect engagement.",
    image: "/lovable-uploads/b44c65a4-4eb4-422b-8ce9-e600f090a9dc.png",
    features: ["Multi-channel automation", "Calendar integration", "AI-powered personalized calls", "Automated follow-ups"],
    benefits: [
      "Increase sales conversion rates by 45%",
      "Automate 90% of follow-up communications",
      "Never miss a potential lead or opportunity",
      "Scale sales operations without additional headcount"
    ],
    color: "from-red-500/10 to-red-600/10"
  },
  "blog-posting": {
    title: "Blog Posting Agent",
    description: "Generates high-quality blog content from topic ideas, outlines, or structured data using advanced AI models for consistent publishing.",
    image: "/lovable-uploads/03993e34-5cb7-45cd-9af5-f77a345fd4b4.png",
    features: ["AI content generation", "Content revision workflows", "AI-driven image generation", "Direct publishing integration"],
    benefits: [
      "Publish 5x more content without quality compromise",
      "Maintain consistent SEO optimization across all posts",
      "Generate engaging content ideas automatically",
      "Free up creative teams for strategic initiatives"
    ],
    color: "from-indigo-500/10 to-indigo-600/10"
  },
  "travel-assistant": {
    title: "Travel Assistant Agent",
    description: "Manages travel inquiries, lead capture, and bookings across WhatsApp, Facebook, and Instagram with a unified workflow management system.",
    image: "/lovable-uploads/6173b41e-229e-4cc3-871d-3194bc7c0cb4.png",
    features: ["Multi-platform management", "AI agent conversations", "Lead qualification", "Automated sales journey"],
    benefits: [
      "Handle 100+ inquiries simultaneously",
      "Qualify leads automatically before human handoff",
      "Increase booking conversion rates by 60%",
      "Provide instant responses across all platforms"
    ],
    color: "from-teal-500/10 to-teal-600/10"
  },
  "instagram-intelligence": {
    title: "Instagram Content Intelligence Agent",
    description: "Tracks and analyzes Instagram content for your brand or any competitor account, extracting insights on engagement, reach, and trending formats.",
    image: "/lovable-uploads/ddb2404b-f7ed-4ec6-8d0c-7647b7e0433d.png",
    features: ["Content performance tracking", "Competitor analysis", "AI-powered insights", "Structured reporting"],
    benefits: [
      "Identify trending content formats before competitors",
      "Optimize posting times for maximum engagement",
      "Track competitor strategies automatically",
      "Generate actionable insights for content strategy"
    ],
    color: "from-pink-500/10 to-pink-600/10"
  },
  "callassist-ai": {
    title: "CallAssist AI Agent",
    description: "Automates the entire workflow for call transcription, information extraction, and actionable task generation with zero manual documentation required.",
    image: "/lovable-uploads/e43732b8-6e83-443e-8327-169d703d61af.png",
    features: ["Automated transcription", "Information extraction", "Task generation", "Zero manual documentation"],
    benefits: [
      "Save 3+ hours per day on call documentation",
      "Never miss important action items from calls",
      "Maintain perfect meeting records automatically",
      "Focus on conversations instead of note-taking"
    ],
    color: "from-yellow-500/10 to-yellow-600/10"
  },
  "legal-consultant": {
    title: "Legal Consultant Agent",
    description: "Ingests and indexes legal documents from Google Drive, extracting summaries and key points using advanced AI models for instant legal research.",
    image: "/lovable-uploads/5020b3d0-f6f6-4c1f-9a69-ddb758ed9b09.png",
    features: ["Document indexing", "Vector embeddings search", "Voice and text queries", "Citation-backed answers"],
    benefits: [
      "Reduce legal research time by 80%",
      "Get instant answers with proper citations",
      "Access vast document libraries through natural language",
      "Ensure no important legal precedents are missed"
    ],
    color: "from-slate-500/10 to-slate-600/10"
  }
};

const AgentPage = () => {
  const { agentId } = useParams<{ agentId: string }>();
  const agent = agentId ? agentsData[agentId as keyof typeof agentsData] : null;

  if (!agent) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="max-w-4xl mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Agent Not Found</h1>
          <Link to="/" className="text-ekam-primary hover:underline">
            Return to Home
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Back Button */}
        <Link 
          to="/" 
          className="inline-flex items-center text-ekam-primary hover:text-ekam-primary/80 mb-8 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to AI Agents
        </Link>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                {agent.title}
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                {agent.description}
              </p>
            </div>

            {/* Features Section */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Star className="h-6 w-6 text-ekam-primary mr-3" />
                  Key Features
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {agent.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Benefits Section */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Star className="h-6 w-6 text-ekam-primary mr-3" />
                  Benefits & Impact
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {agent.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <div className="h-2 w-2 bg-ekam-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Image and CTA */}
          <div className="space-y-8">
            <Card className="border-0 shadow-lg overflow-hidden">
              <div className={`h-2 bg-gradient-to-r ${agent.color}`}></div>
              <CardContent className="p-6">
                <div className="aspect-video bg-gray-50 rounded-lg overflow-hidden mb-6">
                  <img 
                    src={agent.image} 
                    alt={`${agent.title} workflow`} 
                    className="w-full h-full object-contain" 
                  />
                </div>
                
                <div className="text-center space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Ready to Transform Your Business?
                  </h3>
                  <p className="text-gray-600">
                    Let's discuss how this AI agent can streamline your operations and boost your productivity.
                  </p>
                  <Button 
                    size="lg"
                    className="w-full bg-ekam-primary hover:bg-ekam-primary/90 text-white"
                    onClick={() => window.open('https://calendly.com/nitin26gupta/callwithnitin?month=2025-05', '_blank')}
                  >
                    <Calendar className="h-5 w-5 mr-2" />
                    Schedule a Free Consultation
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Additional CTA Card */}
            <Card className="border-0 shadow-lg bg-gradient-to-r from-ekam-primary to-ekam-primary/90 text-white">
              <CardContent className="p-6 text-center">
                <h4 className="text-lg font-semibold mb-2">Limited Time Offer</h4>
                <p className="text-sm opacity-90 mb-4">
                  Get a free consultation and custom implementation strategy for your business.
                </p>
                <Button 
                  variant="secondary" 
                  size="sm"
                  className="bg-white text-ekam-primary hover:bg-gray-100"
                  onClick={() => window.open('https://calendly.com/nitin26gupta/callwithnitin?month=2025-05', '_blank')}
                >
                  Book Your Free Call
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default AgentPage;
