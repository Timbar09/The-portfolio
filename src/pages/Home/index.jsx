import Hero from "./Hero";
import MetaTags from "../../components/MetaTags";
import GitHubContribution from "./GitHubContribution";

import "../../assets/scss/pages/home/index.scss";

const Home = () => {
  return (
    <>
      <MetaTags />

      <main name="home" id="home" className="home__page">
        <Hero />

        <GitHubContribution />

        {/* Add Featured Project */}
      </main>
    </>
  );
};

export default Home;
