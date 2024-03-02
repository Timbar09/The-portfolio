import { useContext } from "react";
import { ProjectModalContext } from "../../components/App";

import Button from "../../components/Button";

const ProjectCard = ({ title, description, bgImage, tech }) => {
  const { toggleProjectModal } = useContext(ProjectModalContext);

  return (
    <li
      className={`project__card project__card--${title
        .toLowerCase()
        .replace(/\s/g, "-")}`}
      tabIndex="0"
      aria-label={title}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="project__card--container grid grid-pi-c p-2">
        <div className="project__card--info flex flex-col gap-2">
          <h3>{title}</h3>

          <p>{description}</p>

          <div className="project__card--details flex flex-jc-sb flex-wrap gap-1">
            <ul className="project__card--tech__list flex flex-ai-c flex-jc-sb gap-1">
              {tech.map((item, index) => (
                <li key={index} className="project__card--tech__item">
                  {item}
                </li>
              ))}
            </ul>

            <div className="project__card--button">
              <Button
                type="secondary"
                name="View more"
                func={toggleProjectModal}
              />
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default ProjectCard;
