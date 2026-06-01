import { useState } from 'react';
import { PROJECTS } from '../constants/portfolio_constants';
import { AnimatedText } from './animated_text';
import { FaApple, FaGooglePlay } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const CATEGORIES = ["All", "Fintech", "Logistics", "Healthcare"];

export const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = activeFilter === "All"
    ? PROJECTS
    : PROJECTS.filter(project => 
        project.category.toLowerCase().includes(activeFilter.toLowerCase())
      );

  return (
    <section id="projects" className="relative py-32 bg-slate-50 dark:bg-[#050505] overflow-hidden">
      {/* Clean, subtle background */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-500/5 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full border border-gray-200 dark:border-white/10 bg-white/50 dark:bg-white/5 text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 font-display shadow-sm"
          >
            05. Case Studies
          </motion.span>
          <AnimatedText 
            text="Production Deployments" 
            className="text-4xl md:text-5xl lg:text-6xl font-black font-display leading-tight text-gray-900 dark:text-white tracking-tight" 
          />
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 dark:text-gray-400 text-base md:text-lg pt-4 font-medium"
          >
            A curated selection of robust native-hybrid applications shipped to production.
          </motion.p>
        </div>

        {/* Dynamic Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-16 max-w-lg mx-auto">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`relative px-5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 focus:outline-none cursor-pointer ${
                activeFilter === category
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 -translate-y-0.5"
                  : "border border-gray-200 dark:border-white/10 bg-white/50 dark:bg-white/5 text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-500/30 hover:bg-white/80 dark:hover:bg-slate-900/50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Clean, Spacious Grid with Framer Motion Layout animations */}
        <motion.div 
          layout
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => {
              return (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="group h-full"
                >
                  <div className="relative flex flex-col h-full rounded-[2rem] border border-gray-200/80 dark:border-white/10 bg-white dark:bg-slate-900/40 hover:bg-gray-50 dark:hover:bg-slate-900/60 transition-colors duration-500 p-8 md:p-10 lg:p-12 shadow-sm hover:shadow-xl dark:shadow-none overflow-hidden">
                    
                    {/* Subtle Top Accent Line */}
                    <div className="absolute top-0 left-10 w-16 h-1 bg-indigo-500 rounded-b-md opacity-50 group-hover:w-24 group-hover:opacity-100 transition-all duration-500" />

                    {/* Header Row */}
                    <div className="flex justify-between items-start mb-10">
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-50 dark:bg-indigo-500/10 text-2xl font-black font-display text-indigo-600 dark:text-indigo-400 shadow-sm group-hover:scale-105 transition-transform duration-500">
                        {project.initials}
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 font-display mt-2">
                        {project.category}
                      </span>
                    </div>

                    {/* Main Content */}
                    <div className="flex-1">
                      <h3 className="font-display font-black text-2xl md:text-3xl text-gray-900 dark:text-white mb-2 tracking-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-sm font-semibold text-indigo-500 dark:text-indigo-400 font-display mb-6">
                        {project.subtitle}
                      </p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base leading-relaxed mb-8 font-medium">
                        {project.description}
                      </p>
                    </div>

                    {/* Footer Stack */}
                    <div className="mt-auto border-t border-gray-100 dark:border-white/5 pt-8">
                      {/* Minimalist Tags */}
                      <div className="flex flex-wrap gap-2 mb-8">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[11px] font-bold font-mono text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-white/5 border border-gray-200/50 dark:border-white/5 px-3 py-1.5 rounded-lg"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Clean Action Links */}
                      <div className="flex flex-wrap items-center gap-4">
                        <div className="flex items-center gap-4 ml-auto">
                          {project.playStore && (
                            <a
                              href={project.playStore}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center text-[13px] font-bold text-gray-700 dark:text-gray-200 bg-white dark:bg-slate-800 border border-gray-200 dark:border-white/10 px-4 py-2 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:border-indigo-500/30 transition-all duration-300 group/btn"
                            >
                              <FaGooglePlay className="text-base mr-2 text-indigo-500 dark:text-indigo-400 group-hover/btn:scale-110 transition-transform" />
                              <span>Play Store</span>
                            </a>
                          )}

                          {project.appStore && (
                            <a
                              href={project.appStore}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center text-[13px] font-bold text-gray-700 dark:text-gray-200 bg-white dark:bg-slate-800 border border-gray-200 dark:border-white/10 px-4 py-2 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:border-indigo-500/30 transition-all duration-300 group/btn"
                            >
                              <FaApple className="text-lg mr-1.5 text-indigo-500 dark:text-indigo-400 group-hover/btn:scale-110 transition-transform" />
                              <span>App Store</span>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
