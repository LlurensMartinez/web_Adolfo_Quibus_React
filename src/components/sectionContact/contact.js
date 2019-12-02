import React from 'react';
import "./contact.css";

const contact = ({email, phone}) => {
  return (
    <section id="contact" className="black sectionContact">
      <h2>CONTACTO</h2>
      <div className="contactContainer">
        <i className="large material-icons">contact_phone</i>
        <p>{phone}</p>
        <i className="large material-icons">contact_mail</i>
        <p>{email}</p>
      </div>
    </section>
  );
};

export default contact;