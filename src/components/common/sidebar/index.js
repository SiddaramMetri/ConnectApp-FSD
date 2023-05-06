import { SidebarBottom, SidebarData, SidebarMore } from "../../../data/sidebar";
import SidebarOption from "./sidebar-option";
import "./sidebar.css";

const Sidebar = (props) => {
  const topOptions = SidebarData;
  const more = SidebarMore;
  const bottomOption = SidebarBottom;

  return (
    <div className="sidebar">
      <div>
        {topOptions.map((option, i) => {
          return (
            <div className="sidebar-top" key={i}>
              <SidebarOption
                option={option}
                isActive={
                  option.name === `${option.path.slice(1)}` ? true : false
                }
              />
            </div>
          );
        })}
        <div>
          <SidebarOption option={more} />
        </div>
      </div>
      <div className="sidebar-bottom">
        {bottomOption.map((option, i) => {
          return <SidebarOption key={i} option={option} />;
        })}
      </div>
    </div>
  );
};

export default Sidebar;
