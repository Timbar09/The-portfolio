import { useContext } from "react";
import { ThemeContext } from "../../components/App";
import { useMediaQuery } from "../../hooks/useMediaQuery";

import ContactForm from "./ContactForm";
import SocialLinkTree from "../../components/SocialLinkTree";

import darkBgImage from "../../assets/images/contact-bg.jpg";
import lightBgImage from "../../assets/images/contact-bg-light.jpg";

import "../../assets/scss/sections/ContactSection.scss";

const ContactSection = () => {
  const { theme } = useContext(ThemeContext);
  const isDesktop = useMediaQuery("lg", "up");

  return (
    <section name="contact" id="contact" className="contact__section section">
      <div
        className="container"
        style={{
          backgroundImage: `url(${
            theme === "light" ? lightBgImage : darkBgImage
          })`,
        }}
      >
        <div className="contact__text flex flex-col gap-2">
          <h2 className="contact__title">Get in touch</h2>

          <p className="contact__description">
            I'm always open to new opportunities. Whether you have a question or
            just want to say hi, my inbox is always open.
          </p>

          {isDesktop && (
            <div className="contact__social">
              <SocialLinkTree />
            </div>
          )}
        </div>

        <ContactForm />
      </div>
    </section>
  );
};

export default ContactSection;
