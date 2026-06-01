import { useState } from 'react';
import { DEVELOPER_PROFILE } from '../constants/portfolio_constants';
import { GlassCard } from './glass_card';
import { AnimatedText } from './animated_text';
import { FiMail, FiMapPin, FiPhone, FiCopy, FiCheck, FiArrowRight, FiSend, FiRefreshCw } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { useCopyToClipboard } from '../hooks/use_copy_to_clipboard';
import confetti from 'canvas-confetti';

export const ContactSection = () => {
  const [copiedField, copy] = useCopyToClipboard(2000);
  
  // Contact Form States
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' })); // Clear error on keystroke
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formState.name.trim()) newErrors.name = 'Name is required';
    if (!formState.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!formState.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formState.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    
    // Simulate sending message via network request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Trigger celebration confetti
      confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6, x: 0.5 },
        colors: ['#7c3aed', '#4f46e5', '#06b6d4'],
      });
    }, 2000);
  };

  const resetForm = () => {
    setFormState({ name: '', email: '', subject: '', message: '' });
    setErrors({});
    setIsSuccess(false);
  };

  return (
    <section id="contact" className="relative py-32 overflow-hidden bg-slate-50 dark:bg-[#050505]">
      {/* Premium Ambient Background */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-indigo-500/10 via-violet-500/5 to-transparent blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-500/10 via-blue-500/5 to-transparent blur-[150px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
          
          {/* Left Column: Massive Typography + Interactive Contact Info Cards */}
          <div className="lg:col-span-6 space-y-12">
            <div className="space-y-4">
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-indigo-500/20 bg-indigo-500/5 text-xs font-bold uppercase tracking-widest text-indigo-500 font-display shadow-sm"
              >
                <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
                <span>06. Communication Node</span>
              </motion.span>
              <AnimatedText 
                text="Let's build something extraordinary together." 
                className="text-4xl md:text-5xl lg:text-6xl font-black font-display leading-[1.1] text-transparent bg-clip-text bg-gradient-to-br from-gray-900 via-indigo-800 to-gray-600 dark:from-white dark:via-indigo-200 dark:to-gray-400 tracking-tight pb-2" 
              />
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="text-gray-600 dark:text-gray-400 text-base md:text-lg leading-relaxed font-medium max-w-lg"
              >
                Open for senior roles, technical consulting, and high-impact mobile contract work. Reach out directly or drop a line through the form.
              </motion.p>
            </div>

            {/* Stacked Interactive Contact Cards */}
            <div className="w-full space-y-5 max-w-lg">
              {/* Email Row */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <GlassCard hoverEffect={true} className="relative group overflow-hidden border-indigo-500/10 bg-white/60 dark:bg-slate-900/40 !p-2 transition-all duration-500 hover:border-indigo-500/30 hover:bg-white/80 dark:hover:bg-slate-900/60 rounded-3xl cursor-pointer hover:-translate-y-1">
                  <div 
                    onClick={() => copy(DEVELOPER_PROFILE.email, 'email')}
                    className="flex items-center p-4 md:p-5 space-x-4 md:space-x-5 w-full"
                  >
                    <div className="flex h-12 w-12 md:h-14 md:w-14 shrink-0 items-center justify-center rounded-[1.25rem] bg-indigo-50 dark:bg-white/5 text-indigo-500 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-500 shadow-sm border border-indigo-100 dark:border-white/10 group-hover:scale-110 group-hover:-rotate-6">
                      <FiMail className="text-lg md:text-xl" />
                    </div>
                    <div className="flex-1 text-left min-w-0">
                      <span className="text-[9px] md:text-[10px] uppercase font-bold text-gray-500 tracking-widest block font-display mb-1">
                        Direct Mail
                      </span>
                      <span className="text-sm md:text-base font-bold text-gray-800 dark:text-gray-100 truncate block font-sans group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                        {DEVELOPER_PROFILE.email}
                      </span>
                    </div>
                    <div className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-white/5 text-gray-400 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-500/20 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-all duration-300">
                      {copiedField === 'email' ? <FiCheck className="text-base text-emerald-500" /> : <FiCopy className="text-base" />}
                    </div>
                  </div>
                </GlassCard>
              </motion.div>

              {/* Phone Row */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <GlassCard hoverEffect={true} className="relative group overflow-hidden border-cyan-500/10 bg-white/60 dark:bg-slate-900/40 !p-2 transition-all duration-500 hover:border-cyan-500/30 hover:bg-white/80 dark:hover:bg-slate-900/60 rounded-3xl cursor-pointer hover:-translate-y-1">
                  <div 
                    onClick={() => copy(DEVELOPER_PROFILE.phone, 'phone')}
                    className="flex items-center p-4 md:p-5 space-x-4 md:space-x-5 w-full"
                  >
                    <div className="flex h-12 w-12 md:h-14 md:w-14 shrink-0 items-center justify-center rounded-[1.25rem] bg-cyan-50 dark:bg-white/5 text-cyan-500 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-500 shadow-sm border border-cyan-100 dark:border-white/10 group-hover:scale-110 group-hover:-rotate-6">
                      <FiPhone className="text-lg md:text-xl" />
                    </div>
                    <div className="flex-1 text-left min-w-0">
                      <span className="text-[9px] md:text-[10px] uppercase font-bold text-gray-500 tracking-widest block font-display mb-1">
                        Direct Phone
                      </span>
                      <span className="text-sm md:text-base font-bold text-gray-800 dark:text-gray-100 block font-sans group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                        {DEVELOPER_PROFILE.phone}
                      </span>
                    </div>
                    <div className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-white/5 text-gray-400 group-hover:bg-cyan-50 dark:group-hover:bg-cyan-500/20 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-all duration-300">
                      {copiedField === 'phone' ? <FiCheck className="text-base text-emerald-500" /> : <FiCopy className="text-base" />}
                    </div>
                  </div>
                </GlassCard>
              </motion.div>

              {/* Location Row */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <GlassCard hoverEffect={true} className="relative group overflow-hidden border-violet-500/10 bg-white/60 dark:bg-slate-900/40 !p-2 transition-all duration-500 hover:border-violet-500/30 hover:bg-white/80 dark:hover:bg-slate-900/60 rounded-3xl hover:-translate-y-1">
                  <div className="flex items-center p-4 md:p-5 space-x-4 md:space-x-5 w-full">
                    <div className="flex h-12 w-12 md:h-14 md:w-14 shrink-0 items-center justify-center rounded-[1.25rem] bg-violet-50 dark:bg-white/5 text-violet-500 group-hover:bg-violet-500 group-hover:text-white transition-all duration-500 shadow-sm border border-violet-100 dark:border-white/10 group-hover:scale-110 group-hover:-rotate-6">
                      <FiMapPin className="text-lg md:text-xl" />
                    </div>
                    <div className="flex-1 text-left min-w-0">
                      <span className="text-[9px] md:text-[10px] uppercase font-bold text-gray-500 tracking-widest block font-display mb-1">
                        HQ Location
                      </span>
                      <span className="text-sm md:text-base font-bold text-gray-800 dark:text-gray-100 block font-sans group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                        {DEVELOPER_PROFILE.location}
                      </span>
                    </div>
                    <div className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center text-gray-400 group-hover:text-violet-500 transition-all duration-300 group-hover:translate-x-1">
                      <FiArrowRight className="text-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            </div>
          </div>

          {/* Right Column: Premium Contact Form */}
          <div className="lg:col-span-6 w-full">
            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.div
                  key="contact-form"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <GlassCard hoverEffect={false} className="border-slate-200 dark:border-white/10 bg-white/40 dark:bg-slate-900/40 backdrop-blur-xl shadow-xl w-full p-8 md:p-10 rounded-[2.5rem]">
                    <h3 className="font-display font-black text-2xl text-gray-900 dark:text-white mb-6 tracking-tight">
                      Send a Message
                    </h3>
                    
                    <form onSubmit={handleSubmit} className="space-y-5">
                      
                      {/* Name input */}
                      <div className="space-y-1">
                        <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-gray-400 font-display">Name</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formState.name}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 rounded-xl border bg-white/50 dark:bg-slate-950/40 text-gray-800 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all ${
                            errors.name ? 'border-red-500/50' : 'border-slate-200 dark:border-white/10 focus:border-indigo-500'
                          }`}
                          placeholder="Your Name"
                          disabled={isSubmitting}
                        />
                        {errors.name && <span className="text-[11px] font-bold text-red-500">{errors.name}</span>}
                      </div>

                      {/* Email input */}
                      <div className="space-y-1">
                        <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-gray-400 font-display">Email Address</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formState.email}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 rounded-xl border bg-white/50 dark:bg-slate-950/40 text-gray-800 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all ${
                            errors.email ? 'border-red-500/50' : 'border-slate-200 dark:border-white/10 focus:border-indigo-500'
                          }`}
                          placeholder="your.email@example.com"
                          disabled={isSubmitting}
                        />
                        {errors.email && <span className="text-[11px] font-bold text-red-500">{errors.email}</span>}
                      </div>

                      {/* Subject input */}
                      <div className="space-y-1">
                        <label htmlFor="subject" className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-gray-400 font-display">Subject</label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formState.subject}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 rounded-xl border bg-white/50 dark:bg-slate-950/40 text-gray-800 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all ${
                            errors.subject ? 'border-red-500/50' : 'border-slate-200 dark:border-white/10 focus:border-indigo-500'
                          }`}
                          placeholder="Project Inquiry, Senior Flutter Role, etc."
                          disabled={isSubmitting}
                        />
                        {errors.subject && <span className="text-[11px] font-bold text-red-500">{errors.subject}</span>}
                      </div>

                      {/* Message input */}
                      <div className="space-y-1">
                        <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-gray-400 font-display">Message</label>
                        <textarea
                          id="message"
                          name="message"
                          rows="4"
                          value={formState.message}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 rounded-xl border bg-white/50 dark:bg-slate-950/40 text-gray-800 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all resize-none ${
                            errors.message ? 'border-red-500/50' : 'border-slate-200 dark:border-white/10 focus:border-indigo-500'
                          }`}
                          placeholder="Describe details of your project or job vacancy..."
                          disabled={isSubmitting}
                        />
                        {errors.message && <span className="text-[11px] font-bold text-red-500">{errors.message}</span>}
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full flex items-center justify-center gap-2 rounded-2xl bg-indigo-600 hover:bg-indigo-500 disabled:bg-indigo-600/70 text-white font-bold text-sm py-4 transition-all duration-300 shadow-md hover:shadow-lg shadow-indigo-600/20 disabled:shadow-none hover:-translate-y-0.5 disabled:-translate-y-0 cursor-pointer focus:outline-none"
                      >
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            <span>Transmission Pending...</span>
                          </>
                        ) : (
                          <>
                            <FiSend className="text-base" />
                            <span>Transmit Message</span>
                          </>
                        )}
                      </button>

                    </form>
                  </GlassCard>
                </motion.div>
              ) : (
                <motion.div
                  key="success-panel"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                >
                  <GlassCard hoverEffect={false} className="border-emerald-500/20 bg-emerald-50/20 dark:bg-emerald-950/10 backdrop-blur-xl shadow-xl w-full p-10 md:p-12 rounded-[2.5rem] flex flex-col items-center justify-center text-center min-h-[400px]">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', delay: 0.2, stiffness: 200, damping: 15 }}
                      className="w-20 h-20 bg-emerald-500 text-white rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/30 mb-8 border-4 border-white dark:border-slate-900"
                    >
                      <FiCheck className="text-4xl" />
                    </motion.div>
                    
                    <h3 className="font-display font-black text-2xl md:text-3xl text-gray-900 dark:text-white mb-3">
                      Transmission Confirmed
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base leading-relaxed max-w-sm mb-10 font-medium">
                      Thank you, {formState.name}! Your message has been encrypted and securely transmitted. Abhishek will respond shortly.
                    </p>

                    <button
                      onClick={resetForm}
                      className="flex items-center gap-2 px-6 py-3 rounded-2xl border border-slate-200 dark:border-white/10 hover:border-indigo-500/30 bg-white/70 dark:bg-slate-900/50 text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 font-bold text-xs uppercase tracking-wider transition-all duration-300 hover:-translate-y-0.5 cursor-pointer focus:outline-none shadow-sm hover:shadow"
                    >
                      <FiRefreshCw className="text-sm" />
                      <span>Send Another</span>
                    </button>
                  </GlassCard>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
