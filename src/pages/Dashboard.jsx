import React, { useState } from 'react';

import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import UserManagment from '../components/UserManagment';

const Dashboard = () => {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  return (
    <div className='flex min-h-screen'>
      {/* TODO: Animate the Mounting and Unmounting */}
      {sidebarIsOpen && <Sidebar />}
      <main className='flex-1 bg-gray-light'>
        <Header
          isOpen={sidebarIsOpen}
          toggleSidebar={() => setSidebarIsOpen(!sidebarIsOpen)}
        />
        <UserManagment />
      </main>
    </div>
  );
};

export default Dashboard;
