import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { createLucideIcon } from "lucide-react";

export const Reddit = createLucideIcon("Reddit", [
  [
    "path",
    {
      d: "M440.3 203.9c-15.5 0-28.3 12.8-28.3 28.3s12.8 28.3 28.3 28.3 28.3-12.8 28.3-28.3-12.8-28.3-28.3-28.3zM71.7 203.9c-15.5 0-28.3 12.8-28.3 28.3s12.8 28.3 28.3 28.3 28.3-12.8 28.3-28.3-12.8-28.3-28.3-28.3zm367.5 66.4c-11.4-7.9-26-12.4-42.4-12.4-8.2 0-16.6 1-25.1 3-27.4-19.5-66.5-31.5-108.6-31.5s-81.2 12-108.6 31.5c-8.5-2-16.9-3-25.1-3-16.4 0-31 4.5-42.4 12.4-12 8.4-18.7 19.8-18.7 32.1 0 41.5 61.1 75.3 136.2 77.2l-9.5 44.8c-.9 4.3 1.9 8.4 6.2 9.3 4.3.9 8.4-1.9 9.3-6.2l9.8-46.1c8.4.7 17 1.1 25.8 1.1s17.4-.4 25.8-1.1l9.8 46.1c.8 3.8 4.1 6.4 7.9 6.4.6 0 1.3-.1 1.9-.2 4.3-.9 7.1-5 6.2-9.3l-9.5-44.8c75.1-1.9 136.2-35.7 136.2-77.2 0-12.4-6.7-23.8-18.7-32.1zM256 330c-25.8 0-46.8-11.2-46.8-25s21-25 46.8-25 46.8 11.2 46.8 25-21 25-46.8 25z",
    },
  ],
]);


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
  <h4 className="font-semibold mb-4 text-lg sm:text-xl">Reddit</h4>
  <p className="text-gray-400 text-sm sm:text-base mb-4 max-w-lg">
    Check out my Reddit profile for discussions, insights, and my social activity.
  </p>

  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
    <a
      href="https://www.reddit.com/user/NSFW__Jinx69/"
      target="_blank"
      rel="noopener noreferrer"
      className="w-full sm:w-auto"
    >
      <Button className="button-gradient w-full sm:w-auto flex items-center justify-center">
        <Reddit className="mr-2 w-4 h-4" />
        Visit My Reddit
      </Button>
    </a>
  </div>
</div>


            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
