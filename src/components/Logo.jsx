import { useContext } from "react";
import { NavLink } from "react-router";

import { MenuContext } from "./App";
import { useMediaQuery } from "../hooks/useMediaQuery";

import "../assets/scss/components/Logo.scss";

const Logo = ({ className = "logo__header" }) => {
  const { toggleMenu } = useContext(MenuContext);
  const isMobile = useMediaQuery("sm", "down");

  return (
    <NavLink
      to="/"
      className={`logo ${className}`}
      onClick={isMobile ? toggleMenu : undefined}
    >
      <span>{"{"}</span> MILES <span>{"}"}</span>
    </NavLink>
  );
};

export default Logo;
