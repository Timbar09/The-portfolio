import MyLink from "../../components/MyLink";
import Transition from "../../components/Transition";

import { RiSpeakLine as CommsIcon } from "react-icons/ri";
import { MdOutlineHandshake as CollabIcon } from "react-icons/md";
import { LuTimer as TimeIcon } from "react-icons/lu";
import { LuPocketKnife as AdaptIcon } from "react-icons/lu";

import Tooltip from "../../components/Tooltip";
import { softSkills } from "./aboutUtils";

const icons = {
  communication: <CommsIcon />,
  collaboration: <CollabIcon />,
  "time management": <TimeIcon />,
  adaptability: <AdaptIcon />,
};

const AboutSoftSkills = () => {
  return (
    <section className="about__soft-skills page__section">
      <h3 className="page__subtitle">
        I have honed essential soft skills applicable to both life and the
        workplace, particularly during my time at{" "}
        <span className="page__subtitle--highlight">
          <MyLink
            text="Microverse"
            path="https://www.microverse.org/"
            variant="highlighted"
          />
          :
          <Tooltip isLink styles={{ fontSize: "0.5em", maxWidth: "20rem" }}>
            Visit Microverse website
          </Tooltip>
        </span>
      </h3>

      <ul className="about__soft-skills--list grid grid-col grid-gap-2">
        {softSkills.map((skill, index) => (
          <Transition
            key={skill.id}
            className="about__soft-skills--list__item p-2"
            elementTag="li"
            trigger="whileInView"
            offset="-25%"
            duration={1}
            delay={index * 0.2}
          >
            <h4 className="flex flex-ai-c gap-1">
              {icons[skill.title.toLowerCase()]}
              {skill.title}
            </h4>

            <p>{skill.description}</p>
          </Transition>
        ))}
      </ul>
    </section>
  );
};

export default AboutSoftSkills;
