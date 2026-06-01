import { useState, useEffect } from 'react';
import { useTheme } from '../hooks/use_theme';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import confetti from 'canvas-confetti';

const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' }
];

export const NavigationBar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Framer Motion viewport scroll hook
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const triggerCelebrate = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.1, x: 0.8 }, // Focus near CTA button
      colors: ['#7c3aed', '#4f46e5', '#06b6d4'],
    });
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    if (href === '#contact') {
      triggerCelebrate();
    }

    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // fixed header height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'glass-header py-4 shadow-lg' 
            : 'bg-transparent py-6 border-b border-transparent'
        }`}
      >
        {/* Dynamic Horizontal Scroll Progress Bar */}
        <motion.div 
          style={{ scaleX }} 
          className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-violet-500 via-indigo-500 to-cyan-500 origin-left"
        />

        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo Brand */}
          <a 
            href="#" 
            onClick={(e) => handleNavClick(e, '#')}
            className="font-display font-bold text-xl tracking-wider select-none text-gradient flex items-center"
          >
            <span className="text-gray-900 dark:text-white mr-1">&lt;</span>
            AK
            <span className="text-gray-900 dark:text-white ml-1">.Dev /&gt;</span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-sm font-medium tracking-wide text-gray-400 dark:text-gray-400 dark:hover:text-white hover:text-indigo-600 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Actions: Theme Toggle + Contact CTA */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl border border-slate-200 hover:border-indigo-500/30 hover:bg-indigo-500/5 text-slate-500 hover:text-indigo-600 dark:border-indigo-500/10 dark:hover:border-indigo-500/30 dark:hover:bg-indigo-500/5 dark:text-gray-400 dark:hover:text-indigo-400 transition-all duration-300 focus:outline-none"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <FiSun className="text-lg" /> : <FiMoon className="text-lg" />}
            </button>

            {/* Let's Connect CTA */}
            <button
              onClick={(e) => handleNavClick(e, '#contact')}
              className="relative group overflow-hidden rounded-xl px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white shadow-md focus:outline-none cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 transition-all duration-300 group-hover:scale-105"></div>
              <span className="relative">Let's Connect</span>
            </button>
          </div>

          {/* Mobile Right Block: Theme Switcher + Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl text-slate-500 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-white"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <FiSun className="text-lg" /> : <FiMoon className="text-lg" />}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-xl text-slate-500 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-white"
              aria-label="Toggle Mobile Menu"
            >
              {isMobileMenuOpen ? <FiX className="text-xl" /> : <FiMenu className="text-xl" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Glass Dropdown Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[74px] left-0 right-0 z-40 md:hidden p-6 border-b border-slate-200 dark:border-white/5 bg-slate-50/95 dark:bg-slate-950/90 backdrop-blur-xl shadow-2xl flex flex-col space-y-4"
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-base font-medium text-slate-500 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-white transition-colors py-2 border-b border-slate-200 dark:border-white/[0.03]"
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={(e) => handleNavClick(e, '#contact')}
              className="w-full text-center rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-sm py-3 transition-colors mt-2 block shadow-lg focus:outline-none cursor-pointer"
            >
              Let's Connect
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavigationBar;
