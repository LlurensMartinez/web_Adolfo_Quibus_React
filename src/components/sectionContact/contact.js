import React from 'react';
import "./contact.css";

const contact = ({email, phone}) => {
  return (
    <section id="contact" className="black sectionContact">
      <h2>CONTACTO</h2>
      <div className="contactContainer">
        <i className="fab fa-whatsapp" id="whatsapp"></i>
        <p>{phone}</p>
        <i className="far fa-paper-plane" id="email"></i>
        <p>{email}</p>
      </div>
    </section>
  );
};

export default contact;