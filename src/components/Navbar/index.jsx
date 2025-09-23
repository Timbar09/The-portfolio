import { useContext, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { MenuContext } from "../App";
import { useMediaQuery } from "../../hooks/useMediaQuery";

import MenuHeader from "./MenuHeader";
import NavContent from "./NavContent";

import "../../assets/scss/components/Navbar.scss";

const Navbar = () => {
  const { isMenuOpen } = useContext(MenuContext);
  const isMobile = useMediaQuery("sm", "down");
  let lastScrollY = 0;

  const hideShowNav = (nav) => {
    window.scrollY > lastScrollY
      ? nav.classList.add("hidden")
      : nav.classList.remove("hidden");
  };

  const navBackground = (nav) => {
    if (window.scrollY > 100) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  };

  const navAppearance = () => {
    const nav = document.querySelector(".nav");

    if (isMobile) return;

    hideShowNav(nav);
    navBackground(nav);

    lastScrollY = window.scrollY;
  };

  useEffect(() => {
    window.addEventListener("scroll", navAppearance);

    return () => {
      window.removeEventListener("scroll", navAppearance);
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
