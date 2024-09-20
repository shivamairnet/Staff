import React from "react";

const Button = ({ purpose,id,onClick }) => {
  // Define the actions for different purposes inside the component
  // const handleAction = () => {
  //   switch (purpose) {
  //     case 'add':
  //       alert('New Staff Added');
  //       break;
  //     case 'update':
  //       alert('Staff Updated');
  //       break;
  //     case 'delete':
  //       alert('Staff Deleted');
  //       break;
  //     case 'log':
  //       alert('Staff Logs Viewed');
  //       break;
  //     case 'submit':
  //       alert('Form Submitted');
  //       break;
  //     case 'cancel':
  //       alert('Cancelled');
  //     default:
  //       alert('Unknown Action');
  //       break;
  //   }
  // };

  // Define the label based on the purpose
  const getButtonLabel = () => {
    switch (purpose) {
      case 'add':
        return 'Add';
      case 'update':
        return 'Update';
      case 'delete':
        return 'Delete';
      // case 'logs':
      //   return 'View Logs';
      case 'submit':
        return 'Submit';
      case 'cancel':
        return 'Cancel';
      case 'Filter':
        return 'Filter';
      case 'Add Client':
        return 'Add Client';
      case 'Update':
        return 'Update';
      default:
        return 'Button';
    }
  };

  return (
    <button 
      onClick={onClick} 
      className="hover:bg-red-600 rounded-lg w-21 h-10 px-2 py-1 font-bold text-white text-sm mr-1" 
      style={{ backgroundColor: '#2563EB' }}
    >
      {getButtonLabel()}
    </button>
  );
};

export default Button;


