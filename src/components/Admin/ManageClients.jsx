import React, {useState, useEffect } from 'react';
import Table from '../../common/Table';
import { useSelector,useDispatch } from 'react-redux';
import { selectAllClients,fetchAllclientsAsync } from '../../features/Admin/manageclientsSlice.js';
import Button from '../../common/Button';
import AddClientsForm from './AddClientsForm.jsx';


function ManageClients() {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [updateformVisible,setupdateformVisible]=useState(false);
  const client= [{
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 123-456-7890",
    address: "Doe Enterprises"
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    phone: "+1 987-654-3210",
    address: "Smith Solutions"
  },
  {
    id: 3,
    name: "Michael Brown",
    email: "michael.brown@example.com",
    phone: "+1 555-123-4567",
    address: "Brown Consulting"
  },
  {
    id: 4,
    name: "Emily Davis",
    email: "emily.davis@example.com",
    phone: "+1 444-987-6543",
    address: "Davis Tech Innovations"
  },
  {
    id: 5,
    name: "David Wilson",
    email: "david.wilson@example.com",
    phone: "+1 321-456-7890",
    address: "Wilson Marketing"
  },
  {
    id: 6,
    name: "Olivia Johnson",
    email: "olivia.johnson@example.com",
    phone: "+1 111-222-3333",
    address: "Johnson Financial"
  },
  {
    id: 7,
    name: "Robert Lee",
    email: "robert.lee@example.com",
    phone: "+1 789-456-1230",
    address: "Lee IT Solutions"
  }
]
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
    setupdateformVisible(false);
  }

  const handleUpdate=(id)=>{
    console.log(id)
    setupdateformVisible(true);
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
    {isFormVisible ? (<AddClientsForm heading="Add" buttonhandle="Add Client" onCancel={handleFormCancel}/>):(
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
      <div className='h-[calc(100%-52px)] overflow-auto mb-5'>
      <Table
        data={client} 
        onUpdate={handleUpdate}
        onDelete={handleDelete} 
        columns={columns}  // Pass the columns prop
      />
      <div className='overflow-auto bg-gray-100'>
        {updateformVisible && <AddClientsForm heading="Update"  buttonhandle="Update" onCancel={handleFormCancel}/>}
        </div>
      </div>
    </div>
    )}
    </>
  )
}

export default ManageClients;
