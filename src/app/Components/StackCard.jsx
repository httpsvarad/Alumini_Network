'use client';

import React from 'react';

export default function Offer() {
  const cards = [
    {
      id: 1,
      title: 'Card One',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      imgSrc: 'https://codyhouse.co/demo-tutorials/stacking-cards/assets/img/img-1.jpg',
    },
    {
      id: 2,
      title: 'Card Two',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      imgSrc: 'https://codyhouse.co/demo-tutorials/stacking-cards/assets/img/img-2.jpg',
    },
    {
      id: 3,
      title: 'Card Three',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      imgSrc: 'https://codyhouse.co/demo-tutorials/stacking-cards/assets/img/img-3.jpg',
    },
    {
      id: 4,
      title: 'Card Four',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      imgSrc: 'https://codyhouse.co/demo-tutorials/stacking-cards/assets/img/img-2.jpg',
    }
  ];

  return (
    <div className="container">
      <header>
      </header>

      <main>
        <ul id="cards">
          {cards.map((card, index) => (
            <li className="card" id={`card_${index + 1}`} key={card.id}>
              <div className="card__content">
                <div>
                  <h2>{card.title}</h2>
                  <p>{card.description}</p>
                  <p>
                    <a href="#top" className="btn btn--accent">Read more</a>
                  </p>
                </div>
                <figure>
                  <img src={card.imgSrc} alt={card.title} />
                </figure>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
