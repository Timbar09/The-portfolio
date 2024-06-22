import { useContext, useState } from "react";
import { motion } from "framer-motion";

import { ProjectModalContext } from "../../components/App";

import TechItem from "./TechItem";
import Button from "../../components/Button";
// import Transition from "../../components/Transition";

import { IoSearch as ViewMoreIcon } from "react-icons/io5";

import imagesObj from "./projectImages";

const ProjectCard = ({ data, onHoverOrFocus, isActive }) => {
  const { toggleProjectModal, setSelectedProject } = useContext(ProjectModalContext);

  const briefDescription = data.description.brief;
  const { logo } = imagesObj[data.imagesFile];

  const handleMouseEnter = () => {
    onHoverOrFocus();
  };

  const activeClass = isActive ? "active" : "";

  // const cardStyle = {
  //   backgroundImage: `url(${imagesObj[data.imagesObj.screenshots[0]]})`,
  // };

  const titleVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
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
      className={`project__card--container${` ${activeClass}`} flex flex-ai-fe`}
      aria-label={data.title}
      // style={cardStyle}
      onMouseEnter={handleMouseEnter}
      // onFocus={handleMouseEnter}
      // onMouseLeave={handleMouseLeave}
      // onBlur={handleMouseLeave}
    >
      <div className="project__card--container__content">
        <div className="project__card--container__content--text flex flex-col">
          <div className="project__card--container__content--text__title flex gap-2 flex-ai-c px-2">
            <div className="project__card--container__content--text__title--logo grid">
              <img src={logo} alt={data.title} />
            </div>

            {isActive && (
              <motion.h3
                className="project__card--container__content--text__title--name"
                initial="hidden"
                animate="visible"
                variants={titleVariants}
                transition={{ duration: 0.5, delay: 0.75 }}
              >
                {data.title}
              </motion.h3>
            )}
          </div>
          {/* {isCardHovered && ( */}
          <div className="project__card--container__content--text__body px-2">
            <p className="project__card--container__content--text__body--description">
              {briefDescription}
            </p>

            <div className="project__card--details flex flex-jc-sb flex-wrap gap-1">
              <ul className="project__card--tech__list flex flex-wrap flex-ai-c flex-jc-sb gap-1">
                {data.tech.slice(0, 3).map((item, index) => (
                  <TechItem key={index} item={item} isCardHovered={isActive} />
                ))}
              </ul>

              <div className="project__card--container__button">
                <Button
                  type="secondary"
                  name="View more"
                  icon={<ViewMoreIcon />}
                  func={() => {
                    setSelectedProject(data);
                    toggleProjectModal();
                  }}
                />
              </div>
            </div>
          </div>
          {/* )} */}
        </div>
      </div>
    </div>
    // </Transition>
  );
};

export default ProjectCard;
