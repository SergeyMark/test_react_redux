import { configureStore } from "@reduxjs/toolkit";
import { createAction, createReducer } from "@reduxjs/toolkit";

export const increment = createAction('value/increment')
export const decrement = createAction('value/decrement')

const counterReducer = createReducer(0, {
    [increment]: (state, action) => state + action.payload,
    [decrement]: (state, action) => state - action.payload 
})


export const store = configureStore({
    reducer: {
        counter: counterReducer
    }
})