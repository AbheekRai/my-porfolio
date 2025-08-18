import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
     {
      title: "Banaras Hindu University (BHU)",
      role: "Research Intern – Biochemistry Dept.",
      period: "May 2025 – Jul 2025",
      description:
        "Conducted lab experiments with Drosophila to study autophagy. Performed in-silico protein-ligand analysis with AutoDock and Chimera.",
      highlights: ["Molecular Biology", "In-silico Analysis", "Protein-Ligand Interactions"],
    },

    {
      title: "iNeuron.ai",
      role: "Machine Learning Intern",
      period: "Jul 2024 – Dec 2024",
      description:
        "Developed and optimized machine learning models in Python and R for data preprocessing, evaluation, and visualization. Improved processing time by 40% and model accuracy by 15%.",
      highlights: ["scikit-learn", "Python & R", "Data Analysis", "Model Optimization"],
    },
    {
      title: "OpenDev Collective",
      role: "Contributing Developer (Open Source)",
      period: "Mar 2024 – Present",
      description:
        "Refactored React codebase for a task automation tool, reducing bundle size by 30%. Implemented CI/CD pipelines with GitHub Actions and Docker.",
      highlights: ["React", "CI/CD", "Docker", "Open Source Contributions"],
    },
    {
      title: "National Service Scheme (NSS)",
      role: "Secretary / Community Leader",
      period: "2023 – Present",
      description:
        "Led a team of 20+ for rural outreach programs, impacting 150+ residents. Coordinated surveys, health initiatives, and awareness programs.",
      highlights: ["Leadership", "Community Service", "Team Management"],
    },
    {
      title: "BI-BT Club Synapse",
      role: "Sponsorship Lead",
      period: "2023",
      description:
        "Managed sponsorships and partnerships for bioinformatics club events and workshops.",
      highlights: ["Event Management", "Partnerships", "Networking"],
    },
  ];

  const achievements = [
    "★ Semi-finalist @ Novartis Biotech Leadership Camp (500+ teams)",
    "◆ Delivered scalable SaaS-style web solutions (React + Django)",
    "◯ Silver Medalist @ Inter-College Table Tennis & State-level Champion",
    "▲ Led initiatives that reached and supported 150+ rural residents",
  ];

  return (
    <section className="container px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experience & Achievements
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            My journey through internships, open-source contributions, leadership roles, and achievements
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Experience Column */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-primary">Experience</h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass glass-hover rounded-xl p-6"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-semibold">{exp.title}</h4>
                    <span className="text-sm text-primary">{exp.period}</span>
                  </div>
                  <p className="text-sm text-gray-400 mb-3">{exp.role}</p>
                  <p className="text-gray-200 mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="px-2 py-1 text-xs bg-primary/20 text-primary rounded-full"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Achievements Column */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-primary">Key Achievements</h3>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="glass glass-hover rounded-xl p-6"
            >
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg"
                  >
                    <span className="text-lg">{achievement}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <h4 className="font-semibold mb-4">Resume</h4>
                <p className="text-gray-400 text-sm mb-4">
                  Download my complete resume with detailed experience and projects.
                </p>
                <Button className="button-gradient w-full">
                  <Download className="mr-2 w-4 h-4" />
                  Download Resume (PDF)
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
