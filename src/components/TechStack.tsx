
import React from 'react';

const TechStack = () => {
  return (
    <section className="py-8 bg-ekam-primary">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-8">
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
      </div>
    </section>
  );
};

export default TechStack;
