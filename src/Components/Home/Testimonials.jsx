import React, { useRef } from 'react';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowLeft, faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image1 from '../../assests/men.png';
import Image2 from '../../assests/men.png';
import Image3 from '../../assests/men.png';
import Image4 from '../../assests/men.png';
import Image5 from '../../assests/men.png';

const Testimonial = ({ name, role, content, image}) => {
  return (
    <div className="max-w-lg rounded-[18px] overflow-hidden border-b-[12px] border-r-[12px] border-white bg-gradient-to-b from-blue-500 to-indigo-800 p-4 md:p-8 m-2 shadow-md relative">
       <p className="text-white">{content}</p>
      <div className="flex items-center mt-2 md:mt-4">
        {image && <img src={image} alt={`${name}'s headshot`} className="rounded-full w-8 h-8 md:w-12 md:h-12 mr-2 md:mr-4" />}
        <div>
          <h3 className="text-sm md:text-lg font-semibold text-white">{name}</h3>
          <p className="text-xs md:text-sm text-white">{role}</p>
        </div>
      </div>
     
    </div>
  );
};

const TestimonialSection = () => {
    const testimonialImages = [
        Image1,
        Image2,
        Image3,
        Image4,
        Image5,
        // Add other image paths as needed
      ];
    const testimonials = [
        {
        image: testimonialImages[0],  
          name: 'John Doe',
          role: 'CEO, ABC Company',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
            image: testimonialImages[1],  
          name: 'Jane Smith',
          role: 'Marketing Manager, ',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
            image: testimonialImages[2],  
          name: 'Bob Johnson',
          role: 'CTO, Tech Innovators',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
            image: testimonialImages[3],  
          name: 'John Doe',
          role: 'CEO, ABC Company',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
            image: testimonialImages[4],  
          name: 'Jane Smith',
          role: 'Marketing Manager, ',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
      ];
  const sliderRef = useRef(null);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    arrows: false,
    slidesToScroll: 1,  
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,

          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current.slickNext();
  };


  return (
    <div className="bg-black py-8 md:py-12 lg:py-16 relative">
      <h1 className="text-white font-bold text-2xl md:text-4xl pl-4 md:pl-20 mb-2 md:mb-4">
        Our Happy Clients About
        <br className="md:block hidden" /> Riofin Assets
      </h1>
      <div className="flex justify-start">
        <div className="border-b-4 border-green-400 pb-2 md:pb-4 mb-8 md:mb-20 pr-4 md:pr-[650px] overflow-hidden"></div>
      </div>

      <Slider ref={sliderRef} {...sliderSettings}>
        {testimonials.map((testimonial, index) => (
          <Testimonial key={index} {...testimonial} />
        ))}
      </Slider>

      <div className="absolute top-12 md:top-24 right-4 md:right-16 mt-2 md:mt-8 ml-2 md:ml-8 flex">
        <button className="" onClick={handlePrev}>
          <div className="w-6 h-6 md:w-8 md:h-8 mx-2" style={{ color: 'white' }}>
            <FontAwesomeIcon icon={faCircleArrowLeft}  style={{ fontSize: '2.0em' }}/>
          </div>
        </button>
        <button className="" onClick={handleNext}>
          <div className="w-6 h-6 md:w-8 md:h-8 mx-2" style={{ color: 'white' }}>
            <FontAwesomeIcon icon={faCircleArrowRight} style={{ fontSize: '2.0em' }} />
          </div>
        </button>
      </div>
    </div>
  );
};

export default TestimonialSection;
