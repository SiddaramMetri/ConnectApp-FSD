import "./header.css";

const Header = (props) => {
  return (
    <div className="header">
      <div className="header-menu">
        <i className="fi-rr-layout-fluid"></i>
      </div>
      <div className="header-leftFold">
        <label className="header-label">DCT Connect</label>
      </div>
      <div className="header-rightFold">
        <div className="header-search">
          <i className="fi-rr-search"></i>
          <input type="text" placeholder="Search" />
        </div>
        <div className="header-profile">
          <div className="header-option">
            <i className="fi-rr-menu-dots"></i>
          </div>
          <img
            className="header-avatar"
            src="https://play-lh.googleusercontent.com/60NN6l06lSfCFjJRQog7Vh4JlswDA0p2zF_vRjMlIz7NUwPt_wQlcCNsP7X0c9eZMHk=w240-h480-rw"
            alt="noImage"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
