import { useState } from "react";
import { useMediaQuery } from "../../hooks/useMediaQuery";

import ProjectCard from "./ProjectCard";

import ProjectData from "../../data/projects.json";

const ProjectList = () => {
  const isTablet = useMediaQuery("md");
  const [activeCard, setActiveCard] = useState(isTablet ? 2 : 0);
  const data = ProjectData.slice(0, 5);

  const handleHoverOrFocus = (index) => {
    setActiveCard(index);
  };

  return (
    <ul className="project__list flex flex-col gap-1 flex_md-row">
      {data.map((item, index) => (
        <ProjectCard
          key={index}
          data={item}
          onHoverOrFocus={() => handleHoverOrFocus(index)}
          isActive={activeCard === index}
        />
      ))}
    </ul>
  );
};

export default ProjectList;
