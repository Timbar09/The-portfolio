import { PageTitle, PageSubtitle } from "../PageTitles";
import ProjectList from "./ProjectList";
import MyLink from "../../components/MyLink";
import Tooltip from "../../components/Tooltip";
import MetaTags from "../../components/MetaTags";
import { AnimatedComponent, PageTransition } from "../../components/Animations";

import "../../assets/scss/pages/portfolio/index.scss";

const Portfolio = () => {
  return (
    <PageTransition>
      <MetaTags page="portfolio" />

      <main name="portfolio" id="portfolio" className="portfolio__page page">
        <div className="container">
          <header className="project__section--header">
            <PageTitle firstWord="My" secondWord="Portfolio" />

            <PageSubtitle
              text="I've built a number projects. Feel free to explore or
                contribute. If you have an idea or want to collaborate, let's connect! Excited to hear from you. 😎"
              linkData={{
                text: "let's connect",
                path: "/contact",
                tooltip: "Go to contact page",
              }}
            />
          </header>

          <AnimatedComponent className="relative" delay={1.25}>
            <ProjectList />
          </AnimatedComponent>
        </div>
      </main>
    </PageTransition>
  );
};

export default Portfolio;
