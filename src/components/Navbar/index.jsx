import { useContext } from "react";
import { MenuContext } from "../App";
import { useMediaQuery } from "../../hooks/useMediaQuery";

import MenuHeader from "./MenuHeader";
import NavContent from "./NavContent";

import "../../assets/scss/components/Navbar.scss";

const Navbar = () => {
  const { isMenuOpen } = useContext(MenuContext);
  const isMobile = useMediaQuery("sm", "down");

  return (
    <nav className={`nav ${isMobile && (isMenuOpen ? "open" : "closed")}`}>
      <div className="container flex-jc-sb flex-ai-c px-2">
        {isMobile && <MenuHeader />}

        <NavContent />
      </div>
    </nav>
  );
};

export default Navbar;
