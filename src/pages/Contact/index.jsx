import { useContext } from "react";

import { useMediaQuery } from "../../hooks/useMediaQuery";
import { ThemeContext } from "../../components/App";

import MetaTags from "../../components/MetaTags";
import SocialLinkTree from "../../components/SocialLinkTree";
import ContactForm from "./ContactForm";

import darkBgImage from "../../assets/images/contact-bg.jpg";
import lightBgImage from "../../assets/images/contact-bg-light.jpg";

import "../../assets/scss/sections/ContactSection.scss";

const Contact = () => {
  const { theme } = useContext(ThemeContext);
  const isDesktop = useMediaQuery("lg", "up");

  return (
    <>
      <MetaTags page="contact" />

      <main name="contact" id="contact" className="contact__section page">
        <div
          className="container"
          style={{
            backgroundImage: `url(${
              theme === "light" ? lightBgImage : darkBgImage
            })`,
          }}
        >
          <div className="contact__text flex flex-col gap-2">
            <h1 className="contact__title">Get in touch</h1>

            <p className="contact__description">
              I'm always open to new opportunities. Whether you have a question
              or just want to say hi, my inbox is always open.
            </p>

            {isDesktop && (
              <div className="contact__social">
                <SocialLinkTree />
              </div>
            )}
          </div>

          <ContactForm />
        </div>
      </main>
    </>
  );
};

export default Contact;
