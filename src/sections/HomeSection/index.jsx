import "../../assets/scss/sections/HomeSection.scss";

const HomeSection = () => {
  return (
    <section name="home" id="home" className="home">
      <div className="home__content container p-2 flex flex-col flex-jc-c gap-2">
        <div className="home-group">
          <h1 className="title">
            <span className="title__greeting">
              Hi, I'm <span className="title__name">Miles</span>. I am a
            </span>
            Software Developer
          </h1>
        </div>

        <div className="home-group">
          <p className="home-description">
            I specialize in creating modern and visually appealing websites that
            captivate your target audience. Let me elevate your business or
            product online with a stunning web presence.
          </p>
        </div>

        <div className="home-group home-buttons flex flex-jc-c flex-ai-c flex-wrap">
          <div>
            <a href="#projects" className="button button-primary">
              View my projects
            </a>
          </div>

          <div>
            <a href="#about" className="button button-tertiary">
              more about me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
