import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = ({children}) => {
  return (
    <div className="fixed left-0 w-1/5 h-screen bg-white">
      <div className="p-4 text-black text-lg font-bold">
        S.SOOD AND COMAPNY
      </div>
      <ul className="mt-8 text-2xl font-semibold text-black space-y-4">
        <li className=" pl-4"><NavLink to="/dashboard" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'}>Dashboard</NavLink></li>
        <li className=" pl-4"><NavLink to="/" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'}>Manage Clients</NavLink></li>
        <li className=" pl-4"><NavLink to="/manage-staff" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'}>Manage Staff</NavLink></li>
        <li className=" pl-4"><NavLink to="/designation" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'}>Designations</NavLink></li>
        <li className=" pl-4"><NavLink to="/manage-task" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'}>Tasks</NavLink></li>
      </ul>
      
      <div className="overflow-auto">      {children} {/* Render other content here */}
    </div>
  </div>
  );
};

export default Sidebar;
