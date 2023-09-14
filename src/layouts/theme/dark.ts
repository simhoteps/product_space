import { createTheme } from "@mui/material/styles";
declare module "@mui/material/styles" {
  interface Theme {
    logo: {
      trakya: string;
      mersin: string;
    };
  }
  interface ThemeOptions {
    logo: {
      trakya?: string;
      mersin?: string;
    };
  }


}

const DarkTheme = createTheme({
  logo: {
    trakya:"#F7F7F7",
    mersin:"#F7F7F7",
  },
    palette: {
        mode: "dark",
        primary: {
          main: "#A9A9A9",
          light: "#424242",
          dark: "#F7F7F7",
          contrastText: '#FFFFFF',
        },
    
        secondary: {
          main: "#A0B3C6",
          light: "#788897",
        },
    
        background: {
          default: "#2D2D2D",
          paper: "#424242",
        },
    
        error: {
          dark: "#F9D4D1",
          main: "#F2C6C2",
        },
    
        warning: {
          light: "#F5F2EC",
          main: "#F6CA90",
          dark: "#F2AF88",
        },
    
        info: {
          dark: "#549FE7",
          main: "#89ADCF",
        },
    
        text: {
          primary: "#f9f9f9",
          secondary: "#F7F7F7",
          disabled: "#A9A9A9",
        },
      
        success: {
          light:"#81c784",
          main: "#66bb6a",
          dark: "#388e3c",
        },
      },
      typography: {
        fontFamily: "Raleway",
    
        h1: {
          fontWeight: 300,
          fontSize: 96,
          letterSpacing: "-1.5px",
        },
    
        h2: {
          fontWeight: 300,
          fontSize: 60,
          letterSpacing: "-0.5px",
          textTransform: "none",
        },
    
        h3: {
          fontWeight: 500,
          fontStyle: "normal",
          fontSize: 48,
          lineHeight: "56px",
          letterSpacing: "0px",
          textTransform: "none",
        },
        h4: {
          fontWeight: 500,
          fontStyle: "normal",
          fontSize: 34,
          lineHeight: "36px",
          letterSpacing: "0.25px",
          textTransform: "none",
        },
        h5: {
          fontWeight: 500,
          fontStyle: "normal",
          fontSize: 24,
          lineHeight: "24px",
          letterSpacing: "0px",
          textTransform: "none",
        },
        h6: {
          fontWeight: 400,
          fontStyle: "normal",
          fontSize: "20px",
          lineHeight: "27px",
          letterSpacing: "0.15px",
          textTransform: "none",
        },
    
        subtitle1: {
          fontWeight: 500,
          fontStyle: "normal",
          fontSize: 16,
          lineHeight: "18px",
          letterSpacing: "0.15px",
        },
        subtitle2: {
          fontWeight: 700,
          fontStyle: "normal",
          fontSize: 14,
          lineHeight: "24px",
          letterSpacing: "0.1px",
        },
      
        body1: {
          fontWeight: 500,
          fontStyle: "normal",
          fontSize: 16,
          lineHeight: "24px",
          letterSpacing: "0.15px",
        },
    
        body2: {
          fontWeight: 500,
          fontStyle: "normal",
          fontSize: 14,
          lineHeight: "20px",
          textTransform: "none",
          letterSpacing: "0.15px",
        },
    
     
    
        button: {
          fontWeight: 700,
          fontSize: 14,
          fontStyle: "normal",
          lineHeight: "16px",
          letterSpacing: "0.4px",
          textTransform: "uppercase",
        },
        overline: {
          fontWeight: 500,
          fontStyle: "normal",
          fontSize: 10,
          letterSpacing: "1px",
          lineHeight: "16px",
          textTransform: "uppercase",
        },
        caption: {
          fontWeight: 400,
          fontStyle: "normal",
          fontSize: "12px",
          lineHeight: "14px",
          letterSpacing: "0.4px",
          textTransform: "none",
        },
        
      },
    
});

export default DarkTheme;