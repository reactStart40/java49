import { NavigatorProps } from "../model/NavigatorProps";
export const layoutConfig: NavigatorProps = {
    className: 'navigator-list',
    routes: [
        { label: 'Employees', path: '/', flAdmin: false, flAuth: false},
        { label: 'Add Employees', path: '/add', flAdmin: false, flAuth: false},
        { label: 'Age Statistics', path: '/statistics/age', flAdmin: false, flAuth: false},
        { label: 'Salary Statistics', path: '/statistics/salary', flAdmin: false, flAuth: false},
        { label: 'Login', path: '/login', flAdmin: false, flAuth: false},
        { label: 'Logout', path: '/ logout', flAdmin: false, flAuth:false}

    ]
}