import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchAllclients,createClient } from "./manageclientsapi";

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
        
    }
})

export const selectAllClients=(state)=>state.client.clients;

export default ClientSlice.reducer;