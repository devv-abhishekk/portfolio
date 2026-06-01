import { useState } from 'react';
import { DEVELOPER_PROFILE } from '../constants/portfolio_constants';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiArrowRight, FiDownload } from 'react-icons/fi';
import { GlassCard } from './glass_card';
import { ResumeModal } from './resume_modal';
import { useTypingEffect } from '../hooks/use_typing_effect';
import { useCopyToClipboard } from '../hooks/use_copy_to_clipboard';

export const HeroSection = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [copiedField, copy] = useCopyToClipboard(2000);
  const subText = useTypingEffect(DEVELOPER_PROFILE.roles || []);

  const scrollSmoothTo = (id) => {
    const el = document.querySelector(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elRect = el.getBoundingClientRect().top;
      const elPos = elRect - bodyRect;
      window.scrollTo({
        top: elPos - offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="relative min-h-[95vh] flex items-center justify-center overflow-hidden py-24 bg-transparent">
      {/* Background Orbs & Dynamic Lean Elements */}
      <div className="absolute top-[10%] right-[5%] w-[500px] h-[500px] bg-violet-600/10 blur-[120px] rounded-full animate-float pointer-events-none" />
      <div className="absolute bottom-[10%] left-[5%] w-[600px] h-[600px] bg-cyan-600/10 blur-[150px] rounded-full animate-float pointer-events-none" style={{ animationDelay: '2s' }} />
      <div className="absolute top-[50%] left-[50%] w-[800px] h-[200px] -translate-x-1/2 -translate-y-1/2 bg-indigo-500/5 blur-[100px] transform -skew-y-12 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center relative z-10">
        
        {/* Left Content */}
        <div className="lg:col-span-7 flex flex-col space-y-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center space-x-3 rounded-full border border-indigo-500/20 bg-indigo-500/5 px-5 py-2 text-xs font-bold uppercase tracking-widest text-indigo-500 max-w-fit shadow-lg shadow-indigo-500/10 backdrop-blur-sm"
          >
            <span className="relative flex h-2.5 w-2.5 mr-1">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)]"></span>
            </span>
            Available for Senior Roles
          </motion.div>

          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-7xl lg:text-[5rem] font-black font-display tracking-tighter text-gray-900 dark:text-white leading-[1.1]"
            >
              Hi, I'm <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 drop-shadow-sm">{DEVELOPER_PROFILE.name}</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-xl md:text-3xl font-bold text-gray-600 dark:text-gray-300 min-h-[40px] flex items-center tracking-tight"
            >
              <span className="mr-3 font-display text-gray-400 dark:text-gray-500 font-medium">Specialized in</span>
              <span className="text-indigo-600 dark:text-indigo-400 border-r-[3px] border-indigo-500 pr-1 typed-cursor">
                {subText}
              </span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-base md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl font-medium"
          >
            I architect elegant, performance-tuned cross-platform mobile masterpieces. Focused on robust state engines, native API integrations, and pixel-perfect micro-interactions.
          </motion.p>

          {/* Actions CTA Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <button
              onClick={() => scrollSmoothTo('#projects')}
              className="flex items-center justify-center space-x-2 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm px-8 py-4 transition-all duration-300 shadow-[0_10px_30px_-10px_rgba(79,70,229,0.5)] hover:shadow-[0_15px_40px_-10px_rgba(79,70,229,0.7)] hover:-translate-y-1 group focus:outline-none cursor-pointer"
            >
              <span>Explore Projects</span>
              <FiArrowRight className="text-lg transition-transform group-hover:translate-x-1.5" />
            </button>
            <button
              onClick={() => scrollSmoothTo('#contact')}
              className="flex items-center justify-center space-x-2 rounded-2xl border border-indigo-500/20 hover:border-indigo-500/40 bg-white/5 hover:bg-indigo-500/10 text-gray-800 dark:text-white font-bold text-sm px-8 py-4 transition-all duration-300 hover:-translate-y-1 shadow-xl backdrop-blur-sm cursor-pointer"
            >
              <span>Contact Me</span>
            </button>
            <button
              onClick={() => setIsResumeOpen(true)}
              className="flex items-center justify-center space-x-2 rounded-2xl border border-cyan-500/20 hover:border-cyan-500/40 bg-cyan-500/5 hover:bg-cyan-500/10 text-gray-800 dark:text-white font-bold text-sm px-6 py-4 transition-all duration-300 hover:-translate-y-1 shadow-xl backdrop-blur-sm cursor-pointer focus:outline-none"
            >
              <FiDownload className="text-lg mr-1 text-cyan-500" />
              <span>Resume</span>
            </button>
          </motion.div>

          {/* Social Row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.6 }}
            className="flex items-center space-x-6 pt-8 text-gray-400 dark:text-gray-500"
          >
            <a
              href={DEVELOPER_PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-600 dark:hover:text-indigo-400 hover:-translate-y-1 transition-all duration-300 p-2"
              aria-label="GitHub"
            >
              <FiGithub className="text-2xl" />
            </a>
            <a
              href={DEVELOPER_PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-600 dark:hover:text-cyan-400 hover:-translate-y-1 transition-all duration-300 p-2"
              aria-label="LinkedIn"
            >
              <FiLinkedin className="text-2xl" />
            </a>
            <div className="relative">
              <AnimatePresence>
                {copiedField === 'email' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.8 }}
                    animate={{ opacity: 1, y: -40, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.8 }}
                    className="absolute left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-lg shadow-lg whitespace-nowrap z-50 pointer-events-none"
                  >
                    Email Copied!
                  </motion.div>
                )}
              </AnimatePresence>
              <a
                href={`mailto:${DEVELOPER_PROFILE.email}`}
                onClick={() => copy(DEVELOPER_PROFILE.email, 'email')}
                className="hover:text-violet-600 dark:hover:text-violet-400 hover:-translate-y-1 transition-all duration-300 p-2 block"
                aria-label="Email"
              >
                <FiMail className="text-2xl" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right Animated Dashboard Cards */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 relative flex items-center justify-center md:justify-end lg:pr-8"
        >
          {/* Main Visual Code Card mapped with GlassCard */}
          <GlassCard className="w-full max-w-md border-indigo-500/15 bg-white/40 dark:bg-[#0a0a0c]/80 !p-8 shadow-2xl relative z-20">
            <div className="flex items-center space-x-2 pb-5 mb-5 border-b border-indigo-500/10">
              <span className="w-3.5 h-3.5 rounded-full bg-red-500/90 shadow-[0_0_10px_rgba(239,68,68,0.5)]"></span>
              <span className="w-3.5 h-3.5 rounded-full bg-yellow-500/90 shadow-[0_0_10px_rgba(234,179,8,0.5)]"></span>
              <span className="w-3.5 h-3.5 rounded-full bg-emerald-500/90 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></span>
              <span className="text-xs text-indigo-500 dark:text-gray-400 pl-3 font-mono font-bold tracking-widest">abhishek.dart</span>
            </div>
            
            <pre className="font-mono text-xs md:text-sm leading-[1.8] text-indigo-900 dark:text-indigo-200 overflow-x-auto">
              <code>
                <span className="text-violet-600 dark:text-purple-400">import</span> <span className="text-cyan-600 dark:text-cyan-400">'package:flutter/material.dart'</span>;<br/><br/>
                <span className="text-indigo-600 dark:text-blue-400">class</span> <span className="text-amber-600 dark:text-yellow-300">AbhishekKumar</span> <span className="text-indigo-600 dark:text-blue-400">extends</span> <span className="text-amber-600 dark:text-yellow-300">Developer</span> &#123;<br/>
                &nbsp;&nbsp;<span className="text-gray-400 dark:text-gray-500 italic">// Core Configuration</span><br/>
                &nbsp;&nbsp;<span className="text-indigo-600 dark:text-blue-400">final</span> String role = <span className="text-cyan-600 dark:text-cyan-400">"{DEVELOPER_PROFILE.roles[0]}"</span>;<br/>
                &nbsp;&nbsp;<span className="text-indigo-600 dark:text-blue-400">final</span> String exp = <span className="text-cyan-600 dark:text-cyan-400">"4+ Years"</span>;<br/>
                &nbsp;&nbsp;<span className="text-indigo-600 dark:text-blue-400">final</span> List tech = [<span className="text-cyan-600 dark:text-cyan-400">"Flutter"</span>, <span className="text-cyan-600 dark:text-cyan-400">"BLoC"</span>, <span className="text-cyan-600 dark:text-cyan-400">"Dart"</span>];<br/><br/>
                &nbsp;&nbsp;<span className="text-amber-600 dark:text-yellow-300">Widget</span> <span className="text-emerald-600 dark:text-green-400">buildMasterpiece</span>() &#123;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-violet-600 dark:text-purple-400">return</span> <span className="text-amber-600 dark:text-yellow-300">AppUI</span>(<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;performance: <span className="text-violet-600 dark:text-purple-400">Max</span>,<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;uxFidelity: <span className="text-violet-600 dark:text-purple-400">Flawless</span>,<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;stateEngine: <span className="text-cyan-600 dark:text-cyan-400">"Solid"</span>,<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;);<br/>
                &nbsp;&nbsp;&#125;<br/>
                &#125;
              </code>
            </pre>
          </GlassCard>

          {/* Floating Miniature Overlay Metrics */}
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -bottom-6 -left-6 md:-left-12 bg-white/70 dark:bg-slate-900/70 rounded-2xl p-5 border border-cyan-500/20 shadow-[0_15px_40px_-10px_rgba(6,182,212,0.3)] backdrop-blur-xl flex flex-col max-w-[180px] z-30"
          >
            <div className="flex items-center gap-2 mb-1">
              <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
              <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">UI FIDELITY</span>
            </div>
            <span className="text-3xl font-black text-cyan-500 dark:text-cyan-400 font-display">100%</span>
            <div className="w-full bg-cyan-500/10 h-1.5 rounded-full mt-2 overflow-hidden border border-cyan-500/10">
              <div className="bg-gradient-to-r from-cyan-300 to-cyan-500 h-full w-[100%]" />
            </div>
          </motion.div>
        </motion.div>
      </div>

      <AnimatePresence>
        {isResumeOpen && (
          <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
        )}
      </AnimatePresence>
    </section>
  );
};

export default HeroSection;
