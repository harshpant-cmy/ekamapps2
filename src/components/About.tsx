
import { Card, CardContent } from "@/components/ui/card";
import { Award, Building, Users, Target, Sparkles, CheckCircle } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const About = () => {
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

  const stats = [
    { number: "19+", label: "Years of Experience", icon: Award, description: "Industry expertise" },
    { number: "12+", label: "Years in Leadership", icon: Users, description: "Executive roles" },
    { number: "7+", label: "Years in AI", icon: Building, description: "Since 2018" },
    { number: "100%", label: "Client Focus", icon: Target, description: "Results driven" },
  ];

  const credentials = [
    "India Today Group",
    "Lenskart",
    "Senior World",
    "Zecross (Founder)",
  ];

  return (
    <section ref={sectionRef} id="about" className="py-24 bg-gradient-to-b from-white via-gray-50/50 to-gray-50 relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-ekam-primary/[0.02] rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-ekam-secondary/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:32px_32px]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ekam-primary/10 border border-ekam-primary/20 mb-6">
            <Sparkles className="h-4 w-4 text-ekam-primary" />
            <span className="text-sm font-medium text-ekam-primary">About Us</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-5 leading-tight">
            Led by Experience, Driven by
            <span className="text-ekam-primary"> Excellence</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            AI solutions crafted by an industry leader with deep understanding of cross-functional business challenges
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Founder Card - Takes 3 columns */}
          <div className={`lg:col-span-3 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <Card className="border-0 shadow-2xl rounded-3xl overflow-hidden bg-white relative">
              {/* Premium accent */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-ekam-primary via-ekam-primary/80 to-ekam-primary/60"></div>

              <CardContent className="p-8 lg:p-10">
                <div className="flex flex-col sm:flex-row gap-8">
                  {/* Profile Image */}
                  <div className="relative flex-shrink-0 mx-auto sm:mx-0">
                    <div className="w-36 h-36 rounded-2xl overflow-hidden ring-4 ring-ekam-primary/10 shadow-xl">
                      <img
                        src="/lovable-uploads/f51f535d-b175-4696-9d43-7c25ca27c315.png"
                        alt="Nitin Gupta - Founder & CEO"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Info */}
                  <div className="flex-1 text-center sm:text-left">
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">Nitin Gupta</h3>
                      <p className="text-ekam-primary font-semibold text-lg">Founder & CEO</p>
                    </div>

                    <p className="text-gray-600 leading-relaxed mb-5">
                      Tech leader with <span className="font-semibold text-gray-900">19+ years</span> of experience,
                      including <span className="font-semibold text-gray-900">12+ years in leadership roles</span>,
                      specializing in AI solutions since 2018. Passionate about delivering practical AI solutions
                      that drive measurable impact.
                    </p>

                    {/* Previous Companies */}
                    <div className="mb-6">
                      <p className="text-sm text-gray-500 mb-3 font-medium uppercase tracking-wide">Previous Experience</p>
                      <div className="flex flex-wrap gap-2">
                        {credentials.map((company, index) => (
                          <span
                            key={index}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 rounded-lg text-sm text-gray-700 font-medium"
                          >
                            <CheckCircle className="h-3.5 w-3.5 text-ekam-primary" />
                            {company}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* LinkedIn link */}
                    <a
                      href="https://www.linkedin.com/in/nitin26gupta/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-[#0A66C2] transition-colors group"
                    >
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="#0A66C2" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                      <span className="font-medium group-hover:underline">LinkedIn</span>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Stats Grid - Takes 2 columns */}
          <div className={`lg:col-span-2 grid grid-cols-2 gap-4 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div
                  key={index}
                  className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100/80 hover:border-ekam-primary/20 relative overflow-hidden"
                >
                  {/* Subtle hover gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-ekam-primary/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                  <div className="relative">
                    <div className="w-11 h-11 rounded-xl bg-ekam-primary/10 flex items-center justify-center mb-4 group-hover:bg-ekam-primary/15 transition-colors">
                      <IconComponent className="h-5 w-5 text-ekam-primary" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-1 group-hover:text-ekam-primary transition-colors">
                      {stat.number}
                    </div>
                    <div className="text-sm font-medium text-gray-700 mb-0.5">{stat.label}</div>
                    <div className="text-xs text-gray-400">{stat.description}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Trust indicators bar */}
        <div className={`mt-12 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-100 p-6 shadow-sm">
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <span>Actively serving clients globally</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-ekam-primary" />
                <span>Proven track record with enterprise clients</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-ekam-primary" />
                <span>End-to-end AI implementation expertise</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
