import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const FadeIn = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const sectionPosition = ref.current.offsetTop + ref.current.offsetHeight * 0.5;

      if (scrollPosition > sectionPosition) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const ref = React.createRef();

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.section>
  );
};

export default FadeIn