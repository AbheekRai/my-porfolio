import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ArrowRight } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Genomic Variant Interpretation Assistant (GenVIA)",
      year: "2025",
      description: "AI-powered assistant that annotates VCF files, scores pathogenicity, and provides variant interpretation using ClinVar, dbSNP, and curated databases with NLP-driven clinical significance prediction.",
      tech: ["Flask", "VEP", "spaCy", "BioBERT", "PubTator API", "PostgreSQL"],
      github: "#",
      demo: "#"
    },
    {
      title: "AI-Based Alzheimer's Research Database",
      year: "2024",
      description: "AI-powered database analyzing genes influencing Alzheimer's progression using various bioinformatics tools for comprehensive genetic analysis.",
      tech: ["Python", "Bioinformatics Tools", "Database", "AI/ML"],
      github: "#",
      demo: "#"
    },
    {
      title: "Shinsee Movie Rental Platform",
      year: "2025",
      description: "High-performance movie rental platform with seamless online subscriptions, scalable backend using Django and PostgreSQL for efficient digital content management.",
      tech: ["React", "Node.js", "Django", "PostgreSQL"],
      github: "#",
      demo: "#"
    },
    {
      title: "DNA Count Web App",
      year: "2024",
      description: "Web application for nucleotide counting to simplify genetic analysis processes for bioinformatics researchers with real-time processing capabilities.",
      tech: ["Python", "Flask", "Bioinformatics"],
      github: "#",
      demo: "#"
    },
    {
      title: "BioCompute Nexus",
      year: "2024",
      description: "Online portal hosting curated bioinformatics tools and databases including GenBank, UniProt, providing researchers with centralized access to essential resources.",
      tech: ["HTML", "CSS", "JavaScript", "Bioinformatics"],
      github: "#",
      demo: "#"
    },
    {
      title: "Sentiment Analysis Dashboard",
      year: "2024",
      description: "ML-powered sentiment analysis with geospatial visualization and real-time data processing for comprehensive social media monitoring.",
      tech: ["Python", "Scikit-learn", "Plotly", "Streamlit"],
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section className="container px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Projects
        </h2>
        <p className="text-lg text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          A showcase of my work spanning bioinformatics, machine learning, and full-stack development
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="glass glass-hover h-full">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                    <span className="text-sm text-primary">{project.year}</span>
                  </div>
                  <CardDescription className="text-gray-300">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs bg-primary/20 text-primary rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="flex-1">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button size="sm" className="button-gradient flex-1">
                      <ArrowRight className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ProjectsSection;
