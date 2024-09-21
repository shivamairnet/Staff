import React from 'react';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import './App.css'
// Page Imports
import ManageClients from './pages/ManageClientsPage';
import Managestaffs from './pages/ManageStaffPage';
import StaffDesignationPage from './pages/StaffDesignationPage';



const router=createBrowserRouter([
  {
    path:"/",
    element:<ManageClients/>
  }, 
  {
    path:"/manage-staff",
    element:<Managestaffs/>
  },  
  {
    path:"/designation",
    element:<StaffDesignationPage/>
  }  
]);



function App(){
  return(
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App