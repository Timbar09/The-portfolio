import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import ThemeToggle from "./ThemeToggle";

import { IoSettingsOutline as SettingsIcon } from "react-icons/io5";

const MenuSettings = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const popupAnimationProps = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
    transition: { duration: 0.3, delay: 0.1 },
  };

  return (
    <div className="nav__menu--settings__content">
      <button
        className={`nav__menu--settings__button grid p-1 ${
          isPopupOpen ? "open" : ""
        }`}
        title="Settings"
        onClick={togglePopup}
      >
        <SettingsIcon />
      </button>

      <AnimatePresence>
        {isPopupOpen && (
          <motion.div
            className="nav__menu--settings__popup p-1"
            {...popupAnimationProps}
          >
            <ul>
              <li>
                <ThemeToggle />
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MenuSettings;
