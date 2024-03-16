const FormField = ({
  label = "Label text",
  type = "text",
  id = "input-id",
  required = false,
}) => {
  return (
    <div className="form-field">
      <label htmlFor={id} className="form-field__label">
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

      <input
        type={type}
        id={id}
        name={id}
        placeholder={label}
        required={required}
        minLength="3"
        maxLength="50"
        className="form-field__input p-1"
      />

      <div className="form-field__indicator" />
    </div>
  );
};

export default FormField;
