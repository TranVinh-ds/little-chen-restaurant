import React from 'react';
import foodImg from '../icons_assets/restauranfood.jpg';
// import { useNavigate } from 'react-router-dom';

const CallToAction = () => {
  //   const navigate = useNavigate();
  //   const tableReserveHandler = () => {
  //     navigate('/booking');
  //   };
  return (
    <section className="hero-container">
      <div className="res-info">
        <h1>Little Lemon</h1>
        <h4>Chicago</h4>
        <p>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <button>Reserve a Table</button>
      </div>
      <img className="foodImg" src={foodImg} alt="restaurant food" />
    </section>
  );
};

export default CallToAction;
