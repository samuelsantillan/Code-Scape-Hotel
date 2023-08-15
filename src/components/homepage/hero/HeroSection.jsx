import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import videoSource from '../../../assets/heroVideo.mp4'
import './heroStyle.css';
const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);
  return (
    <>
      <section className='hero'>
        <video className="videoBackground" autoPlay muted loop>
          <source src={videoSource} type="video/mp4" />
          Tu navegador no soporta el elemento de video.
        </video>
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
                  <hr className='lineIntro'/>
                  <h4 className='subtitleIntro'> Viví una experiencia única</h4>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </>
  )
}

export default HeroSection