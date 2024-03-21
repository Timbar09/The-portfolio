import { useContext, useEffect } from "react";
import { MenuContext } from "../App";
import { useMediaQuery } from "../../hooks/useMediaQuery";

import MenuHeader from "./MenuHeader";
import NavContent from "./NavContent";

import "../../assets/scss/components/Navbar.scss";

const Navbar = () => {
  const { isMenuOpen } = useContext(MenuContext);
  const isMobile = useMediaQuery("sm", "down");
  let lastScrollY = 0;

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
      <div className="container flex-jc-sb flex-ai-c">
        {isMobile && <MenuHeader />}

        <NavContent />
      </div>
    </nav>
  );
};

export default Navbar;
