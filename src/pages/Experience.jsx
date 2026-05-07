import React from 'react';
import { EXPERIENCES } from '../constants/data';
import { GlassCard } from '../components/GlassCard';
import { AnimatedText } from '../components/AnimatedText';
import { motion, useScroll, useSpring } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

export const Experience = () => {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="experience" className="relative py-32 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-24 space-y-4">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full border border-indigo-500/20 bg-indigo-500/5 text-xs font-bold uppercase tracking-widest text-indigo-500 font-display shadow-sm shadow-indigo-500/10"
          >
            04. Career Experience
          </motion.span>
          <AnimatedText 
            text="Chronicle of Mobile Architectural Excellence" 
            className="text-4xl md:text-5xl lg:text-6xl font-black font-display leading-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-indigo-800 to-gray-900 dark:from-white dark:via-indigo-200 dark:to-gray-400 justify-center pb-2" 
          />
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 dark:text-gray-400 text-base md:text-lg max-w-2xl mx-auto pt-4 font-medium"
          >
            A solid trajectory of building secure, robust cross-platform nodes and integrating advanced cloud features.
          </motion.p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-5xl mx-auto">
          {/* Animated Scroll Line */}
          <div className="absolute left-[27px] md:left-[50%] top-0 bottom-0 w-[2px] bg-indigo-500/10 dark:bg-indigo-500/20 rounded-full overflow-hidden">
             <motion.div 
               style={{ scaleY, originY: 0 }}
               className="w-full h-full bg-gradient-to-b from-indigo-400 via-cyan-400 to-violet-500"
             />
          </div>

          <div className="space-y-12 md:space-y-24">
            {EXPERIENCES.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={exp.role + exp.company} className="relative flex flex-col md:flex-row items-center justify-between w-full group/timeline">
                  
                  {/* Center Node / Icon */}
                  <motion.div 
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ type: "spring", stiffness: 300, damping: 20, delay: index * 0.1 }}
                    className="absolute left-[12px] md:left-1/2 -translate-x-[0px] md:-translate-x-1/2 w-[32px] h-[32px] rounded-full bg-white dark:bg-slate-900 border-4 border-indigo-500/30 shadow-[0_0_20px_rgba(99,102,241,0.2)] dark:shadow-[0_0_20px_rgba(99,102,241,0.4)] flex items-center justify-center z-20 group-hover/timeline:border-cyan-400/50 transition-colors duration-500"
                  >
                    <div className="w-2 h-2 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.8)] group-hover/timeline:bg-cyan-400 group-hover/timeline:shadow-[0_0_15px_rgba(6,182,212,0.8)] transition-all duration-500" />
                  </motion.div>

                  {/* Desktop Header Container (w-45%) */}
                  <div className={`hidden md:flex flex-col w-[45%] ${isEven ? 'order-1 pr-8 lg:pr-16 text-right items-end' : 'order-2 pl-8 lg:pl-16 text-left items-start'}`}>
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6, delay: index * 0.15 }}
                      className="w-full"
                    >
                       <h3 className="font-display font-black text-2xl lg:text-3xl text-gray-900 dark:text-white mb-2 tracking-tight">{exp.role}</h3>
                       <div className={`flex flex-col gap-2 text-indigo-500 dark:text-indigo-400 font-bold mb-6 text-sm lg:text-base ${isEven ? 'items-end' : 'items-start'}`}>
                         <span className="text-indigo-600 dark:text-indigo-300">{exp.company}</span>
                         <span className="font-mono tracking-wider opacity-80 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20 whitespace-nowrap">{exp.period}</span>
                       </div>
                    </motion.div>
                  </div>

                  {/* Desktop/Mobile Card Container (w-45%) */}
                  <div className={`w-full md:w-[45%] pl-[60px] md:pl-0 flex flex-col ${isEven ? 'order-2 md:pl-8 lg:pl-16' : 'order-1 md:pr-8 lg:pr-16'}`}>
                    
                    {/* Mobile Header (Visible on Mobile) */}
                    <div className="md:hidden mb-4">
                         <h3 className="font-display font-black text-xl text-gray-900 dark:text-white mb-1.5">{exp.role}</h3>
                         <div className="flex flex-col gap-2 text-indigo-500 dark:text-indigo-400 font-bold text-sm">
                           <span>{exp.company}</span>
                           <span className="font-mono text-[10px] uppercase tracking-widest opacity-80 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20 self-start whitespace-nowrap">{exp.period}</span>
                         </div>
                    </div>

                    {/* Card */}
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? 30 : -30, y: 20 }}
                      whileInView={{ opacity: 1, x: 0, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                      className="group"
                    >
                      <GlassCard
                        hoverEffect={false}
                        className="relative p-6 md:p-8 border border-indigo-500/10 bg-white/40 dark:bg-slate-900/40 backdrop-blur-xl shadow-xl transition-all duration-500 group-hover/timeline:border-indigo-500/40 group-hover/timeline:shadow-[0_20px_40px_-15px_rgba(99,102,241,0.2)]"
                      >
                        <ul className="space-y-4 text-gray-600 dark:text-gray-300 text-sm md:text-base leading-relaxed relative z-10">
                          {exp.achievements.map((ach, achIdx) => (
                            <li key={achIdx} className="flex items-start group/item">
                              <span className="mt-1 mr-3 text-indigo-400 dark:text-indigo-500 shrink-0 transition-transform duration-300 group-hover/item:translate-x-1 group-hover/item:text-cyan-400">
                                <FiArrowRight className="w-4 h-4" />
                              </span>
                              <span className="font-medium group-hover/item:text-gray-900 dark:group-hover/item:text-white transition-colors duration-300">
                                {ach}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </GlassCard>
                    </motion.div>
                  </div>
                  
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
