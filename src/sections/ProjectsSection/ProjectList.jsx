import ProjectCard from "./ProjectCard";

import ProjectData from "../../data/projects.json";

const ProjectList = () => {
  const data = ProjectData.slice(0, 5);

  return (
    <ul className="project__list flex flex-col gap-1 flex_md-row">
      {data.map((item, index) => (
        <ProjectCard key={index} data={item} />
      ))}
    </ul>
  );
};

export default ProjectList;
