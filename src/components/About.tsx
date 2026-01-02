
import { Card, CardContent } from "@/components/ui/card";
import { Award, Building, Users, Target, Sparkles, CheckCircle, Cpu, ArrowRight } from "lucide-react";
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
    { number: "25+", label: "Years Experience", icon: Award, color: "text-amber-600", bg: "bg-amber-50" },
    { number: "15+", label: "Leadership Years", icon: Users, color: "text-blue-600", bg: "bg-blue-50" },
    { number: "7+", label: "Years in AI", icon: Cpu, color: "text-purple-600", bg: "bg-purple-50" },
    { number: "100%", label: "Client Focus", icon: Target, color: "text-emerald-600", bg: "bg-emerald-50" },
  ];

  const credentials = [
    "India Today Group",
    "Lenskart",
    "Senior World",
    "Zecross (Founder)",
  ];

  return (
    <section ref={sectionRef} id="about" className="py-20 bg-gradient-to-b from-white via-gray-50/50 to-white relative overflow-hidden">
      {/* Subtle background decoration with light green tint */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(74,222,128,0.06),transparent)]"></div>
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#4ade80]/5 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-14 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ekam-primary/5 border border-ekam-primary/10 mb-6">
            <Sparkles className="h-4 w-4 text-ekam-primary" />
            <span className="text-sm font-medium text-ekam-primary">About Us</span>
          </div>
          <h2 className="heading-section text-gray-900 mb-4">
            Led by Experience, Driven by{" "}
            <span className="text-ekam-primary">Excellence</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            AI solutions crafted by an industry leader with deep understanding of cross-functional business challenges
          </p>
        </div>

        {/* Stats Grid */}
        <div className={`grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg hover:border-ekam-primary/20 transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-12 h-12 rounded-xl ${stat.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className={`h-6 w-6 ${stat.color}`} />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Founding Team Cards - Stacked with equal height */}
        <div className="flex flex-col gap-6 max-w-4xl mx-auto">
          {/* Nitin Gupta - Founder & CEO */}
          <Card className={`border border-gray-100 shadow-lg rounded-2xl overflow-hidden transition-all duration-700 delay-400 h-full ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="h-1 bg-gradient-to-r from-ekam-primary via-ekam-primary/70 to-ekam-primary"></div>
            <CardContent className="p-6 lg:p-8 h-full flex flex-col">
              <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start flex-1">
                {/* Profile Image */}
                <div className="relative flex-shrink-0">
                  <div className="w-36 h-36 rounded-2xl overflow-hidden border-4 border-white shadow-xl">
                    <img
                      src="/lovable-uploads/f51f535d-b175-4696-9d43-7c25ca27c315.png"
                      alt="Nitin Gupta - Founder & CEO"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-ekam-primary text-white text-xs font-semibold px-3 py-1 rounded-full shadow whitespace-nowrap">
                    Founder & CEO
                  </div>
                </div>

                {/* Info */}
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Nitin Gupta</h3>
                  <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                    Tech leader with <span className="font-semibold text-ekam-primary">19+ years</span> of experience,
                    including <span className="font-semibold text-ekam-primary">12+ years in leadership roles</span>,
                    specializing in AI solutions since 2018.
                  </p>

                  {/* Previous Companies */}
                  <div className="mb-4">
                    <p className="text-xs text-gray-500 mb-2 font-medium uppercase tracking-wide flex items-center justify-center sm:justify-start gap-2">
                      <Building className="h-3.5 w-3.5" />
                      Previous Experience
                    </p>
                    <div className="flex flex-wrap gap-1.5 justify-center sm:justify-start">
                      {credentials.map((company, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center gap-1 px-2.5 py-1 bg-gray-50 rounded-lg text-xs text-gray-600 font-medium border border-gray-100 hover:border-ekam-primary/20 hover:bg-ekam-primary/5 transition-all"
                        >
                          <CheckCircle className="h-3 w-3 text-ekam-primary" />
                          {company}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Expertise */}
                  <div className="mb-4">
                    <p className="text-xs text-gray-500 mb-2 font-medium uppercase tracking-wide flex items-center justify-center sm:justify-start gap-2">
                      <Target className="h-3.5 w-3.5" />
                      Expertise
                    </p>
                    <div className="flex flex-wrap gap-1.5 justify-center sm:justify-start">
                      {["AI/ML Architecture", "LangChain & RAG", "Computer Vision", "System Design"].map((skill, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center gap-1 px-2.5 py-1 bg-gray-50 rounded-lg text-xs text-gray-600 font-medium border border-gray-100 hover:border-ekam-primary/20 hover:bg-ekam-primary/5 transition-all"
                        >
                          <CheckCircle className="h-3 w-3 text-ekam-primary" />
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* LinkedIn link */}
                  <a
                    href="https://www.linkedin.com/in/nitin26gupta/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[#0A66C2] hover:bg-[#004182] text-white rounded-lg transition-all duration-300 group text-sm font-medium"
                  >
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    Connect on LinkedIn
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Aditya Gupta - CPO */}
          <Card className={`border border-gray-100 shadow-lg rounded-2xl overflow-hidden transition-all duration-700 delay-500 h-full ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="h-1 bg-gradient-to-r from-ekam-primary via-ekam-primary/70 to-ekam-primary"></div>
            <CardContent className="p-6 lg:p-8 h-full flex flex-col">
              <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start flex-1">
                {/* Profile Image */}
                <div className="relative flex-shrink-0">
                  <div className="w-36 h-36 rounded-2xl overflow-hidden border-4 border-white shadow-xl">
                    <img
                      src="/lovable-uploads/aditya-gupta.png"
                      alt="Aditya Gupta - CPO"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-ekam-primary text-white text-xs font-semibold px-3 py-1 rounded-full shadow whitespace-nowrap">
                    Founding Team - CPO
                  </div>
                </div>

                {/* Info */}
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Aditya Gupta</h3>
                  <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                    Product leader with <span className="font-semibold text-ekam-primary">10+ years</span> of experience
                    in the Financial Industry. Deep expertise in product strategy and customer-centric design.
                  </p>

                  {/* Previous Experience */}
                  <div className="mb-4">
                    <p className="text-xs text-gray-500 mb-2 font-medium uppercase tracking-wide flex items-center justify-center sm:justify-start gap-2">
                      <Building className="h-3.5 w-3.5" />
                      Previous Experience
                    </p>
                    <div className="flex flex-wrap gap-1.5 justify-center sm:justify-start">
                      {["Axis Max Life Insurance", "SBI"].map((company, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center gap-1 px-2.5 py-1 bg-gray-50 rounded-lg text-xs text-gray-600 font-medium border border-gray-100 hover:border-ekam-primary/20 hover:bg-ekam-primary/5 transition-all"
                        >
                          <CheckCircle className="h-3 w-3 text-ekam-primary" />
                          {company}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Expertise */}
                  <div className="mb-4">
                    <p className="text-xs text-gray-500 mb-2 font-medium uppercase tracking-wide flex items-center justify-center sm:justify-start gap-2">
                      <Target className="h-3.5 w-3.5" />
                      Expertise
                    </p>
                    <div className="flex flex-wrap gap-1.5 justify-center sm:justify-start">
                      {["Product Strategy", "Fintech", "Operations", "Customer Experience"].map((skill, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center gap-1 px-2.5 py-1 bg-gray-50 rounded-lg text-xs text-gray-600 font-medium border border-gray-100 hover:border-ekam-primary/20 hover:bg-ekam-primary/5 transition-all"
                        >
                          <CheckCircle className="h-3 w-3 text-ekam-primary" />
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* LinkedIn link */}
                  <a
                    href="https://www.linkedin.com/in/adityagupta1991/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[#0A66C2] hover:bg-[#004182] text-white rounded-lg transition-all duration-300 group text-sm font-medium"
                  >
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    Connect on LinkedIn
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Trust indicator */}
        <div className={`mt-10 text-center transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-3 px-5 py-3 bg-gray-50 rounded-full border border-gray-100">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-600">Actively serving clients globally</span>
            </div>
            <span className="w-px h-4 bg-gray-200"></span>
            <span className="text-sm text-gray-600">End-to-end AI implementation expertise</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
