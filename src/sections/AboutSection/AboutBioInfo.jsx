import SocialLinkTree from "../../components/SocialLinkTree";

import { SlLocationPin as LocationIcon } from "react-icons/sl";

import bioImage from "../../assets/images/animated-bio.jpg";

const AboutBioInfo = () => {
  return (
    <div className="about__bio--info">
      <div className="about__bio--info__image">
        <img src={bioImage} alt="Miles Mosweu" className="about__bio--image" />

        <div className="about__bio--info__contact">
          <div className="about__bio--info__contact--content">
            <p className="about__bio--info__contact--name">Miles Mosweu</p>
            <p className="about__bio--info__contact--title">
              Full Stack Developer
            </p>

            <div className="about__bio--info__contact--socials grid grid-pi-c">
              <SocialLinkTree />
            </div>
          </div>
        </div>
      </div>

      <div className="about__bio--info__buttons">
        View resume button and download resume button
      </div>
    </div>
  );
};

export default AboutBioInfo;
