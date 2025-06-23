
import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Clock, TrendingUp, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-white via-ekam-secondary/10 to-white flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Main Hero Content - Centered */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Cutting-Edge{" "}
              <span className="text-ekam-primary">AI Automation</span>
              <br />
              for Modern Businesses
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              From intelligent lead enrichment to multi-channel customer engagement, our agent 
              portfolio enables seamless, efficient workflows reducing manual work and driving 
              business growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-ekam-primary hover:bg-ekam-primary/90 text-white group"
                onClick={() => window.open('https://calendly.com/nitin26gupta/callwithnitin?month=2025-05', '_blank')}
              >
                Explore Our Agents
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-ekam-primary text-ekam-primary hover:bg-ekam-primary hover:text-white"
              >
                Book a Consultation
              </Button>
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <Bot className="h-12 w-12 text-ekam-primary mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Smart Automation</h3>
              <p className="text-sm text-gray-600">AI agents that work 24/7</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <Clock className="h-12 w-12 text-ekam-primary mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Save Time</h3>
              <p className="text-sm text-gray-600">Focus on creative tasks while AI handles routine work</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <Zap className="h-12 w-12 text-ekam-primary mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Efficiency</h3>
              <p className="text-sm text-gray-600">Streamline workflows and eliminate bottlenecks</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <TrendingUp className="h-12 w-12 text-ekam-primary mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Growth Acceleration</h3>
              <p className="text-sm text-gray-600">Scale your business with intelligent automation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
