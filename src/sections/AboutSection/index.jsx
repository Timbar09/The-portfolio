import AboutBioInfo from "./AboutBioInfo";

import "../../assets/scss/sections/AboutSection.scss";

const AboutSection = () => {
  return (
    <section name="about" id="about" className="about__section section">
      <div className="container">
        <h2 className="section__title">
          <span>About</span> <span className="underlined">Me</span>
        </h2>

        <div className="about__bio flex flex-col flex-ai-c gap-2">
          <AboutBioInfo />

          <div className="about__bio--text">
            <h3 className="about__bio--title">
              I'm Miles Mosweu, a self-driven fullstack web developer based in{" "}
              <a href="#" className="link">
                Botswana.
              </a>
            </h3>

            <p className="about__bio--description">
              I build beautiful and functional websites. I'm not only familiar
              with web design principles and best practices, but also specialize
              in building interactive web applications on the client side,
              leveraging technologies like React, SASS, Javascript, and Rails.
            </p>

            <p className="about__bio--description">
              I'm always seeking growth opportunities and challenges, believing
              in continuous learning and thriving in all situations.
            </p>

            <p className="about__bio--description">
              Besides coding, I enjoy watching intellectual debates, football
              (soccer), and creating inspiring projects that benefit fellow
              developers. If you have a project in mind or a freelance
              opportunity, feel free to reach out. I'd love to hear from you! 😊
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
