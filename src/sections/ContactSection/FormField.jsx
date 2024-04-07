import { useState } from "react";

import { IoChevronDownOutline as ChevronIcon } from "react-icons/io5";

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

const Select = ({
  name,
  label,
  required,
  handleBlur,
  handleFocus,
  options,
}) => {
  const handleSelectClick = (e) => {
    e.target.classList.toggle("active");
  };

  return (
    <>
      <select
        id={name}
        name={name}
        required={required}
        className="form-field__input p-1"
        onBlur={handleBlur}
        onFocus={handleFocus}
        onClick={handleSelectClick}
      >
        <option value="" disabled selected>
          {label.split(" *")[0]}
        </option>

        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>

      <span className="grid grid-pi-c px-1">
        <ChevronIcon />
      </span>
    </>
  );
};

const FormField = ({
  label = "Label text",
  type = "text",
  name,
  required = false,
  options = ["Option 1", "Option 2", "Option 3"],
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
          label={label}
          required={required}
          placeholder={"Subject"}
          handleBlur={handleBlur}
          handleFocus={handleFocus}
          options={options}
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
