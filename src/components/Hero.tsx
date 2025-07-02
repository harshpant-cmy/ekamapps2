
import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Clock, TrendingUp, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-white flex flex-col items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Hero Content - Centered */}
        <div className="text-center space-y-8 mb-20">
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight max-w-4xl mx-auto">
              Cutting-Edge{" "}
              <span className="text-ekam-primary">AI Automation</span>
              <br />
              for Modern Businesses
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
              From intelligent lead enrichment to multi-channel customer engagement, our agent 
              portfolio enables seamless, efficient workflows reducing manual work and driving 
              business growth.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button 
              size="lg" 
              className="bg-ekam-primary hover:bg-ekam-primary/90 text-white group px-8"
              onClick={() => {
                const agentsSection = document.getElementById('agents');
                if (agentsSection) {
                  agentsSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Explore Our Agents
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8"
              onClick={() => window.open('https://calendar.app.google/p5iQtkxptFhS75GW8', '_blank')}
            >
              Book a Consultation
            </Button>
          </div>
        </div>

        {/* Feature Cards - Below Hero Content */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <Bot className="h-10 w-10 text-ekam-primary mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Smart Automation</h3>
              <p className="text-sm text-gray-600 leading-relaxed">AI agents that work 24/7</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <Clock className="h-10 w-10 text-ekam-primary mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Save Time</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Focus on creative tasks while AI handles routine work</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <Zap className="h-10 w-10 text-ekam-primary mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Efficiency</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Streamline workflows and eliminate bottlenecks</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <TrendingUp className="h-10 w-10 text-ekam-primary mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Growth Acceleration</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Scale your business with intelligent automation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
