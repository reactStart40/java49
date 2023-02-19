import { createSlice } from '@reduxjs/toolkit';
import { Employee } from '../model/Employee';
import { Company } from '../service/Company';
const company = new Company([]);
const initialState: { employees: Employee[] } = {
    employees: []
}
const employeesSlice = createSlice({
    initialState,
    name: "company",
    reducers: {
        addEmployee: (state, data) => {
            //state.employees = state.employees.slice();
            company.addEmployee(data.payload);
            state.employees = company.getAllEmployees();
        },
        removeEmployee: (state, data) => {
            company.removeEmployee(data.payload);
            state.employees = company.getAllEmployees();
        },
        updateEmployee: (state, data) => {
            company.updateEmployee(data.payload());
            state.employees = company.getAllEmployees();
        }
    }
})
export const employeesReducer = employeesSlice.reducer;
export const employeesActions = employeesSlice.actions;