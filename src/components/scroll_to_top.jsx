import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowUp } from 'react-icons/fi';
import { useScrollProgress } from '../hooks/use_scroll_progress';

export const ScrollToTop = () => {
  const { isThresholdExceeded: isVisible, scrollProgress: progress } = useScrollProgress(400);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const circumference = 2 * Math.PI * 20; // r = 20
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-[90] flex h-12 w-12 items-center justify-center rounded-full shadow-2xl focus:outline-none backdrop-blur-md border border-slate-200 bg-white/70 text-indigo-600 dark:border-indigo-500/20 dark:bg-slate-900/60 dark:text-indigo-400"
          aria-label="Scroll to top"
        >
          {/* Radial Progress Ring */}
          <svg className="absolute h-full w-full -rotate-90">
            <circle
              cx="24"
              cy="24"
              r="20"
              stroke="rgba(99, 102, 241, 0.15)"
              strokeWidth="2.5"
              fill="transparent"
            />
            <circle
              cx="24"
              cy="24"
              r="20"
              stroke="currentColor"
              strokeWidth="2.5"
              fill="transparent"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
            />
          </svg>
          <FiArrowUp className="text-lg relative" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
