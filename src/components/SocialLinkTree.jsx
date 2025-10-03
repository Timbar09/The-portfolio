import Tooltip from "./Tooltip";

import { FaGithub as GithubIcon } from "react-icons/fa";
import { FaLinkedin as LinkedInIcon } from "react-icons/fa";
import { FaXTwitter as XIcon } from "react-icons/fa6";
import { FaCodepen as CodePenIcon } from "react-icons/fa";

import "../assets/scss/components/SocialLinkTree.scss";

import { REF } from "./MyLink";

const socialLinks = [
  {
    name: "GitHub",
    url: `https://github.com/Timbar09${REF}`,
    icon: <GithubIcon />,
  },
  {
    name: "LinkedIn",
    url: `https://www.linkedin.com/in/miles-mosweu09${REF}`,
    icon: <LinkedInIcon />,
  },
  {
    name: "X",
    url: `https://x.com/Milez09${REF}`,
    icon: <XIcon />,
  },
  {
    name: "CodePen",
    url: `https://codepen.io/Timbar09${REF}`,
    icon: <CodePenIcon />,
  },
];

const SocialLinkTree = () => {
  return (
    <ul className="social__list flex gap-2 py-1">
      {socialLinks.map(({ name, url, icon }, index) => (
        <li key={index} className="social__item">
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="social__item--link grid"
          >
            {icon}
            <span className="social__item--name">{name}</span>
          </a>
        </li>
      ))}

      <Tooltip isLink styles={{ maxWidth: "none" }}>
        Visit my social profiles, I'm social, kinda... 👀
      </Tooltip>
    </ul>
  );
};

export default SocialLinkTree;
