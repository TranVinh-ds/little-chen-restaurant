import React from 'react';
import aboutImg1 from '../icons_assets/Mario and Adrian A.jpg';
import aboutImg2 from '../icons_assets/Mario and Adrian b.jpg';

const Chicago = () => {
  return (
    <section className="about-container">
      <div className="about-text">
        <h1>Little Lemon</h1>
        <h4>Chicago</h4>
        <p>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
      </div>

      <img src={aboutImg1} alt="boss-img" className="boss-img1" />

      <img src={aboutImg2} alt="boss-img" className="boss-img2" />
    </section>
  );
};

export default Chicago;
