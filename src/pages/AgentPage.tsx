import { useParams, Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle, Star, Calendar, Shield, Zap, Target, TrendingUp, Clock, Users, BarChart3, Globe, MessageSquare, Settings, Eye, Headphones, FileText, Search } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
const agentsData = {
  "lead-enrichment": {
    title: "Lead Enrichment Agent",
    description: "End-to-end automation that scrapes leads from Apollo, extracts and verifies LinkedIn usernames and email addresses, and cleans raw data for downstream use.",
    image: "/lovable-uploads/cb2b96e7-c445-4928-9cfa-57ececb9641a.png",
    features: [{
      icon: Shield,
      title: "Advanced Email Validation",
      description: "Multi-layer verification process using DNS checks, SMTP validation, and deliverability scoring to ensure 95%+ accuracy"
    }, {
      icon: Eye,
      title: "Profile & Content Insights",
      description: "Deep LinkedIn profile analysis extracting job titles, company data, recent posts, and engagement patterns for personalized outreach"
    }, {
      icon: Settings,
      title: "Dynamic Workflow Handling",
      description: "Intelligent routing system that adapts to different lead sources and automatically adjusts enrichment processes based on data quality"
    }, {
      icon: Zap,
      title: "Seamless Integration",
      description: "Native connectors for CRM systems, email platforms, and sales tools with real-time synchronization and webhook support"
    }],
    benefits: ["Save 15+ hours per week on manual lead research and data entry tasks", "Increase lead quality by 80% with verified contact information and enriched profiles", "Reduce email bounce rates to under 3% with advanced validation algorithms", "Scale your outreach campaigns to 10x volume without additional manual effort", "Improve conversion rates by 45% through personalized messaging based on enriched data", "Eliminate duplicate leads and maintain clean, organized prospect databases"],
    color: "from-blue-500/10 to-blue-600/10"
  },
  "content-automation": {
    title: "Content Automation Agent",
    description: "Automates the entire video production process, from script generation to final video output, using AI at each step of the creative workflow.",
    image: "/lovable-uploads/0b96fb04-5ee0-4d44-92f5-a997063a0779.png",
    features: [{
      icon: FileText,
      title: "AI Script Generation",
      description: "Advanced natural language models create compelling scripts tailored to your brand voice, target audience, and content objectives"
    }, {
      icon: Headphones,
      title: "Text-to-Speech Voiceovers",
      description: "Professional-quality voice synthesis with multiple accent options, emotional tones, and custom voice cloning capabilities"
    }, {
      icon: Eye,
      title: "Dynamic Visual Storyboards",
      description: "Automated scene generation with AI-powered visual elements, animations, and transitions synchronized to script timing"
    }, {
      icon: Zap,
      title: "Ready-to-Publish Videos",
      description: "Complete post-production pipeline including editing, color correction, audio mixing, and format optimization for all platforms"
    }],
    benefits: ["Produce professional videos 10x faster than traditional methods", "Reduce video production costs by 90% compared to hiring external agencies", "Maintain consistent brand messaging and visual identity across all content", "Scale content creation to daily publishing without hiring additional staff", "Generate content in multiple languages and formats simultaneously", "Adapt content automatically for different platforms and audience segments"],
    color: "from-purple-500/10 to-purple-600/10"
  },
  "ecommerce-whatsapp": {
    title: "E-Commerce WhatsApp Agent",
    description: "Connects Shopify with WhatsApp to automate order notifications, customer updates, and verification messages for seamless customer communication.",
    image: "/lovable-uploads/fdd2fb40-b5d1-454c-af90-4994f08d6c6f.png",
    features: [{
      icon: Settings,
      title: "Order Status Workflows",
      description: "Automated messaging sequences for order confirmation, payment verification, shipping updates, and delivery notifications with custom templates"
    }, {
      icon: Search,
      title: "Automated Product Discovery",
      description: "AI-powered product recommendation engine that suggests relevant items based on customer behavior, purchase history, and preferences"
    }, {
      icon: Shield,
      title: "Secure Transaction Validation",
      description: "Multi-factor authentication system with OTP verification, payment confirmation, and fraud detection capabilities"
    }, {
      icon: BarChart3,
      title: "Real-time Status Tracking",
      description: "Live order monitoring with automatic updates, exception handling, and customer notification system integrated with logistics providers"
    }],
    benefits: ["Reduce customer service inquiries by 70% through proactive communication", "Increase customer satisfaction scores by 85% with instant order updates", "Boost repeat purchases by 60% through personalized product recommendations", "Streamline order management processes and reduce manual intervention by 80%", "Improve customer retention rates through timely and relevant messaging", "Enable 24/7 customer support without human agents for routine inquiries"],
    color: "from-green-500/10 to-green-600/10"
  },
  "customer-support": {
    title: "Customer Support Agent",
    description: "Receives and processes customer queries from webhooks or integrated chat channels using AI agents for intelligent response handling.",
    image: "/lovable-uploads/2cff3895-2a4d-4b81-9b74-816d4618a560.png",
    features: [{
      icon: Target,
      title: "AI-Powered Classification",
      description: "Advanced NLP models categorize inquiries by urgency, department, and complexity with 98% accuracy for optimal routing"
    }, {
      icon: FileText,
      title: "Automated Ticket Creation",
      description: "Intelligent ticket generation with priority assignment, SLA tracking, and automatic escalation based on customer tier and issue type"
    }, {
      icon: MessageSquare,
      title: "Structured LLM Responses",
      description: "Context-aware responses using company knowledge base, previous interactions, and customer profile for personalized support"
    }, {
      icon: Clock,
      title: "Real-time Status Updates",
      description: "Live tracking dashboard with customer notifications, agent assignments, and resolution progress monitoring"
    }],
    benefits: ["Resolve 80% of customer queries instantly without human intervention", "Reduce average support response time from hours to under 30 seconds", "Maintain 24/7 customer support availability across all time zones", "Lower support operational costs by 65% while improving satisfaction ratings", "Handle peak traffic volumes without degrading service quality", "Provide consistent support quality regardless of agent availability"],
    color: "from-orange-500/10 to-orange-600/10"
  },
  "sales-multichannel": {
    title: "Sales Multi-Channel Agent",
    description: "Automates outbound sales and follow-up calls across multiple channels, including voice and WhatsApp for comprehensive prospect engagement.",
    image: "/lovable-uploads/b44c65a4-4eb4-422b-8ce9-e600f090a9dc.png",
    features: [{
      icon: Globe,
      title: "Multi-Channel Automation",
      description: "Unified campaign management across email, SMS, WhatsApp, LinkedIn, and voice calls with coordinated messaging sequences"
    }, {
      icon: Calendar,
      title: "Calendar Integration",
      description: "Smart scheduling system with availability detection, time zone management, and automatic booking confirmations across platforms"
    }, {
      icon: Headphones,
      title: "AI-Powered Personalized Calls",
      description: "Dynamic call scripts with real-time objection handling, sentiment analysis, and conversation flow optimization"
    }, {
      icon: TrendingUp,
      title: "Automated Follow-ups",
      description: "Intelligent follow-up sequences based on prospect behavior, engagement levels, and sales stage progression"
    }],
    benefits: ["Increase sales conversion rates by 45% through multi-touch campaigns", "Automate 90% of follow-up communications while maintaining personalization", "Never miss a potential lead or opportunity with systematic tracking", "Scale sales operations to 5x capacity without additional headcount", "Reduce sales cycle length by 30% through consistent engagement", "Improve lead qualification accuracy and focus on high-value prospects"],
    color: "from-red-500/10 to-red-600/10"
  },
  "blog-posting": {
    title: "Blog Posting Agent",
    description: "Generates high-quality blog content from topic ideas, outlines, or structured data using advanced AI models for consistent publishing.",
    image: "/lovable-uploads/03993e34-5cb7-45cd-9af5-f77a345fd4b4.png",
    features: [{
      icon: FileText,
      title: "AI Content Generation",
      description: "Advanced language models create SEO-optimized articles with proper structure, keyword integration, and engaging storytelling"
    }, {
      icon: Settings,
      title: "Content Revision Workflows",
      description: "Multi-stage editing process with grammar checking, fact verification, brand voice alignment, and quality assurance"
    }, {
      icon: Eye,
      title: "AI-Driven Image Generation",
      description: "Custom visual content creation including featured images, infographics, and illustrations matched to article themes"
    }, {
      icon: Globe,
      title: "Direct Publishing Integration",
      description: "Seamless connection to CMS platforms with automated formatting, metadata optimization, and social media distribution"
    }],
    benefits: ["Publish 5x more content without compromising quality or brand voice", "Maintain consistent SEO optimization across all posts for better rankings", "Generate engaging content ideas automatically based on trending topics", "Free up creative teams for strategic initiatives and high-level planning", "Reduce content production costs by 70% compared to outsourced writing", "Ensure regular publishing schedule with automated content pipeline"],
    color: "from-indigo-500/10 to-indigo-600/10"
  },
  "travel-assistant": {
    title: "Travel Assistant Agent",
    description: "Manages travel inquiries, lead capture, and bookings across WhatsApp, Facebook, and Instagram with a unified workflow management system.",
    image: "/lovable-uploads/6173b41e-229e-4cc3-871d-3194bc7c0cb4.png",
    features: [{
      icon: Globe,
      title: "Multi-Platform Management",
      description: "Centralized dashboard managing conversations across WhatsApp Business, Facebook Messenger, Instagram DMs, and web chat"
    }, {
      icon: MessageSquare,
      title: "AI Agent Conversations",
      description: "Natural language processing for travel inquiries with destination recommendations, pricing, and availability checks"
    }, {
      icon: Target,
      title: "Lead Qualification",
      description: "Intelligent scoring system evaluating budget, travel dates, preferences, and booking likelihood for priority handling"
    }, {
      icon: TrendingUp,
      title: "Automated Sales Journey",
      description: "Guided booking process with payment integration, itinerary generation, and post-booking support automation"
    }],
    benefits: ["Handle 100+ simultaneous inquiries across all platforms efficiently", "Qualify leads automatically before routing to human travel consultants", "Increase booking conversion rates by 60% through immediate responses", "Provide instant responses 24/7 across all customer touchpoints", "Reduce lead response time from hours to seconds for competitive advantage", "Maintain detailed customer profiles for personalized travel recommendations"],
    color: "from-teal-500/10 to-teal-600/10"
  },
  "instagram-intelligence": {
    title: "Instagram Content Intelligence Agent",
    description: "Tracks and analyzes Instagram content for your brand or any competitor account, extracting insights on engagement, reach, and trending formats.",
    image: "/lovable-uploads/ddb2404b-f7ed-4ec6-8d0c-7647b7e0433d.png",
    features: [{
      icon: BarChart3,
      title: "Content Performance Tracking",
      description: "Comprehensive analytics on post engagement, reach, impressions, and audience demographics with historical trend analysis"
    }, {
      icon: Eye,
      title: "Competitor Analysis",
      description: "Automated monitoring of competitor accounts with content strategy insights, posting patterns, and engagement benchmarking"
    }, {
      icon: Target,
      title: "AI-Powered Insights",
      description: "Machine learning algorithms identify viral content patterns, optimal posting times, and trending hashtag opportunities"
    }, {
      icon: FileText,
      title: "Structured Reporting",
      description: "Automated report generation with actionable recommendations, performance summaries, and strategic content planning"
    }],
    benefits: ["Identify trending content formats before competitors gain advantage", "Optimize posting times for maximum engagement based on audience behavior", "Track competitor strategies automatically with detailed performance analysis", "Generate actionable insights for content strategy and campaign planning", "Reduce content research time by 80% with automated trend identification", "Improve content performance by 150% through data-driven optimization"],
    color: "from-pink-500/10 to-pink-600/10"
  },
  "callassist-ai": {
    title: "CallAssist AI Agent",
    description: "Automates the entire workflow for call transcription, information extraction, and actionable task generation with zero manual documentation required.",
    image: "/lovable-uploads/e43732b8-6e83-443e-8327-169d703d61af.png",
    features: [{
      icon: Headphones,
      title: "Automated Transcription",
      description: "High-accuracy speech-to-text conversion with speaker identification, timestamp marking, and noise reduction technology"
    }, {
      icon: Search,
      title: "Information Extraction",
      description: "AI-powered extraction of key points, action items, decisions, and follow-up tasks from conversation context"
    }, {
      icon: FileText,
      title: "Task Generation",
      description: "Automatic creation of actionable tasks with priority levels, assignees, and due dates based on conversation content"
    }, {
      icon: Shield,
      title: "Zero Manual Documentation",
      description: "Complete automation of meeting notes, summary generation, and distribution to relevant stakeholders"
    }],
    benefits: ["Save 3+ hours per day on call documentation and follow-up tasks", "Never miss important action items or commitments from conversations", "Maintain perfect meeting records with searchable transcripts and summaries", "Focus on conversations instead of note-taking during important calls", "Improve team accountability with automated task tracking and reminders", "Create comprehensive call libraries for training and reference purposes"],
    color: "from-yellow-500/10 to-yellow-600/10"
  },
  "legal-consultant": {
    title: "Legal Consultant Agent",
    description: "Ingests and indexes legal documents from Google Drive, extracting summaries and key points using advanced AI models for instant legal research.",
    image: "/lovable-uploads/5020b3d0-f6f6-4c1f-9a69-ddb758ed9b09.png",
    features: [{
      icon: FileText,
      title: "Document Indexing",
      description: "Intelligent document processing with OCR, metadata extraction, and classification for contracts, cases, and legal briefs"
    }, {
      icon: Search,
      title: "Vector Embeddings Search",
      description: "Advanced semantic search capabilities using AI embeddings to find relevant documents based on legal concepts and context"
    }, {
      icon: MessageSquare,
      title: "Voice and Text Queries",
      description: "Natural language interface supporting both voice commands and text queries for intuitive legal research"
    }, {
      icon: Shield,
      title: "Citation-Backed Answers",
      description: "All responses include proper legal citations, case references, and document sources for verification and compliance"
    }],
    benefits: ["Reduce legal research time by 80% through intelligent document search", "Get instant answers with proper citations and legal references", "Access vast document libraries through natural language queries", "Ensure no important legal precedents or clauses are missed", "Maintain compliance with proper documentation and citation tracking", "Enable junior lawyers to perform research at senior lawyer efficiency levels"],
    color: "from-slate-500/10 to-slate-600/10"
  }
};
const AgentPage = () => {
  const {
    agentId
  } = useParams<{
    agentId: string;
  }>();
  const agent = agentId ? agentsData[agentId as keyof typeof agentsData] : null;
  if (!agent) {
    return <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="max-w-7xl mx-auto px-8 py-20 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Agent Not Found</h1>
          <Link to="/" className="text-ekam-primary hover:underline">
            Return to Home
          </Link>
        </div>
        <Footer />
      </div>;
  }
  return <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-8 py-8">
        {/* Back Button */}
        <Link to="/" className="inline-flex items-center text-ekam-primary hover:text-ekam-primary/80 mb-6 transition-colors">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to AI Agents
        </Link>

        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {agent.title}
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-6">
            {agent.description}
          </p>
          
          {/* Highlighted Workflow Image */}
          <Card className="border-0 shadow-xl overflow-hidden mb-8">
            <div className={`h-3 bg-gradient-to-r ${agent.color}`}></div>
            <CardContent className="p-8">
              <div className="aspect-video bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl overflow-hidden shadow-inner">
                <img src={agent.image} alt={`${agent.title} workflow`} className="w-full h-full object-contain hover:scale-105 transition-transform duration-300" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Features Section */}
        <Card className="border-0 shadow-lg mb-8">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center text-2xl">
              <Star className="h-7 w-7 text-ekam-primary mr-3" />
              Key Features & Capabilities
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="grid lg:grid-cols-2 gap-6">
              {agent.features.map((feature, index) => <div key={index} className="flex items-start space-x-4 p-4 rounded-lg bg-gray-50/50 hover:bg-gray-100/50 transition-colors">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${agent.color} flex-shrink-0`}>
                    <feature.icon className="h-6 w-6 text-ekam-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">{feature.title}</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>)}
            </div>
          </CardContent>
        </Card>

        {/* Benefits Section */}
        <Card className="border-0 shadow-lg mb-8">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center text-2xl">
              <TrendingUp className="h-7 w-7 text-ekam-primary mr-3" />
              Business Benefits & Impact
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="grid lg:grid-cols-2 gap-4">
              {agent.benefits.map((benefit, index) => <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50/50 transition-colors">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 leading-relaxed">{benefit}</span>
                </div>)}
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="grid xl:grid-cols-2 gap-6">
          <Card className="border-0 shadow-lg bg-gradient-to-r from-ekam-primary to-ekam-primary/90 text-white bg-[#013a37]">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
              <p className="text-lg opacity-95 mb-6 leading-relaxed">
                Let's discuss how this AI agent can streamline your operations, boost productivity, and drive measurable results for your business.
              </p>
              <Button size="lg" className="w-full bg-white text-ekam-primary hover:bg-gray-100 font-semibold" onClick={() => window.open('https://calendly.com/nitin26gupta/callwithnitin?month=2025-05', '_blank')}>
                <Calendar className="h-5 w-5 mr-2" />
                Schedule Your Free Consultation
              </Button>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-8 text-center">
              <div className="mb-6">
                <Users className="h-12 w-12 text-ekam-primary mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Limited Time Offer</h4>
                <p className="text-gray-600 leading-relaxed">
                  Get a comprehensive consultation including custom implementation strategy, ROI analysis, and integration roadmap tailored to your specific business needs.
                </p>
              </div>
              <Button variant="outline" size="lg" className="w-full border-2 border-ekam-primary text-ekam-primary hover:bg-ekam-primary hover:text-white font-semibold" onClick={() => window.open('https://calendly.com/nitin26gupta/callwithnitin?month=2025-05', '_blank')}>
                Book Your Strategy Session
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
    </div>;
};
export default AgentPage;