import { useContext } from "react";
import { MenuContext } from "../App";

const MenuToggleButton = () => {
  const { toggleMenu } = useContext(MenuContext);

  return (
    <div className="nav__menu-toggle--wrap p-1">
      <button
        type="button"
        onClick={toggleMenu}
        className="nav__menu-toggle flex fle-jc-c flex-ai-c"
      >
        <span className="nav__menu-toggle--stroke nav__menu-toggle--stroke-top" />
        <span className="nav__menu-toggle--stroke nav__menu-toggle--stroke-mid" />
        <span className="nav__menu-toggle--stroke nav__menu-toggle--stroke-bottom" />
      </button>
    </div>
  );
};

export default MenuToggleButton;
