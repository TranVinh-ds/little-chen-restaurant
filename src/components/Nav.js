import React from 'react';
// import { Link } from 'react-router-dom';
import logo from '../icons_assets/Logo.svg';

const Nav = () => {
  return (
    <nav>
      <div className="nav-container">
        {/* <Link to="/"> */}
        <img src={logo} alt="Little Lemon" />
        {/* </Link> */}
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
    </nav>
  );
};

export default Nav;
