import { useContext } from "react";
import { MenuContext } from "../App";
import { motion } from "framer-motion";
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
  const { isMenuOpen, toggleMenu } = useContext(MenuContext);
  const isMobile = useMediaQuery("sm", "down");

  const navContentVariants = {
    open: { opacity: 1, visibility: "visible" },
    closed: {
      opacity: 0,
      transitionEnd: { visibility: "hidden" },
      transition: { delay: 0.2 },
    },
  };

  const animationProps = isMobile
    ? {
        initial: "closed",
        animate: isMenuOpen ? "open" : "closed",
        variants: navContentVariants,
        transition: { duration: 0.2, ease: "easeInOut" },
      }
    : {};

  const settingsAnimationProps = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.3 },
  };

  return (
    <motion.div
      {...animationProps}
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
          <li key={index} className="nav__menu-item">
            <Link
              tabIndex="0"
              className="py-1"
              onClick={() => isMobile && toggleMenu()}
              to={item.link.toLocaleLowerCase()}
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              {item.link}
            </Link>
          </li>
        ))}

        <li className="">
          {isMobile && (
            <div>
              <Button name="Contact Me" linkTo="#contact" func={toggleMenu} />
            </div>
          )}

          {!isMobile && <ThemeToggle />}
        </li>
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
