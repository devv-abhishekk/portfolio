import React from 'react';
import { DEVELOPER_PROFILE } from '../constants/data';
import { FiGithub, FiLinkedin, FiHeart } from 'react-icons/fi';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-indigo-500/10 bg-slate-950/20 py-8 dark:border-indigo-500/10 light:border-slate-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo Text */}
        <div className="font-display font-semibold tracking-wider text-gradient">
          &lt;AK.Dev /&gt;
        </div>

        {/* Copy Rights */}
        <div className="flex items-center text-sm text-gray-500 gap-1 dark:text-gray-500 light:text-slate-500">
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
            className="p-2 rounded-xl text-gray-500 hover:text-indigo-400 dark:text-gray-500 dark:hover:text-white light:text-slate-400 light:hover:text-indigo-600 transition-colors"
            aria-label="GitHub"
          >
            <FiGithub className="text-lg" />
          </a>
          <a
            href={DEVELOPER_PROFILE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl text-gray-500 hover:text-indigo-400 dark:text-gray-500 dark:hover:text-white light:text-slate-400 light:hover:text-indigo-600 transition-colors"
            aria-label="LinkedIn"
          >
            <FiLinkedin className="text-lg" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
