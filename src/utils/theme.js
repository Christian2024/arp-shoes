import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        type: 'dark',
        primary: {
          main: '#7858A6',
        },
        secondary: {
          main: '#694E4E',
        },
        background: {
          default: 'white',
          paper: 'pink',
        },
        text: {
          primary: '#000',
          t1: '#000',
          t2: '#000',
        },
        typography: {
          fontFamily: {}
          
        },
        dashboard:{
          bg1: '#FFE59D',
          bg2: '#ED6663',
          bg3: '#588DA8',
        }
  
      },

});
export default theme;