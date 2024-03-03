import { useContext, useEffect, useRef } from "react";
import { ProjectModalContext } from "../../components/App";

import Button from "../../components/Button";
import TechItem from "./TechItem";

import { IoCloseCircle as CloseModalIcon } from "react-icons/io5";
import { FaGitAlt as SourceCodeIcon } from "react-icons/fa6";

const ProjectModal = () => {
  const modalRef = useRef();
  const { toggleProjectModal, selectedProject, isProjectModalOpen } =
    useContext(ProjectModalContext);

  // When the modal is open, add a keydown event listener to trap the focus
  useEffect(() => {
    if (isProjectModalOpen) {
      // Get all focusable elements within the modal
      const focusableElements = modalRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstFocusableElement = focusableElements[0];
      const lastFocusableElement =
        focusableElements[focusableElements.length - 1];

      const handleKeyDown = (event) => {
        if (event.key === "Tab") {
          // If the shift key is held down and the first focusable element is focused, move the focus to the last focusable element
          if (
            event.shiftKey &&
            document.activeElement === firstFocusableElement
          ) {
            lastFocusableElement.focus();
            event.preventDefault();
          }
          // If the shift key is not held down and the last focusable element is focused, move the focus to the first focusable element
          else if (
            !event.shiftKey &&
            document.activeElement === lastFocusableElement
          ) {
            firstFocusableElement.focus();
            event.preventDefault();
          }
        }
      };

      // Immediately move the focus to the first focusable element
      firstFocusableElement.focus();

      window.addEventListener("keydown", handleKeyDown);

      return () => {
        // When the modal is closed, remove the keydown event listener
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [isProjectModalOpen]);

  return (
    <div
      ref={modalRef}
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
                <TechItem key={index} item={item} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
