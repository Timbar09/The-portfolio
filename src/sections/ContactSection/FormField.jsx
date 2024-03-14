const FormField = ({
  label = "Label text",
  type = "text",
  id = "input-id",
  placeholder = "Placeholder text",
}) => {
  return (
    <div className="form-field">
      <label htmlFor={id} className="form-field__label">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        placeholder={placeholder}
        className="form-field__input"
      />
    </div>
  );
};

export default FormField;
