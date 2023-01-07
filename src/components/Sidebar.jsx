import React, { useEffect, useState } from 'react';
import DropDown from './DropDown';

const MENUES = [
  {
    title: 'ATM OPtions',
    items: ['ATM Option1', 'ATM Option2', 'ATM Option3'],
  },
  {
    title: 'Business Setup',
    items: [
      'Business Setup Option1',
      'Business Setup Option2',
      'Business Setup Option3',
    ],
  },
  {
    title: 'User Management',
    items: ['Users', 'Profiles', 'Groups'],
  },
];

const ALL_ITEMS = [
  'ATM Option1',
  'ATM Option2',
  'ATM Option3',
  'Business Setup Option1',
  'Business Setup Option2',
  'Business Setup Option3',
  'Users',
  'Profiles',
  'Groups',
];

const Sidebar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);
  useEffect(() => {
    setFilteredItems(
      ALL_ITEMS.filter((item) =>
        item.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery]);
  return (
    <aside className='p-4 bg-primary text-gray-darker text-lg'>
      <div className='flex justify-center mb-4'>
        <img
          src='/src/assets/images/logo.png'
          alt='logo'
          className='w-20 h-20'
        />
      </div>
      <div className='flex p-2 bg-white rounded-full  mb-2'>
        <input
          className='focus:outline-none mx-2'
          type='text'
          placeholder='Quick Access'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value.trim())}
        />
        <div className='w-6 h-6 mx-2'>
          <img
            className='w-full h-full'
            src='/src/assets/icons/SVG/search.svg'
          />
        </div>
      </div>
      {!searchQuery && (
        <>
          <div className='cursor-pointer py-2 mb-2 flex items-center'>
            <div className='w-6 h-6 mr-2'>
              <img
                className='w-full h-full'
                src='/src/assets/icons/SVG/equalizer.svg'
              />
            </div>
            <span>Dashboard</span>
          </div>
          <div className='py-2'>
            <div className='uppercase mb-2'>Settings</div>
            {MENUES.map((menu, index) => (
              <DropDown key={index} title={menu.title} options={menu.items} />
            ))}
          </div>
          <h2>License Management</h2>
        </>
      )}
      {searchQuery && (
        <ul>
          {filteredItems.map((item, index) => (
            <li
              key={index}
              className='rounded mb-1 cursor-pointer pl-4 bg-tertiary-100 hover:bg-tertiary-200 hover:text-secondary py-2 w-full'
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </aside>
  );
};

export default Sidebar;
