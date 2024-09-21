import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchAllclients,createClient,updateclientById,fetchClientbyId,deleteclientById } from "./manageclientsapi";

const initialState={
    clients:[],
    selectedClient:null,
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

export const fetchClientbyIdAsync=createAsyncThunk(
    'client/fetchClientById',
    async(id)=>{
        const response=await fetchClientbyId(id);
        return response.data;
    }

);

export const deleteclientByIdAsync=createAsyncThunk(
    'client/deleteclientById',
    async(id)=>{
        const response=await deleteclientById(id);
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
        .addCase(fetchClientbyIdAsync.pending,(state)=>{
            state.status='loading';
        })
        .addCase(fetchClientbyIdAsync.fulfilled,(state,action)=>{
            state.status='idle';
            state.selectedClient=action.payload;
        })
        .addCase(updateclientByIdAsync.pending,(state)=>{
            state.status='loading';
        })
        .addCase(updateclientByIdAsync.fulfilled,(state,action)=>{
            state.status='idle';
            const index=state.clients.findIndex(client=>client.id===action.payload.id);
            state.clients[index]=action.payload;
            state.selectedClient=action.payload;
        })
        .addCase(deleteclientByIdAsync.pending,(state)=>{
            state.status='loading';
        })
        .addCase(deleteclientByIdAsync.fulfilled,(state,action)=>{
            state.status='idle';
            const index=state.clients.findIndex(client=>client.id===action.payload.id);
            state.clients.splice(index,1);
        })
        
    }
})

export const selectAllClients=(state)=>state.client.clients;
export const selectselectedClient=(state)=>state.client.selectedClient;

export default ClientSlice.reducer;