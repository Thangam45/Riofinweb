import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Images1 from '../../assests/testi1.png'
import Images2 from '../../assests/testi2.png'
import Images3 from '../../assests/testi3.png'

const Founders = () => {
  const images = [
    'assests/testi1.png',
    'assests/testi1.png',
    'image3.jpg',
    'image4.jpg',
    // Add more image URLs as needed
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className='bg-white pt-10 md:pt-20 pb-20 '>
      <h1 className='text-black font-bold text-center text-4xl'>
      Meet Our Founders

        
      </h1>
      <div className='flex justify-center'>
      <div className='border-b-4 border-green-400 pb-4 mb-6 w-16 md:w-32'></div>
      </div>
      <div className='flex flex-col items-center mx-4 md:mx-auto max-w-4xl'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4' >
        <img src={Images1} alt="Your Alt Text" className="w-50 h-50 object-cover"/>
        <img src={Images2} alt="Your Alt Text" className="w-50 h-50 object-cover"/>
        <img src={Images3} alt="Your Alt Text" className="w-50 h-50 object-cover"/>
      </div>
      </div> 
</div>
  );
};

export default Founders;
