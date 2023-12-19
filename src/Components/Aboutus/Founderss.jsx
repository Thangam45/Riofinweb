import React from 'react';
import { BiSolidQuoteRight } from 'react-icons/bi';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import founderImage from '../../assests/founder.PNG';
import Mask from '../../assests/Mask group.png';
import Mask1 from '../../assests/Mask group (1).png';
import Mask2 from '../../assests/Mask group (2).png';

const Founders = () => {
  return (
    <div className="relative">
      <div>
        {/* Show founder image only for desktop and tablet screens */}
        <img src={founderImage} className="hidden md:block w-full h-full object-cover object-center" alt="founder" />
        <div className="md:absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center p-4">
          <h1 className="text-2xl md:text-5xl font-bold text-center md:text-left mb-2 md:mb-4">Our Founders</h1>
          <hr className="w-1/2 md:w-full mx-auto mb-4 md:mb-8" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <FounderCard image={Mask} name="VENKATESAN" role="COO" />
            <FounderCard image={Mask1} name="DHANASEKARAN" role="CFO" />
            <FounderCard image={Mask2} name="BASKARAN" role="CEO" />
          </div>
        </div>
      </div>
    </div>
  );
};

const FounderCard = ({ image, name, role }) => {
  return (
    <div className="bg-white rounded-xl p-4 md:mx-4 md:my-2">
      <BiSolidQuoteRight className="mx-auto my-2 text-xl text-gray-800" />
      <p className="text-sm px-2 md:px-4 pt-2 text-center">
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at
        its layout.
      </p>
      <img src={image} alt="" className="w-[5rem] h-[5rem] mx-auto my-2 border border-black rounded-full" />
      <p className="text-lg font-semibold text-center">{name}</p>
      <p className="text-md flex justify-center mb-2">{role}</p>
      <div className="flex justify-center">
        <FaFacebookF className="text-base ml-2 mr-2 text-gray-800 hover:text-[#00ff00]" />
        <FaTwitter className="text-base ml-2 mr-2 text-gray-800 hover:text-[#00ff00]" />
        <p className="text-base text-gray-800 font-bold hover:text-[#00ff00]">in</p>
      </div>
    </div>
  );
};

export default Founders;
