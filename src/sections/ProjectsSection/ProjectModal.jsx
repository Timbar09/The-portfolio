import { useContext } from "react";
import { ProjectModalContext } from "../../components/App";

import Button from "../../components/Button";

import { IoCloseCircle as CloseModalIcon } from "react-icons/io5";
import { FaGitAlt as SourceCodeIcon } from "react-icons/fa6";

const ProjectModal = () => {
  const { toggleProjectModal, selectedProject, isProjectModalOpen } =
    useContext(ProjectModalContext);

  return (
    <div
      className={`project__modal p-2 ${isProjectModalOpen ? "open" : "closed"}`}
    >
      <div className="project__modal--container flex flex-col">
        <header className="project__modal--header flex flex-jc-sb flex-wrap gap-2 py-2">
          <button
            className="project__modal--header__close-button grid"
            type="button"
            onClick={toggleProjectModal}
            title="Close project modal"
          >
            <CloseModalIcon />
          </button>

          <h2>{selectedProject.title}</h2>

          <div className="project__modal--header__buttons flex flex-wrap gap-2">
            <Button
              type="primary"
              name="Live Demo"
              linkTo="https://www.google.com"
            />

            <Button
              type="secondary"
              name="Source Code"
              linkTo="https://github.com"
              icon={<SourceCodeIcon />}
            />
          </div>
        </header>

        <div className="project__modal--body">
          <div className="project__modal--body__image">
            <img src={selectedProject.bgImage} alt={selectedProject.title} />
          </div>

          <div className="project__modal--body__text p-2 flex_md flex-ai-fs gap-2">
            <div className="project__modal--body__text--description">
              <p>{selectedProject.description}</p>
              <p>{selectedProject.description}</p>
              <p>{selectedProject.description}</p>
              <p>{selectedProject.description}</p>
            </div>

            <ul className="project__modal--body__text--tech flex flex-ai-c flex-wrap gap-1">
              {selectedProject.tech.map((item, index) => (
                <li
                  key={index}
                  className="project__card--body__text--tech__item p-1"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
