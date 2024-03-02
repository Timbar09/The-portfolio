import { useEffect, useState, createContext } from "react";
import useLocalStorage from "use-local-storage";

import Navbar from "./Navbar";
import Overlay from "./Overlay";
import Button from "./Button";
import HomeSection from "../sections/HomeSection";
import ProjectsSection from "../sections/ProjectsSection";

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

            <Navbar />

            <HomeSection />

            <ProjectsSection />

            <section
              className="container px-2 py-3"
              style={{
                marginTop: "5rem",
              }}
            >
              <h1 className="title">My Awesome Portforlio Website</h1>

              <p>
                This is a simple portfolio website that I built using React. It
                has a dark mode feature and a responsive design. The website is
                built using React, Sass, and a few other libraries. The website
                is hosted on Netlify and the source code is available on GitHub.
                Feel free to use this website as a template for your own
                portfolio website. If you have any questions or suggestions,
                feel free to contact me. I hope you like it! 😊
              </p>

              <p>
                I am a web developer with a passion for building beautiful and
                functional websites. I have experience in building websites
                using HTML, CSS, JavaScript, React, and other web technologies.
                I am also familiar with web design principles and best
                practices. I am always looking for new opportunities to learn
                and grow as a developer. I am open to freelance work and other
                opportunities. If you have a project that you would like to
                discuss, feel free to contact me. I would love to hear from you!
                😊
              </p>

              <h2 style={{ textAlign: "center", margin: "2rem 0" }}>Buttons</h2>

              <div className="buttons flex flex-ai-c flex-jc-c gap-2 flex-wrap">
                <Button form={true} />
                <Button name="Secondary" type="secondary" />
                <Button
                  name="Tertiary Link"
                  type="tertiary"
                  linkTo="https://www.google.com"
                />
              </div>
            </section>

            <section
              name="projects"
              id="projects"
              className="container px-2 py-3"
            >
              <h2>Projects</h2>

              <p>
                Here are some of the projects that I have worked on. These
                projects showcase my skills and experience as a web developer. I
                have experience in building websites, web applications, and
                other digital products. I am always looking for new projects to
                work on. If you have a project that you would like to discuss,
                feel free to contact me. I would love to hear from you! 😊
              </p>
            </section>

            <section name="about" id="about" className="container px-2 py-3">
              <h2>About Me</h2>

              <p>
                I am a web developer with a passion for building beautiful and
                functional websites. I have experience in building websites
                using HTML, CSS, JavaScript, React, and other web technologies.
                I am also familiar with web design principles and best
                practices. I am always looking for new opportunities to learn
                and grow as a developer. I am open to freelance work and other
                opportunities. If you have a project that you would like to
                discuss, feel free to contact me. I would love to hear from you!
                😊
              </p>
            </section>

            <section
              name="contact"
              id="contact"
              className="container px-2 py-3"
            >
              <h2>Contact Me</h2>

              <p>
                If you have any questions or suggestions, feel free to contact
                me. I am always looking for new opportunities to learn and grow
                as a developer. I am open to freelance work and other
                opportunities. If you have a project that you would like to
                discuss, feel free to contact me. I would love to hear from you!
                😊
              </p>
            </section>

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
