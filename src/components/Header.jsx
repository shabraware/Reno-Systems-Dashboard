import React from 'react';
import moment from 'moment/moment.js';

const Header = ({ isOpen, toggleSidebar }) => {
  return (
    <header className='text-gray-darkest flex justify-between items-center bg-white px-4 py-2 border-b'>
      <div className='flex mx-1'>
        <div
          onClick={toggleSidebar}
          className='w-12 h-6 mr-2 flex cursor-pointer'
        >
          <img
            className={`w-3 h-full ${isOpen && 'invisible'}`}
            src='/src/assets/icons/SVG/chevron-left.svg'
          />
          <img
            className='w-6 h-full -mx-1'
            src='/src/assets/icons/SVG/menu.svg'
          />
          <img
            className={`w-3 h-full ${!isOpen && 'invisible'}`}
            src='/src/assets/icons/SVG/chevron-right.svg'
          />
        </div>
        <span className='mx-1 font-semibold'>Good Morning!</span>
        <span className='mx-1'>{moment().format('MMMM Do YYYY, h:mm a')}</span>
      </div>
      <div className='flex items-center'>
        <div className='w-5 h-5 mr-2 cursor-pointer'>
          <img
            className='w-full h-full'
            src='/src/assets/icons/SVG/help-with-circle.svg'
          />
        </div>
        <div className='w-5 h-5 mr-2 relative cursor-pointer'>
          <img className='w-full h-full' src='/src/assets/icons/SVG/bell.svg' />
          <span className='text-white text-xs px-1 bg-red-600 rounded-md absolute bottom-1/2 left-1/2'>
            9+
          </span>
        </div>
        <div className='font-semibold ml-2 p-2 border-l'>
          <span className='cursor-pointer'>Nader Amer</span>
        </div>
        <div className=' rounded-full bg-blue-200 block font-semibold p-2'>
          <span>NA</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
