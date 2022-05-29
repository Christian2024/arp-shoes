import React from 'react';
import Image from "next/image";
import { useRouter } from "next/router";


import AdminLayout from '../components/AdminLayout';
import { Button, Paper, Typography, Box,} from "@mui/material";


export default function Index() {
  const router = useRouter();

  const gotoHomepage = ()=> {
    router.push("/homepage")
  }
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

        <Box>
        <Paper 
            elevation={10} 
            sx={{ padding: "8px",
            display: "flex",
            flexDirection: "column",
            marginTop: "12px",
            backgroundColor:"white", 
            }}
            >
                <Image src={"/favicon.ico"} width={400} height={240} ></Image>
        </Paper>

            </Box>
            <Box sx={{marginTop:"20px"}}>
        <Button variant="contained"
            onClick={gotoHomepage}>
            SHOP NOW
        </Button>
        </Box>               
     
            </Box>
)}



    Index.getLayout = function getLayout(page) {
        return <AdminLayout>{page}</AdminLayout>;
    };