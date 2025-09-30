import { Link as SmoothScrollLink } from "react-scroll";
import { NavLink } from "react-router";

import { FaArrowRightLong as ArrowIcon } from "react-icons/fa6";
import { MdOutlineArrowOutward as ExternalLinkIcon } from "react-icons/md";
import { VscSend as SendIcon } from "react-icons/vsc";
import { AiOutlineStop as InvalidIcon } from "react-icons/ai";

import "../assets/scss/components/Button.scss";

/**
 * Adds a button Component to the application
 *
 * @param {string} type - The type of button (button, submit or reset)
 * @param {string} variant - The variant of button (primary, secondary, tertiary)
 * @param {string} text - The text to display on the button
 * @param {string} path - The path to link to (optional)
 * @param {JSX.Element} icon - The icon to display next to the button text (optional)
 * @param {string} title - The title of the button (optional)
 * @param {function} onClick - The function to execute when the button is clicked (optional)
 * @param {function} onBlur - The function to execute when the button loses focus (optional)
 *
 * @returns {JSX.Element} - The button component
 */

const Button = ({
  type = "button",
  variant = "primary",
  text = "Primary",
  path = null,
  icon = <ExternalLinkIcon />,
  onClick = null,
  title = null,
  onBlur = null,
}) => {
  const icons = {
    link: {
      external: <ExternalLinkIcon />,
      internal: <ArrowIcon />,
    },
    custom: icon,
  };

  const isExternal =
    path &&
    (path.startsWith("http") ||
      path.startsWith("https") ||
      path.startsWith("www"));
  const isInternal = path && path.startsWith("/");
  const buttonIcon =
    isExternal || isInternal
      ? isExternal
        ? icons.link.external
        : icons.link.internal
      : icons.custom;

  return (
    <>
      {path ? (
        path.startsWith("#") ? (
          <SmoothScrollLink
            onClick={onClick}
            className={`button button__${type}`}
            tabIndex="0"
            title={title}
            to={linkTo.replace("#", "")}
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            onBlur={onBlur}
          >
            <span className="flex flex-jc-c flex-ai-c gap-1">
              {text}

              {icon || buttonIcon}
            </span>
          </SmoothScrollLink>
        ) : (
          <NavLink
            onClick={onClick}
            onBlur={onBlur}
            className={`button button__${variant}`}
            title={title}
            to={path}
          >
            <span className="flex flex-jc-c flex-ai-c gap-1">
              {text}

              {icon || buttonIcon}
            </span>
          </NavLink>
        )
      ) : (
        <button
          className={`button button__${variant} ${
            type === "submit" ? "button__" + variant + "--form" : ""
          }`}
          type={type}
          onClick={onClick}
          onBlur={onBlur}
          title={title}
        >
          <span className="flex flex-jc-c flex-ai-c gap-1">
            {text}

            {type === "submit" ? (
              <>
                <SendIcon />
                <InvalidIcon />
              </>
            ) : (
              icon && buttonIcon
            )}
          </span>
        </button>
      )}
    </>
  );
};

export default Button;
