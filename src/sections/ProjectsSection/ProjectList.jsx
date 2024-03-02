import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

import neonManImg from "../../assets/images/projects/man-in-neon.jpg";
import coderImg from "../../assets/images/projects/coder.jpg";
import darkSkyImg from "../../assets/images/projects/dark-sky.jpg";
import parrotImg from "../../assets/images/projects/parrot.jpg";
import whiteCarImg from "../../assets/images/projects/white-car.jpg";

const data = [
  {
    id: 1,
    title: "Main Project",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec.",
    bgImage: neonManImg,
    tech: ["HTML", "CSS", "JavaScript"],
  },

  {
    id: 2,
    title: "Project 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec.",
    bgImage: coderImg,
    tech: ["HTML", "CSS", "JavaScript"],
  },

  {
    id: 3,
    title: "Project 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec.",
    bgImage: darkSkyImg,
    tech: ["HTML", "CSS", "JavaScript"],
  },

  {
    id: 4,
    title: "Project 4",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec.",
    bgImage: parrotImg,
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 5,
    title: "Project 5",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec.",
    bgImage: whiteCarImg,
    tech: ["HTML", "CSS", "JavaScript"],
  },
];

const ProjectList = () => {
  return (
    <ul className="project__list grid grid_md-col grid-gap-1">
      {data.map((item) => (
        <ProjectCard key={item.id} data={item} />
      ))}

      <ProjectModal />
    </ul>
  );
};

export default ProjectList;
