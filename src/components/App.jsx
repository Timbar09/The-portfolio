import { useEffect, useState, createContext } from "react";
import useLocalStorage from "use-local-storage";

import Overlay from "./Overlay";
import Layout from "../layout";

import "../assets/scss/components/App.scss";

export const ThemeContext = createContext(null);
export const MenuContext = createContext(null);
export const ProjectModalContext = createContext(null);

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState({
    id: 0,
    title: "Dummy Project",
    description: "This is a dummy project",
    bgImage: "https://via.placeholder.com/300",
    tech: ["HTML", "CSS", "JavaScript"],
  });
  const preference = window.matchMedia("(prefers-color-scheme: light)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    preference ? "light" : "dark"
  );

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const toggleMenu = () => {
    const body = document.querySelector("body");

    setIsMenuOpen(!isMenuOpen);
    body.style.overflow = isMenuOpen ? "auto" : "hidden";
  };

  const toggleProjectModal = () => {
    const body = document.querySelector("body");

    setIsProjectModalOpen(!isProjectModalOpen);
    body.style.overflow = isProjectModalOpen ? "auto" : "hidden";
  };

  useEffect(() => {
    const body = document.querySelector("body");

    body.dataset.theme = theme;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <MenuContext.Provider value={{ isMenuOpen, toggleMenu }}>
        <ProjectModalContext.Provider
          value={{
            isProjectModalOpen,
            toggleProjectModal,
            selectedProject,
            setSelectedProject,
          }}
        >
          <div className="app">
            <Overlay />

            <Layout />
          </div>
        </ProjectModalContext.Provider>
      </MenuContext.Provider>
    </ThemeContext.Provider>
  );
};

export default App;
