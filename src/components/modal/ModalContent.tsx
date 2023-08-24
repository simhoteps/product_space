import React from "react";
import { Box, styled } from "@mui/material";

export const ModalContent = styled(Box)(({ theme }) => ({
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "420px",
  padding: "48px",
  borderRadius: "16px",
  backgroundColor: theme.palette.background.default,
}));
