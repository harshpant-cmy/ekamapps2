
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import AIAgents from "@/components/AIAgents";
import TechStack from "@/components/TechStack";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <AIAgents />
      <TechStack />
      <Process />
      <Contact />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
