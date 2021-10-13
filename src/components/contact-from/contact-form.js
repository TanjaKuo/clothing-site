import React from "react";
import "./contact-form.scss";

const ContactForm = () => {
  return (
    <div>
      <div className="contact-form-container">
        <div className="contact-form">
          <input type="text" className="form-input" placeholder="name" />
          <input type="text" className="form-input" placeholder="email" />
          <textarea className="form-input text" placeholder="...."></textarea>
          <div className=" btn">
            <button className="button">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
