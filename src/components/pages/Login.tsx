import { authActions } from "../../redux/authSlice"; 
import React from "react";
import {useDispatch} from 'react-redux';
import { Input } from "./Input";
 type Props={
    loginVal:(userName: string)=> boolean
 }
export const Login: React.FC<Props> =(props)=>{
    
    const [userName, setUsername]= React.useState('');
    const dispatch = useDispatch();

    function getName (value:string): string {
if (props.loginVal(value)){
    setUsername(value);
}
return '';
}
return <div>
     <Input placeHolder={'Enter user name'} inputProcess={getName}></Input>
     <p> user name: {userName}</p>
        
        <button onClick={() => dispatch(authActions.login(userName))}>Login</button>
</div>
    }
    


    
