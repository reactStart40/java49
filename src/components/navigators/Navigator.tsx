import { Link, Outlet, useNavigate } from "react-router-dom";
import { NavigatorProps } from "../../model/NavigatorProps"
import '../navigators/navigators.css'
import { Box, AppBar, Tabs, Tab } from "@mui/material"
import React, { useEffect } from "react";
export const Navigator: React.FC<NavigatorProps> = ({ className, routes }) => {
    const [tabNumber, setTabNumber] = React.useState(0);
    const navigate = useNavigate();
    //
    useEffect(() => navigate(routes[0].path),[]);
    function changeTabNumber(event: any, newNumber: number) {
        setTabNumber(newNumber);
    }
    return <Box sx={{ marginTop: "15vh" }}>
        <AppBar sx={{ backgroundColor: "lightgray" }}>
            <Tabs value={tabNumber} onChange={changeTabNumber} >
                {getNavItems(routes)}
            </Tabs>
        </AppBar>
        <Outlet></Outlet>
    </Box>
}
function getNavItems(routes: { path: string; label: string }[]): React.ReactNode {
    return routes.map((r, index) => <Tab component={Link} to={r.path}
        label={r.label} key={index} />)
}
