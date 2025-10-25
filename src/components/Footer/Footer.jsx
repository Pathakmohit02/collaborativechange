import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-main">
      <div className="footer-row top">
        <div className="footer-awards">
          <img src="/f1.avif" alt="Singa Reviews" className="footer-icon" />
          <img src="/f2.avif" alt="Best in Singapore" className="footer-icon" />
        </div>
        <div className="footer-subscribe">
          <h2>Subscribe Form</h2>
          <form className="subscribe-form" autoComplete="off">
            <input type="email" placeholder="Email Address" />
            <button type="submit">Submit</button>
          </form>
        </div>
      <div className="footer-awards">
          <img src="/f3.avif" alt="Singa Reviews" className="footer-icon" />
          <img src="/f4.avif" alt="Best in Singapore" className="footer-icon" />
        </div>
      </div>
      <div className="footer-row info">
        <div className="footer-contact">
          <a href="https://youtube.com/" className="footer-youtube" target="_blank" rel="noopener noreferrer">
            <img src="/f5.avif" alt="YouTube" className="footer-icon small" />
          </a>
          <div className="footer-details">
            <div>collaborativechangebyhypnosis@gmail.com</div>
            <div>(65) 9450 5934</div>
            <div>Ubi Techpark, 10 Ubi Cres, #04-100, Singapore 408564</div>
            <div>©2025 by Collaborative Change</div>
          </div>
        </div>
        <div className="footer-helper">
          <img src="/f5.avif" alt="Therapy Helpers" className="footer-icon" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
