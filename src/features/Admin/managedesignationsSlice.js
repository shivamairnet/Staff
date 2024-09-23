import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { fetchAllclients,createClient,updateclientById,fetchClientbyId,deleteclientById } from "./manageclientsapi";
import { fetchAlldesignations,createDesignation,updatedesignationById,fetchDesignationbyId,deletedesignationById } from "./managedesignationsapi";

const initialState={
    designations:[],
    selectedDesignation:null,
    status:'idle'
};

export const fetchAlldesignationsAsync=createAsyncThunk(
    'designation/fetchAlldesignations',
    async()=>{
        const response=await fetchAlldesignations();
        return response.data;
    }
);
export const createDesignationAsync=createAsyncThunk(
    'designation/createDesignation',
    async(designation)=>{
        const response=await createDesignation(designation);
        return response.data;
    }
);
export const updatedesignationByIdAsync=createAsyncThunk(
    'designation/updatedesignationById',
    async(update)=>{
        const response=await updatedesignationById(update);
        return response.data;
    }
);

export const fetchDesignationbyIdAsync=createAsyncThunk(
    'designation/fetchDesignationById',
    async(id)=>{
        const response=await fetchDesignationbyId(id);
        return response.data;
    }

);

export const deletedesignationByIdAsync=createAsyncThunk(
    'designation/deletedesignationById',
    async(id)=>{
        const response=await deletedesignationById(id);
        return response.data;
    }
);



export const DesignationsSlice=createSlice({
    name:'designation',
    initialState,
    extraReducers:(builder)=>{
        builder
        .addCase(fetchAlldesignationsAsync.pending,(state)=>{
            state.status='loading';
        })
        .addCase(fetchAlldesignationsAsync.fulfilled,(state,action)=>{
            state.status='idle';
            state.designations=action.payload;
        })
        .addCase(createDesignationAsync.pending,(state)=>{
            state.status='loading';
        })
        .addCase(createDesignationAsync.fulfilled,(state,action)=>{
            state.status='idle';
            state.designations.push(action.payload);
        })
        .addCase(fetchDesignationbyIdAsync.pending,(state)=>{
            state.status='loading';
        })
        .addCase(fetchDesignationbyIdAsync.fulfilled,(state,action)=>{
            state.status='idle';
            state.selectedDesignation=action.payload;
        })
        .addCase(updatedesignationByIdAsync.pending,(state)=>{
            state.status='loading';
        })
        .addCase(updatedesignationByIdAsync.fulfilled,(state,action)=>{
            state.status='idle';
            const index=state.designations.findIndex(designation=>designation.id===action.payload.id);
            state.designations[index]=action.payload;
            state.selectedDesignation=action.payload;
        })
        .addCase(deletedesignationByIdAsync.pending,(state)=>{
            state.status='loading';
        })
        .addCase(deletedesignationByIdAsync.fulfilled,(state,action)=>{
            state.status='idle';
            const index=state.designations.findIndex(designation=>designation.id===action.payload.id);
            state.designations.splice(index,1);
        })
        
    }
})

export const selectAllDesignations=(state)=>state.designation.designations;
export const selectselectedDesignation=(state)=>state.designation.selectedDesignation;

export default DesignationsSlice.reducer;