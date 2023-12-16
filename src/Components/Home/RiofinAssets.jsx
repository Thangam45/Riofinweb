import React from 'react';
import Icon1 from '../../assests/icon1.png';
import Icon2 from '../../assests/icon2.png';
import Icon3 from '../../assests/icon3.png';
import BackgroundImage1 from '../../assests/card1.png';
import BackgroundImage2 from '../../assests/card2.png';
import BackgroundImage3 from '../../assests/card3.png';
import Button1 from '../../assests/tick.png';
import Button2 from '../../assests/tick.png';
import Button3 from '../../assests/tick.png';

function RiofinAssets() {
  const cardStyle1 = {
    backgroundImage: `url(${BackgroundImage1})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  const cardStyle2 = {
    backgroundImage: `url(${BackgroundImage2})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  const cardStyle3 = {
    backgroundImage: `url(${BackgroundImage3})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className='bg-gradient-to-b from-blue-600 to-indigo-800 pt-10 md:pb-20'>
      <h1 className='text-white font-bold text-center text-4xl md:text-5xl mb-4 md:mb-8'>
        What is RIOFIN ASSETS?
      </h1>

      <p className='text-white text-center px-4 md:px-32 text-lg md:text-2xl mt-2 md:mt-5 font-sans'>
        At Riofin: Higher Returns, Stronger Portfolio, Capital Protection.
      </p>

      <div className="flex flex-col md:flex-row items-center justify-center mt-10 p-4 md:p-10 gap-4 md:gap-8">
        {/* First Image Box */}
        <div className="w-full md:w-1/3 bg-gray-800 rounded-lg overflow-hidden border-b-8 border-r-8 border-black mb-8 md:mb-0 md:h-[400px]" style={cardStyle1}>
          {/* Content */}
          <div className="mb-4 text-center">
            <img src={Icon1} alt="Card 1" className="w-16 h-16 md:w-24 md:h-24 mt-4 mx-auto rounded" />
            <h2 className="text-xl md:text-2xl font-bold text-black">Pioneers in Alternative Investments</h2>
          </div>

          {/* Description */}
          <p className="text-gray-800 text-center mb-4">The process of managing a task through its life cycle. It involves planning, testing, tracking.</p>
          <img src={Button1} alt="button1" className="w-16 h-16 md:w-24 md:h-24 mx-auto rounded" />
        </div>

        {/* Second Card */}
        <div className="w-full md:w-1/3 bg-gray-800 rounded-lg overflow-hidden border-b-8 border-r-8 border-black mb-8 md:mb-0 md:h-[400px]" style={cardStyle2}>
          {/* Content */}
          <div className="mb-4 text-center">
            <img src={Icon2} alt="Card 2" className="w-16 h-16 md:w-24 md:h-24 mb-4 mx-auto rounded" />
            <h2 className="text-xl md:text-2xl font-bold text-black">Think Beyond Traditional Assets</h2>
          </div>

          {/* Description */}
          <p className="text-gray-800 text-center mb-4">The process of managing a task through its life cycle. It involves planning, testing, tracking.</p>
          <img src={Button2} alt="button2" className="w-16 h-16 md:w-24 md:h-24 mx-auto rounded" />
        </div>

        {/* Third Card */}
        <div className="w-full md:w-1/3 bg-gray-800 rounded-lg overflow-hidden border-b-8 border-r-8 border-black md:h-[400px]" style={cardStyle3}>
          {/* Content */}
          <div className="mb-4 text-center">
            <img src={Icon3} alt="Card 3" className="w-16 h-16 md:w-24 md:h-24 mb-4 mx-auto rounded" />
            <h2 className="text-xl md:text-2xl font-bold text-black">
              Join 3,000+<br className="md:block hidden" /> Investors
            </h2>
          </div>

          {/* Description */}
          <p className="text-gray-800 text-center mb-4">The process of managing a task through its life cycle. It involves planning, testing, tracking.</p>
          <img src={Button3} alt="button3" className="w-16 h-16 md:w-24 md:h-24 mx-auto rounded" />
        </div>
      </div>
    </div>
  );
}

export default RiofinAssets;
