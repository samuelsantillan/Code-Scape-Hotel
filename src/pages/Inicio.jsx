import HeroSection from '../components/homepage/hero/HeroSection';
import ContentSection from '../components/homepage/mainContent/ContentSection';
import ScrollToTopButton from '../components/scrollToTop/ScrollToTopButton';
import { motion } from 'framer-motion';
const Inicio = () => {

    return (

        <>
            <motion.div
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                exit={{ scaleY: 0 }}
                transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}>
                <HeroSection />
                <ContentSection />
                <ScrollToTopButton />
            </motion.div>
        </>
    );
};

export default Inicio;
