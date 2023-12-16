import React, { useState } from 'react';
// import './MyComponent.css'; // Import your styles

const MyComponent = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (<>
  <div
  className={`my-component ${isActive ? 'active' : ''}`}
      onClick={handleClick}
    >
      My Content
    </div>
    <div
  className={`my-component ${isActive ? 'active' : ''}`}
      onClick={handleClick}
    >
     Content
    </div>
    </>
  );
};

export default MyComponent;
