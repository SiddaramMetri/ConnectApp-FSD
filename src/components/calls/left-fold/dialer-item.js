import "./dialer-item.css";
const DialerItem = ({ item, isActive }) => {
  const status =
    item.isStatus === "online"
      ? "statusGreen"
      : item.isStatus === "offline"
      ? "statusRed"
      : "statusWarning";
  return (
    <div className="dialer-item">
      <img src={item.avatar} className="item-avatar" alt="noImage" />
      <div className="item-info">
        <label className="item-title">{item.name}</label>
        <label className="item-subtitle">{item.type}</label>
      </div>
      <div className="item-icons">
        {/* <div className="item-icon">
          <i className={status}> </i>
        </div> */}
        <div className="item-icon">
          <i className={`fi-ss-circle-small ${status}`}></i>
          <span style={{ fontSize: "14px" }}>{item.isStatus}</span>
        </div>
      </div>
    </div>
  );
};

export default DialerItem;
