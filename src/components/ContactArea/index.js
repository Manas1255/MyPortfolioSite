import React from "react";
import ContactForm from "../ContactFrom/ContactForm";

const ContactArea = (props) => {
  return (
    <section className="tp-contact-form-area section-padding">
      <div className="container">
        <div className="tp-contact-form-wrap">
          <div className="tp-section-title">
            <h2>Contact</h2>
          </div>
          <ContactForm />
        </div>
      </div>
      <div className="visible-rotate-text">
        <h1>Contact Me</h1>
      </div>
    </section>
  );
};

export default ContactArea;
