import bioImage from "../../assets/images/animated-bio.jpg";

const AboutBioInfo = () => {
  return (
    <div className="">
      <div className="about__bio--image">
        <img src={bioImage} alt="Miles Mosweu" className="about__bio--image" />
      </div>

      <div className="about__bio--contacts">Name and socials</div>
      <div className="about__bio--buttons">
        View resume button and download resume button
      </div>
    </div>
  );
};

export default AboutBioInfo;
