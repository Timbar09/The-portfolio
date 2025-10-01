import { Link as SmoothScrollLink } from "react-scroll";
import { NavLink } from "react-router";

import { FaArrowRightLong as ArrowIcon } from "react-icons/fa6";
import { MdOutlineArrowOutward as ExternalLinkIcon } from "react-icons/md";
import { VscSend as SendIcon } from "react-icons/vsc";
import { AiOutlineStop as InvalidIcon } from "react-icons/ai";

import "../assets/scss/components/Button.scss";

export const BASE_URL = "https://milesmosweu.netlify.app/";

const LinkGoesToExternalSite = ({ props }) => {
  const ref = `?ref=${BASE_URL}`;

  return (
    <a
      href={props.path + ref}
      className={`button button__${props.variant}`}
      title={props.title}
      target="_blank"
      onClick={props.onClick}
      onBlur={props.onBlur}
      rel="noopener"
    >
      <span className="flex flex-jc-c flex-ai-c gap-1">
        {props.text}

        <span className="button__icon grid">
          {props.icon || <ExternalLinkIcon />}
        </span>
      </span>
    </a>
  );
};

const LinkGoesToInternalPage = ({ props }) => {
  console.log("We are here!", props.icon);
  return (
    <NavLink
      to={props.path}
      className={`button button__${props.variant}`}
      title={props.title}
      onClick={props.onClick}
      onBlur={props.onBlur}
    >
      <span className="flex flex-jc-c flex-ai-c gap-1">
        {props.text}

        <span className="button__icon grid">{props.icon || <ArrowIcon />}</span>
      </span>
    </NavLink>
  );
};

const LinkGoesToPageSection = ({ props }) => {
  return (
    <SmoothScrollLink
      onClick={props.onClick}
      className={`button button__${props.variant}`}
      title={props.title}
      to={props.path}
      spy={true}
      smooth={true}
      offset={-100}
      duration={500}
      onBlur={props.onBlur}
    >
      <span className="flex flex-jc-c flex-ai-c gap-1">
        {props.text}

        <span className="button__icon grid">{props.icon || <ArrowIcon />}</span>
      </span>
    </SmoothScrollLink>
  );
};

const LinkButton = ({ props }) => {
  const goesToExternalSite =
    props.path.startsWith("http") ||
    props.path.startsWith("https") ||
    props.path.startsWith("www");
  const goesToExternalPage = props.path && props.path.startsWith("/");
  const goesToPageSection = props.path && props.path.startsWith("#");

  const goesOutsideCurrentPage = goesToExternalSite || goesToExternalPage;

  let link;

  if (goesOutsideCurrentPage) {
    if (goesToExternalSite) {
      link = <LinkGoesToExternalSite props={props} />;
    } else {
      console.log(`Goes to internal page: ${props.path}`);
      link = <LinkGoesToInternalPage props={props} />;
    }
  } else if (goesToPageSection) {
    link = <LinkGoesToPageSection props={props} />;
  }

  return link;
};

const ActualButton = ({ props }) => {
  return (
    <button
      className={`button button__${props.variant} ${
        props.type === "submit" ? "button__" + props.variant + "--form" : ""
      }`}
      type={props.type}
      onClick={props.onClick}
      onBlur={props.onBlur}
      title={props.title}
    >
      <span className="flex flex-jc-c flex-ai-c gap-1">
        {props.text}

        {props.type === "submit" ? (
          <>
            <SendIcon />
            <InvalidIcon />
          </>
        ) : (
          props.icon && <span className="button__icon grid">{props.icon}</span>
        )}
      </span>
    </button>
  );
};

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
  icon = null,
  onClick = null,
  title = null,
  onBlur = null,
}) => {
  return (
    <>
      {path ? (
        <LinkButton
          props={{ variant, text, path, icon, title, onClick, onBlur }}
        />
      ) : (
        <ActualButton
          props={{ type, variant, text, icon, title, onClick, onBlur }}
        />
      )}
    </>
  );
};

export default Button;
