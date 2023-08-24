import { useState, useEffect } from 'react';
import { faArrowUpLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './scrollToTopStyle.css'; 

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className={`scrollToTop ${isVisible ? 'visible' : ''}`} onClick={scrollToTop}>
      <FontAwesomeIcon icon={faArrowUpLong} style={{color: "#ecd3bc",}} />
    </div>
  );
  
};

export default ScrollToTopButton;

