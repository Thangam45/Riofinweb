import React, { useState, useEffect } from 'react';
import Achieve from '../../assests/Desktop - 3 (1).png';

const Achievements = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  useEffect(() => {
    const interval1 = setInterval(() => {
      setCount1((prevCount) => Math.min(prevCount + 1, 23));
    }, 1000);
    return () => clearInterval(interval1);
  }, []);

  useEffect(() => {
    const interval2 = setInterval(() => {
      setCount2((prevCount) => Math.min(prevCount + 1, 25));
    }, 1000);
    return () => clearInterval(interval2);
  }, []);

  useEffect(() => {
    const interval3 = setInterval(() => {
      setCount3((prevCount) => Math.min(prevCount + 1, 13));
    }, 1000);
    return () => clearInterval(interval3);
  }, []);

  return (
    <div className="relative">
      <img src={Achieve} className="w-full h-full object-cover object-center" alt="Achievements" />
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8'>
        <div className='text-center mb-4 md:mb-0 md:mr-4'>
          <span className='text-4xl md:text-6xl font-bold text-blue-900'>{count1}</span>
          <span className='text-4xl md:text-6xl font-bold text-blue-400 ml-2 md:mr-2'>+</span>
          <p className='text-countertext text-xl md:text-1xl '>Year Of <br />experience</p>
        </div>
        <div className='text-center mb-4 md:mb-0 md:mr-4'>
          <span className='text-4xl md:text-6xl font-bold text-blue-900'>{count2}</span>
          <span className='text-4xl md:text-6xl font-bold text-blue-400 ml-2 md:mr-2'>+</span>
          <p className='text-countertext text-xl md:text-1xl '>Cross<br /> successfully raised</p>
        </div>
        <div className='text-center mb-4 md:mb-0 md:mr-4'>
          <span className='text-4xl md:text-6xl font-bold text-blue-900'>{count3}</span>
          <span className='text-4xl md:text-6xl font-bold text-blue-400 ml-2 md:mr-2'>+</span>
          <p className='text-countertext text-xl md:text-1xl '>Projects<br />fully funded</p>
        </div>
        <div className='text-center md:text-left'>
          <span className='text-4xl md:text-6xl font-bold text-blue-900'>200</span>
          <span className='text-4xl md:text-6xl font-bold text-blue-400 ml-2 md:mr-2'>%</span>
          <p className='text-countertext text-xl md:text-1xl '>Year On Year<br />growth</p>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
