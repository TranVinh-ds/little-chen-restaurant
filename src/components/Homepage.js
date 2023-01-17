import React from 'react';

import CallToAction from './CallToAction';
import Specials from './Specials';
import CustomersSay from './CustomersSay';
import Chicago from './Chicago';

const Homepage = () => {
  return (
    <>
      <CallToAction />
      <div className="promo-text">
        <h1>This weeks specials! </h1>
        <button>Online Menu</button>
      </div>
      <Specials />
      <div className="testi-text">
        <h3>Testimonials</h3>
      </div>
      <CustomersSay />
      <Chicago />
    </>
  );
};

export default Homepage;
