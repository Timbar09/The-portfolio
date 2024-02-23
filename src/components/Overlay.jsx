import { motion } from 'framer-motion';
import { useMediaQuery } from '../hooks/useMediaQuery';

const Overlay = ({ isMenuOpen }) => {
  const isMobile = useMediaQuery('sm', 'down');

  const overlayVariants = {
    open: { opacity: 1, visibility: 'visible' },
    closed: {
      opacity: 0,
      transitionEnd: { visibility: 'hidden' },
      transition: { delay: 0.2 },
    },
  };

  return (
    <>
      {isMobile && (
        <motion.div
          className="overlay"
          initial="closed"
          animate={isMenuOpen ? 'open' : 'closed'}
          variants={overlayVariants}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        />
      )}
    </>
  );
};

export default Overlay;
