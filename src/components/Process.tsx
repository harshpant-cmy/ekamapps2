
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      number: "1",
      title: "AI Strategy Consultation",
      description: "We identify business challenges and align AI solutions with your vision."
    },
    {
      number: "2", 
      title: "Custom AI Development",
      description: "We build AI models for automation, decision-making, and customer interactions."
    },
    {
      number: "3",
      title: "Seamless Integration",
      description: "We deploy AI into existing workflows for immediate efficiency gains."
    },
    {
      number: "4",
      title: "Continuous Optimization & Scaling",
      description: "We monitor and expand AI capabilities to keep you competitive."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-ekam-primary mb-4">
            Our Process For AI Success
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A proven methodology to transform your business with intelligent automation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Step card */}
              <div className="bg-white border-2 border-ekam-secondary rounded-lg p-6 h-full hover:shadow-lg transition-shadow duration-300">
                {/* Step number circle */}
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-ekam-primary text-white font-bold text-xl rounded-full flex items-center justify-center">
                    {step.number}
                  </div>
                </div>
                
                {/* Step content */}
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-ekam-primary mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Arrow connector (hidden on last item and mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                  <div className="bg-white rounded-full p-2 border-2 border-ekam-secondary">
                    <ArrowRight className="w-4 h-4 text-ekam-primary" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            Ready to start your AI transformation journey?
          </p>
          <button 
            className="bg-ekam-primary hover:bg-ekam-primary/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            onClick={() => window.open('https://calendar.app.google/p5iQtkxptFhS75GW8', '_blank')}
          >
            Schedule Your Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Process;
