import AboutBioInfo from "./AboutBioInfo";
import AboutBioDescription from "./AboutBioDescription";

const AboutBio = () => {
  return (
    <div className="about__bio flex flex-col flex_lg-row flex-ai-c flex_lg-ai-fs gap-3 gap_lg-4">
      <AboutBioInfo />

      <AboutBioDescription />
    </div>
  );
};

export default AboutBio;
