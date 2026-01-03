
import { Button } from "@/components/ui/button";
import { Mail, Phone, Calendar, Award, Building, Target, TrendingUp, ArrowRight, MapPin } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    { icon: Award, title: "25+ years of industry experience", description: "Proven expertise in business transformation" },
    { icon: Building, title: "Proven track record with major brands", description: "Trusted by industry leaders worldwide" },
    { icon: Target, title: "Custom AI solutions for every business", description: "Tailored to your specific needs" },
    { icon: TrendingUp, title: "Measurable ROI and business growth", description: "Proven results that drive success" },
  ];

  return (
    <section ref={sectionRef} id="contact" className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Subtle background accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#012825]/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#4ade80]/5 rounded-full blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 tracking-tight">
            Get Started <span className="text-[#012825]">Today</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Ready to transform your business with AI? Let's discuss how our solutions can help you achieve your goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Let's Connect Card */}
          <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="bg-white rounded-2xl p-8 h-full shadow-lg border border-gray-100">
              {/* Header */}
              <div className="flex items-center gap-3 mb-8">
                <Mail className="h-7 w-7 text-[#012825]" />
                <h3 className="text-2xl font-bold text-gray-900">Let's Connect</h3>
              </div>

              <div className="space-y-4">
                {/* Email */}
                <a href="mailto:hello@ekamapps.com" className="group flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-[#012825]/5 flex items-center justify-center group-hover:bg-[#012825]/10 transition-colors">
                    <Mail className="h-5 w-5 text-[#012825]" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Email Us</p>
                    <p className="text-[#012825]">hello@ekamapps.com</p>
                  </div>
                </a>

                {/* Phone */}
                <a href="tel:+919971117162" className="group flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-[#012825]/5 flex items-center justify-center group-hover:bg-[#012825]/10 transition-colors">
                    <Phone className="h-5 w-5 text-[#012825]" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Call Us</p>
                    <p className="text-[#012825]">+91 99711 17162</p>
                  </div>
                </a>

                {/* Schedule */}
                <a
                  href="https://calendar.app.google/p5iQtkxptFhS75GW8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#012825]/5 flex items-center justify-center group-hover:bg-[#012825]/10 transition-colors">
                    <Calendar className="h-5 w-5 text-[#012825]" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Schedule a Free Consultation</p>
                    <p className="text-gray-500">Book a personalized consultation</p>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-4 p-4 rounded-xl">
                  <div className="w-12 h-12 rounded-xl bg-[#012825]/5 flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-[#012825]" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Location</p>
                    <p className="text-gray-500">Serving businesses globally</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Why Choose Ekam Card */}
          <div className={`transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="bg-[#012825] rounded-2xl p-8 h-full shadow-lg">
              {/* Header */}
              <div className="text-center mb-8">
                <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Why Choose Ekam?</h3>
                <p className="text-white/60">Trusted by businesses worldwide for AI transformation</p>
              </div>

              <div className="space-y-3">
                {features.map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <div
                      key={index}
                      className="group flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300"
                    >
                      <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-[#4ade80]/20 transition-colors">
                        <IconComponent className="h-5 w-5 text-white/70 group-hover:text-[#4ade80] transition-colors" />
                      </div>
                      <div>
                        <p className="font-semibold text-white group-hover:text-[#4ade80] transition-colors">{feature.title}</p>
                        <p className="text-sm text-white/50">{feature.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Book Your Free Consultation CTA */}
        <div className={`transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-white rounded-2xl p-10 md:p-12 text-center">
            {/* Icon */}
            <div className="w-16 h-16 rounded-2xl bg-[#012825]/10 flex items-center justify-center mx-auto mb-6">
              <Calendar className="h-8 w-8 text-[#012825]" />
            </div>

            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Book Your Free Consultation
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
              See how our AI agents can transform your business operations in just 30 minutes.
            </p>

            {/* Benefits list */}
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-8">
              {[
                "Personalized AI solution walkthrough",
                "Custom workflow demonstration",
                "ROI analysis for your business",
                "Implementation timeline discussion"
              ].map((benefit, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#012825]" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <Button
              size="lg"
              className="h-14 px-10 bg-[#012825] text-white hover:bg-[#013a37] font-semibold rounded-full shadow-lg transition-all duration-300 group"
              onClick={() => window.open('https://calendar.app.google/p5iQtkxptFhS75GW8', '_blank')}
            >
              <Calendar className="mr-2 h-5 w-5" />
              Schedule Free Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
