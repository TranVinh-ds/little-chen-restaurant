import React from 'react';
import img1 from '../icons_assets/portrait-1.jpg';
import img2 from '../icons_assets/portrait-2.jpg';
import img3 from '../icons_assets/portrait-3.jpg';
import img4 from '../icons_assets/portrait-4.jpg';

const CustomersSay = () => {
  return (
    <section className="testi-container">
      <div className="testimonial">
        <h4>Rating</h4>
        <img className="portrait" src={img1} alt="customer-img" />
        <span>name</span>
        <p>review message</p>
      </div>
      <div className="testimonial">
        <h4>Rating</h4>
        <img className="portrait" src={img2} alt="customer-img" />
        <span>name</span>
        <p>review message</p>
      </div>
      <div className="testimonial">
        <h4>Rating</h4>
        <img className="portrait" src={img3} alt="customer-img" />
        <span>name</span>
        <p>review message</p>
      </div>
      <div className="testimonial">
        <h4>Rating</h4>
        <img className="portrait" src={img4} alt="customer-img" />
        <span>name</span>
        <p>review message</p>
      </div>
    </section>
  );
};

export default CustomersSay;
