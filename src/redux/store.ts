import { configureStore } from "@reduxjs/toolkit";
import { employeesReducer } from "./employees-slice";
export const store = configureStore({
    reducer: {
        company: employeesReducer
    },


})