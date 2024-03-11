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
    name: "Ruby",
    icon: <RubyIcon style={{ color: "#cc342d" }} />,
    category: "back-end",
    description: "Dynamic language",
  },

  {
    id: 4,
    name: "Rails",
    icon: <RailsIcon style={{ color: "#cc0000" }} />,
    category: "back-end",
    description: "Ruby web app framework",
  },

  {
    id: 5,
    name: "PostgreSQL",
    icon: <PostgresqlIcon style={{ color: "#336791" }} />,
    category: "back-end",
    description: "Open source relational database",
  },

  {
    id: 6,
    name: "Git",
    icon: <GitIcon style={{ color: "#f34f29" }} />,
    category: "tools",
    description: "Distributed version control",
  },
];

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
          <li
            className="about__tech--list__item p-1 flex gap-1 flex-ai-c"
            key={item.id}
          >
            {item.icon}

            <div className="">
              <h4>{item.name}</h4>
              <p>{item.description}</p>
            </div>
          </li>
        ))}
    </ul>
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
