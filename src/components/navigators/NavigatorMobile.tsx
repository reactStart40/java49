import React, { useEffect, useState}from 'react';
import { NavigatorProps } from "../../model/NavigatorProps";
import MenuIcon from '@mui/icons-material/Menu';
import { Link,  Outlet, useLocation, useNavigate } from "react-router-dom";
import { AppBar, IconButton, Toolbar, Drawer, ListItem, List, Box, Typography } from '@mui/material';


export const NavigatorMobile: React.FC<NavigatorProps> = ({ routes }) => {
    const [flOpen, setOpen] = useState<boolean>(false);
    const location =useLocation();
    const navigate =useNavigate();
    useEffect(()=>{
        if (routes.length >0) {
            navigate(routes[0].path);
        }
        }, [routes]);

        function getTitle():string{
            const route= routes.find(r => r.path ===location.pathname)
            return route? route.label : '';
        }

    function OpenMenuBar() {
        setOpen(!flOpen);
    }
    function getListItems(): React.ReactNode {
        return routes.map(i => <ListItem onClick={OpenMenuBar} component={Link} 
            to={i.path} key={i.path}>{i.label}</ListItem>)
    }
    return <Box sx={{marginTop:{xs:"15vh", sm: "20vh"}}}>
    <AppBar position="fixed">
        <Toolbar><IconButton onClick={OpenMenuBar} sx={{ color: 'white' }}>
            <MenuIcon />
        </IconButton>
            <Typography sx={{width: "100%", textAlign: "center", fontSize: "1,5em"}}>
                {getTitle()}
            </Typography>
            <Drawer open={flOpen} onClose={OpenMenuBar} anchor="left">
                <List>
                    {getListItems()}
                </List>
            </Drawer></Toolbar>
    </AppBar>
    <Outlet></Outlet>
    </Box>
}
