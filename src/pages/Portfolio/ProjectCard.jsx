import { useState, useContext, useRef } from "react";

import { ProjectModalContext } from "../../components/App";

import TechItem from "./TechItem";
import Button from "../../components/Button";

import { IoSearch as ViewMoreIcon } from "react-icons/io5";

import imagesObj from "./projectImages";

const ProjectCardDummy = () => {
  return (
    <div className="portfolio__project--dummy flex flex-col" inert>
      <div className="portfolio__project--top flex ai-s gap-2">
        <div className="portfolio__project--logo grid">
          <span className="portfolio__project--logo__image"></span>
        </div>

        <div className="portfolio__project--title">&nbsp;</div>
      </div>
    </div>
  );
};

const ProjectCardTop = ({ project, logo, isActive }) => {
  return (
    <div className="portfolio__project--top flex ai-s gap-2">
      <div className="portfolio__project--logo grid">
        <img
          src={logo}
          alt={project.title}
          className="portfolio__project--logo__image"
        />
      </div>

      <div className="portfolio__project--title flex flex-col gap-1">
        {project.title}

        {isActive && (
          <span className="portfolio__project--badge">{project.stackType}</span>
        )}
      </div>
    </div>
  );
};

const ProjectCardBottom = ({ project, isActive }) => {
  return (
    <div className="portfolio__project--bottom flex flex-col" inert={!isActive}>
      <div className="portfolio__project--description__container grid">
        <p className="portfolio__project--description">
          {project.description.brief}
        </p>
      </div>

      <div className="portfolio__project--tech grid" inert={!isActive}>
        <ul className="portfolio__project--tech__list flex gap-1">
          {project.tech.slice(0, 3).map((item, index) => (
            <TechItem key={index} item={item} isCardHovered={true} />
          ))}
        </ul>
      </div>
    </div>
  );
};

const ProjectCard = ({ project, index }) => {
  const { toggleProjectModal, setSelectedProject } =
    useContext(ProjectModalContext);
  const timeoutRef = useRef(null);
  const [activeCard, setActiveCard] = useState(-1);
  const logo = imagesObj[project.imagesFile].logo;
  const isActive = activeCard === index;

  const handleMouseEnter = (index) => {
    timeoutRef.current = setTimeout(() => {
      setActiveCard(index);
    }, 1500);
  };

  const handleMouseLeave = () => {
    clearTimeout(timeoutRef.current);
    setActiveCard(-1);
  };

  const handleFocus = (index) => {
    setActiveCard(index);
  };

  const handleTouch = (index) => {
    // When on touch devices, toggle card active state on tap
    setActiveCard((prevIndex) => (prevIndex === index ? -1 : index));
  };

  const handleShiftTab = (e) => {
    // Standard reverse tabbing
    if (e.key === "Tab" && e.shiftKey) {
      setActiveCard(-1);
    }
    // Mac VoiceOver (Control+Option+Shift+Tab)
    if (
      e.key === "Tab" &&
      ((e.ctrlKey && e.altKey && e.shiftKey) || (e.metaKey && e.shiftKey))
    ) {
      setActiveCard(-1);
    }
    // Some browsers/extensions
    if (e.key === "Tab" && (e.altKey || e.ctrlKey)) {
      setActiveCard(-1);
    }
  };

  return (
    <li
      key={index}
      className={`portfolio__project--card ${isActive ? "active" : ""}`}
      onMouseEnter={() => handleMouseEnter(index)}
      onMouseLeave={handleMouseLeave}
      onFocus={() => handleFocus(index)}
      onTouchStart={() => handleTouch(index)}
      onKeyDown={handleShiftTab}
      aria-label={project.title}
    >
      <ProjectCardDummy />

      <div className="portfolio__project--container flex flex-col" tabIndex="0">
        <ProjectCardTop project={project} logo={logo} isActive={isActive} />

        <div className="portfolio__project--cta">
          {isActive ? (
            <Button
              text="View more"
              icon={<ViewMoreIcon />}
              onClick={() => {
                setSelectedProject(project);
                toggleProjectModal();
              }}
              onBlur={() => setActiveCard(-1)}
            />
          ) : (
            <span className="portfolio__project--badge">
              {project.stackType}
            </span>
          )}
        </div>

        <ProjectCardBottom project={project} isActive={isActive} />
      </div>
    </li>
  );
};

export default ProjectCard;
