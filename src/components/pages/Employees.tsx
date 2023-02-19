import React from 'react';
import {Box, List, ListItem, Typography} from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { Employee } from '../../model/Employee';
import {DataGrid, GridActionsCellItem, GridColumns} from '@mui/x-data-grid';
import {Delete} from '@mui/icons-material';
import './table.css';
import { employeesActions } from '../../redux/employees-slice';
export const Employees: React.FC = () => {
    const dispath = useDispatch();
    const columns=React.useRef<GridColumns>([
        {field: 'name', headerClassName:'header', headerName: 'Employee Name',
         flex: 1, headerAlign: 'center', align: 'center' },
        {field: 'birthDate', headerName: 'Date of Birth', flex: 1,headerClassName:'header',
         type:"date",headerAlign: 'center',align: 'center'},
        {field: 'department', headerName: 'Department',headerClassName:'header',
         flex: 1,headerAlign: 'center',align: 'center'},
        {field: 'salary', headerName: "Salary (NIS)", headerClassName:'header',
        flex: 0.7, type: "number",headerAlign: 'center', align: 'center'},
        {field: 'actions', type: 'actions', getActions: (params)=>{
            return[
                <GridActionsCellItem label='remove' icon={<Delete/>}
                onClick={()=>
                     dispath(employeesActions.removeEmployee(+params.id))}/>
            ]
        }}
    ])
    const employees = useSelector<any, Employee[]>(state => state.company.employees);
    return <Box sx={{height: "80vh", width: "80vw"}}>
        <DataGrid columns={columns.current} rows={employees}/>
    </Box>
}
function getListItems(employees: Employee[]): React.ReactNode {
    return employees.map((empl, index) => <ListItem key={index}><Typography>{JSON.stringify(empl)}</Typography></ListItem>)
}