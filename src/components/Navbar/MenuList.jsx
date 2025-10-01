import { useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { NavLink } from "react-router";

import { MenuContext } from "../App";

import SocialLinkTree from "../SocialLinkTree";
import MenuSettings from "./MenuSettings";
import { NAV_LINKS } from "./NavList";

const NavContent = () => {
  const { toggleMenu, isMenuOpen } = useContext(MenuContext);

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
    <AnimatePresence>
      {isMenuOpen && (
        <motion.div
          {...menuToggleAnimationProps}
          className="nav__menu flex-ai-c flex-jc-sb gap-1"
        >
          <motion.div
            className="nav__menu--settings px-1 flex flex-ai-c flex-jc-fe"
            {...settingsAnimationProps}
          >
            <SocialLinkTree />
            <div className="nav__menu--settings__separator" />
            <MenuSettings />
          </motion.div>

          <ul
            className="nav__menu--list flex-ai-c gap-1"
            aria-label="Main navigation menu"
            role="menu"
          >
            {NAV_LINKS.map((link, index) => (
              <motion.li
                key={link.id}
                className="nav__menu--item"
                role="menuitem"
                {...(index === 0 ? {} : menuItemAnimationProps)}
              >
                <NavLink
                  className="nav__menu--item__link py-1"
                  to={link.path}
                  onClick={toggleMenu}
                >
                  {link.name}
                </NavLink>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NavContent;
