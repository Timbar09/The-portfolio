import FormField from "./FormField";
import Button from "../../components/Button";

import { handleFormSubmit, formFields } from "./formUtils.js";

const ContactForm = () => {
  return (
    <form onSubmit={handleFormSubmit} className="contact__form p-2 grid grid-col grid-gap-2">
      {formFields.map((field, index) => (
        <FormField key={index} {...field} />
      ))}

      <div className="form-field__submit">
        <Button type="primary" name="Send" isFormButton />
      </div>
    </form>
  );
};

export default ContactForm;
