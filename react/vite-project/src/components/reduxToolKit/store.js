import {configureStore} from '@reduxjs/toolkit'
import todoSlice from './todoSlice';
import reducer from './todoSlice';

export const store=configureStore({
    reducer:{
        todos:todoSlice,
    
    },
});