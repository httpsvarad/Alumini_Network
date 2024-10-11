import React from 'react';
import Image from 'next/image';
import oneIMG from "../../Assets/IMG/1.png";
import twoIMG from "../../Assets/IMG/2.png";
import threeIMG from "../../Assets/IMG/3.png";
import fourIMG from "../../Assets/IMG/4.png";
import fiveIMG from "../../Assets/IMG/7.png";
import sixIMG from "../../Assets/IMG/6.png";
import sevenIMG from "../../Assets/IMG/8.png";

function VerticalScroller() {
  const images = [oneIMG, twoIMG, threeIMG, fourIMG, fiveIMG, sixIMG, oneIMG];

  return (
    <div className="vertical-slider flex gap-5">
      <div className="vertical-slide-track">
        {/* Duplicating the slides for continuous scrolling */}
        {images.concat(images).map((imgSrc, index) => (
          <div key={index} className="vertical-slide">
            <div className='p-8 bg-white rounded-lg'>           
               <Image src={imgSrc} height={150} width={150} alt={`slide-${index}`} />
            </div>
          </div>
        ))}
        
      </div>
      <div className="vertical-slide-track">
        {/* Duplicating the slides for continuous scrolling */}
        {images.concat(images).map((imgSrc, index) => (
          <div key={index} className="vertical-slide">
                <div className='p-8 bg-white rounded-lg'>           
               <Image src={imgSrc} height={150} width={150} alt={`slide-${index}`} />
            </div>          </div>
        ))}
        
      </div>
      <div className="vertical-slide-track">
        {/* Duplicating the slides for continuous scrolling */}
        {images.concat(images).map((imgSrc, index) => (
          <div key={index} className="vertical-slide">
                <div className='p-8 bg-white rounded-lg'>           
               <Image src={imgSrc} height={150} width={150} alt={`slide-${index}`} />
            </div>          </div>
        ))}
        
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="flex justify-center items-center w-full bg-[#0b5252] pl-8  ">
    
    <div className="text-left text-white w-[40%] ml-[10rem]">
          <h1 className="text-[3.6rem] font-bold">Seamless Payment</h1>
          <h1 className="text-[3rem] font-bold text-green-400">Integration</h1>
          <p className="text-lg mt-4">
            GreenBank seamlessly integrates with leading payment providers, offering you a wide range of options for convenient and secure transactions.
          </p>
        </div>
      <div className="flex flex-row  h-[30%] w-[70%] justify-start bg-[#0b5252] p-8"> 
        <VerticalScroller />
      </div>
    </div>
  );
}
