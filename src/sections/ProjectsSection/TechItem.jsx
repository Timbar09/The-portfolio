import { FaFileCode as CodeIcon } from "react-icons/fa";

import { IoLogoHtml5 as HtmlIcon } from "react-icons/io5";
import { FaCss3Alt as CssIcon } from "react-icons/fa6";
import { IoLogoJavascript as JavaScriptIcon } from "react-icons/io5";

export const techIcons = {
  HTML: <HtmlIcon />,
  CSS: <CssIcon />,
  JavaScript: <JavaScriptIcon />,
};

const TechItem = ({ item }) => {
  return (
    <li className="project__tech--item flex flex-ai-c">
      {techIcons[item] || <CodeIcon />}
      <span>{item}</span>
    </li>
  );
};

export default TechItem;
