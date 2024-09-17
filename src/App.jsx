import React from 'react';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import './App.css'
// Page Imports
import ManageClients from './pages/ManageClientsPage';



const router=createBrowserRouter([
  {
    path:"/",
    element:<ManageClients/>
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