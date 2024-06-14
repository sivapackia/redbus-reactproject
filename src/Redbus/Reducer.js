import { createSlice } from "@reduxjs/toolkit";
import React from "react";
import User from "./main.json"

export const Slice=createSlice(
    {
        name:"RedBus",

        initialState:{
            Array:User.BusArray,
            IsBooking:[]
        },
        reducers:{
            UpdateArray:(state,action)=>{
                state.Array = action.payload
             },
             BookingArray:(state,action)=>{
                state.IsBooking = action.payload
             }
        }
    }
)

export default Slice.reducer
export const{UpdateArray,BookingArray}=Slice.actions
  