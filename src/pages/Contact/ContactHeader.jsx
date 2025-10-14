import { PageTitle, PageSubtitle } from "../PageTitles";
import SocialLinkTree from "../../components/SocialLinkTree";
import PageBackgroundImage from "../../components/PageBackgroundImage";

import darkBgImage from "../../assets/images/contact-bg.jpg";
import lightBgImage from "../../assets/images/contact-bg-light.jpg";

const ContactHeader = () => {
  return (
    <header className="contact__header">
      <div className="container relative">
        <PageBackgroundImage
          images={{ light: lightBgImage, dark: darkBgImage }}
        />

        <PageTitle firstWord="Contact" secondWord="Me" fadeLeft={false} />

        <PageSubtitle
          text="I'm always open to new opportunities. Whether you have a question or
          just want to say hi, my inbox is always open."
        />

        <div className="contact__social flex flex-jc-c flex_lg-jc-fs">
          <SocialLinkTree />
        </div>
      </div>
    </header>
  );
};

export default ContactHeader;
