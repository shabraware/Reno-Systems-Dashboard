import React, { useState, memo, useEffect } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

import NewUserModal from './NewUserModal';
import StatusDropDown from './StatusDropDown';
import UsersTable from './UsersTable';

const UserManagment = () => {
  const [showModal, setShowModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [userNameFilter, setUserNameFilter] = useState('');
  const [checkBoxesFilters, setCheckBoxesFilter] = useState([]);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [filteredUsers, setFilteredUsers] = useState([]);

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = () => {
      fetch('http://localhost:3000/users')
        .then((response) => response.json())
        .then((users) => setUsers(users))
        .catch((error) => console.log(error));
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    setFilteredUsers(
      users.filter((user) => {
        for (const key in user) {
          if (Object.hasOwnProperty.call(user, key)) {
            const value = user[key];
            if (value.toLowerCase().includes(searchQuery.toLowerCase())) {
              return true;
            } else continue;
          }
        }
      })
    );
  }, [searchQuery]);

  useEffect(() => {
    setFilteredUsers(
      users.filter((user) =>
        checkBoxesFilters.find((filter) => filter === user.status)
      )
    );
  }, [checkBoxesFilters]);

  useEffect(() => {
    setFilteredUsers(
      users.filter((user) =>
        user.userName.toLowerCase().includes(userNameFilter.toLowerCase())
      )
    );
  }, [userNameFilter]);

  useEffect(() => {
    setFilteredUsers(
      users.filter((user) => {
        const createdOnDateObj = new Date(user.createdOn);
        const startDateObj = new Date(startDate);
        const endDateObj = new Date(endDate);
        return (
          createdOnDateObj.getTime() >= startDateObj.getTime() &&
          createdOnDateObj.getTime() <= endDateObj.getTime()
        );
      })
    );
  }, [startDate, endDate]);

  const checkBoxesFilterHandler = (e) => {
    let { checked, name } = e.target;
    if (checked) {
      // If check -> Add it.
      setCheckBoxesFilter((prev) => [...prev, name]);
    } else {
      // If uncheck -> Remove it.
      setCheckBoxesFilter((prev) => prev.filter((el) => el !== name));
    }
  };
  const clearFiltersHandler = () => {
    setCheckBoxesFilter([]);
    setSearchQuery('');
    setUserNameFilter('');
    setStartDate(null);
    setEndDate(null);
  };
  return (
    <section className='py-4 px-6'>
      <div className='mb-4 flex items-center justify-between'>
        <h2 className='font-bold text-black text-xl'>User Managment</h2>
        <button
          onClick={() => setShowModal(true)}
          className='px-4 py-2 rounded text-white bg-secondary'
        >
          Add New
        </button>
        {/* TODO: Use React Portal*/}
        <NewUserModal
          handleClose={() => setShowModal(false)}
          show={showModal}
        />
      </div>
      <div className='border bg-white'>
        <div className='px-4 pt-4'>
          <div className='flex mb-4'>
            <div className='flex py-2 border bg-white rounded'>
              <div className='w-6 h-6 mx-2'>
                <img
                  className='w-full h-full'
                  src='/src/assets/icons/SVG/search.svg'
                />
              </div>
              <input
                className='focus:outline-none'
                type='text'
                placeholder='Search'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value.trim())}
                onBlur={() => setSearchQuery('')}
              />
            </div>
            <input
              type='text'
              className='border rounded py-1 px-2 focus:outline-none mx-2'
              placeholder='User Name'
              value={userNameFilter}
              onChange={(e) => setUserNameFilter(e.target.value)}
            />
            <StatusDropDown
              checkBoxesFilters={checkBoxesFilters}
              changeHandler={checkBoxesFilterHandler}
            />
            <DatePicker
              className='border focus:outline-none p-2 rounded mx-0'
              placeholderText='Creation Date'
              dateFormat='MMMM d, yyyy'
              startDate={startDate}
              endDate={endDate}
              maxDate={new Date()}
              onChange={(update) => {
                setStartDate(update[0]);
                setEndDate(update[1]);
              }}
              selectsRange
            />
            <span
              onClick={clearFiltersHandler}
              className='whitespace-nowrap flex items-center underline cursor-pointer'
            >
              Clear All Filters
            </span>
          </div>
          <div className='my-2 flex justify-between text-gray-darkest'>
            <div className='flex'>
              <span className='block p-2 border-r-2 whitespace-nowrap'>
                0 selected
              </span>
              <button className='mx-2 bg-gray-dark hover:bg-gray-darker py-1 px-2 whitespace-nowrap rounded'>
                <img
                  className='w-full h-full'
                  src='/src/assets/icons/SVG/edit.svg'
                />
              </button>
              <button className='mx-2 bg-gray-dark hover:bg-gray-darker py-1 px-2 whitespace-nowrap rounded'>
                <img
                  className='w-full h-full'
                  src='/src/assets/icons/SVG/block.svg'
                />
              </button>
              <button className='mx-2 bg-gray-dark hover:bg-gray-darker py-1 px-2 whitespace-nowrap rounded'>
                <img
                  className='w-full h-full'
                  src='/src/assets/icons/SVG/lock.svg'
                />
              </button>
              <button className='mx-2 bg-gray-dark hover:bg-gray-darker py-1 px-2 whitespace-nowrap rounded'>
                Assign to Profile
              </button>
              <button className='mx-2 bg-gray-dark hover:bg-gray-darker py-1 px-2 whitespace-nowrap rounded'>
                Assign to Group
              </button>
              <button className='mx-2 bg-gray-dark hover:bg-gray-darker py-1 px-2 whitespace-nowrap rounded'>
                <img
                  className='w-full h-full'
                  src='/src/assets/icons/SVG/dots-three-vertical.svg'
                />
              </button>
              <button className='mx-2 py-1 px-2 whitespace-nowrap underline'>
                Unselect all
              </button>
            </div>
            <button className='mr-2 bg-gray-dark hover:bg-gray-darker p-1 rounded'>
              <img
                className='w-10/12 h-10/12 inline text-center'
                src='/src/assets/icons/SVG/download3.svg'
              />
            </button>
          </div>
        </div>
        <UsersTable
          users={
            searchQuery ||
            userNameFilter ||
            checkBoxesFilters.length ||
            startDate ||
            endDate
              ? filteredUsers
              : users
          }
        />
      </div>
    </section>
  );
};

export default memo(UserManagment);
