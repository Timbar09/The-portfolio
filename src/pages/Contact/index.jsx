import ContactInfo from "./ContactInfo";
import ContactHeader from "./ContactHeader";
import MetaTags from "../../components/MetaTags";
import { PageTransition } from "../../components/Animations";

import "../../assets/scss/pages/Contact.scss";

const Contact = () => {
  return (
    <PageTransition>
      <MetaTags page="contact" />

      <main name="contact" id="contact" className="contact__page page">
        <ContactHeader />

        <ContactInfo />
      </main>
    </PageTransition>
  );
};

export default Contact;
