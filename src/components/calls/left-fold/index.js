import { useSelector } from "react-redux";
import DialerItem from "./dialer-item";
import "./left-fold.css";
import { useState } from "react";

const LeftFold = (props) => {
  const [search, setSearch] = useState("");

  const dialerList = useSelector((state) =>
    state.usersList.filter(
      (user) =>
        user.name.toLowerCase().includes(search.toLowerCase()) &&
        user.isStatus === "online"
    )
  );
  return (
    <div className="leftFold">
      {/* <div className="leftFold-menu">
        <label className="menu-label">Calls</label>
        <div className="menu-items">
          {menu.map((item, i) => {
            return <MenuItem key={i} item={item} />;
          })}
        </div>
      </div> */}
      <div className="leftFold-dialer">
        <label className="dialer-label">Online Members</label>
        <div className="dialer-search">
          <input
            type="text"
            placeholder="Type a name"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </div>
        <div className="dialer-suggested">
          <label className="suggested-label">members</label>
          <div className="suggested-list">
            {dialerList.length === 0 ? (
              <div>
                {" "}
                <h4>no search result found</h4>
              </div>
            ) : (
              dialerList.map((item, i) => {
                return <DialerItem key={i} item={item} />;
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftFold;
