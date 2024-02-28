import { Link } from "react-scroll";

import { FaArrowRightLong as ArrowIcon } from "react-icons/fa6";
import { TbExternalLink as ExternalLinkIcon } from "react-icons/tb";
import { IoIosSend as SendIcon } from "react-icons/io";

import "../assets/scss/components/Button.scss";

/**
 * Adds a button Component to the application
 *
 * @param {string} type - The type of button to display e.g. primary, secondary, tertiary
 * @param {string} name - The name of the button
 * @param {string} link - The link to navigate to when the button is clicked (optional)
 * @param {string} form - The form to submit when the button is inside a form (optional)
 * @param {function} onClick - The function to execute when the button is clicked (optional)
 *
 * @returns {JSX.Element} - The button component
 */

const Button = ({
  type = "primary",
  name = "Primary",
  link = null,
  form = null,
  onClick = () => console.log("Button Clicked"),
}) => {
  return (
    <>
      {link ? (
        link.startsWith("http") || link.startsWith("www") ? (
          <a
            className={`button button__${type} flex flex-ai-c gap-1`}
            href={link}
            target="_blank"
            rel="noreferrer"
          >
            {name}
            <ExternalLinkIcon />
          </a>
        ) : (
          <Link
            className={`button button__${type} flex flex-ai-c gap-1`}
            to={link.replace("#", "")}
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            {name}
            <ArrowIcon />
          </Link>
        )
      ) : (
        <button
          className={`button button__${type} flex flex-ai-c gap-1`}
          onClick={onClick}
          type={form ? "submit" : "button"}
        >
          {name}
          {form && <SendIcon />}
        </button>
      )}
    </>
  );
};

export default Button;
