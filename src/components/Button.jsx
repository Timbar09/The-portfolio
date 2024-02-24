import "../assets/scss/components/Button.scss";

const Button = ({
  className = "button__primary",
  name = "Primary",
  link = null,
  onClick = () => console.log("Button Clicked"),
}) => {
  return (
    <>
      {link ? (
        <a
          className={`button ${className}`}
          href={link}
          target={link.startsWith("#") ? null : "_blank"}
          rel="noreferrer"
        >
          {name}
        </a>
      ) : (
        <button className={`button ${className}`} onClick={onClick}>
          {name}
        </button>
      )}
    </>
  );
};

export default Button;
