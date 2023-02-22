import { authActions } from "../../redux/authSlice";
import {useDispatch} from 'react-redux'
import { Input } from "../Input";
import React from "react";
export const Login: React.FC = ()=>{
    const dispatch = useDispatch();
    
    return <div>
        <h3>Login</h3>
        <Input placeHolder={"type username for login"} inputProcess={function (value: string): string {
            dispatch(authActions.login(value))
            return '';
        } }></Input>
        
        </div>
}