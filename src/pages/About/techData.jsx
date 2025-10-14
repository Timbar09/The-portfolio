import { PiFigmaLogo as FigmaIcon } from "react-icons/pi";
import { RiNpmjsFill as NpmIcon } from "react-icons/ri";
import { IoLogoReact as ReactIcon } from "react-icons/io5";
import {
  DiRubyRough as RubyIcon,
  DiPostgresql as PostgresqlIcon,
} from "react-icons/di";
import {
  TbBrandVscode as VscodeIcon,
  TbBrandVite as ViteIcon,
  TbSql as SqlIcon,
} from "react-icons/tb";
import {
  FaGitAlt as GitIcon,
  FaGithub as GithubIcon,
  FaHtml5 as HtmlIcon,
  FaCss3Alt as CssIcon,
} from "react-icons/fa6";
import {
  BiLogoJavascript as JsIcon,
  BiLogoTailwindCss as TailwindIcon,
  BiLogoSass as SassIcon,
  BiLogoGitlab as GitlabIcon,
  BiLogoRedux as ReduxIcon,
} from "react-icons/bi";
import {
  SiRubyonrails as RailsIcon,
  SiBootstrap as BootstrapIcon,
  SiWebpack as WebpackIcon,
  SiPostman as PostmanIcon,
  SiMui as MUIIcon,
  SiLunacy as LunacyIcon,
  SiYarn as YarnIcon,
} from "react-icons/si";

const getTechData = (theme) => {
  return [
    {
      id: 1,
      name: "JavaScript",
      icon: <JsIcon style={{ color: "#f0db4f" }} />,
      category: "front-end",
      description: "High-level language",
    },

    {
      id: 2,
      name: "React",
      icon: <ReactIcon style={{ color: "#61dafb" }} />,
      category: "front-end",
      description: "UI JavaScript library",
    },

    {
      id: 3,
      name: "Tailwind CSS",
      icon: <TailwindIcon style={{ color: "#06b6d4" }} />,
      category: "front-end",
      description: "Utility-first CSS framework",
    },

    {
      id: 4,
      name: "Sass",
      icon: <SassIcon style={{ color: "#cc6699" }} />,
      category: "front-end",
      description: "CSS preprocessor",
    },

    {
      id: 5,
      name: "Bootstrap",
      icon: <BootstrapIcon style={{ color: "#7952b3" }} />,
      category: "front-end",
      description: "CSS framework",
    },

    {
      id: 6,
      name: "Ruby",
      icon: <RubyIcon style={{ color: "#cc342d" }} />,
      category: "back-end",
      description: "Dynamic language",
    },

    {
      id: 7,
      name: "Rails",
      icon: <RailsIcon style={{ color: "#cc0000" }} />,
      category: "back-end",
      description: "Ruby web app framework",
    },

    {
      id: 8,
      name: "PostgreSQL",
      icon: <PostgresqlIcon style={{ color: "#336791" }} />,
      category: "back-end",
      description: "Open source relational database",
    },

    {
      id: 9,
      name: "Git",
      icon: <GitIcon style={{ color: "#f34f29" }} />,
      category: "tools",
      description: "Distributed version control",
    },

    {
      id: 10,
      name: "GitHub",
      icon: (
        <GithubIcon
          style={{ color: `${theme === "light" ? "#24292e" : "#f0f6fc"}` }}
        />
      ),
      category: "tools",
      description: "Web-based Git repository hosting",
    },

    {
      id: 11,
      name: "GitLab",
      icon: <GitlabIcon style={{ color: "#fca326" }} />,
      category: "tools",
      description: "Web-based DevOps lifecycle tool",
    },

    {
      id: 12,
      name: "VSCode",
      icon: <VscodeIcon style={{ color: "#007acc" }} />,
      category: "tools",
      description: "Code editor",
    },

    {
      id: 13,
      name: "Vite",
      icon: <ViteIcon style={{ color: "#646cff" }} />,
      category: "tools",
      description: "Build tool for modern web development",
    },

    {
      id: 14,
      name: "Webpack",
      icon: <WebpackIcon style={{ color: "#8dd6f9" }} />,
      category: "tools",
      description: "Module bundler",
    },

    {
      id: 15,
      name: "NPM",
      icon: <NpmIcon style={{ color: "#cb3837" }} />,
      category: "tools",
      description: "Package manager",
    },

    {
      id: 16,
      name: "SQL",
      icon: <SqlIcon style={{ color: "#336791" }} />,
      category: "back-end",
      description: "Structured Query Language",
    },

    {
      id: 17,
      name: "Postman",
      icon: <PostmanIcon style={{ color: "#ff6c37" }} />,
      category: "tools",
      description: "API client",
    },

    {
      id: 18,
      name: "Redux",
      icon: <ReduxIcon style={{ color: "#764abc" }} />,
      category: "front-end",
      description: "State management library",
    },

    {
      id: 19,
      name: "MUI",
      icon: <MUIIcon style={{ color: "#1976d2" }} />,
      category: "front-end",
      description: "React components library",
    },

    {
      id: 20,
      name: "Lunacy",
      icon: <LunacyIcon style={{ color: "#2ca4e4" }} />,
      category: "front-end",
      description: "Sketch editor for Windows",
    },

    {
      id: 21,
      name: "Yarn",
      icon: <YarnIcon style={{ color: "#2ca4e4" }} />,
      category: "tools",
      description: "Package manager",
    },

    {
      id: 22,
      name: "Figma",
      icon: <FigmaIcon style={{ color: "#f24e1e" }} />,
      category: "front-end",
      description: "Online UI design tool",
    },

    {
      id: 23,
      name: "HTML5",
      icon: <HtmlIcon style={{ color: "#f16529" }} />,
      category: "front-end",
      description: "Hypertext Markup Language",
    },

    {
      id: 24,
      name: "CSS3",
      icon: <CssIcon style={{ color: "#2965f1" }} />,
      category: "front-end",
      description: "Cascading Style Sheets",
    },
  ];
};

export default getTechData;
