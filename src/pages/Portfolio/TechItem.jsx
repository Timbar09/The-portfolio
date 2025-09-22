import { useContext } from "react";
import { ThemeContext } from "../../components/App";

import { FaFileCode as CodeIcon } from "react-icons/fa";
import { IoLogoHtml5 as HtmlIcon } from "react-icons/io5";
import { FaCss3Alt as CssIcon } from "react-icons/fa6";
import { SiSass as SassIcon } from "react-icons/si";
import { SiBootstrap as BootstrapIcon } from "react-icons/si";
import { SiTailwindcss as TailwindIcon } from "react-icons/si";
import { IoLogoJavascript as JavaScriptIcon } from "react-icons/io5";
import { IoLogoReact as ReactIcon } from "react-icons/io5";
import { SiRedux as ReduxIcon } from "react-icons/si";
import { FaServer as RestApiIcon } from "react-icons/fa";
import { FaRegClock as LuxonIcon } from "react-icons/fa";
import { DiRuby as RubyIcon } from "react-icons/di";
import { SiRubyonrails as RailsIcon } from "react-icons/si";
import { SiPostgresql as PostgresIcon } from "react-icons/si";
import { BsGem as RubyGemIcon } from "react-icons/bs";
import { FaGitAlt as GitIcon } from "react-icons/fa";
import { FaGithub as GitHubIcon } from "react-icons/fa";
import { BiTerminal as TerminalIcon } from "react-icons/bi";

const TechItem = ({ item, isCardHovered }) => {
  const { theme } = useContext(ThemeContext);

  const techIcons = {
    HTML5: <HtmlIcon style={{ color: `${isCardHovered ? "#f16529" : ""}` }} />,
    CSS3: <CssIcon style={{ color: `${isCardHovered ? "#2965f1" : ""}` }} />,
    SASS: <SassIcon style={{ color: `${isCardHovered ? "#c69" : ""}` }} />,
    Bootstrap: (
      <BootstrapIcon style={{ color: `${isCardHovered ? "#563d7c" : ""}` }} />
    ),
    "Tailwind CSS": (
      <TailwindIcon style={{ color: `${isCardHovered ? "#06b6d4" : ""}` }} />
    ),
    JavaScript: (
      <JavaScriptIcon style={{ color: `${isCardHovered ? "#f0db4f" : ""}` }} />
    ),
    React: <ReactIcon style={{ color: `${isCardHovered ? "#61dafb" : ""}` }} />,
    Redux: <ReduxIcon style={{ color: `${isCardHovered ? "#764abc" : ""}` }} />,
    "REST API": (
      <RestApiIcon style={{ color: `${isCardHovered ? "#f16529" : ""}` }} />
    ),
    Luxon: <LuxonIcon style={{ color: `${isCardHovered ? "#f16529" : ""}` }} />,
    Ruby: <RubyIcon style={{ color: `${isCardHovered ? "#cc342d" : ""}` }} />,
    "Ruby on Rails": (
      <RailsIcon style={{ color: `${isCardHovered ? "#cc0000" : ""}` }} />
    ),
    PostgreSQL: (
      <PostgresIcon style={{ color: `${isCardHovered ? "#336791" : ""}` }} />
    ),
    Devise: (
      <RubyGemIcon style={{ color: `${isCardHovered ? "#a6a6a6" : ""}` }} />
    ),
    Rspec: (
      <RubyGemIcon style={{ color: `${isCardHovered ? "#d5122b" : ""}` }} />
    ),
    Capybara: (
      <RubyGemIcon style={{ color: `${isCardHovered ? "#5e2a7e" : ""}` }} />
    ),
    Rubocop: (
      <RubyGemIcon style={{ color: `${isCardHovered ? "#a4877d" : ""}` }} />
    ),
    Git: <GitIcon style={{ color: `${isCardHovered ? "#f34f29" : ""}` }} />,
    GitHub: (
      <GitHubIcon
        style={{
          color: `${
            isCardHovered ? (theme === "light" ? "#fff" : "#000") : ""
          }`,
        }}
      />
    ),
    Terminal: (
      <TerminalIcon
        style={{
          color: `${
            isCardHovered ? (theme === "light" ? "#fff" : "#000") : ""
          }`,
        }}
      />
    ),
  };

  return (
    <li className="project__tech--item flex flex-ai-c">
      {techIcons[item] || <CodeIcon />}
      <span>{item}</span>
    </li>
  );
};

export default TechItem;
