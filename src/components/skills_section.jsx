import { SKILLS } from '../constants/portfolio_constants';
import { AnimatedText } from './animated_text';
import { motion } from 'framer-motion';

export const SkillsSection = () => {
  return (
    <section id="skills" className="relative py-32 overflow-hidden bg-slate-50 dark:bg-[#050505]">
      {/* Ultra-Clean Ambient Background */}
      <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-indigo-500/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-24 space-y-4">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full border border-gray-200 dark:border-white/10 bg-white/50 dark:bg-white/5 text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 font-display shadow-sm"
          >
            03. Technical Capabilities
          </motion.span>
          <AnimatedText 
            text="Engineered for Scalability" 
            className="text-4xl md:text-5xl lg:text-6xl font-black font-display leading-tight text-gray-900 dark:text-white tracking-tight pb-2" 
          />
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 dark:text-gray-400 text-base md:text-lg pt-4 font-medium"
          >
            A specialized developer ecosystem built around state reliability, modular packages, and secure profiles.
          </motion.p>
        </div>

        {/* Clean Pill Clusters */}
        <div className="space-y-16 max-w-5xl mx-auto">
          {SKILLS.map((skillGroup, groupIdx) => {
            return (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: groupIdx * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <h3 className="font-display font-black text-xl md:text-2xl text-gray-800 dark:text-gray-200 tracking-tight mb-8">
                  {skillGroup.category}
                </h3>
                
                <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                  {skillGroup.items.map((skill, skillIdx) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.1 + (skillIdx * 0.05) }}
                      className="px-6 py-3 rounded-full border border-gray-200/80 dark:border-white/10 bg-white/40 dark:bg-slate-900/30 backdrop-blur-xl shadow-sm hover:shadow-md hover:-translate-y-1 hover:border-indigo-500/30 dark:hover:border-indigo-400/30 hover:bg-white/60 dark:hover:bg-slate-900/50 transition-all duration-300 group cursor-default"
                    >
                      <span className="font-bold text-gray-700 dark:text-gray-300 font-sans tracking-wide text-sm md:text-base group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
