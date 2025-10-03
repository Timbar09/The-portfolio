import { Link as SmoothScrollLink } from "react-scroll";
import { NavLink } from "react-router";

import { FaArrowRightLong as ArrowIcon } from "react-icons/fa6";
import { MdOutlineArrowOutward as ExternalLinkIcon } from "react-icons/md";

export const BASE_URL = "milesmosweu.netlify.app";
export const REF = `?ref/=${BASE_URL}`;

const LinkGoesToExternalSite = ({ props }) => {
  return (
    <a
      href={props.path + REF}
      className={props.className}
      title={props.title}
      target="_blank"
      onClick={props.onClick}
      onBlur={props.onBlur}
      rel="noopener"
    >
      <span
        className={`flex${
          props.iconPosition.toLowerCase() === "right"
            ? " "
            : " flex-row-reverse "
        }flex-jc-c flex-ai-c gap-1`}
      >
        {props.text}

        {props.showIcon && (
          <span className="button__icon grid-inline">
            {props.icon || <ExternalLinkIcon />}
          </span>
        )}
      </span>
    </a>
  );
};

const LinkGoesToInternalPage = ({ props }) => {
  return (
    <NavLink
      to={props.path}
      className={props.className}
      title={props.title}
      onClick={props.onClick}
      onBlur={props.onBlur}
    >
      <span
        className={`flex${
          props.iconPosition.toLowerCase() === "right"
            ? " "
            : " flex-row-reverse "
        }flex-jc-c flex-ai-c gap-1`}
      >
        {props.text}

        {props.showIcon && (
          <span className="button__icon grid">
            {props.icon || <ArrowIcon />}
          </span>
        )}
      </span>
    </NavLink>
  );
};

const LinkGoesToPageSection = ({ props }) => {
  return (
    <SmoothScrollLink
      onClick={props.onClick}
      className={props.className}
      title={props.title}
      to={props.path}
      spy={true}
      smooth={true}
      offset={-100}
      duration={500}
      onBlur={props.onBlur}
    >
      <span
        className={`flex${
          props.iconPosition.toLowerCase() === "right"
            ? " "
            : " flex-row-reverse "
        }flex-jc-c flex-ai-c gap-1`}
      >
        {props.text}

        {props.showIcon && (
          <span className="button__icon grid">
            {props.icon || <ArrowIcon />}
          </span>
        )}
      </span>
    </SmoothScrollLink>
  );
};

/** A link that opens an external site in a new tab.
 *
 * @param {string} text - The text to display for the link.
 * @param {string} path - The URL to link to.
 * @param {string} [variant=default] - The variant of the link (default or highlighted).
 * @param {boolean} [hasIcon=true] - Whether to display an icon next to the link text.
 *
 * @returns {JSX.Element} A link that opens an external site in a new tab.
 */

const MyLink = ({
  variant = "default",
  className = `link link__${variant}`,
  text = "Hi, I'm a link!",
  path = "#",
  icon = null,
  showIcon = true,
  iconPosition = "right",
  onClick = null,
  title = null,
  onBlur = null,
}) => {
  const props = {
    variant,
    className,
    text,
    path,
    icon,
    showIcon,
    iconPosition,
    onClick,
    title,
    onBlur,
  };

  if (
    !props.path ||
    typeof props.path !== "string" ||
    props.path.trim() === ""
  ) {
    throw new Error(
      "The 'path' prop is required and must be a non-empty string."
    );
  }

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
      link = <LinkGoesToInternalPage props={props} />;
    }
  } else if (goesToPageSection) {
    link = <LinkGoesToPageSection props={props} />;
  }

  return link;
};

export default MyLink;
