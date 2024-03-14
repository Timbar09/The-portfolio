import { useEffect, useState, createContext } from "react";
import useLocalStorage from "use-local-storage";

import Navbar from "./Navbar";
import Overlay from "./Overlay";
import HomeSection from "../sections/HomeSection";
import ProjectsSection from "../sections/ProjectsSection";
import AboutSection from "../sections/AboutSection";
import ContactSection from "../sections/ContactSection";

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

            <header className="header">
              <Navbar />
            </header>

            <main className="main">
              <HomeSection />

              <ProjectsSection />

              <AboutSection />

              <ContactSection />

              <section
                name="contact"
                id="contact"
                className="container px-2 py-3"
              >
                <h2>Contact Me</h2>

                <p>
                  If you have any questions or suggestions, feel free to contact
                  me. I am always looking for new opportunities to learn and
                  grow as a developer. I am open to freelance work and other
                  opportunities. If you have a project that you would like to
                  discuss, feel free to contact me. I would love to hear from
                  you! 😊
                </p>
              </section>
            </main>

            <footer className="footer container px-2 py-3">
              <p>
                Made with ❤️ by{" "}
                <a href="" target="_blank" rel="noreferrer">
                  Miles Mosweu
                </a>
              </p>
            </footer>
          </div>
        </ProjectModalContext.Provider>
      </MenuContext.Provider>
    </ThemeContext.Provider>
  );
};

export default App;
