import { FaGithub as GithubIcon } from "react-icons/fa";
import { FaLinkedin as LinkedInIcon } from "react-icons/fa";
import { FaXTwitter as XIcon } from "react-icons/fa6";
import { FaCodepen as CodePenIcon } from "react-icons/fa";

import "../assets/scss/components/SocialLinkTree.scss";

const ref = "?ref=milesmosweu.netlify.app";

const socialLinks = [
  {
    name: "GitHub",
    url: `https://github.com/Timbar09${ref}`,
    icon: <GithubIcon />,
  },
  {
    name: "LinkedIn",
    url: `https://www.linkedin.com/in/miles-mosweu09${ref}`,
    icon: <LinkedInIcon />,
  },
  {
    name: "X",
    url: `https://x.com/Milez09${ref}`,
    icon: <XIcon />,
  },
  {
    name: "CodePen",
    url: `https://codepen.io/Timbar09${ref}`,
    icon: <CodePenIcon />,
  },
];

const SocialLinkTree = () => {
  return (
    <ul className="social__list flex gap-2 p-1">
      {socialLinks.map(({ name, url, icon }, index) => (
        <li key={index} className="social__item">
          <a href={url} target="_blank" rel="noreferrer" className="social__item--link grid">
            {icon}
            <span className="social__item--name">{name}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialLinkTree;
