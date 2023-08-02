import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import './introStyle.css';
const IntroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);
  return (
    <>
      <section className='hero'>
        <AnimatePresence>
          {isLoaded && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <div className="textIntroContainer">
                <motion.div className="textIntro"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 2, delay: 1.5 }}>
                  <h3 className='titleIntro'> Tranquilidad y <br /> Encanto en cada rincón</h3>
                  <h4 className='subtitleIntro'> Viví una experiencia única</h4>
                </motion.div>
              </div>
              <motion.div className="scrollDownIconContainer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.5 }}
              >
                <a href="#" className="scrollDownIcon">
                  <svg
                    width="1.7rem"
                    height="100%"
                    viewBox="0 0 247 390"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xlink="http://www.w3.org/1999/xlink"
                    style={{
                      fillRule: 'evenodd',
                      clipRule: 'evenodd',
                      strokeLinecap: 'round',
                      strokeLinejoin: 'round',
                      strokeMiterlimit: '1.5',
                    }}
                  >
                    <path id="wheel" d="M123.359,79.775l0,72.843" style={{ fill: 'none', stroke: '#fff', strokeWidth: '20px' }} />
                    <path id="mouse" d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z" style={{ fill: 'none', stroke: '#fff', strokeWidth: '20px' }} />
                  </svg>
                </a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </>
  )
}

export default IntroSection