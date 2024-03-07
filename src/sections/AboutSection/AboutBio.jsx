import AboutBioInfo from "./AboutBioInfo";
import AboutBioDescription from "./AboutBioDescription";

const AboutBio = () => {
  return (
    <div className="about__bio flex flex-col flex-ai-c gap-2">
      <AboutBioInfo />

      <AboutBioDescription />
    </div>
  );
};

export default AboutBio;
