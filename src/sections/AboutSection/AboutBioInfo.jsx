import SocialLinkTree from "../../components/SocialLinkTree";
import Button from "../../components/Button";

import { IoMdDownload as DownloadIcon } from "react-icons/io";

import bioImage from "../../assets/images/animated-bio.jpg";

const AboutBioInfo = () => {
  return (
    <div className="about__bio--info grid grid-pi-c">
      <div className="about__bio--info__container">
        <div className="about__bio--info__image">
          <img
            src={bioImage}
            alt="Miles Mosweu"
            className="about__bio--image"
          />

          <div className="about__bio--info__contact">
            <div className="about__bio--info__contact--content">
              <p className="about__bio--info__contact--name">Miles Mosweu</p>
              <p className="about__bio--info__contact--title">
                Full Stack Developer
              </p>

              <div className="about__bio--info__contact--socials grid grid-pi-c pt-1">
                <SocialLinkTree />
              </div>
            </div>
          </div>
        </div>

        <div className="about__bio--info__buttons flex gap-2">
          <Button
            name="View Resume"
            type="secondary"
            linkTo="https://docs.google.com/document/d/1rOU5wqF-9cZJrHmSSsP3YFXvpCAB7M-cY_R3njqn6Vs/view?usp=sharing"
            title="View resume on Google Drive"
          />
          <Button
            name=""
            type="tertiary"
            linkTo="https://docs.google.com/document/d/1rOU5wqF-9cZJrHmSSsP3YFXvpCAB7M-cY_R3njqn6Vs/export?format=pdf"
            icon={<DownloadIcon />}
            title="Download resume"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutBioInfo;
