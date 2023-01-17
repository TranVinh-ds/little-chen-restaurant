import React from 'react';
import greekSalad from '../icons_assets/greek salad.jpg';
import bruchetta from '../icons_assets/bruchetta.svg';
import lemonDessert from '../icons_assets/lemon dessert.jpg';
import basket from '../icons_assets/Basket.svg';

const Specials = () => {
  return (
    <section className="hightlight-container">
      <div className="special-menu">
        <img src={greekSalad} alt="greed salad" />
        <h4>
          Greek salad
          <span>$12.99</span>
        </h4>
        <p>
          The famous greek salad of crispy lettuce, peppers, olives and our
          Chicago style teta cheese, garnished with crunchy garlic rosemary
          croutons.
        </p>
        <h5>
          Order a delivery
          <span>
            <img className="basket-icon" src={basket} alt="basket icon" />
          </span>
        </h5>
      </div>
      <div className="special-menu">
        <img className="bruchetta" src={bruchetta} alt="bruchetta" />
        <h4>
          Bruchetta
          <span>$5.99</span>
        </h4>
        <p>
          Our Bruchetta is made from grilled bread that has been smeared with
          garlic and seasoned with salt and olive oil.
        </p>
        <h5>
          Order a delivery
          <span>
            <img className="basket-icon" src={basket} alt="basket icon" />
          </span>
        </h5>
      </div>
      <div className="special-menu">
        <img src={lemonDessert} alt="lemon dessert" />
        <h4>
          Lemon Dessert
          <span>$5.00</span>
        </h4>
        <p>
          This comes straight from grandma's recipe book, every last ingredient
          has been sourced and is as authentic as can be imagined.
        </p>
        <h5>
          Order a delivery
          <span>
            <img className="basket-icon" src={basket} alt="basket icon" />
          </span>
        </h5>
      </div>
    </section>
  );
};

export default Specials;
