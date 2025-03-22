import { useState } from "react";

import Select from "./CustomSelect";

const Label = ({ label, name }) => {
  const actualLabel = label.split(" *")[0];
  const extraInfo = " *" + label.split(" *")[1];

  const finalLabel =
    extraInfo.length > 2
      ? [...actualLabel.split(""), extraInfo]
      : [...actualLabel.split(""), " *"];

  return (
    <label htmlFor={name} className="form-field__label">
      {finalLabel.map((letter, index) => (
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
};

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

const FormField = ({
  label = "Label text",
  type = "text",
  name,
  required = false,
  options = ["Option 1", "Option 2", "Option 3"],
}) => {
  const [placeholder, setPlaceholder] = useState(label.split(" *")[0]);
  const [isSelectBoxOpen, setIsSelectBoxOpen] = useState(false);

  const handleFocus = () => {
    setTimeout(() => setPlaceholder(`Your ${name}`), 200);
  };

  const handleBlur = () => {
    setTimeout(() => setPlaceholder(label.split(" *")[0]), 100);
  };

  const toggleDropdown = () => setIsSelectBoxOpen((prev) => !prev);

  return (
    <div className={`form-field form-field--${type} ${isSelectBoxOpen ? "open" : ""}`}>
      <Label label={label} name={name} />

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
          required={required}
          options={options}
          toggleDropdown={toggleDropdown}
          isSelectBoxOpen={isSelectBoxOpen}
          setIsSelectBoxOpen={setIsSelectBoxOpen}
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
