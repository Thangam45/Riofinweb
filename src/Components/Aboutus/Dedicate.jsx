import React from 'react';
import Bck from '../../assests/bck.jpg';

const Dedicate = () => {
  return (
    <>
      <div className="p-6 md:p-10 text-black">
        <h1 className='text-3xl md:text-5xl font-bold mb-4 md:mb-8 leading-[40px] text-center md:text-left'>
          Dedicated Teams <br />
          For your Dedicated Dreams.
        </h1>
        <img src={Bck} className="w-full object-cover mb-6 rounded-lg" alt="background" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="border-2 pb-8 ml-2 md:ml-[86px] mr-auto mb-10 -m-24 border-black bg-white rounded-2xl boxshadow">
        {/* <div className="border-2 pb-8 ml-[86px] mr-auto mb-10 -m-32 border-black bg-white rounded-2xl boxshadow"> */}
          <h1 className='text-3xl font-bold px-5 pt-6 pb-3'>Why we Do this</h1>
          <hr className='hrw' />
          <p className='px-8 text-lg pt-5 pb-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo voluptatem culpa odit labore assumenda aliquam quaerat rem adipisci natus suscipit. Soluta id quod, nihil tempora quidem aliquid amet aut quos.</p>
          <a href="" className='text-xs font-bold px-3 py-2 rounded border border-lime-700 bg-[#00ff00] ml-2 md:ml-96 hover:bg-transparent'></a>
        </div>

        <div className="ml-2 md:ml-12 md:mb-2">
          <h1 className='text-3xl font-bold -mt-3 pb-3'>Helping you in every stage</h1>
          <hr className='hrh mt-2' />
          <p className='px-8 text-lg pt-2 pb-5'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto provident suscipit numquam dolore nesciunt eos ea iusto, unde quo enim earum eveniet voluptate excepturi beatae tempore dicta veniam corrupti quibusdam?
          </p>
        </div>
      </div>
    </>
  );
};

export default Dedicate;
