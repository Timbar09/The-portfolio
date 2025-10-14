import { useContext, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import { ThemeContext } from "../App";
import { MenuContext } from "../App";

import { useMediaQuery } from "../../hooks/useMediaQuery";

import Logo from "../Logo";
import NavList from "./NavList";
import Tooltip from "../Tooltip";
import MenuList from "./MenuList";
import ThemeToggle from "./ThemeToggle";
import MenuToggleButton from "./MenuToggleButton";

const Navbar = () => {
  const { isMenuOpen } = useContext(MenuContext);
  const { theme } = useContext(ThemeContext);
  const { scrollYProgress } = useScroll();

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
      <div className="container relative flex flex-ai-c flex-jc-sb gap-1">
        <Logo />

        {isMobile && <MenuToggleButton />}

        {isMobile ? <MenuList /> : <NavList />}

        {!isMobile && (
          <div className="nav__theme-toggle--container">
            <ThemeToggle />

            <Tooltip>
              Switch to {theme === "light" ? "dark" : "light"} mode
            </Tooltip>
          </div>
        )}

        <motion.div
          style={{ scaleX: scrollYProgress, originX: 0 }}
          className="nav__scroll-progress"
        />
      </div>
    </nav>
  );
};

export default Navbar;
