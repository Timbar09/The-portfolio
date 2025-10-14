import Hero from "./Hero";
import MetaTags from "../../components/MetaTags";
import GitHubContribution from "./GitHubContribution";
import { PageTransition } from "../../components/Animations";

const Home = () => {
  return (
    <PageTransition>
      <MetaTags />

      <main name="home" id="home" className="home__page">
        <Hero />

        <GitHubContribution />

        {/* Add Featured Project */}
      </main>
    </PageTransition>
  );
};

export default Home;
