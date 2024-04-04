import MyLink from "../../components/MyLink";

import { RiSpeakLine as CommsIcon } from "react-icons/ri";
import { MdOutlineHandshake as CollabIcon } from "react-icons/md";
import { LuTimer as TimeIcon } from "react-icons/lu";
import { LuPocketKnife as AdaptIcon } from "react-icons/lu";

const softSkills = [
  {
    title: "Communication",
    description:
      "I've learned to communicate clearly and effectively with people from different backgrounds and nationalities.",
    icon: <CommsIcon />,
  },
  {
    title: "Collaboration",
    description:
      "I've worked with developers from all over the world, and I've learned to work in a team, manage projects, and meet deadlines.",
    icon: <CollabIcon />,
  },
  {
    title: "Time Management",
    description:
      "I've learned to manage my time effectively and efficiently, especially when working on multiple projects.",
    icon: <TimeIcon />,
  },
  {
    title: "Adaptability",
    description:
      "I've learned to adapt to new technologies, tools, and environments.",
    icon: <AdaptIcon />,
  },
];

const AboutSoftSkills = () => {
  return (
    <section className="about__soft-skills">
      <h3 className="about__subtitle">
        I have honed essential soft skills applicable to both life and the
        workplace, particularly during my time at{" "}
        <MyLink linkText="Microverse" linkTo="https://www.microverse.org/" />:
      </h3>

      <ul className="about__soft-skills--list grid grid-col grid-gap-2">
        {softSkills.map((skill, index) => (
          <li key={index} className="about__soft-skills--list__item p-2">
            <h4 className="flex flex-ai-c gap-1">
              {skill.icon} {skill.title}:
            </h4>

            <p>{skill.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default AboutSoftSkills;
