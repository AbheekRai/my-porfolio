import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section className="container px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          About Me
        </h2>
        
        <div className="glass rounded-xl p-8 md:p-12">
          <p className="text-lg text-gray-200 mb-6 leading-relaxed">
            I'm a final-year undergraduate passionate about translating biological data into intelligent systems. 
            I combine machine learning, web development, and statistics to solve problems that matter — from 
            Alzheimer's research to genomic tools.
          </p>
          
          <p className="text-lg text-gray-200 mb-8 leading-relaxed">
            My journey spans from competitive table tennis (state-level champion) to leading NSS initiatives 
            in rural villages, and from building bioinformatics dashboards to exploring the latest in ML research. 
            Inspired by my brother's user-testing journey and driven by curiosity about tech innovation.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-primary text-lg font-bold">★</span>
              </div>
              <h3 className="font-semibold text-primary">State Champion</h3>
              <p className="text-sm text-gray-400">Table Tennis</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-primary text-lg font-bold">◈</span>
              </div>
              <h3 className="font-semibold text-primary">Research Focus</h3>
              <p className="text-sm text-gray-400">Alzheimer's & Genomics</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-primary text-lg font-bold">▲</span>
              </div>
              <h3 className="font-semibold text-primary">NSS Leader</h3>
              <p className="text-sm text-gray-400">Community Service</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
