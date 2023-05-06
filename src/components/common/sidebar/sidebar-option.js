import { NavLink } from "react-router-dom";
import "./sidebar-option.css";

const SidebarOption = ({ option, isActive }) => {
  const classList = isActive ? "sidebar-option active" : "sidebar-option";

  return (
    <div>
      <NavLink to={option.path} className={classList}>
        <div className="sidebar-icon">{option.icon}</div>
        {option.name && <label className="sidebar-label">{option.name}</label>}
      </NavLink>
    </div>
  );
};

export default SidebarOption;
