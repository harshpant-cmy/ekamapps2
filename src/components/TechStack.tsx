
import React from 'react';

const TechStack = () => {
  return (
    <section className="py-16 bg-ekam-primary">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Our Technology Stack
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            We leverage cutting-edge AI technologies and platforms to build powerful, scalable solutions
          </p>
        </div>

        <div className="flex justify-center">
          <img 
            src="/lovable-uploads/4798b8e4-fcc8-4cef-9cc0-6c49012a6370.png" 
            alt="Technology Stack Logos" 
            className="max-w-full h-auto"
          />
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-white/90 mb-6">
            Ready to see how these technologies can transform your business?
          </p>
          <button 
            className="bg-white hover:bg-gray-100 text-ekam-primary px-8 py-3 rounded-lg font-semibold transition-colors"
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
