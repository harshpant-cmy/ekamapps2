
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ClientLogos from "@/components/ClientLogos";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import ExpertiseStatement from "@/components/ExpertiseStatement";
import TurrantShowcase from "@/components/TurrantShowcase";
import Process from "@/components/Process";
import TechStack from "@/components/TechStack";
import ClientTestimonial from "@/components/ClientTestimonial";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Fixed header with smart background */}
      <Header />

      {/* Hero Section - Full viewport with dark theme */}
      <Hero />

      {/* Main content sections */}
      <main className="relative">
        {/* Trust indicators - client logos */}
        <ClientLogos />

        {/* Services - What we build */}
        <Services />

        {/* Expertise statement - HatchWorks inspired */}
        <ExpertiseStatement />

        {/* Projects showcase - Our work */}
        <Projects />

        {/* Flagship product showcase */}
        <TurrantShowcase />

        {/* How it works - Process flow */}
        <Process />

        {/* Technology Stack */}
        <TechStack />

        {/* Testimonials with videos */}
        <ClientTestimonial />

        {/* Contact and FAQ */}
        <Contact />
        <FAQ />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
