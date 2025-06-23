
import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Clock, TrendingUp, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-white via-ekam-secondary/20 to-white flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Transform Your{" "}
                <span className="text-ekam-primary">Business</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                We build intelligent AI solutions that simplify complexity, streamline processes, 
                and accelerate growth—empowering your team to achieve more with less effort.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-ekam-primary hover:bg-ekam-primary/90 text-white group"
                onClick={() => window.open('https://calendly.com/nitin26gupta/callwithnitin?month=2025-05', '_blank')}
              >
                Book Your Demo
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-ekam-primary text-ekam-primary hover:bg-ekam-primary hover:text-white"
              >
                Explore AI Agents
              </Button>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="bg-gradient-to-br from-ekam-primary/10 to-ekam-secondary/30 rounded-3xl p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <Bot className="h-12 w-12 text-ekam-primary mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Smart Automation</h3>
                  <p className="text-sm text-gray-600">AI agents that work 24/7</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <Clock className="h-12 w-12 text-ekam-primary mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Save Time</h3>
                  <p className="text-sm text-gray-600">Focus on creative tasks while AI handles routine work</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <Zap className="h-12 w-12 text-ekam-primary mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Efficiency</h3>
                  <p className="text-sm text-gray-600">Streamline workflows and eliminate bottlenecks</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <TrendingUp className="h-12 w-12 text-ekam-primary mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Growth Acceleration</h3>
                  <p className="text-sm text-gray-600">Scale your business with intelligent automation</p>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-ekam-primary/10 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-ekam-secondary/40 rounded-full animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
