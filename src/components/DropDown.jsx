import React, { useState } from 'react';

const DropDown = ({ title, options }) => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <div>
      <div
        onClick={toggleOpen}
        className='cursor-pointer pl-2 hover:bg-secondary py-2 w-full flex justify-between'
      >
        <span>{title}</span>
        <div className='w-6 h-6 mx-2'>
          <img
            className='w-full h-full'
            src={
              open
                ? '/src/assets/icons/SVG/chevron-up.svg'
                : '/src/assets/icons/SVG/chevron-down.svg'
            }
          />
        </div>
      </div>
      {/* TODO: Animate the Mounting and Unmounting */}
      {open && (
        <ul className='list-none'>
          {options.map((option, index) => (
            <li
              key={index}
              className='cursor-pointer pl-4 bg-tertiary-100 hover:bg-tertiary-200 hover:text-secondary py-2 w-full'
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropDown;
