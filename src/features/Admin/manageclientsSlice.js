import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchAllclients,createClient,updateclientById } from "./manageclientsapi";

const initialState={
    clients:[],
    status:'idle'
};

export const fetchAllclientsAsync=createAsyncThunk(
    'client/fetchAllclients',
    async()=>{
        const response=await fetchAllclients();
        return response.data;
    }
);
export const createClientAsync=createAsyncThunk(
    'client/createClient',
    async(client)=>{
        const response=await createClient(client);
        return response.data;
    }
);
export const updateclientByIdAsync=createAsyncThunk(
    'client/updateclientById',
    async(update)=>{
        const response=await updateclientById(update);
        return response.data;
    }
);



export const ClientSlice=createSlice({
    name:'client',
    initialState,
    extraReducers:(builder)=>{
        builder
        .addCase(fetchAllclientsAsync.pending,(state)=>{
            state.status='loading';
        })
        .addCase(fetchAllclientsAsync.fulfilled,(state,action)=>{
            state.status='idle';
            state.clients=action.payload;
        })
        .addCase(createClientAsync.pending,(state)=>{
            state.status='loading';
        })
        .addCase(createClientAsync.fulfilled,(state,action)=>{
            state.status='idle';
            state.clients.push(action.payload);
        })
        .addCase(updateclientByIdAsync.pending,(state)=>{
            state.status='loading';
        })
        .addCase(updateclientByIdAsync.fulfilled,(state,action)=>{
            state.status='idle';
            const index=state.clients.findIndex(client=>client.id===action.payload.id);
            state.clients[index]=action.payload;
        })
        
    }
})

export const selectAllClients=(state)=>state.client.clients;

export default ClientSlice.reducer;