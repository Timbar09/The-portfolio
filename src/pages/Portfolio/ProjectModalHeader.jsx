import Button from "../../components/Button";
import Tooltip from "../../components/Tooltip";

import { FaGitAlt as SourceCodeIcon } from "react-icons/fa6";
import { IoCloseCircle as CloseModalIcon } from "react-icons/io5";

const ProjectModalHeader = ({ handleCloseButtonClick, project }) => {
  const liveInactiveLinkClass = project.live ? " " : " inactive ";
  const codeInactiveLinkClass = project.code ? " " : " inactive ";

  return (
    <header className="project__modal--header flex flex-jc-sb flex-wrap gap-2 py-2">
      <button
        className="project__modal--header__close-button grid"
        type="button"
        onClick={handleCloseButtonClick}
        title="Close project modal"
      >
        <CloseModalIcon />
      </button>

      <h2>{project.title}</h2>

      <div className="project__modal--header__buttons flex flex-ai-c flex-wrap gap-2">
        <span
          className={`project__modal--header__button${liveInactiveLinkClass}project__modal--header__button--live relative`}
        >
          <Button
            variant={project.live ? "primary" : "tertiary"}
            text={project.live ? "Live Demo" : "Live Demo Unavailable"}
            path={project.live ? project.live : null}
          />

          <Tooltip
            isLink={project.live}
            styles={{ fontSize: "0.85rem", maxWidth: "15rem" }}
          >
            {project.live
              ? "Visit the live website"
              : "Live demo is unavailable for this project"}
          </Tooltip>
        </span>

        <span
          className={`project__modal--header__button${codeInactiveLinkClass}project__modal--header__button--code relative`}
        >
          <Button
            variant="secondary"
            text="Source Code"
            path={project.code}
            icon={<SourceCodeIcon />}
          />

          <Tooltip
            isLink={project.code}
            styles={{ fontSize: "0.85rem", maxWidth: "15rem" }}
          >
            {project.code
              ? "Check out the source code on GitHub"
              : "Source code is unavailable for this project"}
          </Tooltip>
        </span>
      </div>
    </header>
  );
};

export default ProjectModalHeader;
