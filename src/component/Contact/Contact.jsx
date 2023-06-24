import React from 'react';
import './Contact.css'; 

const Contact = () => {
  return (
    <div id="contact" className="contact-section">
      <h2>Contact</h2>
      <form className="contact-form">
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Message"></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;
