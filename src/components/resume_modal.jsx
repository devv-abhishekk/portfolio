import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiX, FiPrinter, FiBriefcase, FiBookOpen, FiFileText, FiExternalLink } from 'react-icons/fi';
import { DEVELOPER_PROFILE, EXPERIENCES, EDUCATION, SKILLS } from '../constants/portfolio_constants';

export const ResumeModal = ({ isOpen, onClose }) => {
  // Listen for escape key press to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden'; // Lock background scroll
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
      />

      {/* Modal Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 30 }}
        transition={{ type: 'spring', damping: 25, stiffness: 250 }}
        className="relative w-full max-w-4xl h-[85vh] bg-white/90 dark:bg-slate-950/90 border border-slate-200 dark:border-white/10 rounded-3xl shadow-2xl flex flex-col overflow-hidden z-10 backdrop-blur-xl print:p-0 print:border-none print:shadow-none print:h-auto print:static print:w-full"
      >
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 dark:border-white/5 bg-slate-50/50 dark:bg-slate-900/30 shrink-0 print:hidden">
          <div className="flex items-center gap-2">
            <FiFileText className="text-indigo-500 text-xl" />
            <span className="font-display font-bold text-slate-800 dark:text-white">Curriculum Vitae</span>
          </div>

          <div className="flex items-center gap-3">
            {/* Drive Link Button */}
            {DEVELOPER_PROFILE.resumeUrl && (
              <a
                href={DEVELOPER_PROFILE.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 transition-colors focus:outline-none cursor-pointer"
              >
                <FiExternalLink className="text-sm" />
                <span>Google Drive</span>
              </a>
            )}

            {/* Print Button */}
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 transition-colors focus:outline-none cursor-pointer"
            >
              <FiPrinter className="text-sm" />
              <span>Print / PDF</span>
            </button>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 transition-colors focus:outline-none cursor-pointer"
              aria-label="Close modal"
            >
              <FiX className="text-xl" />
            </button>
          </div>
        </div>

        {/* Resume Content Window */}
        <div className="flex-1 overflow-y-auto p-6 md:p-10 font-sans print:overflow-visible print:p-0">
          <div className="max-w-3xl mx-auto space-y-8 print:space-y-6">
            
            {/* Header info */}
            <div className="border-b border-slate-200 dark:border-white/10 pb-8 text-center md:text-left print:pb-4">
              <h2 className="text-3xl md:text-4xl font-black font-display text-slate-900 dark:text-white tracking-tight">
                {DEVELOPER_PROFILE.name}
              </h2>
              <p className="text-indigo-600 dark:text-indigo-400 font-semibold text-lg mt-1.5 font-display">
                {DEVELOPER_PROFILE.title}
              </p>
              
              <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 mt-4 text-sm text-slate-500 dark:text-slate-400 font-medium">
                <span>{DEVELOPER_PROFILE.email}</span>
                <span>{DEVELOPER_PROFILE.phone}</span>
                <span>{DEVELOPER_PROFILE.location}</span>
                <a href={DEVELOPER_PROFILE.github} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500 transition-colors">GitHub</a>
                <a href={DEVELOPER_PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500 transition-colors">LinkedIn</a>
              </div>
            </div>

            {/* Summary */}
            <div className="space-y-2">
              <h3 className="text-sm font-bold uppercase tracking-widest text-indigo-500 dark:text-indigo-400 font-display">Summary</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
                {DEVELOPER_PROFILE.shortSummary}
              </p>
            </div>

            {/* Technical Skills Checklist */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-widest text-indigo-500 dark:text-indigo-400 font-display">Technical Expertise</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {SKILLS.map((skillGroup) => (
                  <div key={skillGroup.category} className="border border-slate-100 dark:border-white/5 bg-slate-50/50 dark:bg-white/[0.02] p-4 rounded-2xl">
                    <h4 className="font-display font-bold text-xs text-slate-800 dark:text-slate-200 uppercase tracking-wider mb-2">{skillGroup.category}</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {skillGroup.items.map((skill) => (
                        <span key={skill.name} className="text-xs font-medium bg-white dark:bg-white/5 border border-slate-200/60 dark:border-white/5 text-slate-600 dark:text-slate-300 px-2 py-1 rounded-md">
                          {skill.name}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Career Timeline */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <FiBriefcase className="text-indigo-500 text-sm" />
                <h3 className="text-sm font-bold uppercase tracking-widest text-indigo-500 dark:text-indigo-400 font-display">Work History</h3>
              </div>
              
              <div className="space-y-6">
                {EXPERIENCES.map((exp, idx) => (
                  <div key={idx} className="relative pl-5 before:content-[''] before:absolute before:left-0 before:top-1.5 before:w-2 before:h-2 before:rounded-full before:bg-indigo-500">
                    <div className="flex flex-wrap justify-between items-baseline mb-1">
                      <h4 className="font-bold text-slate-800 dark:text-white text-base">{exp.role}</h4>
                      <span className="font-mono text-xs text-slate-400 dark:text-slate-500">{exp.period}</span>
                    </div>
                    <div className="text-sm font-semibold text-slate-600 dark:text-slate-400 mb-2">{exp.company}</div>
                    <ul className="list-disc list-inside text-xs md:text-sm text-slate-500 dark:text-slate-300 space-y-1 pl-1 leading-relaxed">
                      {exp.achievements.map((ach, achIdx) => (
                        <li key={achIdx}>{ach}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Academic Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <FiBookOpen className="text-indigo-500 text-sm" />
                <h3 className="text-sm font-bold uppercase tracking-widest text-indigo-500 dark:text-indigo-400 font-display">Education</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {EDUCATION.map((edu, idx) => (
                  <div key={idx} className="border border-slate-100 dark:border-white/5 bg-slate-50/50 dark:bg-white/[0.02] p-4 rounded-2xl flex flex-col justify-between">
                    <div>
                      <h4 className="font-bold text-slate-800 dark:text-white text-sm">{edu.degree}</h4>
                      <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">{edu.institution}</div>
                    </div>
                    <span className="font-mono text-[10px] text-indigo-500 dark:text-indigo-400 font-bold tracking-widest uppercase mt-3">Class of {edu.year}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ResumeModal;
