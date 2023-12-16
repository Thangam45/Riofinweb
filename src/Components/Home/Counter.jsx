import React, { useState, useEffect } from 'react';

const Counter = () => {
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
    <div className='flex flex-col md:flex-row md:ml-48 items-center justify-center px-4 md:px-8 pt-8 pb-8 shadow-lg shadow-white'>
      <div className='text-center md:text-left mb-4 mt-1 md:mb-0 md:mr-8 md:w-1/4'>
        <span className='text-4xl md:text-6xl font-bold text-blue-900'>{count1}</span>
        <span className='text-4xl md:text-6xl font-bold text-blue-400 ml-2 md:mr-2'>+</span>
        <p className='text-countertext text-xl md:text-2xl mt-2'>Year Of <br />experience</p>
      </div>
      <div className='text-center md:text-left md:mb-0 md:mr-8 md:w-1/4'>
        <span className='text-4xl md:text-6xl font-bold text-blue-900'>{count2}</span>
        <span className='text-4xl md:text-6xl font-bold text-blue-400 ml-2 md:mr-2'>+</span>
        <p className='text-countertext text-xl md:text-2xl mt-2'>Cross<br /> successfully raised</p>
      </div>
      <div className='text-center md:text-left mb-4 md:mb-0 md:mr-8 md:w-1/4'>
        <span className='text-4xl md:text-6xl font-bold text-blue-900'>{count3}</span>
        <span className='text-4xl md:text-6xl font-bold text-blue-400 ml-2 md:mr-2'>+</span>
        <p className='text-countertext text-xl md:text-2xl mt-2'>Projects<br />fully funded</p>
      </div>
      <div className='text-center md:text-left md:w-1/4'>
        <span className='text-4xl md:text-6xl font-bold text-blue-900'>200</span>
        <span className='text-4xl md:text-6xl font-bold text-blue-400 ml-2 md:mr-2'>%</span>
        <p className='text-countertext text-xl md:text-2xl mt-2'>Year On Year<br />growth</p>
      </div>
    </div>
  );
};

export default Counter;
