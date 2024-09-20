import React from 'react';
import Button from "./Button";
import { MdHeight } from 'react-icons/md';
import AddClientsForm from '../components/Admin/AddClientsForm';

const Table = ({ data, onUpdate, onDelete, columns }) => {
  const handleFormCancel = () => {
    
  }
  return (
    <div className="overflow-x-auto overflow-y-auto max-h-[500px] w-full">
      <table className="min-w-full bg-white border border-gray-200">
        <thead className='sticky top-0'>
          <tr className="tablerow font-bold" style={{backgroundColor: '#2563EB',color:'white' }}>
          <th className="py-2 px-4 text-center border-b border-gray-200">Sr.No.</th> {/* Add header for SNo. */}
            {columns.map((col, index) => (
              <th key={index} className="py-2 px-4 text-center border-b border-gray-200">{col.label}</th>
            ))}
            <th className="py-2 px-4 border-b border-gray-200 text-center" >Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item,index) => (
            <tr key={item.id} className="hover:bg-gray-50 border-b border-gray-200 text-center font-black text-md font-medium" >
               <td>{index + 1}</td> {/* Display the SNo. based on index */}
              {columns.map((column) => (
                <td key={column.key} className="py-2 px-4 border-b border-gray-200 text-center font-black text-md font-medium">{item[column.key]}</td>
              ))}
              <td className="py-2 px-4 border-b border-gray-200 text-center">
                <div className='flex space-x-2 justify-center'>
                <Button purpose="update" onClick={() => onUpdate(item.id)} />
                <Button purpose="delete" onClick={() => onDelete(item.id)} />
                </div>
              </td>
             
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
