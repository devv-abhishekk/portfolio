import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

export const GlassCard = ({ children, className = '', delay = 0, hoverEffect = true }) => {
  const cardRef = useRef(null);

  // Raw tilt motion coordinates
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  // Smooth springs for fluid momentum
  const springX = useSpring(x, { stiffness: 150, damping: 20 });
  const springY = useSpring(y, { stiffness: 150, damping: 20 });

  // Map coordinate range to 3D degree rotations (-8deg to +8deg)
  const rotateX = useTransform(springY, [0, 1], [8, -8]);
  const rotateY = useTransform(springX, [0, 1], [-8, 8]);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // 1. Update standard CSS variables for our neon hover follow radial glow
    cardRef.current.style.setProperty('--mouse-x', `${mouseX}px`);
    cardRef.current.style.setProperty('--mouse-y', `${mouseY}px`);

    // 2. Normalize positions [0..1] for tilt rotations
    if (hoverEffect) {
      x.set(mouseX / width);
      y.set(mouseY / height);
    }
  };

  const handleMouseLeave = () => {
    // Gracefully restore flat position
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: hoverEffect ? rotateX : 0,
        rotateY: hoverEffect ? rotateY : 0,
        transformStyle: 'preserve-3d',
        perspective: 1000,
      }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={hoverEffect ? { 
        y: -6,
        borderColor: 'rgba(99, 102, 241, 0.25)', 
        boxShadow: '0 25px 50px -12px rgba(0,0,0,0.4)' 
      } : undefined}
      className={`glass-card rounded-2xl p-6 md:p-8 ${className}`}
    >
      {/* Structural translation layer giving content independent floating depth */}
      <div 
        style={{ 
          transform: hoverEffect ? 'translateZ(30px)' : 'none', 
          transformStyle: 'preserve-3d',
          position: 'relative',
          zIndex: 10
        }} 
        className="h-full w-full"
      >
        {children}
      </div>
    </motion.div>
  );
};

export default GlassCard;
