import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';

const NewUserModal = ({ handleClose, show }) => {
  return (
    <Modal show={show} onHide={handleClose} animation={true}>
      <Modal.Header className='bg-primary text-white'>
        <Modal.Title>Add New User</Modal.Title>
      </Modal.Header>
      <form>
        <Modal.Body className='bg-gray-light'>
          <div className='mb-3 flex flex-col'>
            <label htmlFor='full-name'>Full Name</label>
            <input
              className='focus:outline-none border rounded p-1'
              type='text'
              placeholder='Enter Full Name'
              id='full-name'
            />
          </div>
          <div className='mb-3 flex flex-col'>
            <label htmlFor='username'>User Name</label>
            <input
              className='focus:outline-none border rounded p-1'
              type='text'
              placeholder='User Name'
              id='username'
            />
          </div>
          <div className='mb-3 flex flex-col'>
            <label htmlFor='email-address'>Email Address</label>
            <input
              className='focus:outline-none border rounded p-1'
              type='email'
              placeholder='Enter User Email Address'
              id='full-name'
            />
          </div>
          <div className='mb-3 flex flex-col'>
            <label htmlFor='email-address'>User Group</label>
            <select className='focus:outline-none border rounded p-2 text-gray-darker'>
              <option value=''>Choose User Group</option>
              <option value='locked'>Office</option>
              <option value='inactive'>Managers</option>
              <option value='active'>Head Office</option>
            </select>
          </div>
          <div className='flex flex-col'>
            <label htmlFor='email-address'>Assign Profile</label>
            <select className='focus:outline-none border rounded p-2 text-gray-darker'>
              <option value=''>Choose Profile</option>
              <option value='locked'>Profile #1</option>
              <option value='inactive'>Profile #2</option>
              <option value='active'>Profile #3</option>
            </select>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button className='underline mr-auto' type='button'>
            Reset fields
          </button>
          <button
            className='mr-3 border rounded px-3 py-2'
            onClick={handleClose}
            type='button'
          >
            Cancel
          </button>
          <button
            className='border rounded px-3 py-2 bg-secondary text-white'
            type='submit'
          >
            Add User
          </button>
        </Modal.Footer>
      </form>
    </Modal>
  );
};

export default NewUserModal;
