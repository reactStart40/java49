import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    authenticated: ''
};
const authSlice = createSlice({
    initialState: initialState,
    name: "auth",
    reducers: {
        login: (state, data) => {
            if(!state.authenticated) {
                state.authenticated = data.payload;
            }

        },
        logout: (state) => {
            if(state.authenticated) {
                state.authenticated = '';
            }

        }

    }

})
export const authActions = authSlice.actions;
export const authReducer = authSlice.reducer;