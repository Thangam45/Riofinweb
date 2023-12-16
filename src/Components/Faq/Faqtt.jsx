import React, { useState } from 'react';
// import '../style/faqtt.css'; // Import your CSS file for styling

const FaqComponent = () => {
  const [activeCategory, setActiveCategory] = useState('GENERAL');
  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  return (
    <div className='basis-3/6 justify-center flex items-center'>
      <div className='faqtype'>
        <div className={`tag ${activeCategory === 'GENERAL' ? 'active' : ''}`}>
          <h1
            className='underline my-32 cursor-pointer'
            onClick={() => handleCategoryClick('GENERAL')}
          >
            GENERAL FAQ
          </h1>
        </div>
        <div className={`tag ${activeCategory === 'REAL_ESTATE' ? 'active' : ''}`}>
          <h1
            className='underline mb-32 cursor-pointer'
            onClick={() => handleCategoryClick('REAL_ESTATE')}
          >
            REAL ESTATE FAQ
          </h1>
        </div>
        <div className={`tag ${activeCategory === 'LEASING' ? 'active' : ''}`}>
          <h1
            className='underline mb-32 cursor-pointer'
            onClick={() => handleCategoryClick('LEASING')}
          >
            LEASING FAQ
          </h1>
        </div>
      </div>
    </div>
  );
};

export default FaqComponent;
