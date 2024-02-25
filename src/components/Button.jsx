import { FaArrowRightLong as ArrowIcon } from "react-icons/fa6";
import { TbExternalLink as ExternalLinkIcon } from "react-icons/tb";
import { IoIosSend as SendIcon } from "react-icons/io";

import "../assets/scss/components/Button.scss";

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
        <a
          className={`button button__${type} flex flex-ai-c gap-1`}
          href={link}
          target={link.startsWith("#") ? null : "_blank"}
          rel="noreferrer"
        >
          {name}
          {link.startsWith("#") ? <ArrowIcon /> : <ExternalLinkIcon />}
        </a>
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
