import React  from "react";
import { NavigatorProps } from "../../model/NavigatorProps";
import {Box} from "@mui/system";
import { Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { Link, Navigator} from "react-router-dom";
import { AppBar, IconButton, Toolbar,Drawer, ListItem, List} from '@mui/material';


export const NavigatorMobile: React.FC<NavigatorProps> = ({ routes }) => {

   const [flOpen, setOpen] = React.useState<boolean>(false);
  
  
   function OpenMenuBar() {
       setOpen(!flOpen);
   }
   function getListItems(): React.ReactNode {
       return routes.map(i => <ListItem onClick={OpenMenuBar} component={Link} to={i.path} key={i.path}>{i.label}</ListItem>)
   }
  
   
   return <AppBar position="fixed">
       <Toolbar><IconButton onClick={OpenMenuBar} style={{color: 'white'}}>
           <MenuIcon/>
       </IconButton>
       <Typography >
       Application
       </Typography>
       <Drawer open={flOpen} onClose={OpenMenuBar} anchor="left">
           <List>
               {getListItems()}
           </List>
       </Drawer></Toolbar>
   </AppBar>
}
export default NavigatorMobile;
