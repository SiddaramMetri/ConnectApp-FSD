import "./contactCard.css";

const ContactCard = ({ contact }) => {
  return (
    <div className="contact-card">
      <div className="contact-top">
        <img src={contact.avatar} className="contact-avatar" alt="noimage" />
        <div className="contact-info">
          <label className="contact-title">{contact.name}</label>
          <label className="contact-subtitle">{contact.type}</label>
          <label className="contact-subtitle">{contact.isStatus}</label>
        </div>
      </div>
      {/* <div className="contact-icons">
        <div className="contact-icon">
          <i className="fi-rr-microphone"></i>
        </div>
        <div className="contact-icon">
          <i className="fi-rr-play-alt"></i>
        </div>
        <div className="contact-icon">
          <i className="fi-rr-menu-dots"></i>
        </div>
      </div> */}
    </div>
  );
};

export default ContactCard;
