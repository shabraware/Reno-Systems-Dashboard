import React from 'react';

const COLORS = ['red', 'orange', 'yellow', 'green', 'blue'];
Array.prototype.randomBackgroundColor = function () {
  return `bg-${this[Math.floor(Math.random() * this.length)]}-200`;
};

const UserRow = ({ user }) => {
  return (
    <tr>
      <td className='align-middle	'>
        <input type='checkbox' />
      </td>
      <td className='flex items-center'>
        <span
          className={`flex items-center justify-center w-8 h-8 rounded-full ${COLORS.randomBackgroundColor()} mr-2`}
        >
          {user.name
            .split(' ')
            .map((word) => {
              return word[0];
            })
            .join('')}
        </span>
        <span>{user.name}</span>
      </td>
      <td className='align-middle'>{user.userName}</td>
      <td className='align-middle'>{user.emailAddress}</td>
      <td className='align-middle'>{user.group}</td>
      <td className='font-semibold align-middle'>
        {user.status === 'Locked' ? (
          <div className='flex items-center'>
            <span>Locked</span>
            <div className='w-3 h-3 ml-3'>
              <img
                className='w-full h-full'
                src='/src/assets/icons/SVG/lock.svg'
              />
            </div>
          </div>
        ) : (
          <select className='h-full bg-inherit focus:outline-none'>
            <option value={user.status}>{user.status}</option>
            <option value={user.status === 'Active' ? 'Inactive' : 'Active'}>
              {user.status === 'Active' ? 'Inactive' : 'Active'}
            </option>
          </select>
        )}
      </td>
      <td className='align-middle'>{user.createdOn}</td>
    </tr>
  );
};

export default UserRow;
