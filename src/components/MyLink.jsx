import { MdOutlineArrowOutward as ExternalLinkIcon } from "react-icons/md";

const MyLink = ({ linkText, linkTo }) => {
  return (
    <a href={linkTo} className="link flex-ai-c" target="_blank" rel="noreferrer">
      {linkText}
      <ExternalLinkIcon />
    </a>
  );
};

export default MyLink;
