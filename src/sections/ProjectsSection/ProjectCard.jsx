import { useContext, useState } from "react";
import { ProjectModalContext } from "../../components/App";

import TechItem from "./TechItem";
import Button from "../../components/Button";
// import Transition from "../../components/Transition";

import images from "./projectImages";

const ProjectCard = ({ data }) => {
  const { toggleProjectModal, setSelectedProject } = useContext(ProjectModalContext);
  const [isCardHovered, setIsCardHovered] = useState(false);
  const briefDescription = data.description.brief;

  const handleMouseEnter = () => {
    setIsCardHovered(true);
  };

  const handleMouseLeave = () => {
    setIsCardHovered(false);
  };

  const cardStyle = {
    backgroundImage: `url(${images[data.images.screenshots[0]]})`,
  };

  return (
    // <Transition
    //  elementTag="li"
    //   transitionName="fade-in-right"
    //   className="project__card"
    //   trigger="whileInView"
    //   offset="-35%"
    //   duration={1}
    // >
    <div
      className="project__card--container flex flex-ai-fe"
      aria-label={data.title}
      // style={cardStyle}
      onMouseEnter={handleMouseEnter}
      onFocus={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onBlur={handleMouseLeave}
    >
      <div className="project__card--container__content">
        <div className="project__card--container__content--text flex flex-col gap-2 px-2">
          <div className="project__card--container__content--text__title flex gap-2 flex-ai-c">
            <div className="project__card--container__content--text__title--logo grid">
              <img src={images.consolehub.logo} alt={data.title} />
            </div>

            {isCardHovered && (
              <h3 className="project__card--container__content--text__title--name">{data.title}</h3>
            )}
          </div>

          <div className="project__card--container__content--text__body">
            <p className="project__card--container__content--text__body--description pl-1">
              {briefDescription}
            </p>

            <div className="project__card--details flex flex-jc-sb flex-wrap gap-1">
              <ul className="project__card--tech__list flex flex-ai-c flex-jc-sb gap-1">
                {data.tech.slice(0, 3).map((item, index) => (
                  <TechItem key={index} item={item} isCardHovered={isCardHovered} />
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
      </div>
    </div>
    // </Transition>
  );
};

export default ProjectCard;
