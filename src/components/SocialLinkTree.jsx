import { FaGithub as GithubIcon } from "react-icons/fa";
import { FaLinkedin as LinkedInIcon } from "react-icons/fa";
import { FaXTwitter as TwitterIcon } from "react-icons/fa6";

import "../assets/scss/components/SocialLinkTree.scss";

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/Timbar09",
    icon: <GithubIcon />,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/miles-mosweu09",
    icon: <LinkedInIcon />,
  },
  {
    name: "Twitter",
    url: "https://twitter.com/Milez09",
    icon: <TwitterIcon />,
  },
];

const SocialLinkTree = () => {
  return (
    <ul className="social__list flex gap-2 p-1">
      {socialLinks.map((link, index) => (
        <li key={index} className="social__item">
          <a
            href={link.url}
            target="_blank"
            rel="noreferrer"
            className="social__item--link grid"
            title={link.name}
          >
            {link.icon}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialLinkTree;
