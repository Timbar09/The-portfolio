import { useEffect, useState, createContext } from "react";
import { Routes, Route } from "react-router";
import useLocalStorage from "use-local-storage";

import Layout from "../layout";
import Overlay from "./Overlay";
import HomePage from "../pages/Home";
import AboutPage from "../pages/About";
import Contact from "../pages/Contact";
import NotFoundPage from "./NotFoundPage";
import ErrorBoundary from "./ErrorBoundary";
import PortfolioPage from "../pages/Portfolio";

import "../assets/scss/components/App.scss";

export const ThemeContext = createContext(null);
export const MenuContext = createContext(null);
export const ProjectModalContext = createContext(null);

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState({
    title: "Dummy Project",
    description: {
      brief: "This is a dummy project.",
      overview: "This is a dummy project.",
      problem: "This is a dummy project.",
      features: ["This is a dummy project."],
      summary: "This is a dummy project.",
    },
    imagesFile: "dummy",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://github.com/Timbar09",
    code: "https://github.com/Timbar09",
  });
  const preference = window.matchMedia("(prefers-color-scheme: light)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    preference ? "light" : "dark"
  );

  const toggleTheme = () => {
    const html = document.documentElement;

    setTheme((prev) => (prev === "light" ? "dark" : "light"));
    html.style.colorScheme = theme === "light" ? "dark" : "light";
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
    const html = document.documentElement;
    const body = document.querySelector("body");

    html.style.colorScheme = theme;
    body.dataset.theme = theme;
  }, [theme]);

  return (
    <ErrorBoundary>
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

              <Routes>
                <Route path="/" element={<Layout />}>
                  <Route index element={<HomePage />} />
                  <Route path="/portfolio" element={<PortfolioPage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="*" element={<NotFoundPage />} />
                </Route>
              </Routes>
            </div>
          </ProjectModalContext.Provider>
        </MenuContext.Provider>
      </ThemeContext.Provider>
    </ErrorBoundary>
  );
};

export default App;
