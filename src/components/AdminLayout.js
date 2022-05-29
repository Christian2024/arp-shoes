import {
    Box, 
    AppBar, 
    Drawer, 
    Toolbar, 
    Typography, 
    IconButton,  
    ListItem, 
    List, 
    ListItemIcon, 
    ListItemText,
    Divider,
    Avatar,
    Tooltip,
    Tabs,
    Button,
    Tab,} from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import { AccountBox, Dashboard, Feedback, Group, Logout, Message, Settings, Storefront } from "@mui/icons-material";


export default function AdminLayout({children}){

    const router = useRouter();

    const [value, setValue] = useState();

    const [open, setOpen] = useState(false);

    const setDrawerOpen =() =>{
        setOpen(true);
    };
    const handleChange = (event, gotoSignIn) => {
        setValue(gotoSignIn);
    };
    const handleClose = () =>{
        setOpen(false);
    };
    const gotoSignIn = ()=> {
        router.push("/sign-in")
      };
    const gotoTrends = ()=> {
        router.push("/trends")
      };
    const gotoCart = ()=> {
        router.push("/cart")
      };
    const drawerGotoPage = (url) => {
        setOpen(false);
        router.push(url);
    };
    
    
   
    return (
         
        <Box> 
            <head>
                <title>ARP Footwear</title> 
            </head>

        <AppBar style={{backgroundColor:"#EF9F9F"}}>
            <Toolbar>   
            <IconButton onClick={setDrawerOpen}>
                    <Image src="/assets/svg/bars.svg" alt="bars" width={30} height={80}></Image>
                 </IconButton>
                 <Typography variant="h4"> ARP FOOTWEAR</Typography>

                    <Tabs textColor="inherit"
                        sx={{ display: "flex", flexDirection:"column", marginLeft:"auto"}}                      
                        value={value}
                        onChange={handleChange}
                        indicatorColor="secondary"
                    >   
                        <Tab value="1" label="Sign In" 
                        onClick={gotoSignIn}/>
                        <Tab value="2" label="Trends" 
                        onClick={gotoTrends}/>
                        <Tab value="3" label="My Cart" 
                        onClick={gotoCart}/>
                   
                   
               
                    </Tabs>
                    
            </Toolbar>
        </AppBar>  
        <Drawer  anchor="left" open={open} onClose={handleClose}>
        <Box sx={{ minWidth:"250px", display: "flex", flexDirection: "column", height:"100vh"}} style={{backgroundColor:"#EF9F9F"}}>
        

            <Box sx={{ padding: "20px" , display: "flex"}}>
                <Avatar/>
                <Box sx={{ marginLeft: "8px"}}>
                 <Tooltip title="jansbikestore@gmail.com">
                    <Typography color="#000" noWrap sx={{maxWidth:"155px"}}>
                        arp_footwear@gmail.com</Typography>
                  </Tooltip>
                    <Typography color="#FF1818">ADMIN</Typography>
                </Box>   
            </Box>
            
            <List sx={{ flexGrow: 1 }}>
                <Divider/>      

                <ListItem button 
              onClick={() => drawerGotoPage("/dashboard")}
              selected={router.pathname.includes("dashboard")}>
                    <Dashboard/>
                    <ListItemText primary="Dashboard"/> 
                </ListItem>
                    
              <ListItem button 
              onClick={() => drawerGotoPage("/users")}
              selected={router.pathname.includes("users")}>
                   <Group/>
                    <ListItemText primary="Users"/> 
                </ListItem>

                <ListItem button>
                    <Message/>
                    <ListItemText primary="Messages"/> 
                </ListItem>

                <ListItem button>
                    <Feedback/>
                    <ListItemText primary="Feedbacks"/> 
                </ListItem>
                
                <ListItem button>
                    <Settings/>
                    <ListItemText primary="Settings"/> 
                </ListItem>

            </List>

            <List>
                <ListItem button>
                   <Logout/>
                    <ListItemText primary="Sign Out"/> 
                </ListItem>
            </List>
        </Box>
        </Drawer>
        <Box sx={{marginTop: "90px"}}>{children}</Box>
        </Box>
        
    )
}