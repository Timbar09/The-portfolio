const AboutBioDescription = () => {
  return (
    <div className="about__bio--description">
      <h3 className="about__bio--description__title">
        I'm Miles Mosweu, a self-driven fullstack web developer based in{" "}
        <a
          href="https://www.google.com/maps/place/Botswana"
          className="link"
          target="_blank"
          rel="noreferrer"
        >
          Botswana
        </a>
        .
      </h3>

      <div className="about__bio--description__text">
        <p>
          I build beautiful and functional websites. I'm not only familiar with
          web design principles and best practices, but also specialize in
          building interactive web applications on the client side, leveraging
          technologies like React, SASS, Javascript, and Rails.
        </p>

        <p>
          I'm always seeking growth opportunities and challenges, believing in
          continuous learning and thriving in all situations.
        </p>

        <p>
          Besides coding, I enjoy watching intellectual debates, football
          (soccer), and creating inspiring projects that benefit fellow
          developers. If you have a project in mind or a freelance opportunity,
          feel free to reach out. I'd love to hear from you! 😊
        </p>
      </div>
    </div>
  );
};

export default AboutBioDescription;
