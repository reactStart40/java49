import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigator } from './components/navigators/Navigator';
//mport './App.css'

import { layoutConfig } from './config/layout-config';
import { Employees } from './components/pages/Employees';
import { AddEmployee } from './components/pages/AddEmployee';
import { AgeStatistics } from './components/pages/AgeStatistics';
import { SalaryStatistics } from './components/pages/SalaryStatistics';
import { useEffect, useState } from 'react';
import { NavigatorProps } from './model/NavigatorProps';
import { RouteType } from './model/RouteType';
import { useSelector } from 'react-redux';
import { Login } from './components/pages/Login';
import { Logout } from './components/pages/Logout';
import { Generation } from './components/pages/Generation';
import {Grid, Paper} from "@mui/material"

function App() {
return <Grid container rowSpacing={8} columnSpacing={4}
 justifyContent="center">
    <Grid item xs={10} sm={4}  md={3}>
        <Paper> xs=6, sm=4</Paper>
    </Grid>
    <Grid item xs ={10} sm={6} md={3}>
        <Paper> xs=4, sm=6</Paper>
    </Grid>
    <Grid item xs ={10} sm={6} >
        <Paper> xs=4, sm=6</Paper>
    </Grid>
    <Grid item xs ={10} sm={4} >
        <Paper> xs=6, sm=4</Paper>
    </Grid>
    </Grid>
    }
export default App;