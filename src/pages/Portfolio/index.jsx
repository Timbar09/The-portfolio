import PageTitle from "../PageTitle";
import ProjectList from "./ProjectList";
import MyLink from "../../components/MyLink";
import Tooltip from "../../components/Tooltip";
import MetaTags from "../../components/MetaTags";
import { AnimatedComponent } from "../../components/Animations";

import "../../assets/scss/pages/portfolio/index.scss";

const Portfolio = () => {
  return (
    <>
      <MetaTags page="portfolio" />

      <main name="portfolio" id="portfolio" className="portfolio__page page">
        <div className="container">
          <header className="project__section--header">
            <PageTitle firstWord="My" secondWord="Portfolio" />

            <AnimatedComponent
              name="fadeInUp"
              tag="h2"
              className="page__subtitle"
              duration={1.25}
              delay={0.5}
            >
              <>
                I've built a number projects. Feel free to explore or
                contribute. If you have an idea or want to collaborate,{" "}
                <span className="page__subtitle--highlight">
                  <MyLink
                    text="let's connect"
                    path="/contact"
                    variant="highlighted"
                    showIcon={false}
                  />

                  <Tooltip
                    isLink
                    styles={{ fontSize: "0.5em", maxWidth: "20rem" }}
                  >
                    Go to contact page
                  </Tooltip>
                </span>
                ! Excited to hear from you. 😎
              </>
            </AnimatedComponent>
          </header>

          <AnimatedComponent
            name="enter"
            className="relative"
            trigger="whileInView"
            duration={1.125}
            delay={1}
          >
            <ProjectList />
          </AnimatedComponent>
        </div>
      </main>
    </>
  );
};

export default Portfolio;
