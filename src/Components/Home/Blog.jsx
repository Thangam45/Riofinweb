import React, { useState } from 'react';
import image from '../../assests/Link.png';
import image1 from '../../assests/Link2.png';

const Sample = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-blue1">
        <h1 className="text-black text-4xl md:text-7xl font-bold pt-8 md:pt-16 ml-4 md:ml-10">
          Investor's Academy
        </h1>
        <hr className="mt-4 md:mt-7 h-1 w-2/5 bg-primary mx-4 md:mx-10" />
        <div className="layout mt-5 md:mt-10 flex flex-col md:flex-row gap-4 md:gap-16 justify-center align-middle">
          {/* card -1 */}
          <div className="bg-white border-2 border-black rounded-xl w-full md:w-[600px]">
            <img
              className="object-cover rounded-t-md w-full h-48 md:h-80" // Adjusted height for responsiveness
              src={image}
              alt="Card 1"
            />
            <div className="flex mt-2 md:mt-3">
              <button className="text-base mt-1 md:mt-3 rounded-46 p-2 w-24 md:w-32 ml-2 md:ml-3 bg-second text-black">
                Riofin
              </button>
              <h3 className="text-base text-third mt-2 md:mt-3 ml-2 md:ml-2">
                October 17, 2023
              </h3>
            </div>
            <p className="text-black mt-2 md:mt-3 ml-2 md:ml-3 text-xl md:text-4xl font-bold">
              Our Selection Process <br /> At Riofin Looks Like ...
            </p>
            <button className="bg-green-500 rounded-t border-2 border-black text-white md:my-3 p-2 md:p-3 ml-2 md:ml-3">
              Read More
            </button>
          </div>
          {/* card-2 and card-3 */}
          <div className="flex flex-col gap-2 md:gap-6 w-full md:w-[700px] mt-4 md:mt-0">
            {[1, 2].map((index) => (
              <div
                key={index}
                className={`flex card2 bg-white border-2 border-black rounded-xl mt-${index === 2 ? 6 : 2} ${
                  index === 2 ? 'md:mr-2' : ''
                }`}
              >
                <img
                  className="object-cover rounded-t-lg w-full h-48 md:h-80" // Adjusted height for responsiveness
                  src={image1}
                  alt={`Card ${index}`}
                />
                <div className="p-2">
                  <div className="flex align-middle justify-center flex-row gap-2 md:gap-3 pt-2 md:pt-3">
                    <button className="text-base rounded-46 p-2 w-20 md:w-24 h-10 bg-second text-black">
                      Day's Tip
                    </button>
                    <h3 className="text-base text-third p-2">October {17 - index}, 2023</h3>
                  </div>
                  <div>
                    <h1 className="text-lg md:text-xl font-bold leading-6 md:leading-8 mt-2 md:mt-3">
                      {index === 1 ? 'Walk Beyond The' : 'You Can Boost'} <br /> Your Portfolio <br /> With Guaran...
                    </h1>
                    <button className="bg-green-500 rounded-t-2 text-white border-2 border-black my-2 md:my-3 p-2 md:p-3">
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

   
     
    </>
  );
};

export default Sample;
