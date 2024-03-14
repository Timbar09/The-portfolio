import SectionTitle from "../SectionTitle";

const ContactSection = () => {
  return (
    <section name="contact" id="contact" className="contact__section section">
      <div className="container">
        <div className="flex flex-col gap-2">
          <h2 className="contact__title">Get in touch</h2>

          <p className="contact__description">
            I'm always open to new opportunities. Whether you have a question or
            just want to say hi, my inbox is always open.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
