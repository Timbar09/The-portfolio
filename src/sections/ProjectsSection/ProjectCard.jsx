import { useContext, useState } from "react";
import { ProjectModalContext } from "../../components/App";

import TechItem from "./TechItem";
import Button from "../../components/Button";

import projectImages from "./projectImages";

const ProjectCard = ({ data }) => {
  const { toggleProjectModal, setSelectedProject } =
    useContext(ProjectModalContext);
  const [isCardHovered, setIsCardHovered] = useState(false);
  const briefDescription = data.description.brief;

  const handleMouseEnter = () => {
    setIsCardHovered(true);
  };

  const handleMouseLeave = () => {
    setIsCardHovered(false);
  };

  const cardStyle = {
    backgroundImage: `url(${projectImages[data.images.screenshots[0]]})`,
  };

  return (
    <li
      className="project__card"
      aria-label={data.title}
      style={cardStyle}
      onMouseEnter={handleMouseEnter}
      onFocus={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onBlur={handleMouseLeave}
    >
      <div className="project__card--container">
        <div className="project__card--info flex flex-col gap-2 p-3">
          <h3>{data.title}</h3>

          <p className="pl-1">{briefDescription}</p>

          <div className="project__card--details flex flex-jc-sb flex-wrap gap-1">
            <ul className="project__card--tech__list flex flex-ai-c flex-jc-sb gap-1">
              {data.tech.slice(0, 3).map((item, index) => (
                <TechItem
                  key={index}
                  item={item}
                  isCardHovered={isCardHovered}
                />
              ))}
            </ul>

            <div className="project__card--button">
              <Button
                type="secondary"
                name="View more"
                func={() => {
                  setSelectedProject(data);
                  toggleProjectModal();
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default ProjectCard;
