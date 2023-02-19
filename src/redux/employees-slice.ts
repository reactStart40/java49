import {createSlice} from '@reduxjs/toolkit';
import { Employee } from '../model/Employee';
const initialState: {employees: Employee[]} = {
    employees: []
}
const employeesSlice = createSlice({
    initialState,
    name: "company",
    reducers: {
        addEmployee: (state, data) =>
        {
            //state.employees = state.employees.slice();
            state.employees.push(data.payload);
        }
    }
})
export const employeesReducer = employeesSlice.reducer;
export const employeesActions = employeesSlice.actions;