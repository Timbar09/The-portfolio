import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { handleClickOutside, handleOptionClick } from "./formUtils";
import { optionsAnimationProps } from "./formUtils";

import { IoChevronDownOutline as ChevronIcon } from "react-icons/io5";

import { trapFocus } from "../ProjectsSection/projectUtils";

const CustomSelect = ({ 
  name, 
  required, 
  options, 
  toggleDropdown, 
  isSelectBoxOpen, 
  setIsSelectBoxOpen 
}) => {
  const [selectedOption, setSelectedOption] = useState("");
  const selectRef = useRef(null);
  const optionsRef = useRef(null);

  useEffect(() => {
    return handleClickOutside(selectRef, () => setIsSelectBoxOpen(false));
  }, [setIsSelectBoxOpen]);

  useEffect(() => {
    trapFocus(isSelectBoxOpen, optionsRef);
  } , [isSelectBoxOpen]);

  const placeholder = selectedOption === "" ? true : false;

  return (
    <div className="select__container" ref={selectRef}>
      <div
        className="select form-field__input p-1"
        onClick={toggleDropdown}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === " ") {
            e.preventDefault();
            toggleDropdown();
          }
        }}
      >
        <span
          className={`${placeholder ? "select__placeholder" : ""}`}
        >
          {selectedOption || "Subject"}
        </span>

        <span className="select__icon grid grid-pi-c px-1">
          <ChevronIcon />
        </span>
      </div>
      <AnimatePresence>
      {isSelectBoxOpen && (
        <motion.ul className="select__option--list" {...optionsAnimationProps} ref={optionsRef}>
          {options.map((option, index) => (
            <li
              key={index}
              className="select__option--item px-1"
              onClick={() => handleOptionClick(option, setSelectedOption, setIsSelectBoxOpen)}
              onKeyDown={(e) => e.key === "Enter" && handleOptionClick(option, setSelectedOption, setIsSelectBoxOpen)}
              tabIndex={0}
              data-focusable="true"
            >
              {option}
            </li>
          ))}
        </motion.ul>
      )}
      </AnimatePresence>

      <input
        className="hidden-input"
        type="text"
        name={name}
        value={selectedOption === "Subject" ? "" : selectedOption}
        required={required}
        tabIndex={-1}
      />
    </div>
  );
};

export default CustomSelect;