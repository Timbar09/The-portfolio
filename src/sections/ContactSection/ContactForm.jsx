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

  const selectOptions = [
    "General Inquiry",
    "Project Proposal",
    "Technical Support",
    "Website Development",
  ];

  const fields = [
    { label: "Name *", type: "text", name: "name", required: true },
    { label: "Email *", type: "email", name: "email", required: true },
    {
      label: "Subject * (select one from the list below)",
      type: "select",
      name: "subject",
      required: true,
      options: selectOptions,
    },
    { label: "Message *", type: "textarea", name: "message", required: true },
  ];

  return (
    <form
      onSubmit={handleSubmit}
      className="contact__form p-2 grid grid-col grid-gap-2"
    >
      {fields.map((field, index) => (
        <FormField key={index} {...field} />
      ))}

      <div className="form-field__submit">
        <Button type="primary" name="Send" form={true} />
      </div>
    </form>
  );
};

export default ContactForm;
