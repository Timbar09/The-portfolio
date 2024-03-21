import FormField from "./FormField";
import Button from "../../components/Button";

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    fetch("https://formspree.io/f/xgeqpgnr", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => (response.ok ? form.reset() : Promise.reject()))
      .then(() =>
        alert("Thank you for your message! I'll get back to you soon.")
      )
      .catch(() => alert("Oops! Something went wrong. Please try again."));
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="contact__form p-2 grid grid-col grid-gap-2"
    >
      <FormField label="Name *" name="name" required={true} />
      <FormField label="Email *" type="email" name="email" required={true} />
      <FormField
        label="Message *"
        type="textarea"
        name="message"
        required={true}
      />

      <Button type="primary" name="Send" form={true} />
    </form>
  );
};

export default ContactForm;
