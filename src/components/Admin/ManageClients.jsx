import React, {useState, useEffect } from 'react';
import Table from '../../common/Table';
import { useSelector,useDispatch } from 'react-redux';
import { selectAllClients,fetchAllclientsAsync } from '../../features/Admin/manageclientsSlice.js';
import Button from '../../common/Button';
import AddClientsForm from './AddClientsForm.jsx';


function ManageClients() {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const client=useSelector(selectAllClients);
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(fetchAllclientsAsync())
  },[dispatch])

  const handleDelete=(id)=>{
    console.log("Client Deleted Pressed");
  }

  const handleFilter=()=>{

  }

  const handleAddClient=()=>{
    setIsFormVisible(true);
  }
  const handleFormCancel=()=>{
    setIsFormVisible(false);
  }

  const handleUpdate=(id)=>{
    console.log("client is being updated")
  }

  const columns=[
    { key: 'name', label: 'Client Name' },
    { key: 'email', label: 'Email ID' },
    { key: 'phone', label: 'Phone Number' },
    { key: 'address', label: 'Business Name' },
  ]

  return (
    // width:275px
    // height:64px(navupper)
    <>
    {isFormVisible ? (<AddClientsForm onCancel={handleFormCancel}/>):(
    <div className="p-4 bg-white border border-2  shadow-2xl rounded-lg h-[640px]">
<div className="flex items-center justify-between mb-4">
  {/* H2 Title on the left */}
  <h2 className="font-black font-semibold text-2xl">Clients</h2>
  
  {/* Buttons on the right */}
  <div className="flex space-x-3">
    <Button purpose="Filter" onClick={handleFilter} />
    <Button purpose="Add Client" onClick={handleAddClient} />
  </div>
</div>
      <div className='h-[calc(100%-52px)] overflow-auto'>
      <Table
        data={client} 
        onUpdate={handleUpdate} 
        onDelete={handleDelete} 
        columns={columns}  // Pass the columns prop
      />
      </div>
    </div>
    )}
    </>
  )
}

export default ManageClients;
