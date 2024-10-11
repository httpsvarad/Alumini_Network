'use client';
import { useEffect } from 'react';

import React from 'react';

export default function Offer() {

  useEffect(() => {
    const handleScroll = () => {
      const cardOne = document.getElementById('card_1');
      const cardTwo = document.getElementById('card_2');
      const cardThree = document.getElementById('card_3');

      if (cardOne && cardTwo && cardThree) {
        const cardOneRect = cardOne.getBoundingClientRect();
        const cardTwoRect = cardTwo.getBoundingClientRect();
        const cardThreeRect = cardThree.getBoundingClientRect();

        // Check if Card Two is in the middle position of Card One
        if (
          cardTwoRect.top < cardOneRect.bottom &&
          cardTwoRect.bottom > cardOneRect.top
        ) {
          cardTwo.style.opacity = '1'; // Make Card Two visible
          cardTwo.style.transform = 'translateY(0)'; // Reset any transformation
        } else {
          cardTwo.style.opacity = '0'; // Hide Card Two
          cardTwo.style.transform = 'translateY(50px)'; // Shift down when hidden
        }

        // Check if Card Three is in the middle position of Card Two
        if (
          cardThreeRect.top < cardTwoRect.bottom &&
          cardThreeRect.bottom > cardTwoRect.top
        ) {
          cardThree.style.opacity = '1'; // Make Card Three visible
          cardThree.style.transform = 'translateY(0)'; // Reset any transformation
        } else {
          cardThree.style.opacity = '0'; // Hide Card Three
          cardThree.style.transform = 'translateY(50px)'; // Shift down when hidden
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const cards = [
    {
      id: 1,
      title: 'Card One',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      imgSrc: 'https://png.pngtree.com/png-clipart/20221027/ourmid/pngtree-book-stack-multiple-cartoon-hand-drawn-png-image_6390523.png',
      bgColor: "#f7f7e7"
    },
    {
      id: 2,
      title: 'Card Two',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      imgSrc: 'https://codyhouse.co/demo-tutorials/stacking-cards/assets/img/img-2.jpg',
      bgColor: "#32d18c",
      textColor:"white",

    },
    {
      id: 3,
      title: 'Card Three',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      imgSrc: 'https://codyhouse.co/demo-tutorials/stacking-cards/assets/img/img-3.jpg',
      textColor: "#083d3d",
      bgColor: "#ccf5eb",

    },
  ];

  return (
    <div className="container">
    <header></header>

    <main>
      <ul id="cards">
        {cards.map((card, index) => (
          <li
            className="card"
            id={`card_${index + 1}`}
            key={card.id}
            style={{
              opacity: index === 1 || index === 2 ? '0' : '1', // Hide Card Two and Three initially
              transition: 'opacity 0.3s, transform 0.3s',
            }}
          >
            <div
              className="card__content"
              style={{ backgroundColor: card.bgColor, color: card.textColor }}
            >
              <div className="flex h-full justify-start gap-2">
                <div>
                  <h2>{card.title}</h2>
                  <p>{card.description}</p>
                  <p>
                    <a href="#top" className="btn btn--accent">
                      Read more
                    </a>
                  </p>
                </div>
              </div>

              {/* Image figure that floats out of the div */}
              <figure className="image-outside">
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
