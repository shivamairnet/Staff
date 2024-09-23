import React, { useState } from 'react';

const ToggleButton = () => {
  const [isActive, setIsActive] = useState(true);

  const toggleSwitch = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="items-center space-x-2">
    
      <div className="flex border-2 border-blue-500 rounded-lg overflow-hidden cursor-pointer w-40">
        {/* Inactive Section */}
        <div
          onClick={toggleSwitch}
          className={`px-4 py-1 transition-colors duration-300 ${
            !isActive ? 'bg-blue-500 text-white' : 'bg-white text-black'
          }`}
        >
          Inactive
        </div>

        {/* Active Section */}
        <div
          onClick={toggleSwitch}
          className={`px-4 py-1 transition-colors duration-300 ${
            isActive ? 'bg-blue-500 text-white' : 'bg-white text-black'
          }`}
        >
          Active
        </div>
      </div>
    </div>
  );
};

export default ToggleButton;
