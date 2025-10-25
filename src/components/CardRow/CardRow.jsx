import React from 'react';
import './CardRow.css';
import { Tilt } from '../motion-primitives/tilt';




const cards = [
  {
    image: "/smoke.avif",
    heading: "Stop Smoking",
    subheading: "You have NO DESIRE to smoke"
  },
  {
    image: "/weight.avif",
    heading: "Lose Weight",
    subheading: "You enjoy eating HEALTHILY"
  },
  {
    image: "/increase.avif",
    heading: "Increase Assertiveness",
    subheading: "You explain yourself CONFIDENTLY and CALMLY"
  }
];

const CardRow = () => {
  return (
    <div className="card-row">
      {cards.map((card, i) => (
        <div className="card" key={i}>
          <Tilt
            rotationAngle={8}
            reverse={true}
            className='tilt-img-wrapper'
          >
            <img
              src={card.image}
              alt={card.heading}
              className='tilt-img'
            />
            {/* Overlay on the image */}
            <div className="card-overlay" />
          </Tilt>
          <div className="card-content">
            <h2 className="card-heading">{card.heading}</h2>
            <p className="card-subheading">{card.subheading}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardRow;









