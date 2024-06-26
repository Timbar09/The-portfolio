import PropTypes from "prop-types";

import "../assets/scss/components/Logo.scss";

const Logo = ({ className = "logo__header" }) => {
  return (
    <a href="/" className={`logo ${className}`}>
      <span>{"{"}</span> MILES <span>{"}"}</span>
    </a>
  );
};

Logo.propTypes = {
  className: PropTypes.string,
};

export default Logo;
