import React from 'react';
import { Table } from 'react-bootstrap';
import UserRow from './UserRow';

const UsersTable = ({ users }) => {
  return (
    <Table striped hover>
      <thead>
        <tr>
          <th>
            <input type='checkbox' checked onChange={() => {}} />
          </th>
          <th>Name</th>
          <th>User Name</th>
          <th>Email Address</th>
          <th>Group</th>
          <th>Status</th>
          <th>Created on</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <UserRow user={user} key={index} />
        ))}
      </tbody>
    </Table>
  );
};

export default UsersTable;
