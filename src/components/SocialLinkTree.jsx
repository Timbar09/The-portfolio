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
    name: "X / Twitter",
    url: `https://twitter.com/Milez09${ref}`,
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
      {socialLinks.map((link, index) => (
        <li key={index} className="social__item">
          <a href={link.url} target="_blank" rel="noreferrer" className="social__item--link grid">
            {link.icon}
            <span className="social__item--name">{link.name}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialLinkTree;
