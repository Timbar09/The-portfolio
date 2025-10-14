import { useContext } from "react";
import { NavLink } from "react-router";

import { MenuContext } from "./App";
import { useMediaQuery } from "../hooks/useMediaQuery";

import Tooltip from "./Tooltip";

const Logo = ({ className = "logo__header" }) => {
  const { toggleMenu } = useContext(MenuContext);
  const isMobile = useMediaQuery("sm", "down");

  return (
    <NavLink
      to="/"
      className={`logo ${className}`}
      aria-label="Go to homepage"
      onClick={isMobile ? toggleMenu : undefined}
    >
      {({ isActive }) => (
        <>
          <span className="logo__curly-brace logo__curly-brace--left">
            {"{"}
          </span>{" "}
          M<span className="logo__pop">I</span>
          LES{" "}
          <span className="logo__curly-brace logo__curly-brace--right">
            {"}"}
          </span>
          {isActive ? (
            <Tooltip styles={{ fontSize: "0.975rem", fontWeight: "300" }}>
              You are home
            </Tooltip>
          ) : (
            <Tooltip
              isLink
              styles={{
                fontSize: "0.975rem",
                fontWeight: "300",
              }}
            >
              Go to homepage
            </Tooltip>
          )}
        </>
      )}
    </NavLink>
  );
};

export default Logo;
