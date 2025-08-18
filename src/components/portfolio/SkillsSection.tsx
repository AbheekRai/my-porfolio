
import { motion } from "framer-motion";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "◊ Programming",
      skills: ["Python", "R", "JavaScript", "SQL", "Bash"]
    },
    {
      title: "◈ Bioinformatics",
      skills: ["Biopython", "NCBI", "PDB", "CASTp", "PyMol", "UCSF Chimera"]
    },
    {
      title: "◯ ML/AI",
      skills: ["Scikit-learn", "Pandas", "NumPy", "Matplotlib", "PyTorch"]
    },
    {
      title: "◦ Web Dev",
      skills: ["Django", "Flask", "Streamlit", "React", "HTML/CSS", "Supabase"]
    },
    {
      title: "◘ DB/Cloud",
      skills: ["MySQL", "PostgreSQL", "MongoDB", "Git", "GitHub", "Vercel", "Netlify"]
    },
    {
      title: "◉ Other",
      skills: ["Jupyter", "Docker", "APIs", "Regex"]
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
          Skills & Tools
        </h2>
        <p className="text-lg text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Technologies and tools I work with across different domains
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass glass-hover rounded-xl p-6"
            >
              <h3 className="text-lg font-semibold mb-4 text-primary">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm bg-white/5 text-gray-200 rounded-full border border-white/10 hover:border-primary/50 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default SkillsSection;
