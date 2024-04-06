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

export const techIcons = {
  HTML5: <HtmlIcon />,
  CSS3: <CssIcon />,
  SASS: <SassIcon />,
  Bootstrap: <BootstrapIcon />,
  "Tailwind CSS": <TailwindIcon />,
  JavaScript: <JavaScriptIcon />,
  React: <ReactIcon />,
  Redux: <ReduxIcon />,
  "REST API": <RestApiIcon />,
  Luxon: <LuxonIcon />,
  Ruby: <RubyIcon />,
  "Ruby on Rails": <RailsIcon />,
  PostgreSQL: <PostgresIcon />,
  Devise: <RubyGemIcon />,
  Rspec: <RubyGemIcon />,
  Capybara: <RubyGemIcon />,
  Rubocop: <RubyGemIcon />,
  Git: <GitIcon />,
  GitHub: <GitHubIcon />,
  Terminal: <TerminalIcon />,
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
