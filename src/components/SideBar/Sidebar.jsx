import React from 'react';

const Sidebar = ({children}) => {
  return (
    <div className="fixed left-0 w-1/5 h-screen bg-white">
      <div className="p-4 text-black text-lg font-bold">
        Sidebar
      </div>
      <ul className="mt-8 text-2xl font-semibold text-black space-y-4">
        <li className=" pl-4">Dashboard</li>
        <li className=" pl-4">Manage Clients</li>
        <li className=" pl-4">Manage Staff</li>
        <li className=" pl-4">Tasks</li>
      </ul>
      
      <div className="overflow-auto">      {children} {/* Render other content here */}
    </div>
  </div>
  );
};

export default Sidebar;
