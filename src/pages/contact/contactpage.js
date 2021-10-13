import React from "react";
import ContactForm from "../../components/contact-from/contact-form";

import ContactInfo from "../../components/contact-info/contact-info";
import "./contactpage.scss";

const ContactPage = () => {
  return (
    <div className="contact-container">
      <div className="contact-hero">
        <div>
          <h2 className="contact">Get In Touch</h2>
          <div className="contacts">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
