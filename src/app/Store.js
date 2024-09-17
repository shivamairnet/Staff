import {configureStore} from '@reduxjs/toolkit'
import ClientReducer from '../features/Admin/manageclientsSlice'

export default configureStore({
    reducer: {
        client:ClientReducer
    },
})