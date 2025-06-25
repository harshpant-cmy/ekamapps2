
import React from 'react';

const Process = () => {
  const steps = [
    {
      step: "Step 1",
      title: "AI Strategy Consultation:",
      description: "We identify business challenges and align AI solutions with your vision.",
      stepColor: "bg-yellow-400"
    },
    {
      step: "Step 2", 
      title: "Custom AI Development:",
      description: "We build AI models for automation, decision-making, and customer interactions.",
      stepColor: "bg-purple-400"
    },
    {
      step: "Step 3",
      title: "Seamless Integration:",
      description: "We deploy AI into existing workflows for immediate efficiency gains.",
      stepColor: "bg-yellow-400"
    },
    {
      step: "Step 4",
      title: "Continuous Optimization & Scaling:",
      description: "We monitor and expand AI capabilities to keep you competitive.",
      stepColor: "bg-purple-400"
    }
  ];

  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Our <span className="text-yellow-400">Process</span> For <span className="text-yellow-400">AI Success</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className={`${step.stepColor} text-gray-900 font-bold px-4 py-2 rounded-full text-lg min-w-[100px] text-center`}>
                    {step.step}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-3 text-white">
                    {step.title}
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
