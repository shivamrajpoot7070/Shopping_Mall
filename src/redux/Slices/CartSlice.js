import React from 'react'
import {createSlice} from "@reduxjs/toolkit"
export const Cartslice=createSlice({

    name:"cart",
    initialState:[],
    reducers:{
        add:(state,action)=>{
            state.push(action.payload);  // to inject value which is passed
        },
        remove:(state,action)=>{
            return state.filter((item)=>item.id!==action.payload);
        },
    }
})

export const {add,remove}=Cartslice.actions;
export default Cartslice.reducer;