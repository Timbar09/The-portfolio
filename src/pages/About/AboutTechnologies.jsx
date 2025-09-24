import { useState } from "react";
import { motion } from "framer-motion";
import { useContext } from "react";
import { ThemeContext } from "../../components/App";

import getTechData from "./techData";
import { TabButtons, TabContent } from "../../components/Tabs";
import Transition from "../../components/Transition";
import Tooltip from "../../components/Tooltip";

const techItemAnimationProps = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const RenderTechItems = ({ data, activeTab }) => {
  return (
    <ul className="about__tech--list flex flex-wrap gap-1">
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
            className="about__tech--list__item"
            key={item.id}
            {...techItemAnimationProps}
          >
            <div
              className="about__tech--list__item--content p-1 flex gap-1 flex-ai-c"
              tabIndex={0}
            >
              {item.icon}

              <h4>{item.name}</h4>
            </div>

            <Tooltip>{item.description}</Tooltip>
          </motion.li>
        ))}
    </ul>
  );
};

const AboutTechnologies = () => {
  const [activeTab, setActiveTab] = useState("all");
  const { theme } = useContext(ThemeContext);

  const techData = getTechData(theme);

  return (
    <section className="about__tech">
      <h3 className="page__subtitle">
        I use a variety of technologies and tools to build projects, including
        but not limited to:
      </h3>

      <Transition
        className="about__tech--content"
        trigger="whileInView"
        offset="-25%"
        duration={1}
      >
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
      </Transition>
    </section>
  );
};

export default AboutTechnologies;
