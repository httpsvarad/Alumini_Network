import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; // Import icons from react-icons
import Image from 'next/image';
import phone from '@/Assets/IMG/phone.png'; // Update this to your correct path

export default function FrontPage() {
  return (
    <div className="flex flex-col items-center relative">
      <div className="flex w-full flex-col md:flex-row justify-center items-start h-[83vh] overflow-hidden rounded-[9rem] bg-gradient-to-b from-white via-white to-green-400">  
        {/* Left Section - Text and Call to Action */}
        <div className="space-y-6 w-[40%] mt-28 text-center md:text-left md:mr-8">  
          <div className="inline-flex items-center bg-yellow-100 text-yellow-600 px-4 py-2 rounded-full">
            <span className="text-lg bg-white rounded-2xl px-3">New</span>
            <span className="ml-2 text-lg">Beta now available</span>
            <span className="ml-2 text-lg">→</span>
          </div>
          <h1 className="text-[3.4rem] font-bold text-green-700">
            Empower Your <span className="text-green-500">Finances</span><br />
            For A Brighter Future.
          </h1>
          <p className="text-lg text-gray-600">
            Streamline your payments with GreenBank. Instant bank transfers, hassle-free bill payments, and more – all at your fingertips.
          </p>
          <button className="bg-green-500 text-white text-lg px-9 py-2 rounded-lg hover:bg-green-600">
            Download App
          </button>

          {/* Social Media Icons */}
          <div className="flex justify-center md:justify-start space-x-4 mt-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
              <FaFacebook size={36} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-400">
              <FaTwitter size={36} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-pink-500">
              <FaInstagram size={36} />
            </a>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="relative mt-12 md:mt-0 md:ml-8">
          <div className="relative" style={{ position: 'relative', bottom: '-90px' }}> 
            <Image
              src={phone}
              alt="Phone App Image"
              className="w-96 h-auto md:w-[27rem]" 
              priority={true} 
            />
          </div>
        </div>
      </div>

      {/* Bottom Gradient Background */}
      <div className="w-full h-[40%] bg-gradient-to-t from-green-200 to-transparent rounded-t-[6rem]"></div>
    </div>
  );
}
