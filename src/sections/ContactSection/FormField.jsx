import { useState } from "react";

const Label = ({ label }) => (
  <label htmlFor={label} className="form-field__label">
    {label.split("").map((letter, index) => (
      <span
        key={index}
        style={{ transitionDelay: `${index * 50}ms` }}
        className="form-field__label--letter"
      >
        {letter}
      </span>
    ))}
  </label>
);

const Input = ({
  type,
  name,
  placeholder,
  required,
  handleBlur,
  handleFocus,
}) => (
  <input
    type={type}
    id={name}
    name={name}
    placeholder={placeholder}
    required={required}
    maxLength="50"
    className="form-field__input p-1"
    onBlur={handleBlur}
    onFocus={handleFocus}
  />
);

const Textarea = ({ name, placeholder, required, handleBlur, handleFocus }) => (
  <textarea
    id={name}
    name={name}
    placeholder={placeholder}
    required={required}
    minLength={required ? "5" : "0"}
    maxLength="500"
    className="form-field__input p-1"
    onBlur={handleBlur}
    onFocus={handleFocus}
  />
);

const Select = ({ name, label, required, handleBlur, handleFocus }) => {
  return (
    <>
      <select
        id={name}
        name={name}
        required={required}
        className="form-field__input p-1"
        onBlur={handleBlur}
        onFocus={handleFocus}
      >
        <option value="" disabled selected>
          {label.split(" *")[0]}
        </option>
        <option value="generalInquiry">General Inquiry</option>
        <option value="projectProposal">Project Proposal</option>
        <option value="technicalSupport">Technical Support</option>
        <option value="websiteDevelopment">Website Development</option>
      </select>
    </>
  );
};

const FormField = ({
  label = "Label text",
  type = "text",
  name,
  required = false,
}) => {
  const [placeholder, setPlaceholder] = useState(label.split(" *")[0]);

  const handleFocus = () => {
    setTimeout(() => setPlaceholder(`Your ${name}`), 200);
  };

  const handleBlur = () => {
    setTimeout(() => setPlaceholder(label.split(" *")[0]), 100);
  };

  return (
    <div className="form-field">
      <Label label={label} />

      {type === "textarea" ? (
        <Textarea
          name={name}
          label={label}
          required={required}
          placeholder={placeholder}
          handleBlur={handleBlur}
          handleFocus={handleFocus}
        />
      ) : type === "select" ? (
        <Select
          name={name}
          label={label}
          required={required}
          placeholder={"Subject"}
          handleBlur={handleBlur}
          handleFocus={handleFocus}
        />
      ) : (
        <Input
          type={type}
          name={name}
          label={label}
          required={required}
          placeholder={placeholder}
          handleBlur={handleBlur}
          handleFocus={handleFocus}
        />
      )}

      <div className="form-field__indicator" />
    </div>
  );
};

export default FormField;
