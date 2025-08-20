import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative container px-4 pt-40 pb-20"
    >
      <div className="absolute inset-0 -z-10 bg-[#0A0A0A]" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="inline-block mb-4 px-4 py-1.5 rounded-full glass"
      >
        <span className="text-sm font-medium">
          ◊ Bioinformatics + ML Enthusiast | Full-Stack Developer
        </span>
      </motion.div>

      <div className="max-w-4xl relative z-10">
        <h1 className="text-5xl md:text-7xl font-normal mb-4 tracking-tight text-left">
          <span className="text-gray-200">
            <TextGenerateEffect words="Hi, I'm " />
          </span>
          <span className="text-white font-medium">
            <TextGenerateEffect words="Abheek Rai" />
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-lg md:text-xl text-gray-200 mb-8 max-w-3xl text-left"
        >
          Building intelligent tools at the intersection of biology, data, and
          design. Final-year undergraduate passionate about translating
          biological data into intelligent systems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 items-start mb-8"
        >
          <Button size="lg" className="button-gradient">
            <Download className="mr-2 w-4 h-4" />
            Download Resume
          </Button>
          <Button
            size="lg"
            variant="link"
            className="text-white"
            onClick={() => scrollToSection("projects")}
          >
            View Projects <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex gap-4"
        >
          {/* GitHub */}
          <a
            href="https://github.com/AbheekRai"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="ghost" size="icon" className="glass">
              <Github className="w-5 h-5" />
            </Button>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/abheekrai/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="ghost" size="icon" className="glass">
              <Linkedin className="w-5 h-5" />
            </Button>
          </a>

          {/* Email */}
          <a href="mailto:abheek.2004@gmail.com">
            <Button variant="ghost" size="icon" className="glass">
              <Mail className="w-5 h-5" />
            </Button>
          </a>
        </motion.div>
      </div> {/* <-- this was missing in your code */}

      {/* Profile Image Placeholder */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="relative mx-auto max-w-5xl mt-20"
      >
        <div className="glass rounded-xl overflow-hidden">
          <img
            src="/place.jpg"
            alt="Abheek Rai"
            className="w-full h-96 object-cover"
          />
        </div>
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;
