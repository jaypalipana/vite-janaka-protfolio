import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to handle mobile menu toggle

  const handleConnectClick = () => {
    alert('Thank you for connecting!'); // Replace with your desired action
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the menu on click
  };

  return (
    <nav className='bg-black text-white shadow-lg'>
      <div className='container mx-auto py-4 flex justify-between items-center'>
        <div className='text-3xl font-bold'>Janaka</div>

        {/* Hamburger icon for small screens */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {/* Hamburger icon */}
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        {/* Desktop Menu items */}
        <div className={`hidden md:flex items-center space-x-6`}>
          <a href="#home" className='block py-2 md:py-0 hover:text-gray-400 transition duration-300'>Home</a>
          <a href="#about" className='block py-2 md:py-0 hover:text-gray-400 transition duration-300'>About Me</a>
          <a href="#service" className='block py-2 md:py-0 hover:text-gray-400 transition duration-300'>Services</a>
          <a href="#project" className='block py-2 md:py-0 hover:text-gray-400 transition duration-300'>Projects</a>
          <a href="#contact" className='block py-2 md:py-0 hover:text-gray-400 transition duration-300'>Contact</a>
        </div>

        {/* Connect button */}
        <button
          className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline
          transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'
          onClick={handleConnectClick}
        >
          Connect Me
        </button>
      </div>

      {/* Mobile menu for smaller screens */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} transition-all duration-300 ease-in-out bg-gray-800 rounded-md shadow-lg p-4`}>
        <div className='flex flex-col space-y-2'>
          <a href="#home" className='block text-center text-lg hover:text-gray-400'>Home</a>
          <a href="#about" className='block text-center text-lg hover:text-gray-400'>About Me</a>
          <a href="#service" className='block text-center text-lg hover:text-gray-400'>Services</a>
          <a href="#project" className='block text-center text-lg hover:text-gray-400'>Projects</a>
          <a href="#contact" className='block text-center text-lg hover:text-gray-400'>Contact</a>
          <button
            className='bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full mt-2 w-full text-center'
            onClick={handleConnectClick}
          >
            Connect Me
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
