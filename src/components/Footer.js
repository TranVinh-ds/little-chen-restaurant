import React from 'react';
import logo from '../icons_assets/Logo.svg';

const Footer = () => {
  return (
    <footer className="footer-container">
      <img src={logo} alt="logo" />
      <div className="footer-nav">
        <h4>Doormat Navigation</h4>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/menu">Menu</a>
          </li>
          <li>
            <a href="/reservations">Reservations</a>
          </li>
          <li>
            <a href="/order">Order Online</a>
          </li>
          <li>
            <a href="/login">Login</a>
          </li>
        </ul>
      </div>
      <div className="footer-nav">
        <h4 className="contact">Contact</h4>
        <p>Address</p>
        <p>phone number</p>
        <p>email</p>
      </div>
      <div className="footer-nav">
        <h4 className="social">Social Media Links</h4>
      </div>
    </footer>
  );
};

export default Footer;
