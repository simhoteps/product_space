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

const lightTheme = createTheme({
  logo: {
    trakya:"#002B55",
    mersin:  "#1F2855",
  },
  palette: {
    mode: "light",
   
    primary: {
      light: "#EEEEEE",
      main: "#B3B3B3",
      dark: "#424242",
      contrastText: '#000000',
    },
    secondary: {
      main: "#798897",
      light: "#C4D3E1",
    },

    background: {
      default: "#ECECEC",
      paper: "#FFFFFF",
    },

    error: {
      dark: "#E83228",
      main: "#D0655F" ,
    },

    warning: {
      light: "#F5F2EC",
      main: "#F6CA90",
      dark: "#DE481E",
    },

    info: {
      dark: "#549FE7",
      main: "#91BBF2",
    },

    text: {
      primary: "#424242",
      secondary: "#78746D",
      disabled: "#B3B3B3",
    },

    success: {
      light:"#d9e1d8",
      main: "#89D99D",
      dark: "#398E4C",
  
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

export default lightTheme;