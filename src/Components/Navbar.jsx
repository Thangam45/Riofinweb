import React, { useState, useEffect } from 'react';
import Logo from '../assests/Logo.png';// Update the path accordingly
import {Link} from 'react-router-dom';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // Adjust the breakpoint as needed
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  // Check the window width and update the state accordingly
  const handleResize = () => {
    setIsMobile(window.innerWidth < 768); // Adjust the breakpoint as needed
  };

  // Initial check on mount
  useEffect(() => {
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <nav className="bg-black pt-6 relative">
      <div className="container mx-auto">
        <div className="flex items-center justify-between mx-1">
          {/* Logo and Hamburger Menu */}
          <Link to="" className="flex items-center">
            <img src={Logo} alt="Logo" className="text-white" />
            <button
  className="text-white pl-3 ml-36 focus:outline-none sm:hidden"
  onClick={toggleMobileMenu}
>
              {/* Add your responsive menu icon (e.g., hamburger icon) */}
              &#9776;
            </button>
          </Link>

          {/* Responsive Menu */}
          {isMobile && showMobileMenu && (
        <div className="w-full bg-black text-white mt-2 absolute top-full left-0 z-50">
          <div className="container mx-auto">
            <div className="flex flex-col items-start ml-4 py-2">
              <Link to="/" className="block text-white hover:text-mygreen py-2 w-full">
                Home
              </Link>
              <Link to="/aboutus" className="block text-white hover:text-mygreen py-2 w-full">
                About-Us
              </Link>
              <Link to="/blog" className="block text-white hover:text-mygreen py-2 w-full">
                Blogs
              </Link>
              <Link to="/faq" className="block text-white hover:text-mygreen py-2 w-full">
                FAQ
              </Link>
              <Link to="/contactus" className="block text-white hover:text-mygreen py-2 w-full">
                Contact-Us
              </Link>
              <button className="bg-mygreen py-2 px- mt-2 rounded text-white w-full">
                Login
              </button>
              <button className="border py-2 px-5 border-gray-300 rounded text-white w-full mt-2">
                Sign Up
              </button>
            </div>
          </div>
        </div>
          )}

          {/* Regular Menu for larger screens */}
          {!isMobile && (
            
            <div className="space-x-10 px-5">
              <Link to="/" className="text-white hover:text-mygreen">
                Home
              </Link>
              <Link to="/aboutus" className="text-white hover:text-mygreen">
                About-Us
              </Link>
              <Link to="/blog" className="text-white hover:text-mygreen">
                Blogs
              </Link>
              <Link to="/faq" className="text-white hover:text-mygreen">
               FAQ
              </Link>
              <Link to="/contactus" className="text-white hover:text-mygreen">
                Contact-Us
              </Link>
              <button className="bg-mygreen py-2 px-5 mt-2 rounded-half text-white w-sm">
                    Login
                  </button>
                  <button className="text-white py-2 px-5 border hover:text-mygreen border-gray-300 rounded-half mt-2 w-sm">
                    Sign Up
                  </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;