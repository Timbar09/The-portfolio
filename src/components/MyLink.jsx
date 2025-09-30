import { MdOutlineArrowOutward as ExternalLinkIcon } from "react-icons/md";

const MyLink = ({ text, path }) => {
  const ref = "https://milesmosweu.netlify.app/";

  return (
    <a href={`${path}?ref=${ref}`} className="link flex-ai-c" target="_blank">
      {text}

      <ExternalLinkIcon />
    </a>
  );
};

export default MyLink;
