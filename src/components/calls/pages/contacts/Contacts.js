import { useSelector } from "react-redux";
import ContactCard from "./contactCard";
import { useState } from "react";

import "./right-fold.css";

const Contacts = (props) => {
  const [search, setSearch] = useState("");

  const contacts = useSelector((state) =>
    state.usersList.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase())
    )
  );

  return (
    <div className="rightFold">
      <div className="rightFold-heading">
        <label className="heading-label">Contacts</label>
      </div>
      <div className="rightFold-options">
        <div className="contact-search">
          <input
            type="text"
            placeholder="find a contact"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <div className="contact-search-icon">
            <i className="fi-rr-search"></i>
          </div>
        </div>
        {/* <div className="add-button">
          <div className="add-icon">
            <i className="fi-rr-user-add"></i>
          </div>
          <label className="add-label">Add Contact</label>
        </div> */}
      </div>
      <div className="contact-list">
        {contacts.length === 0
          ? "no contact found"
          : contacts.map((contact, i) => {
              return <ContactCard key={i} contact={contact} />;
            })}
      </div>
    </div>
  );
};

export default Contacts;
