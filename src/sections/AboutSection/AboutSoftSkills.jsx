import MyLink from "../../components/MyLink";

import { RiSpeakLine as CommsIcon } from "react-icons/ri";
import { MdOutlineHandshake as CollabIcon } from "react-icons/md";
import { LuTimer as TimeIcon } from "react-icons/lu";
import { LuPocketKnife as AdaptIcon } from "react-icons/lu";

const AboutSoftSkills = () => {
  return (
    <div className="about__soft-skills">
      <h3 className="about__subtitle">Soft Skills</h3>

      <p className="about__soft-skills--description">
        Certain skills are not only essential for the workplace but also for
        life in general. Here are some of the soft skills I've developed over
        the years, particularly during my at{" "}
        <MyLink linkText="Microverse" linkTo="https://www.microverse.org/" />:
      </p>

      <ul className="about__soft-skills--list grid grid-col grid-gap-2">
        <li className="about__soft-skills--list__item p-2">
          <h4 className="flex flex-ai-c gap-1">
            <CommsIcon /> Communication:
          </h4>

          <p>
            I've learned to communicate clearly and effectively with people from
            different backgrounds and nationalities.
          </p>
        </li>

        <li className="about__soft-skills--list__item p-2">
          <h4 className="flex flex-ai-c gap-1">
            <CollabIcon />
            Collaboration:
          </h4>

          <p>
            I've worked with developers from all over the world, and I've
            learned to work in a team, manage projects, and meet deadlines.
          </p>
        </li>

        <li className="about__soft-skills--list__item p-2">
          <h4 className="flex flex-ai-c gap-1">
            <TimeIcon />
            Time Management:
          </h4>

          <p>
            I've learned to manage my time effectively and efficiently,
            especially when working on multiple projects.
          </p>
        </li>

        <li className="about__soft-skills--list__item p-2">
          <h4 className="flex flex-ai-c gap-1">
            <AdaptIcon />
            Adaptability:
          </h4>

          <p>
            I've learned to adapt to new technologies, tools, and environments.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default AboutSoftSkills;
