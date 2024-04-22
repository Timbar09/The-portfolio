import { useContext } from "react";
import { MenuContext } from "../App";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";
import { useMediaQuery } from "../../hooks/useMediaQuery";

import Logo from "../Logo";
import ThemeToggle from "./ThemeToggle";
import Button from "../Button";
import SocialLinkTree from "../SocialLinkTree";
import MenuSettings from "./MenuSettings";

const menuItems = [
  {
    link: "Home",
  },
  {
    link: "Projects",
  },
  {
    link: "About",
  },
];

const NavContent = () => {
  const { toggleMenu } = useContext(MenuContext);
  const isMobile = useMediaQuery("sm", "down");

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
        {menuItems.map((item, index) => (
          <motion.li
            key={index}
            className="nav__menu-item"
            {...(index === 0 && isMobile ? {} : menuItemAnimationProps)}
          >
            <Link
              tabIndex="0"
              className="py-1"
              onClick={() => isMobile && toggleMenu()}
              to={item.link.toLocaleLowerCase()}
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              {item.link}
            </Link>
          </motion.li>
        ))}

        <motion.li {...(isMobile ? menuItemAnimationProps : {})}>
          {isMobile && (
            <div>
              <Button name="Contact Me" linkTo="#contact" func={toggleMenu} />
            </div>
          )}

          {!isMobile && <ThemeToggle />}
        </motion.li>
      </ul>

      {!isMobile && (
        <div className="nav__content--button">
          <Button name="Contact Me" linkTo="#contact" />
        </div>
      )}
    </motion.div>
  );
};

export default NavContent;
