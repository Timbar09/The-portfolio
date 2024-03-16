import FormField from "./FormField";
import Button from "../../components/Button";

const ContactForm = () => {
  return (
    <form className="contact__form p-2 grid grid-col grid-gap-2">
      <FormField label="Name *" id="name" required={true} />

      <Button type="primary" name="Send" form={true} />
    </form>
  );
};

export default ContactForm;
