import { useContext, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MenuContext } from "../App";
import { useMediaQuery } from "../../hooks/useMediaQuery";

import MenuHeader from "./MenuHeader";
import NavContent from "./NavContent";

import "../../assets/scss/components/Navbar.scss";

const Navbar = () => {
  const { isMenuOpen, toggleMenu } = useContext(MenuContext);
  const isMobile = useMediaQuery("sm", "down");
  let lastScrollY = 0;

  // const menuToggleAnimationProps = {
  //   initial: { opacity: 0 },
  //   animate: { opacity: 1 },
  //   exit: { opacity: 0 },
  //   transition: { duration: 0.3 },
  // };

  const NavAppeareance = () => {
    const nav = document.querySelector(".nav");
    if (isMobile) return;

    window.scrollY > lastScrollY
      ? nav.classList.add("hidden")
      : nav.classList.remove("hidden");

    lastScrollY = window.scrollY;
  };

  useEffect(() => {
    window.addEventListener("scroll", NavAppeareance);

    return () => {
      window.removeEventListener("scroll", NavAppeareance);
    };
  }, [lastScrollY, isMobile]);

  return (
    <nav className={`nav ${isMobile && (isMenuOpen ? "open" : "closed")}`}>
      <div className="container">
        {isMobile && <MenuHeader />}

        <AnimatePresence>
          {isMobile && !isMenuOpen ? null : <NavContent />}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
