import { useContext } from "react";
import { MenuContext } from "../App";
import { motion } from "framer-motion";

import Logo from "../Logo";
import MenuToggleButton from "./MenuToggleButton";

const MenuHeader = () => {
  const { isMenuOpen, toggleMenu } = useContext(MenuContext);

  const menuLogoVariants = {
    open: { opacity: 1, visibility: "visible" },
    closed: {
      opacity: 0,
      transitionEnd: { visibility: "hidden" },
      transition: { delay: 0 },
    },
  };

  return (
    <header className="nav__menu--header flex flex-jc-sb flex-ai-c py-2">
      <motion.div
        className="nav__menu--header__logo"
        initial="closed"
        animate={isMenuOpen ? "open" : "closed"}
        variants={menuLogoVariants}
        transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
      >
        <Logo />
      </motion.div>

      <MenuToggleButton />
    </header>
  );
};

export default MenuHeader;
