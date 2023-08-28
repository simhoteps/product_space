import React from "react";
import { Box, BoxProps } from "@mui/material";
import { styled } from "@mui/material/styles";

const AppContainer = styled(Box)<BoxProps>(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  gap: "16px",
  height: "100vh",
  boxSizing: "border-box",
  backgroundColor: theme.palette.background.default,
}));

export default AppContainer;
