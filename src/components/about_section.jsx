import { useEffect, useRef } from 'react';
import { DEVELOPER_PROFILE, EDUCATION } from '../constants/portfolio_constants';
import { GlassCard } from './glass_card';
import { AnimatedText } from './animated_text';
import { motion, useInView, useMotionValue, useSpring, useTransform, useScroll } from 'framer-motion';

// Animated Counter Component
const AnimatedCounter = ({ value, duration = 2, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: duration * 1000, bounce: 0 });
  const displayValue = useTransform(springValue, (latest) => Math.floor(latest));

  useEffect(() => {
    if (isInView) {
      setTimeout(() => {
        // Extract numeric part from value (e.g. "20+" -> 20, "100%" -> 100)
        const numeric = parseInt(String(value || '').replace(/[^0-9]/g, ''));
        if (!isNaN(numeric)) {
          motionValue.set(numeric);
        }
      }, delay * 1000);
    }
  }, [isInView, motionValue, value, delay]);

  // Suffix like '+', '%' etc.
  const suffix = String(value || '').replace(/[0-9]/g, '');

  return (
    <span ref={ref} className="flex items-baseline">
      <motion.span>{displayValue}</motion.span>
      <span>{suffix}</span>
    </span>
  );
};

export const AboutSection = () => {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <section id="about" className="relative py-32 overflow-hidden bg-slate-50 dark:bg-[#050505]">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 right-[-10%] w-[600px] h-[600px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-block px-4 py-1.5 rounded-full border border-indigo-500/20 bg-indigo-500/5 text-xs font-bold uppercase tracking-widest text-indigo-500 font-display shadow-sm shadow-indigo-500/10"
              >
                01. Professional Dossier
              </motion.span>
              <AnimatedText 
                text="Crafting High-Performance Cross-Platform Mobile Applications" 
                className="text-4xl md:text-5xl font-black font-display leading-tight text-gray-900 dark:text-white tracking-tight" 
              />
            </div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed font-medium"
            >
              {DEVELOPER_PROFILE.shortSummary}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="pl-6 border-l-4 border-indigo-500/50"
            >
              <p className="text-base md:text-lg text-gray-500 dark:text-gray-400 leading-relaxed font-medium">
                I leverage specialized design methodologies to craft components that are structurally robust yet visually fluid. With deep command over the Flutter rendering cycle, paint optimizations, and BLoC state-pipelines, I construct mobile solutions that excel under high stress.
              </p>
            </motion.div>
          </div>

          {/* Right Metrics Grid Column */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4 md:gap-6 mt-8 lg:mt-16">
            {DEVELOPER_PROFILE.metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.3 + (index * 0.1) }}
              >
                <GlassCard 
                  hoverEffect={true}
                  className="flex flex-col items-start justify-between h-full min-h-[160px] p-6 text-left border border-indigo-500/10 bg-white/60 dark:bg-slate-900/40 hover:border-indigo-500/30 hover:shadow-[0_15px_30px_-10px_rgba(99,102,241,0.15)] group"
                >
                  <div className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-indigo-500 dark:text-indigo-400 font-display">
                    {metric.label}
                  </div>
                  <div className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white font-display pt-6 transition-transform duration-500 group-hover:-translate-y-1">
                    <AnimatedCounter value={metric.value} delay={0.4 + (index * 0.1)} />
                  </div>
                  {/* Subtle inner gradient flare on hover */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-indigo-500/[0.03] to-cyan-500/[0.05] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Academic Foundation Section - Redesigned to Zig-Zag Layout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-32 relative"
        >
          <div className="text-center space-y-4 mb-20">
            <span className="inline-block px-4 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-[10px] font-bold uppercase tracking-widest text-cyan-500 font-display">
              02. Academic Foundation
            </span>
            <h3 className="text-3xl md:text-5xl font-black font-display text-gray-900 dark:text-white tracking-tight">
              Education & Credentials
            </h3>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Animated Scroll Line (Shorter version for Education) */}
            <div className="absolute left-[27px] md:left-[50%] top-0 bottom-0 w-[2px] bg-cyan-500/10 dark:bg-cyan-500/20 rounded-full overflow-hidden">
               <motion.div 
                 style={{ scaleY, originY: 0 }}
                 className="w-full h-full bg-gradient-to-b from-cyan-400 via-indigo-400 to-violet-500"
               />
            </div>

            <div className="space-y-12 md:space-y-20">
              {EDUCATION.map((edu, index) => {
                const isEven = index % 2 === 0;
                return (
                  <div key={edu.degree} className="relative flex flex-col md:flex-row items-center justify-between w-full group/timeline">
                    
                    {/* Center Node / Icon */}
                    <motion.div 
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ type: "spring", stiffness: 300, damping: 20, delay: index * 0.1 }}
                      className="absolute left-[12px] md:left-1/2 -translate-x-[0px] md:-translate-x-1/2 w-[32px] h-[32px] rounded-full bg-white dark:bg-slate-900 border-4 border-cyan-500/30 shadow-[0_0_20px_rgba(6,182,212,0.2)] dark:shadow-[0_0_20px_rgba(6,182,212,0.4)] flex items-center justify-center z-20 group-hover/timeline:border-indigo-400/50 transition-colors duration-500"
                    >
                      <div className="w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.8)] group-hover/timeline:bg-indigo-400 group-hover/timeline:shadow-[0_0_15px_rgba(99,102,241,0.8)] transition-all duration-500" />
                    </motion.div>

                    {/* Left Side (Empty on Mobile, Content on Desktop for Even) */}
                    <div className={`hidden md:flex flex-col w-[45%] ${isEven ? 'pr-8 lg:pr-16 text-right items-end' : 'opacity-0 pointer-events-none'}`}>
                      {isEven && (
                        <motion.div
                          initial={{ opacity: 0, x: -30 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true, margin: "-100px" }}
                          transition={{ duration: 0.6, delay: index * 0.15 }}
                          className="w-full"
                        >
                           <h4 className="font-display font-black text-xl lg:text-2xl text-gray-900 dark:text-white mb-2 tracking-tight">{edu.degree}</h4>
                           <div className="flex flex-col items-end gap-2 text-cyan-500 dark:text-cyan-400 font-bold mb-6 text-sm lg:text-base">
                             <span className="text-cyan-600 dark:text-cyan-300">{edu.institution}</span>
                             <span className="font-mono tracking-wider opacity-80 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20 whitespace-nowrap">Class of {edu.year}</span>
                           </div>
                        </motion.div>
                      )}
                    </div>

                    {/* Right Side / Mobile Card */}
                    <div className={`w-full md:w-[45%] pl-[60px] md:pl-0 ${!isEven ? 'md:pl-8 lg:pl-16 text-left' : 'md:text-left'}`}>
                      
                      {/* Mobile Header (Visible on Mobile, Hidden on Desktop for Even) */}
                      <div className={`md:hidden mb-4`}>
                           <h4 className="font-display font-black text-lg text-gray-900 dark:text-white mb-1.5">{edu.degree}</h4>
                           <div className="flex flex-col gap-2 text-cyan-500 dark:text-cyan-400 font-bold text-sm">
                             <span className="text-cyan-600 dark:text-cyan-300">{edu.institution}</span>
                             <span className="font-mono text-[10px] uppercase tracking-widest opacity-80 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20 self-start whitespace-nowrap">Class of {edu.year}</span>
                           </div>
                      </div>

                      {/* Desktop Header for Odd */}
                      {!isEven && (
                        <div className="hidden md:block mb-6">
                           <h4 className="font-display font-black text-xl lg:text-2xl text-gray-900 dark:text-white mb-2 tracking-tight">{edu.degree}</h4>
                           <div className="flex flex-col items-start gap-2 text-cyan-500 dark:text-cyan-400 font-bold mb-6 text-sm lg:text-base">
                             <span className="text-cyan-600 dark:text-cyan-300">{edu.institution}</span>
                             <span className="font-mono tracking-wider opacity-80 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20 whitespace-nowrap">Class of {edu.year}</span>
                           </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
