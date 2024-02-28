import { useState, createContext } from "react";
import { useMediaQuery } from "../../hooks/useMediaQuery";

import MenuHeader from "./MenuHeader";
import NavContent from "./NavContent";

import "../../assets/scss/components/Navbar.scss";

export const MenuContext = createContext(null);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useMediaQuery("sm", "down");

  const toggleMenu = () => {
    const body = document.querySelector("body");

    setIsMenuOpen(!isMenuOpen);
    body.style.overflow = isMenuOpen ? "auto" : "hidden";
  };

  return (
    <MenuContext.Provider value={{ isMenuOpen, toggleMenu }}>
      <nav className={`nav ${isMobile && (isMenuOpen ? "open" : "closed")}`}>
        <div className="container flex-jc-sb flex-ai-c px-2">
          {isMobile && <MenuHeader />}

          <NavContent />
        </div>
      </nav>
    </MenuContext.Provider>
  );
};

export default Navbar;
