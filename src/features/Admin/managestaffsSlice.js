import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { fetchAllclients,createClient,updateclientById,fetchClientbyId,deleteclientById } from "./manageclientsapi";
import { fetchAllstaffs,createStaff,updatestaffById,fetchStaffbyId,deletestaffById } from "./managestaffsapi";

const initialState={
    staffs:[],
    selectedStaff:null,
    status:'idle'
};

export const fetchAllstaffsAsync=createAsyncThunk(
    'staff/fetchAllstaffs',
    async()=>{
        const response=await fetchAllstaffs();
        return response.data;
    }
);
export const createStaffAsync=createAsyncThunk(
    'staff/createStaff',
    async(staff)=>{
        const response=await createStaff(staff);
        return response.data;
    }
);
export const updatestaffByIdAsync=createAsyncThunk(
    'staff/updatestaffById',
    async(update)=>{
        const response=await updatestaffById(update);
        return response.data;
    }
);

export const fetchStaffbyIdAsync=createAsyncThunk(
    'staff/fetchStaffById',
    async(id)=>{
        const response=await fetchStaffbyId(id);
        return response.data;
    }

);

export const deletestaffByIdAsync=createAsyncThunk(
    'staff/deletestaffById',
    async(id)=>{
        const response=await deletestaffById(id);
        return response.data;
    }
);



export const StaffSlice=createSlice({
    name:'staff',
    initialState,
    extraReducers:(builder)=>{
        builder
        .addCase(fetchAllstaffsAsync.pending,(state)=>{
            state.status='loading';
        })
        .addCase(fetchAllstaffsAsync.fulfilled,(state,action)=>{
            state.status='idle';
            state.staffs=action.payload;
        })
        .addCase(createStaffAsync.pending,(state)=>{
            state.status='loading';
        })
        .addCase(createStaffAsync.fulfilled,(state,action)=>{
            state.status='idle';
            state.staffs.push(action.payload);
        })
        .addCase(fetchStaffbyIdAsync.pending,(state)=>{
            state.status='loading';
        })
        .addCase(fetchStaffbyIdAsync.fulfilled,(state,action)=>{
            state.status='idle';
            state.selectedStaff=action.payload;
        })
        .addCase(updatestaffByIdAsync.pending,(state)=>{
            state.status='loading';
        })
        // check
        .addCase(updatestaffByIdAsync.fulfilled,(state,action)=>{
            state.status='idle';
            const index=state.staffs.findIndex(staff=>staff.id===action.payload.id);
            state.staffs[index]=action.payload;
            state.selectedStaff=action.payload;
        })
        .addCase(deletestaffByIdAsync.pending,(state)=>{
            state.status='loading';
        })
        .addCase(deletestaffByIdAsync.fulfilled,(state,action)=>{
            state.status='idle';
            const index=state.staffs.findIndex(staff=>staff.id===action.payload.id);
            state.staffs.splice(index,1);
        })
        
    }
})

export const selectAllStaffs=(state)=>state.staff.staffs;
export const selectSelectedStaff=(state)=>state.staff.selectedStaff;

export default StaffSlice.reducer;