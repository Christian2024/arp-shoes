import { Box, Paper, Typography, Grid, } from '@mui/material';
import AdminLayout from '../components/AdminLayout';

import Image from "next/image";

export default function Dashboard() {

  const style ={
    paper1:{
      padding: "10px",
      backgroundColor: (theme) => theme.palette.dashboard.bg1
    },
    paper2:{
      padding: "10px",
      backgroundColor: (theme) => theme.palette.dashboard.bg2
    },
    paper3:{
      padding: "10px",
      backgroundColor: (theme) => theme.palette.dashboard.bg3
    },
    text1:{
      fontWeight: "500",
    },
    text2:{
      fontWeight: "700",
      color: (theme) => theme.palette.text.t1
    }
  }

  return (
   <Box sx={{padding:"0 50px"}}>
     <Box sx={{display:"flex"}}>
     <Typography variant="h3" sx={{marginLeft:"12px", marginTop:"100px"}}>ARP FOOTWEAR</Typography>
    </Box>
     
     <Grid container spacing={2} sx={{marginTop:"12px"}}>
       <Grid item xs={12} sm>
       <Paper sx={style.paper1}>
          <Typography variant="h5">Users</Typography>
          <Typography variant="h3" sx={style.text2}>
          100</Typography>
      </Paper>
    </Grid>

       <Grid item xs={12} sm>
       <Paper sx={style.paper2}>
          <Typography variant="h5">Messages</Typography>
          <Typography variant="h3"sx={style.text2}>
            999</Typography>
      </Paper>
    </Grid>
     
       <Grid item xs={12} sm>
       <Paper sx={style.paper3}>
          <Typography variant="h5">Feedbacks</Typography>
          <Typography variant="h3"sx={style.text2}>
            15</Typography>
      </Paper>
   </Grid>
</Grid>
     </Box>
  );
}

Dashboard.getLayout = function getLayout(page){
   return <AdminLayout>{page}</AdminLayout>;
};
