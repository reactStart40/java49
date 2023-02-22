import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./authSlice";
import { employeesReducer } from "./employees-slice";
export const store = configureStore({
    reducer: {
        company: employeesReducer,
        auth: authReducer

    }


})