import { Box, Paper, Typography, Grid, Card, CardHeader, Avatar, CardMedia, CardContent, CardActions, IconButton, ListItemText, Stack, Divider, } from '@mui/material';
import AdminLayout from '../components/AdminLayout';

import Image from "next/image";
import { Comment, Favorite, MoreVert, Share, ShoppingCart } from '@mui/icons-material';
import { Star } from '@mui/icons-material';
export default function Trends() {

  return (
    
      <Box 
      flex={1} 
      p={2} 
      sx={{ minWidth:"50px", display: "flex", flexDirection: "column", width: "98vw", height: "88.3vh" }} style={{color:"white"}}>
  
      <Grid container spacing={2}>
      <Grid item xs={1} sm>

      <Stack direction="row" spacing={2} justifyContent="space-between">
                
      <Grid item xs={120} sm>
       <Card sx={{ backgroundColor:"#ECE5C7", alignItems:"center"}}>
       <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "blue" }} aria-label="Avatar">
            ARP
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="ARP Footwear"
      />
      <CardMedia
        component="img"
        height="200px"
        image="/img/AdidasBasketball.jpeg"
        alt="AdidasBasketball"
      />
      <CardContent>
        <Typography variant="h6" color="text.secondary">
          ADIDAS - DAME 7
        </Typography>

        <Typography variant="h6" color="text.secondary">
          ₱6,999
        </Typography>

        <Typography variant="h6" color="text.secondary">
          Ratings 100%        
        </Typography>

          <Star sx={{color:"yellow"}}/>
          <Star sx={{color:"yellow"}}/>
          <Star sx={{color:"yellow"}}/>
          <Star sx={{color:"yellow"}}/>
          <Star sx={{color:"yellow"}}/>
      </CardContent>

      <CardActions disableSpacing>
        <IconButton aria-label="favorites">
          <Favorite/>
        </IconButton>

        <IconButton aria-label="comment">
          <Comment/>
        </IconButton>

        <IconButton aria-label="cart">
          <ShoppingCart/>
        </IconButton>

      </CardActions>
          </Card>
            </Grid>

      <Grid item xs={120} sm>
       <Card sx={{ backgroundColor:"#ECE5C7", alignItems:"center"}}>
       <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "blue" }} aria-label="Avatar">
            ARP
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="ARP Footwear"
      />
      <CardMedia
        component="img"
        height="200px"
        image="/img/RebookRunning.jpeg"
        alt="RebookRunning"
      />
      <CardContent>
        <Typography variant="h5" color="text.secondary">
          Rebook Runner 4.0
        </Typography>

        <Typography variant="h6" color="text.secondary">
         ₱3,999
        </Typography>

        <Typography variant="h6" color="text.secondary">
          Ratings 100%        
        </Typography>

          <Star sx={{color:"yellow"}}/>
          <Star sx={{color:"yellow"}}/>
          <Star sx={{color:"yellow"}}/>
          <Star sx={{color:"yellow"}}/>
          <Star sx={{color:"yellow"}}/>
      </CardContent>

      <CardActions disableSpacing>
        <IconButton aria-label="favorites">
          <Favorite/>
        </IconButton>

        <IconButton aria-label="comment">
          <Comment/>
        </IconButton>

        <IconButton aria-label="cart">
          <ShoppingCart/>
        </IconButton>

      </CardActions>
    </Card>
            </Grid>

       <Grid item xs={120} sm>
       <Card sx={{ backgroundColor:"#ECE5C7", alignItems:"center"}}>
       <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "blue" }} aria-label="Avatar">
            ARP
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="ARP Footwear"
      />
      <CardMedia
        component="img"
        height="200px"
        image="/img/ConverseBasketball.jpeg"
        alt="ConverseBasketball"
      />
      <CardContent>
        <Typography variant="h5" color="text.secondary">
          CONVERSE - Weapon CX '90s Marbled
        </Typography>

        <Typography variant="h6" color="text.secondary">
         ₱5,000
        </Typography>

        <Typography variant="h6" color="text.secondary">
          Ratings 80%        
        </Typography>

          <Star sx={{color:"yellow"}}/>
          <Star sx={{color:"yellow"}}/>
          <Star sx={{color:"yellow"}}/>
          <Star sx={{color:"yellow"}}/>
          <Star/>
      </CardContent>

      <CardActions disableSpacing>
        <IconButton aria-label="favorites">
          <Favorite/>
        </IconButton>

        <IconButton aria-label="comment">
          <Comment/>
        </IconButton>

        <IconButton aria-label="cart">
          <ShoppingCart/>
        </IconButton>

      </CardActions>
    </Card>
            </Grid>
        </Stack>

            <Stack direction="row" spacing={2} justifyContent="space-between">

       <Grid item xs={120} sm>
       <Card sx={{ backgroundColor:"#ECE5C7", alignItems:"center", marginTop:"20px"}}>
       <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "blue" }} aria-label="Avatar">
            ARP
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="ARP Footwear"
      />
      <CardMedia
        component="img"
        height="200px"
        image="/img/ConverseRunning.jpeg"
        alt="ConverseRunning"
      />
      <CardContent>
        <Typography variant="h6" color="text.secondary">
          CONVERSE - Thunderbolt Ultra
        </Typography>

        <Typography variant="h6" color="text.secondary">
         ₱4,550
        </Typography>

        <Typography variant="h6" color="text.secondary">
          Ratings 100%        
        </Typography>

          <Star sx={{color:"yellow"}}/>
          <Star sx={{color:"yellow"}}/>
          <Star sx={{color:"yellow"}}/>
          <Star sx={{color:"yellow"}}/>
          <Star sx={{color:"yellow"}}/>
      </CardContent>

      <CardActions disableSpacing>
        <IconButton aria-label="favorites">
          <Favorite/>
        </IconButton>

        <IconButton aria-label="comment">
          <Comment/>
        </IconButton>

        <IconButton aria-label="cart">
          <ShoppingCart/>
        </IconButton>

      </CardActions>
          </Card>
            </Grid>

       <Grid item xs={120} sm>
       <Card sx={{ backgroundColor:"#ECE5C7", alignItems:"center", marginTop:"20px"}}>
       <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "blue" }} aria-label="Avatar">
            ARP
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="ARP Footwear"
      />
      <CardMedia
        component="img"
        height="200px"
        image="/img/NikeBasketball.jpeg"
        alt="NikeBasketball"
      />
      <CardContent>
        <Typography variant="h5" color="text.secondary">
          NIKE Precision 3
        </Typography>

        <Typography variant="h6" color="text.secondary">
         ₱3,250
        </Typography>

        <Typography variant="h6" color="text.secondary">
          Ratings 100%        
        </Typography>

          <Star sx={{color:"yellow"}}/>
          <Star sx={{color:"yellow"}}/>
          <Star sx={{color:"yellow"}}/>
          <Star sx={{color:"yellow"}}/>
          <Star sx={{color:"yellow"}}/>
      </CardContent>

      <CardActions disableSpacing>
        <IconButton aria-label="favorites">
          <Favorite/>
        </IconButton>

        <IconButton aria-label="comment">
          <Comment/>
        </IconButton>

        <IconButton aria-label="cart">
          <ShoppingCart/>
        </IconButton>

      </CardActions>
    </Card>
            </Grid>

       <Grid item xs={120} sm>
       <Card sx={{ backgroundColor:"#ECE5C7", alignItems:"center", marginTop:"20px"}}>
       <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "blue" }} aria-label="Avatar">
            ARP
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="ARP Footwear"
      />
      <CardMedia
        component="img"
        height="200px"
        image="/img/NikeRunning.jpeg"
        alt="NikeRunning"
      />
      <CardContent>
        <Typography variant="h5" color="text.secondary">
          NIKE Revolution 6
        </Typography>

        <Typography variant="h6" color="text.secondary">
         ₱2,499
        </Typography>

        <Typography variant="h6" color="text.secondary">
          Ratings 80%        
        </Typography>

          <Star sx={{color:"yellow"}}/>
          <Star sx={{color:"yellow"}}/>
          <Star sx={{color:"yellow"}}/>
          <Star sx={{color:"yellow"}}/>
          <Star/>
      </CardContent>

      <CardActions disableSpacing>
        <IconButton aria-label="favorites">
          <Favorite/>
        </IconButton>

        <IconButton aria-label="comment">
          <Comment/>
        </IconButton>

        <IconButton aria-label="cart">
          <ShoppingCart/>
        </IconButton>

      </CardActions>
    </Card>
            </Grid>
       </Stack>
       
            <Stack direction="row" spacing={2} justifyContent="space-between">

      <Grid item xs={120} sm>
            <Card sx={{ backgroundColor:"#ECE5C7", alignItems:"center", marginTop:"20px"}}>
            <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: "blue" }} aria-label="Avatar">
                ARP
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVert />
              </IconButton>
            }
            title="ARP Footwear"
            />
            <CardMedia
            component="img"
            height="200px"
            image="/img/PumaBasketball.jpeg"
            alt="PumaBasketball"
            />
            <CardContent>
            <Typography variant="h6" color="text.secondary">
              PUMA RS Dreamer
            </Typography>

            <Typography variant="h6" color="text.secondary">
              ₱8,399
            </Typography>

            <Typography variant="h6" color="text.secondary">
              Ratings 100%        
            </Typography>

              <Star sx={{color:"yellow"}}/>
              <Star sx={{color:"yellow"}}/>
              <Star sx={{color:"yellow"}}/>
              <Star sx={{color:"yellow"}}/>
              <Star sx={{color:"yellow"}}/>
            </CardContent>

            <CardActions disableSpacing>
            <IconButton aria-label="favorites">
              <Favorite/>
            </IconButton>

            <IconButton aria-label="comment">
              <Comment/>
            </IconButton>

            <IconButton aria-label="cart">
              <ShoppingCart/>
            </IconButton>

            </CardActions>
              </Card>
                </Grid>

      <Grid item xs={120} sm>
            <Card sx={{ backgroundColor:"#ECE5C7", alignItems:"center", marginTop:"20px"}}>
            <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: "blue" }} aria-label="Avatar">
                ARP
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVert />
              </IconButton>
            }
            title="ARP Footwear"
            />
            <CardMedia
            component="img"
            height="200px"
            image="/img/PumaRunning.jpeg"
            alt="PumaRunning"
            />
            <CardContent>
            <Typography variant="h5" color="text.secondary">
              NRGY Comet
            </Typography>

            <Typography variant="h6" color="text.secondary">
              ₱2,800
            </Typography>

            <Typography variant="h6" color="text.secondary">
              Ratings 100%        
            </Typography>

              <Star sx={{color:"yellow"}}/>
              <Star sx={{color:"yellow"}}/>
              <Star sx={{color:"yellow"}}/>
              <Star sx={{color:"yellow"}}/>
              <Star sx={{color:"yellow"}}/>
            </CardContent>

            <CardActions disableSpacing>
            <IconButton aria-label="favorites">
              <Favorite/>
            </IconButton>

            <IconButton aria-label="comment">
              <Comment/>
            </IconButton>

            <IconButton aria-label="cart">
              <ShoppingCart/>
            </IconButton>

            </CardActions>
            </Card>
                </Grid>

      <Grid item xs={120} sm>
            <Card sx={{ backgroundColor:"#ECE5C7", alignItems:"center", marginTop:"20px"}}>
            <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: "blue" }} aria-label="Avatar">
                ARP
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVert />
              </IconButton>
            }
            title="ARP Footwear"
            />
            <CardMedia
            component="img"
            height="200px"
            image="/img/RebookBasketball.jpeg"
            alt="RebookBasketball"
            />
            <CardContent>
            <Typography variant="h5" color="text.secondary">
              Tyrell Wintson Question Mid
            </Typography>

            <Typography variant="h6" color="text.secondary">
              ₱7,550
            </Typography>

            <Typography variant="h6" color="text.secondary">
              Ratings 80%        
            </Typography>

              <Star sx={{color:"yellow"}}/>
              <Star sx={{color:"yellow"}}/>
              <Star sx={{color:"yellow"}}/>
              <Star sx={{color:"yellow"}}/>
              <Star/>
            </CardContent>

            <CardActions disableSpacing>
            <IconButton aria-label="favorites">
              <Favorite/>
            </IconButton>

            <IconButton aria-label="comment">
              <Comment/>
            </IconButton>

            <IconButton aria-label="cart">
              <ShoppingCart/>
            </IconButton>

            </CardActions>
            </Card>
                </Grid>
            </Stack>
       </Grid>

     
       </Grid>
    </Box>
  );
}


Trends.getLayout = function getLayout(page){
   return <AdminLayout>{page}</AdminLayout>;
};
