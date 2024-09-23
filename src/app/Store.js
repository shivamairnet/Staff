import {configureStore} from '@reduxjs/toolkit'
import ClientReducer from '../features/Admin/manageclientsSlice'
import StaffReducer from '../features/Admin/managestaffsSlice'
import DesignationReducer from '../features/Admin/managedesignationsSlice'

export default configureStore({
    reducer: {
        client:ClientReducer,
        staff: StaffReducer,
        designation:DesignationReducer,
    },
    
})