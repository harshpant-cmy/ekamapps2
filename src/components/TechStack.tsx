
import React from 'react';
import { Code, Bot, Zap, Database, Search, MessageSquare, Layers, GitBranch, Settings, Eye, Link, Grid, Workflow } from 'lucide-react';

const TechStack = () => {
  const technologies = [
    {
      name: "CrewAI",
      category: "Multi-Agent Framework",
      description: "Orchestrating collaborative AI agent workflows",
      icon: Bot
    },
    {
      name: "LangChain",
      category: "AI Development",
      description: "Building complex AI applications with language models",
      icon: Link
    },
    {
      name: "LangGraph", 
      category: "Workflow Engine",
      description: "Creating stateful, multi-actor AI applications",
      icon: GitBranch
    },
    {
      name: "OpenAI",
      category: "AI Models",
      description: "GPT-4 and advanced language model integration",
      icon: Zap
    },
    {
      name: "LlamaIndex",
      category: "Data Framework",
      description: "Connecting AI with enterprise data sources",
      icon: Database
    },
    {
      name: "Claude",
      category: "AI Assistant",
      description: "Anthropic's advanced reasoning AI model",
      icon: MessageSquare
    },
    {
      name: "Gemini",
      category: "AI Platform",
      description: "Google's multimodal AI capabilities",
      icon: Layers
    },
    {
      name: "Hugging Face",
      category: "ML Platform",
      description: "Open-source machine learning models and tools",
      icon: Bot
    },
    {
      name: "VoiceFlow",
      category: "Conversational AI",
      description: "Building voice and chat experiences",
      icon: MessageSquare
    },
    {
      name: "FlowiseAI",
      category: "Visual Builder",
      description: "Low-code AI workflow creation platform",
      icon: Workflow
    },
    {
      name: "n8n",
      category: "Automation",
      description: "Workflow automation and integration platform",
      icon: Settings
    },
    {
      name: "LandingAI",
      category: "Computer Vision",
      description: "Visual AI solutions for business applications",
      icon: Eye
    },
    {
      name: "Make",
      category: "Integration",
      description: "Visual platform for connecting apps and services",
      icon: Grid
    },
    {
      name: "Retool",
      category: "Development",
      description: "Rapid application development platform",
      icon: Code
    },
    {
      name: "Pinecone",
      category: "Vector Database",
      description: "High-performance vector database for AI",
      icon: Database
    },
    {
      name: "Airtable",
      category: "Data Management",
      description: "Flexible database and workflow platform",
      icon: Grid
    },
    {
      name: "Qdrant",
      category: "Vector Search",
      description: "Vector similarity search engine",
      icon: Search
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-ekam-primary mb-4">
            Our Technology Stack
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We leverage cutting-edge AI technologies and platforms to build powerful, scalable solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {technologies.map((tech, index) => {
            const IconComponent = tech.icon;
            return (
              <div 
                key={index} 
                className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 group"
              >
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-ekam-primary/10 rounded-lg flex items-center justify-center group-hover:bg-ekam-primary/20 transition-colors">
                      <IconComponent className="w-5 h-5 text-ekam-primary" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {tech.name}
                    </h3>
                    <p className="text-sm text-ekam-primary font-medium mb-2">
                      {tech.category}
                    </p>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {tech.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">
            Ready to see how these technologies can transform your business?
          </p>
          <button 
            className="bg-ekam-primary hover:bg-ekam-primary/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            onClick={() => window.open('https://calendly.com/nitin26gupta/callwithnitin?month=2025-06', '_blank')}
          >
            Explore Our Capabilities
          </button>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
