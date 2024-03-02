import { useContext } from "react";
import { MenuContext } from "./App";
import { ProjectModalContext } from "./App";
import { motion } from "framer-motion";
import { useMediaQuery } from "../hooks/useMediaQuery";

const Overlay = () => {
  const { isMenuOpen, toggleMenu } = useContext(MenuContext);
  const { isProjectModalOpen } = useContext(ProjectModalContext);
  const isMobile = useMediaQuery("sm", "down");

  const overlayVariants = {
    open: { opacity: 1, visibility: "visible" },
    closed: {
      opacity: 0,
      transitionEnd: { visibility: "hidden" },
      transition: { delay: 0.2 },
    },
  };

  const isMobileOrModalOpen = isMobile || isProjectModalOpen;

  const isOverlayActivated = isMenuOpen || isProjectModalOpen;

  return (
    <>
      {isMobileOrModalOpen && (
        <motion.div
          className="overlay"
          style={{ zIndex: isMobile ? 999 : 1005 }}
          onClick={toggleMenu}
          initial="closed"
          animate={isOverlayActivated ? "open" : "closed"}
          variants={overlayVariants}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
      )}
    </>
  );
};

export default Overlay;
