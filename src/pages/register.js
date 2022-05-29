import { Button, Link, Paper, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useRouter } from "next/router";
import global from "../styles/global";
import Head from "next/head";
import AdminLayout from '../components/AdminLayout';

const style = {
    linkStyle:{
        cursor: "pointer",
        color: "primary.main",
    },
};

export default function Register() {
    const router = useRouter();
    

    return (
        <Box 
        sx={{ 
            width: "98vw", 
            height: "88.3vh",  
            display: "flex", 
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            }}
            >
                <head>
                    <title>Register</title>
                </head>
            <Box>
                <Typography variant="h5">CREATE NEW ACCOUNT</Typography>
            </Box>
         <Paper 
            elevation={5} 
            sx={{ padding: "50px",
            display: "flex",
            flexDirection: "column",
            marginTop: "12px",
            
            }}
            >
        <TextField 
            label="Email Address" 
            type="email"/>
        <TextField 
            label="Password" 
            type="Password"
            sx={{marginTop:"12px"}} 
            />
        <TextField 
            label="Confirm password" 
            type="Confirm password"
            sx={{marginTop:"12px"}} 
            />
       <TextField 
            label="Complete Address" 
            type="address"
            sx={{marginTop:"12px"}}/>
        <TextField 
            label="Contact No." 
            type="number"
            sx={{marginTop:"12px"}}/>
        <Button variant="contained"
            sx={{marginTop: "12px"}}>
            
            Sign In
        </Button>
 {/*additional*/}                
 <Box sx= {{ display: "flex", justifyContent: "right", marginTop: "12px"}}>
            <Typography 
            variant= "subtitle" 
            onClick={() => router.push("/sign-in")}
            sx={style.linkStyle}>
            Already have an account? Sign in.</Typography>  
     </Box>
            </Paper>           
        </Box>
    )
    }

    Register.getLayout = function getLayout(page) {
        return <AdminLayout>{page}</AdminLayout>;
    };