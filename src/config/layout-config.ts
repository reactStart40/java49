import { NavigatorProps } from "../model/NavigatorProps";
export const layoutConfig: NavigatorProps = {
    className: 'navigator-list',
    routes: [
        { label: 'Employees', path: '/' },
        { label: 'Add Employees', path: '/add' },
        { label: 'Age Statistics', path: '/statistics/age' },
        { label: 'Salary Statistics', path: '/statistics/salary' }

    ]
}