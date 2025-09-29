import { NavLink } from "react-router";

import MetaTags from "../../components/MetaTags";
import Transition from "../../components/Transition";
import Tooltip from "../../components/Tooltip";
import ProjectList from "./ProjectList";
import PageTitle from "../PageTitle";

import "../../assets/scss/pages/portfolio/index.scss";

const Portfolio = () => {
  return (
    <>
      <MetaTags page="portfolio" />

      <main name="portfolio" id="portfolio" className="portfolio__page page">
        <div className="container">
          <header className="project__section--header">
            <PageTitle firstWord="My" secondWord="Portfolio" />

            <Transition
              transitionName="fade-in-up"
              elementTag="h2"
              className="page__subtitle"
              duration={1.25}
              delay={0.5}
            >
              <>
                I've built a number projects. Feel free to explore or
                contribute. If you have an idea or want to collaborate,{" "}
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

          <Transition
            transitionName="fade-in-up"
            className="relative"
            duration={1}
            delay={1}
          >
            <ProjectList />
          </Transition>
        </div>
      </main>
    </>
  );
};

export default Portfolio;
