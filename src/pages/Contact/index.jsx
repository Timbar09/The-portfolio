import ContactInfo from "./ContactInfo";
import ContactHeader from "./ContactHeader";
import MetaTags from "../../components/MetaTags";

import "../../assets/scss/pages/Contact.scss";

const Contact = () => {
  return (
    <>
      <MetaTags page="contact" />

      <main name="contact" id="contact" className="contact__page page">
        <ContactHeader />

        <ContactInfo />
      </main>
    </>
  );
};

export default Contact;
