import { useState } from "react";
import { motion } from "framer-motion";
import { useContext } from "react";
import { ThemeContext } from "../../components/App";

import { TabButtons, TabContent } from "../../components/Tabs";

import { TbBrandVscode as VscodeIcon } from "react-icons/tb";
import {
  BiLogoJavascript as JsIcon,
  BiLogoTailwindCss as TailwindIcon,
  BiLogoSass as SassIcon,
} from "react-icons/bi";
import { IoLogoReact as ReactIcon } from "react-icons/io5";
import { DiRubyRough as RubyIcon } from "react-icons/di";
import {
  SiRubyonrails as RailsIcon,
  SiPostgresql as PostgresqlIcon,
  SiBootstrap as BootstrapIcon,
} from "react-icons/si";
import {
  FaGitAlt as GitIcon,
  FaGithub as GithubIcon,
  FaGitlab as GitlabIcon,
} from "react-icons/fa6";

const techItemAnimationProps = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const RenderTechItems = ({ data, activeTab }) => {
  return (
    <ul className="about__tech--list grid grid-col grid-gap-1">
      {data
        .filter((item) => {
          if (activeTab === "all") {
            return item;
          } else if (item.category === activeTab) {
            return item;
          }
        })
        .map((item) => (
          <motion.li
            className="about__tech--list__item p-1 flex gap-1 flex-ai-c"
            key={item.id}
            {...techItemAnimationProps}
          >
            {item.icon}

            <div className="">
              <h4>{item.name}</h4>
              <p>{item.description}</p>
            </div>
          </motion.li>
        ))}
    </ul>
  );
};

const AboutTechnologies = () => {
  const [activeTab, setActiveTab] = useState("all");
  const { theme } = useContext(ThemeContext);

  const techData = [
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
  ];

  return (
    <div className="about__tech">
      <h3 className="about__subtitle">
        I use a variety of technologies and tools to build projects, including
        but not limited to:
      </h3>

      <div className="about__tech--content">
        <TabButtons
          tabData={techData}
          setActiveTab={setActiveTab}
          activeTab={activeTab}
        />

        <TabContent
          tabData={techData}
          activeTab={activeTab}
          Component={RenderTechItems}
        />
      </div>
    </div>
  );
};

export default AboutTechnologies;
