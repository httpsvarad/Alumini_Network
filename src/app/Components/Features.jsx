import React from 'react';
import { FaQrcode, FaFingerprint, FaChartLine } from 'react-icons/fa'; // Import icons for each feature

export default function FrontPage() {
  return (
    <div className="flex flex-col items-center py-20 px-14 bg-white">
      <h2 className="text-[3rem] font-bold mb-2 text-center text-green-700">
        The GreenBank <span className="text-green-500">Difference</span>
      </h2>
      <div className='w-[30%]'>
      <p className="text-lg text-gray-600 text-center mb-10">
        Discover why GreenBank is the smart choice for secure banking and personalized financial growth.
      </p>
      </div>

      <div className="flex justify-center w-full gap-9">
        {/* Card 1: Scan to Pay */}
        <div className="flex flex-col items-center p-6 shadow-lg h-[45vh] w-[25%] rounded-[5rem] bg-green-50 border border-green-300 
          hover:border-green-300 hover:shadow-[0_4px_30px_rgba(0,255,0,0.2)] transition duration-300 ease-in-out transform hover:scale-105">
          <FaQrcode className="text-4xl text-green-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-green-700">Scan to Pay</h3>
          <p className="text-gray-600 text-center">
            Seamless payments at your fingertips - scan, pay, and go with ease.
          </p>
        </div>

        {/* Card 2: Secure Banking */}
        <div className="flex flex-col items-center p-6 shadow-lg h-[45vh] w-[25%] rounded-[5rem] bg-green-50 border border-green-300 
          hover:border-green-300 hover:shadow-[0_4px_30px_rgba(0,255,0,0.2)] transition duration-300 ease-in-out transform hover:scale-105">
          <FaFingerprint className="text-4xl text-green-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-green-700">Secure Banking</h3>
          <p className="text-gray-600 text-center">
            Bank with confidence - our cutting-edge security keeps your finances safe, always.
          </p>
        </div>

        {/* Card 3: Tailored Investing */}
        <div className="flex flex-col items-center p-6 shadow-lg h-[45vh] w-[25%] rounded-[5rem] bg-green-50 border border-green-300 
          hover:border-green-300 hover:shadow-[0_4px_30px_rgba(0,255,0,0.2)] transition duration-300 ease-in-out transform hover:scale-105">
          <FaChartLine className="text-4xl text-green-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-green-700">Tailored Investing</h3>
          <p className="text-gray-600 text-center">
            Invest smarter, we provide personalized advice tailored to your financial goals.
          </p>
        </div>
      </div>
    </div>
  );
}
