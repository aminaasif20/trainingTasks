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

        deleteTask:(state,action)=>{
            state.items=state.items.filter((_,ite)=> ite!==action.payload)
        },

        increment:(state,action)=>{
            state.items[action.payload].value+=1;
        },

        decrement:(state,action)=>{
            
                state.items[action.payload].value-=1;
            
        },

        resetValues:(state,action)=>{
            state.items.forEach((item)=>item.value=0)
        },

        editTask:(state,action)=>{
            const {index,ntext}=action.payload;
            state.items[index].text=ntext;

        },



    }

});

export const{
    addTask,
    deleteTask,
    increment,
    decrement,
    resetValues,
    editTask,

}=todoSlice.actions;

export default todoSlice.reducer;