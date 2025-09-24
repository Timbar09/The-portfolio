import { NavLink } from "react-router";

import MetaTags from "../../components/MetaTags";
import Transition from "../../components/Transition";
import Tooltip from "../../components/Tooltip";
import ProjectList from "./ProjectList";
import PageTitle from "../PageTitle";

import "../../assets/scss/sections/projects/index.scss";

const Portfolio = () => {
  return (
    <>
      <MetaTags page="portfolio" />

      <main name="projects" id="projects" className="project__section page">
        <div className="container">
          <header className="project__section--header">
            <PageTitle firstWord="My" secondWord="Portfolio" />

            <Transition
              trigger="whileInView"
              elementTag="h2"
              className="page__subtitle"
              offset="-25%"
              duration={1.5}
            >
              <>
                I've built many projects. Feel free to explore or contribute. If
                you have an idea or want to collaborate,{" "}
                <span className="page__subtitle--highlight">
                  <NavLink to="contact" className="link">
                    let's connect
                  </NavLink>

                  <Tooltip
                    isLink
                    styles={{ fontSize: "0.5em", maxWidth: "20rem" }}
                  >
                    Go to contact page
                  </Tooltip>
                </span>
                ! Excited to hear from you. 😎
              </>
            </Transition>
          </header>

          <ProjectList />
        </div>
      </main>
    </>
  );
};

export default Portfolio;
