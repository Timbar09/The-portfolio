import { TbExternalLink as ExternalLinkIcon } from "react-icons/tb";

const MyLink = ({ linkText, linkTo }) => {
  return (
    <a
      href={linkTo}
      className="link flex-ai-c gap-1"
      target="_blank"
      rel="noreferrer"
    >
      {linkText}
      <ExternalLinkIcon />
    </a>
  );
};

export default MyLink;
