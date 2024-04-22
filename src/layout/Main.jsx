import HomeSection from "../sections/HomeSection";
import ProjectsSection from "../sections/ProjectsSection";
import AboutSection from "../sections/AboutSection";
import ContactSection from "../sections/ContactSection";

const Main = () => {
  return (
    <main className="main">
      <HomeSection />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
    </main>
  );
};

export default Main;
