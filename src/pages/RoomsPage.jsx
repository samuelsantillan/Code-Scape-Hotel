import "../App.css";
import RoomPagePreview from "../components/room/RoomPagePreview";
import { motion } from 'framer-motion';


const RoomsPage = () => {
  return (
    <>
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <RoomPagePreview />
      </motion.div>
    </>
  );
};

export default RoomsPage;
