const FormField = ({
  label = "Label text",
  type = "text",
  name,
  required = false,
}) => {
  const handleInputValidation = (e) => {
    const input = e.target;
    const indicator = input
      .closest(".form-field")
      .querySelector(".form-field__indicator");

    if (input.validity.valid) {
      indicator.classList.add("valid");
    } else {
      indicator.classList.remove("valid");
    }
  };

  return (
    <div className="form-field">
      <label htmlFor={name} className="form-field__label">
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
      {type === "textarea" ? (
        <textarea
          id={name}
          name={name}
          placeholder={label}
          required={required}
          minLength="3"
          maxLength="50"
          onChange={handleInputValidation}
          className="form-field__input p-1"
        />
      ) : (
        <input
          type={type}
          pattern={
            type === "email" ? "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$" : null
          }
          id={name}
          name={name}
          placeholder={label}
          required={required}
          minLength="3"
          maxLength="50"
          className="form-field__input p-1"
          onChange={handleInputValidation}
        />
      )}

      <div className="form-field__indicator" />
    </div>
  );
};

export default FormField;
