import React, { useState } from 'react';

const StatusDropDown = ({ checkBoxesFilters, changeHandler }) => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };
  return (
    <div className='relative'>
      <div
        onClick={toggleOpen}
        className='cursor-pointer border rounded pl-2 py-2 mr-2 flex justify-between'
      >
        <span className='whitespace-nowrap'>User Status</span>
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
        <ul className='list-none bg-white border rounded absolute left-0 top-full z-10'>
          <li className='p-2'>
            <input
              onChange={changeHandler}
              checked={checkBoxesFilters.includes('Active')}
              type='checkbox'
              name='Active'
              className='mr-2'
              id='active'
            />
            <label className='cursor-pointer' htmlFor='active'>
              Active
            </label>
          </li>
          <li className='p-2'>
            <input
              onChange={changeHandler}
              checked={checkBoxesFilters.includes('Inactive')}
              type='checkbox'
              name='Inactive'
              className='mr-2'
              id='inactive'
            />
            <label className='cursor-pointer' htmlFor='inactive'>
              Inactive
            </label>
          </li>
          <li className='p-2'>
            <input
              onChange={changeHandler}
              checked={checkBoxesFilters.includes('Locked')}
              type='checkbox'
              name='Locked'
              className='mr-2'
              id='locked'
            />
            <label className='cursor-pointer' htmlFor='locked'>
              Locked
            </label>
          </li>
        </ul>
      )}
    </div>
  );
};

export default StatusDropDown;
