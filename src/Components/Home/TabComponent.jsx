import React, { useState, useEffect, useRef } from 'react';
import BackgroundImage1 from '../../assests/tab.png';

const TabsComponent = ({ items }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const firstBtnRef = useRef();

  useEffect(() => {
    firstBtnRef.current.focus();
  }, []);

  const cardStyle1 = {
    backgroundImage: `url(${BackgroundImage1})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className='bg-gradient-to-b from-blue-600 to-indigo-800 pl-4 pr-4 md:pl-40 md:pr-40 pt-10 pb-20 align-middle' style={cardStyle1}>
      <h1 className='text-white font-bold text-center text-4xl font-sans'>
        Why Invest Beyond Traditional Assets
      </h1>
      <p className='text-white text-center px-4 md:px-32 text-1xl pb-10 mt-2 md:mt-5'>
        Check Out Props & Cons
      </p>

      <div className='flex justify-center items-center py-12 pt-10 pb-0 pr-4 pl-4 md:pr-20 md:pl-20 bg-white border-b-8 border-r-8 border-blue-500 rounded-18'>
        <div className='max-w-screen-xl w-full flex flex-col gap-y-2'>
          <div className='bg-white p-1 rounded-6 flex flex-wrap gap-2 md:gap-x-2 font-bold border-b-6 border-r-6 text-black border-2 border-black'>
            {items.map((item, index) => (
              <button
                ref={index === 0 ? firstBtnRef : null}
                key={index}
                onClick={() => setSelectedTab(index)}
                className={`w-full md:w-auto p-2 text-center focus:bg-white focus:text-blue-600 ${
                  selectedTab === index ? 'bg-white text-blue-600' : ''
                }`}
              >
                {item.title}
              </button>
            ))}
          </div>

          <div className='bg-white p-2 rounded-xl'>
            {items.map((item, index) => (
              <div key={index} className={`${selectedTab === index ? '' : 'hidden'}`}>
                {item.content}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabsComponent;
