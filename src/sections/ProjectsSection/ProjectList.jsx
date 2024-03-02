import { useContext } from "react";
import { ProjectModalContext } from "../../components/App";

import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

import neonManImg from "../../assets/images/projects/man-in-neon.jpg";
import coderImg from "../../assets/images/projects/coder.jpg";
import darkSkyImg from "../../assets/images/projects/dark-sky.jpg";
import parrotImg from "../../assets/images/projects/parrot.jpg";
import whiteCarImg from "../../assets/images/projects/white-car.jpg";

const data = [
  {
    title: "Main Project",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec.",
    bgImage: neonManImg,
    tech: ["HTML", "CSS", "JavaScript"],
  },

  {
    title: "Project 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec.",
    bgImage: coderImg,
    tech: ["HTML", "CSS", "JavaScript"],
  },

  {
    title: "Project 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec.",
    bgImage: darkSkyImg,
    tech: ["HTML", "CSS", "JavaScript"],
  },

  {
    title: "Project 4",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec.",
    bgImage: parrotImg,
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Project 5",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec.",
    bgImage: whiteCarImg,
    tech: ["HTML", "CSS", "JavaScript"],
  },
];

const ProjectList = () => {
  const { isProjectModalOpen } = useContext(ProjectModalContext);
  return (
    <ul className="project__list grid grid_md-col grid-gap-1">
      {data.map((item, index) => (
        <ProjectCard
          key={index}
          title={item.title}
          description={item.description}
          bgImage={item.bgImage}
          tech={item.tech}
        />
      ))}

      {isProjectModalOpen && <ProjectModal />}
    </ul>
  );
};

export default ProjectList;
