import MyLink from "../../components/MyLink";
import AboutBioInfo from "./AboutBioInfo";
import { AnimatedComponent } from "../../components/Animations";
import Tooltip from "../../components/Tooltip";

const AboutBio = () => {
  const yearCount = new Date().getFullYear() - 2020;

  return (
    <section className="about__bio grid grid-gap-3">
      <h2 className="page__subtitle">
        I'm Miles Mosweu, a self-driven fullstack web developer based in{" "}
        <span className="page__subtitle--highlight">
          <MyLink
            text="Botswana"
            variant="highlighted"
            path="https://www.google.com/maps/place/Botswana"
          />

          <Tooltip isLink styles={{ fontSize: "0.5em", maxWidth: "20rem" }}>
            View my beautiful country on Google Maps
          </Tooltip>
        </span>
        .
      </h2>

      <AboutBioInfo />

      <AnimatedComponent
        className="about__bio--description"
        name="fadeInRight"
        trigger="whileInView"
        duration={1}
      >
        <div className="about__bio--description__text">
          <p>
            I design and develop high-quality, interactive web applications with
            a focus on performance, usability, and aesthetics. Proficient in
            React, JavaScript, SASS, and Rails, I build responsive,
            user-friendly interfaces that enhance digital experiences.
          </p>

          <p>
            Over the past {yearCount}+ years, I’ve expanded my expertise in
            frontend and backend development, collaborating with developers
            worldwide and contributing to diverse projects. This journey has
            sharpened not just my technical skills, but also my communication,
            teamwork, and project management abilities.
          </p>

          <p>
            I thrive on continuous learning and embracing new challenges.
            Whether it's refining a UI component, optimizing performance, or
            diving into a new tech stack, I'm always eager to grow and push
            boundaries.
          </p>

          <p>
            Outside of coding, I enjoy intellectual debates, football (soccer),
            and working on projects that empower developers. If you have an
            exciting project or a freelance opportunity, feel free to reach
            out—I’d love to collaborate! 😊
          </p>
        </div>
      </AnimatedComponent>
    </section>
  );
};

export default AboutBio;
