import { Card, CardContent } from "@/components/ui/card";
import { Play, Quote } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const ClientTestimonial = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeVideo, setActiveVideo] = useState<number | null>(null);
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
      description: "How we transformed their content creation process with intelligent automation",
      videoUrl: "https://www.youtube.com/embed/6gp2a6llZYM",
      client: "Content Marketing"
    },
    {
      title: "Custom API Integration",
      description: "Finding relevant product information through intelligent AI agents",
      videoUrl: "https://www.youtube.com/embed/jM_dnvqkad8",
      client: "E-commerce"
    },
    {
      title: "Blog Automation Success",
      description: "Real feedback from our satisfied clients on AI-powered content creation",
      videoUrl: "https://www.youtube.com/embed/3BwP6GI7000",
      client: "Content Creation"
    }
  ];

  return (
    <section ref={sectionRef} id="testimonials" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-ekam-primary/[0.02] rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-ekam-primary/[0.02] rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ekam-primary/10 border border-ekam-primary/20 mb-6">
            <Play className="h-4 w-4 text-ekam-primary" />
            <span className="text-sm font-medium text-ekam-primary">Client Stories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-5">
            See Our Work in <span className="text-ekam-primary">Action</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Watch real implementations and hear directly from businesses we've helped transform
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${300 + index * 150}ms` }}
              onMouseEnter={() => setActiveVideo(index)}
              onMouseLeave={() => setActiveVideo(null)}
            >
              <Card className="group relative border-0 shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden rounded-2xl h-full bg-white hover:-translate-y-1">
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-ekam-primary"></div>

                {/* Decorative quote icon */}
                <div className="absolute top-4 right-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Quote className="h-12 w-12 text-ekam-primary" />
                </div>

                <CardContent className="p-6 relative">
                  {/* Category tag */}
                  <span className="inline-block px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-xs font-medium mb-4">
                    {testimonial.client}
                  </span>

                  {/* Title and description */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-ekam-primary transition-colors">
                    {testimonial.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-5 leading-relaxed">
                    {testimonial.description}
                  </p>

                  {/* Video container */}
                  <div className={`relative aspect-video rounded-xl overflow-hidden shadow-md ring-1 ring-gray-200 transition-all duration-300 ${activeVideo === index ? 'ring-2 ring-ekam-primary/30' : ''}`}>
                    <iframe
                      className="w-full h-full"
                      src={testimonial.videoUrl}
                      title={testimonial.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Simple trust indicator */}
        <div className={`text-center mt-14 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '700ms' }}>
          <p className="text-gray-500 text-sm">
            Trusted by businesses across industries for AI automation solutions
          </p>
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonial;
