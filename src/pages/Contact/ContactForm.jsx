import { useRef, useState } from "react";

import Tooltip from "../../components/Tooltip";
import Transition from "../../components/Transition";
import Button from "../../components/Button";
import FormField from "./FormField";

import { handleFormSubmit, formFields } from "./formUtils";

const ContactForm = () => {
  const formRef = useRef(null);
  const [isValid, setIsValid] = useState(false);

  const handleInput = () => {
    if (formRef.current) {
      setIsValid(formRef.current.checkValidity());
    }
  };

  return (
    <form
      ref={formRef}
      onInput={handleInput}
      onSubmit={handleFormSubmit}
      className="contact__form p-2 grid grid-col grid-gap-2"
    >
      {formFields.map((field, index) => (
        <FormField key={index} index={index} {...field} />
      ))}

      <Transition
        className="form-field__submit relative"
        transitionName="fade-in-right"
        duration={1}
        delay={0.3 * formFields.length}
      >
        <Button variant="primary" text="Send" type="submit" />

        <Tooltip isLink={isValid}>
          {isValid
            ? "You're ready to send your message!"
            : "You've got to fill in all the fields first!"}
        </Tooltip>
      </Transition>
    </form>
  );
};

export default ContactForm;
