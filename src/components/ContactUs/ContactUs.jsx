import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <div className="contact-wrapper">
      <div className="contact-img-section">
        <img 
          src="/contact.webp" 
          alt="Person looking at city" 
          className="contact-img" 
        />
      </div>
      <div className="contact-form-section">
        <h2 className="contact-title">Want to change your life for better ?</h2>
        <p className="contact-subtext">I'll get in touch with you to schedule an appointment for you.</p>
        <div className="contact-details">
          <span>📧 abc@gmail.com</span>
          <span>📞 +91 0000000000</span>
        </div>
        <form className="contact-form">
          <input type="text" placeholder="Your name here" required />
          <input type="email" placeholder="Your email here" required />
          <textarea placeholder="Please, briefly describe your issue" rows="4" required></textarea>
          <button type="submit">Send message</button>
        </form>
      </div>
      
    </div>
  );
};

export default ContactUs;
