import MyLink from "./MyLink";

import { VscSend as SendIcon } from "react-icons/vsc";
import { AiOutlineStop as InvalidIcon } from "react-icons/ai";

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
      <span
        className={`flex${
          props.iconPosition.toLowerCase() === "right"
            ? " "
            : " flex-row-reverse "
        }flex-jc-c flex-ai-c gap-1`}
      >
        {props.text}

        {props.showIcon &&
          (props.type === "submit" ? (
            <>
              <SendIcon />
              <InvalidIcon />
            </>
          ) : (
            props.icon && (
              <span className="button__icon grid">{props.icon}</span>
            )
          ))}
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
 * @param {boolean} showIcon - Whether to show the icon or not (optional), defaults to true
 * @param {string} iconPosition - Whether to display the icon on the left or right of the text (optional), defaults to right
 * @param {string} title - The title of the button (optional)
 * @param {function} onClick - The function to execute when the button is clicked (optional)
 * @param {function} onBlur - The function to execute when the button loses focus (optional)
 *
 * @returns {JSX.Element} - The button component
 */

const Button = ({
  type = "button",
  variant = "primary",
  text = "Hi, I'm a button!",
  path = null,
  icon = null,
  showIcon = true,
  iconPosition = "right",
  onClick = null,
  title = null,
  onBlur = null,
}) => {
  const className = `button button__${variant} ${
    type === "submit" ? "button__" + variant + "--form" : ""
  }`;

  const buttonProps = {
    className,
    type,
    variant,
    text,
    path,
    icon,
    showIcon,
    iconPosition,
    title,
    onClick,
    onBlur,
  };

  return (
    <>
      {path ? (
        <MyLink {...buttonProps} />
      ) : (
        <ActualButton props={buttonProps} />
      )}
    </>
  );
};

export default Button;
