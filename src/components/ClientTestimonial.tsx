
import { Card, CardContent } from "@/components/ui/card";
import { Play, Star } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const ClientTestimonial = () => {
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

  const testimonials = [
    {
      title: "AI Social Media Automation",
      description: "Transformed content creation workflow with intelligent automation, reducing production time by 70%",
      videoUrl: "https://www.youtube.com/embed/6gp2a6llZYM",
      category: "Content Marketing"
    },
    {
      title: "Custom API Integration",
      description: "Intelligent AI agents for product discovery, improving customer experience and conversion rates",
      videoUrl: "https://www.youtube.com/embed/jM_dnvqkad8",
      category: "E-commerce"
    },
    {
      title: "Blog Automation Success",
      description: "AI-powered content creation system generating high-quality posts with minimal human intervention",
      videoUrl: "https://www.youtube.com/embed/3BwP6GI7000",
      category: "Content Creation"
    }
  ];

  return (
    <section ref={sectionRef} id="testimonials" className="py-24 bg-gradient-to-b from-white via-gray-50/50 to-white relative overflow-hidden">
      {/* Light green tint background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(74,222,128,0.06),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-sm font-semibold text-ekam-primary uppercase tracking-wider mb-4">CASE STUDIES</p>
          <h2 className="heading-section text-gray-900 mb-4">
            See Our Work in <span className="text-ekam-primary">Action</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real implementations demonstrating the impact of our AI solutions across industries
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${300 + index * 150}ms` }}
            >
              <Card className="group relative border border-gray-100 shadow-sm hover:shadow-xl rounded-2xl overflow-hidden bg-white h-full transition-all duration-500 hover:-translate-y-2 hover:border-ekam-primary/20">
                {/* Green accent line */}
                <div className="h-1 bg-gradient-to-r from-[#4ade80] to-emerald-500" />

                <CardContent className="p-6">
                  {/* Category tag */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gray-50 border border-gray-100 text-xs font-medium text-gray-600">
                      {testimonial.category}
                    </span>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>

                  {/* Title and description */}
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-ekam-primary transition-colors">
                    {testimonial.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-5 leading-relaxed">
                    {testimonial.description}
                  </p>

                  {/* Video container */}
                  <div className="relative aspect-video rounded-xl overflow-hidden border border-gray-100 group-hover:border-ekam-primary/10 transition-colors bg-gray-50">
                    <iframe
                      className="w-full h-full"
                      src={testimonial.videoUrl}
                      title={testimonial.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Stats Row */}
        <div className={`grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-gray-100 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center">
            <p className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">80%</p>
            <p className="text-sm text-gray-600">Average reduction in manual effort</p>
          </div>
          <div className="text-center">
            <p className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">99%</p>
            <p className="text-sm text-gray-600">Document processing accuracy</p>
          </div>
          <div className="text-center">
            <p className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">2x</p>
            <p className="text-sm text-gray-600">Faster setup than industry standard</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonial;
