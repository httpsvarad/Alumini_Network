import React from 'react';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-6 bg-white">
      <div className="text-xl font-bold text-green-600">
      PARVATI PATH
      </div>
      <nav className="flex space-x-8">
        <a href="#" className="text-gray-700 hover:text-green-500">Features</a>
        <a href="#" className="text-gray-700 hover:text-green-500">How It Works</a>
        <a href="#" className="text-gray-700 hover:text-green-500">Testimonials</a>
      </nav>
      <button className="bg-green-500 text-white px-5 py-3 rounded-3xl hover:bg-green-600">
        Buy Template
      </button>
    </header>
  );
};

export default Header;
