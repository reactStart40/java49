import { NavigatorProps } from "../model/NavigatorProps";
export const layoutConfig: NavigatorProps = {
    routes: [
        { label: 'Employees', path: '/', flAuth: true, flAdmin: false },
        { label: 'Add Employees', path: '/add', flAuth: true, flAdmin: true},
        { label: 'Age Statistics', path: '/statistics/age' ,
         flAuth: true, flAdmin: false},
        { label: 'Salary Statistics', path: '/statistics/salary',
         flAuth: true, flAdmin: false },
         {label: 'Logout', path: '/logout', flAuth: true, flAdmin: false},
         {label: 'Login', path: '/login', flAuth: false, flAdmin: false}

    ]
}