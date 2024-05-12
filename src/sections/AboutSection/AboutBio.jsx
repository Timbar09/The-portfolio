import MyLink from "../../components/MyLink";
import AboutBioInfo from "./AboutBioInfo";
import Transition from "../../components/Transition";

const AboutBio = () => {
  return (
    <section className="about__bio grid grid-gap-3">
      <h3 className="about__subtitle">
        I'm Miles Mosweu, a self-driven fullstack web developer based in{" "}
        <MyLink
          linkText="Botswana"
          linkTo="https://www.google.com/maps/place/Botswana"
        />
        .
      </h3>

      <AboutBioInfo />

      <Transition
        className="about__bio--description"
        transitionName="fade-in-right"
        trigger="whileInView"
        offset="-25%"
        duration={1}
      >
        <div className="about__bio--description__text">
          <p>
            I make websites that look great and work well. I am familiar with
            web design principles and best practices and have experience
            building interactive web apps on the client side with tools like
            React, SASS, Javascript, and Rails.
          </p>

          <p>
            The last four years have been a crazy journey for me. I've been
            working on my programming skills, collaborating with developers from
            all over the world, and getting involved in some awesome projects.
            It's been a wild ride, and I've learned a lot more than just how to
            code. I've become better at communicating, working in a team, and
            managing my time and projects.
          </p>

          <p>
            I'm always on the lookout for ways to grow and learn. I believe that
            learning is a never-ending process, and I'm always up for a
            challenge. I'm not afraid to step outside of my comfort zone and try
            new things.
          </p>

          <p>
            Aside from coding, I enjoy watching intellectual debates, football
            (soccer), and working on awesome projects that benefit fellow
            developers. If you have a project or freelance gig in mind, hit me
            up! I'd love to hear about it! 😊
          </p>
        </div>
      </Transition>
    </section>
  );
};

export default AboutBio;
