import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigator } from './components/navigators/Navigator';
import './App.css'
import { layoutConfig } from './config/layout-config';
import { Employees } from './components/pages/Employees';
import { AddEmployee } from './components/pages/AddEmployee';
import { AgeStatistics } from './components/pages/AgeStatistics';
import { SalaryStatistics } from './components/pages/SalaryStatistics';
import { Login } from "./components/pages/Login";
import { Logout } from "./components/pages/Logout";
import { useSelector } from 'react-redux';
import React from 'react';



function App() {
     const auth: string = useSelector<any, string> (state => state.auth.userName);
     const [routes, setRoutes]=React.useState(layoutConfig.routes);
     React.useEffect(()=>{
        console.log('auth=',auth);
        let sRoutes:{ path: string; label:string; flAdmin:boolean; flAuth:boolean};
        if(auth.length==0){
            sRoutes =layoutConfig.routes.filter(r => !r.label.includes('Login'));
        }
        else{
            if(auth.includes("admin")){
                sRoutes=layoutConfig.routes.filter(r =>!r.label.includes('Login'));
                sRoutes =sRoutes.filter(r => !r.label.includes('Add Employees'));
            }
            sRoutes[sRoutes.findIndex(r =>r.path.includes('/logout'))].label=auth;
        }
        setRoutes(sRoutes);
        }, [auth])
    
     
  return <BrowserRouter>
      <Routes>
          <Route path='/' element={<Navigator className={layoutConfig.className}
           routes={layoutConfig.routes}  />}>
              <Route index element={<Employees/>}/>
              <Route path='add' element={<AddEmployee/>}/>
              <Route path='statistics/age' element={<AgeStatistics/>}/>
              <Route path='statistics/salary' element={<SalaryStatistics/>}/>
              <Route path='login' element={<Login/>}/>
              <Route path='logout' element={<Logout/>}/>
              
          </Route>
              
      </Routes>
  </BrowserRouter>

}
export default App;
