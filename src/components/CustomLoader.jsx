import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const CustomLoader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 600); // Small buffer for visual comfort
          return 100;
        }
        const diff = Math.floor(Math.random() * 15) + 5; // Organic pacing steps
        return Math.min(prevProgress + diff, 100);
      });
    }, 80);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0, 
        y: '-100vh',
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
      }}
      className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-[#09090b] text-white"
    >
      <div className="relative flex flex-col items-center max-w-xs w-full px-6">
        {/* Glow Spheres */}
        <div className="absolute -top-16 w-32 h-32 bg-indigo-500/10 blur-3xl rounded-full animate-pulse-slow"></div>
        <div className="absolute -bottom-16 w-32 h-32 bg-cyan-500/10 blur-3xl rounded-full animate-pulse-slow"></div>

        {/* Brand Logo Card */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="relative flex h-24 w-24 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-2xl font-bold font-display tracking-widest text-indigo-400 shadow-2xl backdrop-blur-md mb-8"
        >
          <span className="text-white">&lt;</span>AK<span className="text-white"> /&gt;</span>
        </motion.div>

        {/* Progress Value */}
        <div className="font-display text-sm font-semibold tracking-wider text-gray-400 mb-2">
          COMPILING ASSETS... <span className="text-indigo-400 font-mono">{progress}%</span>
        </div>

        {/* Progress Track */}
        <div className="h-[3px] w-full bg-white/5 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.1, ease: 'easeOut' }}
            className="h-full bg-gradient-to-r from-violet-500 via-indigo-500 to-cyan-500"
          ></motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default CustomLoader;
