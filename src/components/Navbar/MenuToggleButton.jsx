import PropTypes from 'prop-types';

const MenuToggleButton = ({ handleClick }) => {
  return (
    <div className="nav__button">
      <button
        type="button"
        onClick={handleClick}
        className="nav__menu-toggle flex fle-jc-c flex-ai-c"
      >
        <span className="nav__menu-toggle--stroke nav__menu-toggle--stroke-top" />
        <span className="nav__menu-toggle--stroke nav__menu-toggle--stroke-mid" />
        <span className="nav__menu-toggle--stroke nav__menu-toggle--stroke-bottom" />
      </button>
    </div>
  );
};

MenuToggleButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default MenuToggleButton;
