import { useState, useEffect } from 'react';

export const useScrollProgress = (threshold = 400) => {
  const [isThresholdExceeded, setIsThresholdExceeded] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      
      setIsThresholdExceeded(scrollY > threshold);

      if (totalHeight > 0) {
        setScrollProgress((scrollY / totalHeight) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return { isThresholdExceeded, scrollProgress };
};
