import { Button, Link, Paper, TextField, Typography, Box, Snackbar, Alert} from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";
import { Head } from "next/head";
import AdminLayout from '../components/AdminLayout';

const style = {
    linkStyle:{
        cursor: "pointer",
        color: "primary.main",
    },
};

export default function Signin() {
    const router = useRouter();

    const initialState = {
        email: "",
        password: "success",
    };

    const [state, setState] = useState(initialState);

    const messageInitialState = {
        text: "",
        severity: "",
    };

    const [message, setMessage] =useState("");
    const [open, setOpen] = useState(false);

    const gotoRegister = ()=> {
        router.push("/register")
    }

    const handleChange = (prop) => (e) =>{
        setState(prevItem => ({
            ...prevItem,
            [prop]: e.target.value,
        }));
    }

    const signIn = () =>{
        const admin = "admin@email.com";
        const password = "admin123"
  
        
        if(state.email === admin && state.password === password){
            setMessage({
                text: "LOGGED IN SUCCESSFULL",
                severity: "success",
            });
            setOpen(true);
        }
        else{
            setMessage({
                text: "WRONG EMAIL/PASSWORD",
                severity: "error",
            });

            setOpen(true);
        }
    };
    const handleClose =  () => {

        setOpen(false);

    }; 

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
                    <title>Sign In</title>
                </head>
            <Box>
                <Typography variant="h5" color={"white"}>PLEASE SIGN IN</Typography>
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
            type="email"
            onChange ={handleChange("email")}
            />
        <TextField 
            label="Password" 
            type="Password"
            sx={{marginTop:"12px"}}
            onChange ={handleChange("password")}

            />
        <Button variant="contained"
            sx={{marginTop: "12px"}} onClick={signIn}>
            Sign In
        </Button>
        {/*additional*/}                
     <Box sx= {{ display: "flex", justifyContent: "right", marginTop: "12px"}}>
            <Typography 
            variant= "subtitle" 
            onClick={gotoRegister} 
            sx={style.linkStyle}>
            Create new account</Typography>  
     </Box>
            </Paper> 

            <Snackbar
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
            open={open}
            onClose={handleClose}
            autoHideDuration ={6000}
>
            <Alert 
            onClose={handleClose} 
            severity={message.severity} 
            sx={{ width: '100%' }}
            >
            {message.text}
            
            </Alert>
        </Snackbar>


        </Box>
    )
}
    Signin.getLayout = function getLayout(page) {
    return <AdminLayout>{page}</AdminLayout>;
};