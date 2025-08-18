
import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/portfolio/HeroSection";
import AboutSection from "@/components/portfolio/AboutSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import SkillsSection from "@/components/portfolio/SkillsSection";
import ExperienceSection from "@/components/portfolio/ExperienceSection";
import ContactSection from "@/components/portfolio/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-foreground">
      <Navigation />
      
      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <div id="about" className="bg-black">
        <AboutSection />
      </div>

      {/* Projects Section */}
      <div id="projects" className="bg-black">
        <ProjectsSection />
      </div>

      {/* Skills Section */}
      <div id="skills" className="bg-black">
        <SkillsSection />
      </div>

      {/* Experience Section */}
      <div id="experience" className="bg-black">
        <ExperienceSection />
      </div>

      {/* Contact Section */}
      <div id="contact" className="bg-black">
        <ContactSection />
      </div>

      {/* Footer */}
      <div className="bg-black">
        <Footer />
      </div>
    </div>
  );
};

export default Index;
