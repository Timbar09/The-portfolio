import { Link } from "react-scroll";

import { FaArrowRightLong as ArrowIcon } from "react-icons/fa6";
import { TbExternalLink as ExternalLinkIcon } from "react-icons/tb";
import { LuSendHorizonal as SendIcon } from "react-icons/lu";

import "../assets/scss/components/Button.scss";

/**
 * Adds a button Component to the application
 *
 * @param {string} type - The type of button to display e.g. primary, secondary, tertiary
 * @param {string} name - The name of the button
 * @param {string} linkTo - The linkTo to navigate to when the button is clicked (optional)
 * @param {string} form - The form to submit when the button is inside a form (optional)
 * @param {JSX.Element} icon - The icon to display next to the button name (optional)
 * @param {string} title - The title of the button (optional)
 * @param {function} func - The function to execute when the button is clicked (optional)
 *
 * @returns {JSX.Element} - The button component
 */

const Button = ({
  type = "primary",
  name = "Primary",
  linkTo = null,
  form = false,
  icon = <ExternalLinkIcon />,
  func = null,
  title = null,
}) => {
  const handleClick = () => {
    if (func) {
      func();
    }
  };

  return (
    <>
      {linkTo ? (
        linkTo.startsWith("http") || linkTo.startsWith("www") ? (
          <a
            className={`button button__${type}`}
            href={linkTo}
            target="_blank"
            rel="noreferrer"
            title={title}
          >
            <span className="flex flex-jc-c flex-ai-c gap-1">
              {name}
              {icon}
            </span>
          </a>
        ) : (
          <Link
            onClick={handleClick}
            className={`button button__${type}`}
            tabIndex="0"
            title={title}
            to={linkTo.replace("#", "")}
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            <span className="flex flex-jc-c flex-ai-c gap-1">
              {name}
              <ArrowIcon />
            </span>
          </Link>
        )
      ) : (
        <button
          className={`button button__${type}`}
          type={form ? "submit" : "button"}
          onClick={handleClick}
          title={title}
        >
          <span className="flex flex-jc-c flex-ai-c gap-1">
            {name}
            {form && <SendIcon />}
          </span>
        </button>
      )}
    </>
  );
};

export default Button;
