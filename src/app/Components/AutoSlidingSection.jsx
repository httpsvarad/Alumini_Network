import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; // Import icons from react-icons
import Image from 'next/image';
import phone from '@/Assets/IMG/phone.png';
import oneIMG from "../../Assets/IMG/1.png"
import twoIMG from "../../Assets/IMG/2.png"
import threeIMG from "../../Assets/IMG/3.png"
import fourIMG from "../../Assets/IMG/4.png"
import fiveIMG from "../../Assets/IMG/7.png"
import sixIMG from "../../Assets/IMG/6.png"
import sevenIMG from "../../Assets/IMG/8.png"

export default function FrontPage() {
  return (
    <div className="flex flex-col justify-center w-full items-center relative">
        <div className='flex w-[60%] justify-center mt-16'>
            <div className='p-8'>
                <p className='text-[1.5rem]'> WE ARE PARTNERED WITH MORE THAN 50+ companies around the globe.</p>
            </div>
            <div className="slider  ">
	<div className="slide-track z-4">
		<div className="slide z-4">
			<Image src={oneIMG} height="100" width="250" alt="" />
		</div>
		<div className="slide">
			<Image src={twoIMG} height="100" width="250" alt="" />
		</div>
		<div className="slide">
			<Image src={threeIMG} height="100" width="250" alt="" />
		</div>
		<div className="slide">
			<Image src={fourIMG} height="100" width="250" alt="" />
		</div>
		<div className="slide">
			<Image src={fiveIMG} height="100" width="250" alt="" />
		</div>
		<div className="slide">
			<Image src={threeIMG} height="100" width="250" alt="" />
		</div>
		<div className="slide">
			<Image src={fiveIMG} height="100" width="250" alt="" />
		</div>
		<div className="slide">
			<Image src={oneIMG} height="100" width="250" alt="" />
		</div>
		<div className="slide">
			<Image src={fourIMG} height="100" width="250" alt="" />
		</div>
		<div className="slide">
			<Image src={oneIMG} height="100" width="250" alt="" />
		</div>
		<div className="slide">
			<Image src={twoIMG} height="100" width="250" alt="" />
		</div>
		<div className="slide">
			<Image src={oneIMG} height="100" width="250" alt="" />
		</div>
		<div className="slide">
			<Image src={fiveIMG} height="100" width="250" alt="" />
		</div>
		<div className="slide">
			<Image src={fourIMG} height="100" width="250" alt="" />
		</div>
	</div>
      </div>
        </div>
    </div>
  );
}
