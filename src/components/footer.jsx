import { DEVELOPER_PROFILE } from '../constants/portfolio_constants';
import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi';
import { useCopyToClipboard } from '../hooks/use_copy_to_clipboard';
import { motion, AnimatePresence } from 'framer-motion';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [copiedField, copy] = useCopyToClipboard(2000);

  return (
    <footer className="relative z-10 border-t border-slate-200 bg-slate-50/50 dark:bg-slate-950/20 py-8 dark:border-indigo-500/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo Text */}
        <div className="font-display font-semibold tracking-wider text-gradient">
          &lt;AK.Dev /&gt;
        </div>

        {/* Copy Rights */}
        <div className="flex items-center text-sm text-slate-500 gap-1 dark:text-gray-500">
          <span>&copy; {currentYear} {DEVELOPER_PROFILE.name}. Made with</span>
          <FiHeart className="text-red-500 animate-pulse inline mx-0.5" />
          <span>in India.</span>
        </div>

        {/* Social Buttons */}
        <div className="flex items-center space-x-4">
          <a
            href={DEVELOPER_PROFILE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl text-slate-400 hover:text-indigo-600 dark:text-gray-500 dark:hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <FiGithub className="text-lg" />
          </a>
          <a
            href={DEVELOPER_PROFILE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl text-slate-400 hover:text-indigo-600 dark:text-gray-500 dark:hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <FiLinkedin className="text-lg" />
          </a>
          <div className="relative">
            <AnimatePresence>
              {copiedField === 'email' && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.8 }}
                  animate={{ opacity: 1, y: -35, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.8 }}
                  className="absolute left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-md shadow-lg whitespace-nowrap z-50 pointer-events-none"
                >
                  Copied!
                </motion.div>
              )}
            </AnimatePresence>
            <a
              href={`mailto:${DEVELOPER_PROFILE.email}`}
              onClick={() => copy(DEVELOPER_PROFILE.email, 'email')}
              className="p-2 rounded-xl text-slate-400 hover:text-indigo-600 dark:text-gray-500 dark:hover:text-white transition-colors block"
              aria-label="Email"
            >
              <FiMail className="text-lg" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
