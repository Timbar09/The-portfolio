import { useState } from "react";

import { TabButtons, TabContent } from "../../components/Tabs";

import { BiLogoJavascript as JsIcon } from "react-icons/bi";
import { IoLogoReact as ReactIcon } from "react-icons/io5";
import { DiRubyRough as RubyIcon } from "react-icons/di";
import {
  SiRubyonrails as RailsIcon,
  SiPostgresql as PostgresqlIcon,
} from "react-icons/si";
import { FaGitAlt as GitIcon } from "react-icons/fa6";

const techData = [
  {
    id: 1,
    name: "JavaScript",
    icon: <JsIcon style={{ color: "#f0db4f" }} />,
    category: "front-end",
    description: "High-level programming language",
  },

  {
    id: 2,
    name: "React",
    icon: <ReactIcon style={{ color: "#61dafb" }} />,
    category: "front-end",
    description: "JavaScript library for building user interfaces",
  },

  {
    id: 3,
    name: "Ruby",
    icon: <RubyIcon style={{ color: "#cc342d" }} />,
    category: "back-end",
    description:
      "Dynamic, open source programming language with a focus on simplicity and productivity",
  },

  {
    id: 4,
    name: "Rails",
    icon: <RailsIcon style={{ color: "#cc0000" }} />,
    category: "back-end",
    description: "Server-side web application framework",
  },

  {
    id: 5,
    name: "PostgreSQL",
    icon: <PostgresqlIcon style={{ color: "#336791" }} />,
    category: "back-end",
    description: "Open source object-relational database system",
  },

  {
    id: 6,
    name: "Git",
    icon: <GitIcon style={{ color: "#f34f29" }} />,
    category: "tools",
    description: "Distributed version control system",
  },
];

const TechItem = ({ name, description, icon }) => {
  return (
    <div className="tabs__item">
      {icon}
      <h4 className="tabs__item-title">{name}</h4>
      <p className="tabs__item-description">{description}</p>
    </div>
  );
};

const AboutTechnologies = () => {
  const [activeTab, setActiveTab] = useState("tools");

  return (
    <div className="about__tech">
      <h3 className="about__subtitle">
        I use a variety of technologies and tools to build projects, including
        but not limited to:
      </h3>

      <div className="about__tech--list">
        <TabButtons
          tabData={techData}
          setActiveTab={setActiveTab}
          activeTab={activeTab}
        />

        <TabContent
          tabData={techData}
          activeTab={activeTab}
          Component={TechItem}
        />
      </div>
    </div>
  );
};

export default AboutTechnologies;
