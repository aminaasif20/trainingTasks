import {createSlice} from "@reduxjs/toolkit";  //createSlice() is a helper function.It automatically:  creates action types, Creates action creators, Creates reducer. Without it, Redux code becomes very long.
import { act } from "react";

const initailState={
    items:[],
}

const todoSlice=createSlice({
    name:"todos",
    initialState:initailState,
    reducers:{
        addTask:(state,action)=>{
            state.items.push({
                text: action.payload,
                value:0
            });
           
        },

        deleteTasl:(state,action)=>{
            state.items=state.items.filter((_,ite)=> ite!==action.payload)
        },

        increment:(state,action)=>{
            state.items[action.payload].value+=1;
        },

        decrement:(state,action)=>{
            if(state.items[action.payload].value>0){
                state.items[action.payload].value=-1;
            }
        },

        resetValues:(state,action)=>{
            state.items[action.payload].value=0;
        },

        editTask:(state,action)=>{
            const {id,newtask}=action.payload;
            state.items[id].text=newtask;

        },



    }

});

export const{
    addTask,
    deleteTasl,
    increment,
    decrement,
    resetValues,
    editTask,

}=todoSlice.actions;

export default todoSlice.reducer;