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

const Input = ({ type, name, label, required }) => (
  <input
    type={type}
    id={name}
    name={name}
    placeholder={`Enter your ${label.toLowerCase().split(" ")[0]} here...`}
    required={required}
    maxLength="50"
    className="form-field__input p-1"
  />
);

const Textarea = ({ name, label, required }) => (
  <textarea
    id={name}
    name={name}
    placeholder={`Enter your ${label.toLowerCase().split(" ")[0]} here...`}
    required={required}
    minLength={required ? "5" : "0"}
    maxLength="50"
    className="form-field__input p-1"
  />
);

const FormField = ({
  label = "Label text",
  type = "text",
  name,
  required = false,
}) => {
  return (
    <div className="form-field">
      <Label label={label} />

      {type === "textarea" ? (
        <Textarea name={name} label={label} required={required} />
      ) : (
        <Input type={type} name={name} label={label} required={required} />
      )}

      <div className="form-field__indicator" />
    </div>
  );
};

export default FormField;
