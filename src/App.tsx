import React from "react";
import "./App.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { useTheme } from "layouts/theme/ThemeContext";
import { Outlet } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

function App() {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Outlet />
      <ToastContainer />
    </ThemeProvider>
  );
}

export default App;
