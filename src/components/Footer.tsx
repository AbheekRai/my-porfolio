import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="w-full py-12 mt-20">
      <div className="container px-4">
        <div className="glass glass-hover rounded-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="font-medium text-lg">Abheek Rai</h3>
              <p className="text-sm text-muted-foreground">
                Bioinformatics + ML Enthusiast. Building intelligent tools at the intersection of biology and technology.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon">
                  <Github className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Linkedin className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Mail className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Navigation</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#skills" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Skills
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Experience</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#experience" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Work History
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Resume
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Connect</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Get in Touch
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Collaboration
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/10">
            <p className="text-sm text-muted-foreground text-center">
              © {new Date().getFullYear()} Abheek Rai. All rights reserved. Built with passion for bioinformatics and technology.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
