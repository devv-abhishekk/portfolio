import React, { useState } from 'react';
import { DEVELOPER_PROFILE } from '../constants/data';
import { GlassCard } from '../components/GlassCard';
import { AnimatedText } from '../components/AnimatedText';
import { FiMail, FiMapPin, FiPhone, FiCopy, FiCheck, FiArrowRight } from 'react-icons/fi';
import { motion } from 'framer-motion';

export const Contact = () => {
  const [copiedField, setCopiedField] = useState(null);

  const handleCopy = async (text, field) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <section id="contact" className="relative py-32 overflow-hidden bg-slate-50 dark:bg-[#050505]">
      {/* Premium Ambient Background */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-indigo-500/10 via-violet-500/5 to-transparent blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-500/10 via-blue-500/5 to-transparent blur-[150px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Massive Typography */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-indigo-500/20 bg-indigo-500/5 text-xs font-bold uppercase tracking-widest text-indigo-500 font-display shadow-sm"
              >
                <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
                <span>05. Communication Node</span>
              </motion.span>
              <AnimatedText 
                text="Let's build something extraordinary together." 
                className="text-5xl md:text-6xl lg:text-7xl font-black font-display leading-[1.1] text-transparent bg-clip-text bg-gradient-to-br from-gray-900 via-indigo-800 to-gray-600 dark:from-white dark:via-indigo-200 dark:to-gray-400 tracking-tight pb-2" 
              />
            </div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-gray-600 dark:text-gray-400 text-lg md:text-xl leading-relaxed font-medium max-w-lg"
            >
              Open for senior roles, technical consulting, and high-impact mobile contract work. Reach out directly through the channels below.
            </motion.p>
          </div>

          {/* Right Column: Stacked Interactive Contact Cards */}
          <div className="lg:col-span-6 w-full space-y-6">
            
            {/* Email Row */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <GlassCard hoverEffect={true} className="relative group overflow-hidden border-indigo-500/10 bg-white/60 dark:bg-slate-900/40 !p-2 transition-all duration-500 hover:border-indigo-500/30 hover:bg-white/80 dark:hover:bg-slate-900/60 rounded-3xl cursor-pointer hover:-translate-y-1">
                <div 
                  onClick={() => handleCopy(DEVELOPER_PROFILE.email, 'email')}
                  className="flex items-center p-4 md:p-6 space-x-4 md:space-x-6 w-full"
                >
                  <div className="flex h-14 w-14 md:h-16 md:w-16 shrink-0 items-center justify-center rounded-[1.25rem] bg-indigo-50 dark:bg-white/5 text-indigo-500 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-500 shadow-sm border border-indigo-100 dark:border-white/10 group-hover:scale-110 group-hover:-rotate-6">
                    <FiMail className="text-xl md:text-2xl" />
                  </div>
                  <div className="flex-1 text-left min-w-0">
                    <span className="text-[10px] md:text-[11px] uppercase font-bold text-gray-500 tracking-widest block font-display mb-1 md:mb-1.5">
                      Direct Mail
                    </span>
                    <span className="text-base md:text-xl font-bold text-gray-800 dark:text-gray-100 truncate block font-sans group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {DEVELOPER_PROFILE.email}
                    </span>
                  </div>
                  <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-gray-100 dark:bg-white/5 text-gray-400 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-500/20 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-all duration-300">
                    {copiedField === 'email' ? <FiCheck className="text-lg md:text-xl text-emerald-500" /> : <FiCopy className="text-lg md:text-xl" />}
                  </div>
                </div>
              </GlassCard>
            </motion.div>

            {/* Phone Row */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <GlassCard hoverEffect={true} className="relative group overflow-hidden border-cyan-500/10 bg-white/60 dark:bg-slate-900/40 !p-2 transition-all duration-500 hover:border-cyan-500/30 hover:bg-white/80 dark:hover:bg-slate-900/60 rounded-3xl cursor-pointer hover:-translate-y-1">
                <div 
                  onClick={() => handleCopy(DEVELOPER_PROFILE.phone, 'phone')}
                  className="flex items-center p-4 md:p-6 space-x-4 md:space-x-6 w-full"
                >
                  <div className="flex h-14 w-14 md:h-16 md:w-16 shrink-0 items-center justify-center rounded-[1.25rem] bg-cyan-50 dark:bg-white/5 text-cyan-500 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-500 shadow-sm border border-cyan-100 dark:border-white/10 group-hover:scale-110 group-hover:-rotate-6">
                    <FiPhone className="text-xl md:text-2xl" />
                  </div>
                  <div className="flex-1 text-left min-w-0">
                    <span className="text-[10px] md:text-[11px] uppercase font-bold text-gray-500 tracking-widest block font-display mb-1 md:mb-1.5">
                      Direct Phone
                    </span>
                    <span className="text-base md:text-xl font-bold text-gray-800 dark:text-gray-100 block font-sans group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                      {DEVELOPER_PROFILE.phone}
                    </span>
                  </div>
                  <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-gray-100 dark:bg-white/5 text-gray-400 group-hover:bg-cyan-50 dark:group-hover:bg-cyan-500/20 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-all duration-300">
                    {copiedField === 'phone' ? <FiCheck className="text-lg md:text-xl text-emerald-500" /> : <FiCopy className="text-lg md:text-xl" />}
                  </div>
                </div>
              </GlassCard>
            </motion.div>

            {/* Location Row */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <GlassCard hoverEffect={true} className="relative group overflow-hidden border-violet-500/10 bg-white/60 dark:bg-slate-900/40 !p-2 transition-all duration-500 hover:border-violet-500/30 hover:bg-white/80 dark:hover:bg-slate-900/60 rounded-3xl hover:-translate-y-1">
                <div className="flex items-center p-4 md:p-6 space-x-4 md:space-x-6 w-full">
                  <div className="flex h-14 w-14 md:h-16 md:w-16 shrink-0 items-center justify-center rounded-[1.25rem] bg-violet-50 dark:bg-white/5 text-violet-500 group-hover:bg-violet-500 group-hover:text-white transition-all duration-500 shadow-sm border border-violet-100 dark:border-white/10 group-hover:scale-110 group-hover:-rotate-6">
                    <FiMapPin className="text-xl md:text-2xl" />
                  </div>
                  <div className="flex-1 text-left min-w-0">
                    <span className="text-[10px] md:text-[11px] uppercase font-bold text-gray-500 tracking-widest block font-display mb-1 md:mb-1.5">
                      HQ Location
                    </span>
                    <span className="text-base md:text-xl font-bold text-gray-800 dark:text-gray-100 block font-sans group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                      {DEVELOPER_PROFILE.location}
                    </span>
                  </div>
                  <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center text-gray-400 group-hover:text-violet-500 transition-all duration-300 group-hover:translate-x-1">
                    <FiArrowRight className="text-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </GlassCard>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
