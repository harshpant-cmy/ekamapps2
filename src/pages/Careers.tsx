
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Clock, Briefcase, Users, Zap, Heart, TrendingUp, CheckCircle2, Mail, Sparkles } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Careers = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  const values = [
    {
      icon: Zap,
      title: "Innovation First",
      description: "We embrace cutting-edge AI technologies and encourage experimentation to solve complex problems.",
      gradient: "from-amber-500 to-orange-500"
    },
    {
      icon: Users,
      title: "Collaborative Spirit",
      description: "Work alongside passionate experts who share knowledge and support each other's growth.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Heart,
      title: "Impact Driven",
      description: "Every project we take on creates real, measurable value for our clients and their customers.",
      gradient: "from-pink-500 to-rose-500"
    },
    {
      icon: TrendingUp,
      title: "Continuous Growth",
      description: "We invest in your learning with access to courses, conferences, and hands-on AI projects.",
      gradient: "from-emerald-500 to-teal-500"
    }
  ];

  const benefits = [
    "Competitive salary with performance bonuses",
    "Flexible remote-first work culture",
    "Health insurance coverage",
    "Learning & development budget",
    "Work on cutting-edge AI projects",
    "Collaborative and supportive team"
  ];

  const openPositions = [
    {
      id: 1,
      title: "Senior Full-Stack Developer",
      department: "Engineering",
      location: "Remote (India)",
      type: "Full-time",
      description: "Build AI-powered web applications using React, Node.js, and Python. Work on document processing, voice AI, and automation systems.",
      requirements: [
        "5+ years of full-stack development experience",
        "Proficiency in React, TypeScript, Node.js",
        "Experience with Python and AI/ML integration",
        "Strong problem-solving skills"
      ]
    },
    {
      id: 2,
      title: "AI/ML Engineer",
      department: "AI Research",
      location: "Remote (India)",
      type: "Full-time",
      description: "Design and implement AI solutions using LangChain, RAG systems, and document intelligence. Work directly with clients to understand and solve their automation needs.",
      requirements: [
        "3+ years of experience in ML/AI development",
        "Experience with LangChain, OpenAI, or similar",
        "Strong Python skills",
        "Knowledge of NLP and document processing"
      ]
    },
    {
      id: 3,
      title: "Product Designer",
      department: "Design",
      location: "Remote (India)",
      type: "Full-time",
      description: "Create intuitive user experiences for AI-powered applications. Design dashboards, conversational interfaces, and B2B SaaS products.",
      requirements: [
        "3+ years of product design experience",
        "Proficiency in Figma",
        "Experience with B2B SaaS design",
        "Strong portfolio showcasing UX work"
      ]
    }
  ];

  const handleApply = (position: string) => {
    const subject = encodeURIComponent(`Application for ${position} at Ekam`);
    const body = encodeURIComponent(`Hi,\n\nI am interested in applying for the ${position} position at Ekam.\n\nPlease find my resume attached.\n\nBest regards`);
    window.location.href = `mailto:careers@ekam.ai?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section - Light theme with purple gradient */}
      <section className="relative min-h-[80vh] flex items-center bg-gradient-to-br from-white via-purple-50/50 to-indigo-50/50 overflow-hidden">
        {/* Abstract shapes */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-purple-400/20 to-indigo-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-violet-400/15 to-purple-400/15 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-indigo-100/30 to-purple-100/30 rounded-full blur-3xl" />

        {/* Decorative elements */}
        <div className="absolute top-32 left-20 w-3 h-3 bg-purple-500 rounded-full animate-pulse hidden lg:block" />
        <div className="absolute top-48 right-32 w-2 h-2 bg-indigo-500 rounded-full animate-pulse hidden lg:block" />
        <div className="absolute bottom-32 left-1/4 w-4 h-4 bg-violet-400/50 rounded-full hidden lg:block" />
        <div className="absolute bottom-48 right-1/4 w-2 h-2 bg-purple-400 rounded-full animate-pulse hidden lg:block" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-indigo-100 border border-purple-200/50 mb-8">
                <Sparkles className="h-4 w-4 text-purple-600" />
                <span className="text-sm font-medium text-purple-700">We're Hiring</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Work at the heart
                <br />
                <span className="bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 bg-clip-text text-transparent">of AI innovation</span>
              </h1>

              <p className="text-lg md:text-xl text-gray-600 max-w-xl mb-10 leading-relaxed">
                Join our team of passionate builders creating AI solutions that transform how businesses operate.
                Everything that makes you who you are is welcome here.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="h-14 px-8 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-xl shadow-xl shadow-purple-500/25 hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-300 group font-semibold text-base"
                  onClick={() => document.getElementById('open-positions')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  View Open Positions
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-14 px-8 border-2 border-purple-200 text-purple-700 hover:bg-purple-50 hover:border-purple-300 rounded-xl transition-all duration-300 font-semibold text-base"
                  onClick={() => window.location.href = 'mailto:careers@ekam.ai'}
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Send Resume
                </Button>
              </div>
            </div>

            {/* Right Visual */}
            <div className={`relative transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
              <div className="relative">
                {/* Main card */}
                <div className="bg-white rounded-3xl shadow-2xl shadow-purple-500/10 border border-purple-100/50 p-8 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-100 to-indigo-100 rounded-bl-[100px]" />

                  <div className="relative">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-purple-500/30">
                        <Users className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">Join Our Team</h3>
                        <p className="text-gray-500">Build the future of AI</p>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl">
                        <p className="text-2xl font-bold text-purple-600">100%</p>
                        <p className="text-xs text-gray-500">Remote</p>
                      </div>
                      <div className="text-center p-4 bg-gradient-to-br from-violet-50 to-purple-50 rounded-xl">
                        <p className="text-2xl font-bold text-violet-600">Flex</p>
                        <p className="text-xs text-gray-500">Hours</p>
                      </div>
                      <div className="text-center p-4 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl">
                        <p className="text-2xl font-bold text-indigo-600">AI</p>
                        <p className="text-xs text-gray-500">First</p>
                      </div>
                    </div>

                    {/* Mini job cards */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl hover:bg-purple-50/50 transition-colors cursor-pointer">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center">
                            <Briefcase className="h-4 w-4 text-purple-600" />
                          </div>
                          <span className="text-sm font-medium text-gray-700">Full-Stack Developer</span>
                        </div>
                        <ArrowRight className="h-4 w-4 text-gray-400" />
                      </div>
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl hover:bg-purple-50/50 transition-colors cursor-pointer">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-indigo-100 flex items-center justify-center">
                            <Zap className="h-4 w-4 text-indigo-600" />
                          </div>
                          <span className="text-sm font-medium text-gray-700">AI/ML Engineer</span>
                        </div>
                        <ArrowRight className="h-4 w-4 text-gray-400" />
                      </div>
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl hover:bg-purple-50/50 transition-colors cursor-pointer">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-violet-100 flex items-center justify-center">
                            <Heart className="h-4 w-4 text-violet-600" />
                          </div>
                          <span className="text-sm font-medium text-gray-700">Product Designer</span>
                        </div>
                        <ArrowRight className="h-4 w-4 text-gray-400" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating badge */}
                <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-4 border border-purple-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center">
                      <CheckCircle2 className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">Growing Team</p>
                      <p className="text-xs text-gray-500">Always hiring talent</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ekam-primary/5 border border-ekam-primary/10 mb-6">
              <Heart className="h-4 w-4 text-ekam-primary" />
              <span className="text-sm font-medium text-ekam-primary">Why Ekam</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              A place to <span className="text-ekam-primary">grow and thrive</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're building a team of curious minds who want to push the boundaries of what's possible with AI.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div
                  key={index}
                  className={`group bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:border-ekam-primary/20 transition-all duration-500 hover:-translate-y-2 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`}
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${value.gradient} mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ekam-primary/5 border border-ekam-primary/10 mb-6">
                <Briefcase className="h-4 w-4 text-ekam-primary" />
                <span className="text-sm font-medium text-ekam-primary">Benefits & Perks</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                We take care of <span className="text-ekam-primary">our team</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We believe happy, healthy team members do their best work. That's why we offer comprehensive benefits to support you in every aspect of life.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                    </div>
                    <span className="text-gray-700 text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-ekam-primary via-[#012825] to-[#011a18] rounded-3xl p-8 lg:p-12 text-white">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] rounded-3xl" />
                <div className="relative">
                  <h3 className="text-2xl font-bold mb-4">Remote-First Culture</h3>
                  <p className="text-white/80 mb-6 leading-relaxed">
                    Work from anywhere in India. We believe in output over hours and trust our team to manage their time effectively.
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 px-3 py-2 bg-white/10 rounded-lg">
                      <MapPin className="h-4 w-4 text-[#55c5d1]" />
                      <span className="text-sm">Remote</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-2 bg-white/10 rounded-lg">
                      <Clock className="h-4 w-4 text-[#55c5d1]" />
                      <span className="text-sm">Flexible Hours</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="open-positions" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ekam-primary/5 border border-ekam-primary/10 mb-6">
              <Briefcase className="h-4 w-4 text-ekam-primary" />
              <span className="text-sm font-medium text-ekam-primary">Open Positions</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Find your <span className="text-ekam-primary">perfect role</span>
            </h2>
            <p className="text-lg text-gray-600">
              We're looking for talented individuals to join our growing team.
            </p>
          </div>

          <div className="space-y-6">
            {openPositions.map((position) => (
              <div
                key={position.id}
                className="bg-white border border-gray-200 rounded-2xl p-6 lg:p-8 hover:border-ekam-primary/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{position.title}</h3>
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-ekam-primary/10 text-ekam-primary rounded-full text-sm font-medium">
                        <Briefcase className="h-3.5 w-3.5" />
                        {position.department}
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                        <MapPin className="h-3.5 w-3.5" />
                        {position.location}
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                        <Clock className="h-3.5 w-3.5" />
                        {position.type}
                      </span>
                    </div>
                  </div>
                  <Button
                    className="bg-ekam-primary hover:bg-ekam-primary/90 text-white h-11 px-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group whitespace-nowrap"
                    onClick={() => handleApply(position.title)}
                  >
                    Apply Now
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>

                <p className="text-gray-600 mb-4">{position.description}</p>

                <div>
                  <p className="text-sm font-semibold text-gray-900 mb-2">Requirements:</p>
                  <ul className="grid sm:grid-cols-2 gap-2">
                    {position.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle2 className="h-4 w-4 text-ekam-primary flex-shrink-0 mt-0.5" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-ekam-primary via-[#012825] to-[#011a18] rounded-3xl p-8 lg:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
            <div className="relative">
              <Mail className="h-12 w-12 text-[#55c5d1] mx-auto mb-6" />
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Don't see a role that fits?
              </h2>
              <p className="text-white/70 mb-8 max-w-xl mx-auto">
                We're always looking for talented people. Send us your resume and tell us how you can contribute to our team.
              </p>
              <Button
                size="lg"
                className="h-14 px-8 bg-white text-ekam-primary hover:bg-gray-100 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 group font-semibold"
                onClick={() => window.location.href = 'mailto:careers@ekam.ai?subject=General Application'}
              >
                <Mail className="mr-2 h-5 w-5" />
                Send Your Resume
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;
