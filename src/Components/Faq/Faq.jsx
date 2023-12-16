import React from 'react';
import Img2 from '../../assests/img3.png';
import Faqtt from './Faqtt';
import Faqgeneral from './Faqgeneral';

export default function Faq() {
  return (
    <>
      <div className="faq bg-no-repeat bg-cover" style={{ backgroundImage: `url(${Img2})` }}>
        <div className="font-inter">
          <hr className="faq_hr" />
          <h1 className="text-4xl md:text-7xl text-white md:mr-12" id="title">
            FAQ'S
          </h1>
          <p className="faq_description text-sm md:text-base">
            Our Organization offers innovative investment options which provide maximum returns than Fixed
            Deposits. Our paramount objective is to serve the nation and for its people to prosper.
          </p>
        </div>
        <div className="flex flex-col md:flex-row">
          <Faqtt></Faqtt>
          <div className="md:w-full lg:w-3/4 xl:w-3/5 mx-auto">
            <Faqgeneral></Faqgeneral>
          </div>
        </div>
      </div>
    </>
  );
}
