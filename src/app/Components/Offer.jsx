'use client';

import React from 'react';
import { motion, useInView } from 'framer-motion';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import StackCard from "@/app/Components/StackCard"

export default function Offer() {
  // Array of card details
  const cards = [
    { id: 1, imageSrc: '/path-to-card-image1.png', alt: 'Card 1' },
    { id: 2, imageSrc: '/path-to-card-image2.png', alt: 'Card 2' },
    { id: 3, imageSrc: '/path-to-card-image3.png', alt: 'Card 3' }
  ];

  return (
    <motion.div
      className="flex flex-col justify-center w-full items-center bg-gray-50 p-8"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Heading Section */}
      <motion.div 
        className="w-full text-center my-12 flex justify-center flex-col items-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-[3rem] font-bold text-green-700">Discover What We Offer</h1>
        <div className='px-1  w-[40%]'>
        <p className="text-[1.5rem]  text-gray-600 mt-4">
          Elevate your e-commerce experience with our powerful feature set designed for unparalleled excellence.
        </p>
        </div>
       
      </motion.div>

      {/* Card Section */}
      {/* <div className="w-full flex flex-col items-center space-y-8 mt-10">
        {cards.map((card, index) => (
          <CardComponent key={card.id} card={card} delay={index * 0.5} />
        ))}
      </div> */}

        <StackCard />

      {/* Text Section */}
      {/* <motion.div
        className="w-full mt-12 text-center max-w-xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-semibold text-green-700">
          Manage All Your Credit Cards in One Place
        </h2>
        <p className="text-lg text-gray-600 mt-4">
          Keep track of multiple credit cards effortlessly within the GreenBank app. Monitor balances, track transactions, and stay on top of payments without switching between accounts.
        </p>
      </motion.div>

      {/* Footer Section with Social Icons */}
      {/* <motion.div
        className="w-full mt-12 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex justify-center space-x-4">
          <FaFacebook className="text-green-700" size={30} />
          <FaTwitter className="text-green-700" size={30} />
          <FaInstagram className="text-green-700" size={30} />
        </div> 
      </motion.div> */}
    </motion.div>
  );
}

// Individual Card Component
const CardComponent = ({ card, delay }) => {
  // Set up ref and check if the element is in view
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className="bg-green-100 p-4 rounded-lg shadow-lg w-[300px]"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay }}
    >
      <img
        src={card.imageSrc}
        alt={card.alt}
        className="w-full h-auto"
      />
    </motion.div>
  );
};
