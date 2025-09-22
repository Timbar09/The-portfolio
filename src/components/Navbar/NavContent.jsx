import { useContext } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router";

import { ThemeContext } from "../App";
import { MenuContext } from "../App";

import { useMediaQuery } from "../../hooks/useMediaQuery";

import Logo from "../Logo";
import ThemeToggle from "./ThemeToggle";
import Button from "../Button";
import SocialLinkTree from "../SocialLinkTree";
import MenuSettings from "./MenuSettings";
import Tooltip from "../Tooltip";

const menuItems = [
  {
    id: "nav-portfolio",
    name: "Portfolio",
    path: "/portfolio",
  },
  {
    id: "nav-about",
    name: "About",
    path: "/about",
  },
];

const NavContent = () => {
  const { theme } = useContext(ThemeContext);
  const { toggleMenu } = useContext(MenuContext);
  const isMobile = useMediaQuery("sm", "down");
  const isTablet = useMediaQuery("md", "down");

  const menuToggleAnimationProps = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.3 } },
    exit: {
      opacity: 0,
      transition: { delay: 0.3, duration: 0.1 },
    },
  };

  const menuItemAnimationProps = {
    initial: { marginTop: "-2.625rem" },
    animate: { marginTop: "0.25rem" },
    exit: { marginTop: "-2.625rem" },
    transition: { duration: 0.4 },
  };

  const settingsAnimationProps = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.3 },
  };

  return (
    <motion.div
      {...menuToggleAnimationProps}
      className="nav__content flex-ai-c flex-jc-sb gap-1"
    >
      {!isMobile && (
        <div className="nav__content--logo grid grid-pi-c">
          <Logo />
        </div>
      )}

      {isMobile && (
        <motion.div
          className="nav__menu--settings px-1 flex flex-ai-c flex-jc-fe"
          {...settingsAnimationProps}
        >
          <SocialLinkTree />
          <div className="nav__menu--settings__separator" />
          <MenuSettings />
        </motion.div>
      )}

      <ul className="nav__menu flex-ai-c gap-1">
        {menuItems.map((link, index) => (
          <motion.li
            key={link.id}
            className="nav__menu-item"
            {...(index === 0 && isMobile ? {} : menuItemAnimationProps)}
          >
            <NavLink
              className="py-1"
              to={link.path}
              onClick={isMobile ? toggleMenu : undefined}
            >
              {link.name}

              <Tooltip isLink>Go to {link.name} page</Tooltip>
            </NavLink>
          </motion.li>
        ))}

        <motion.li {...(isMobile ? menuItemAnimationProps : {})}>
          {isMobile && (
            <div className="nav__content--button">
              <Button name="Contact Me" linkTo="#contact" func={toggleMenu} />
            </div>
          )}

          {!isMobile && (
            <div className="nav__theme-toggle--container">
              <ThemeToggle />

              <Tooltip>
                Switch to {theme === "light" ? "dark" : "light"} mode
              </Tooltip>
            </div>
          )}
        </motion.li>
      </ul>

      {!isMobile && (
        <div className="nav__content--button">
          <Button name="Contact Me" linkTo="/contact" />
          <Tooltip isLink>Get in touch with me</Tooltip>
        </div>
      )}
    </motion.div>
  );
};

export default NavContent;
