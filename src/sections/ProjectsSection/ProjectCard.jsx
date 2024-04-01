import { useContext, useEffect, useState } from "react";
import { ProjectModalContext } from "../../components/App";

import TechItem from "./TechItem";
import Button from "../../components/Button";

const ProjectCard = ({ data }) => {
  const { toggleProjectModal, setSelectedProject } =
    useContext(ProjectModalContext);
  const [bgImage, setBgImage] = useState("");
  const briefDescription = data.description.brief;

  useEffect(() => {
    const loadImg = async () => {
      const imgModule = await import(
        /* @vite-ignore */
        `/src/assets/images/projects/${data.image}`
      );
      setBgImage(imgModule.default);
    };
    loadImg();
  }, [data.image]);

  const cardStyle = {
    backgroundImage: `url(${bgImage})`,
  };

  return (
    <li className="project__card" aria-label={data.title} style={cardStyle}>
      <div className="project__card--container grid grid-pi-c p-2">
        <div className="project__card--info flex flex-col gap-2">
          <h3>{data.title}</h3>

          <p className="pl-1">{briefDescription}</p>

          <div className="project__card--details flex flex-jc-sb flex-wrap gap-1">
            <ul className="project__card--tech__list flex flex-ai-c flex-jc-sb gap-1">
              {data.tech.slice(0, 3).map((item, index) => (
                <TechItem key={index} item={item} />
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
