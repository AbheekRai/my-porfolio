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
            I’m a final-year Bioinformatics undergraduate passionate about 
            building intelligent systems that bridge biology and technology. 
            My journey spans wet-lab research at BHU on autophagy in Drosophila, to developing ML models at iNeuron.ai, and 
            contributing to open-source projects at OpenDev Collective.
          </p>

          <p className="text-lg text-gray-200 mb-8 leading-relaxed">
            Alongside research and development, I’ve engineered scalable 
            web applications, curated bioinformatics dashboards, and built 
            pipelines that integrate tools like FastQC, BWA, and GATK. 
            Beyond tech, I’ve been a silver medalist in inter-college 
            table tennis, an esports champion, and an active leader in 
            community initiatives through NSS.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-primary text-lg font-bold">★</span>
              </div>
              <h3 className="font-semibold text-primary">Open Source & Development</h3>
              <p className="text-sm text-gray-400">OpenDev, Web Apps, CI/CD</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-primary text-lg font-bold">◈</span>
              </div>
              <h3 className="font-semibold text-primary">Research & ML</h3>
              <p className="text-sm text-gray-400">BHU, iNeuron.ai, OpenDev</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-primary text-lg font-bold">▲</span>
              </div>
              <h3 className="font-semibold text-primary">Athletics & Leadership</h3>
              <p className="text-sm text-gray-400">Table Tennis, NSS, Esports</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
