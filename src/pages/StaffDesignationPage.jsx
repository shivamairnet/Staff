import ManageDesignation from "../components/Admin/Designation/ManageDesignations";
import Sidebar from "../components/SideBar/Sidebar";
import TopBar from "../components/TopBar/TopBar";



function StaffDesignationPage(){
    return(
        <div className="grid grid-cols-[1fr_4fr] grid-rows-[64px_1fr] h-screen">
            {/* Sidebar */}
            <Sidebar className="col-start-1 row-span-2" />

            {/* TopBar */}
            <TopBar className="col-start-2 row-start-1"/>

            <div className="col-start-2 row-start-2 p-4 bg-gray-200">
                <ManageDesignation />
            </div>
        </div>
    )
}

export default StaffDesignationPage