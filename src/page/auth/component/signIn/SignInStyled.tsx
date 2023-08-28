import React from "react";
import { Link, styled, TextField, Box, Button, Stack } from "@mui/material";
import { Size } from "utils/hooks/use_window_size";

export const LinkText = styled(Link)(({ theme }) => ({
  width: "100%",
  display: "flex",
  justifyContent: "flex-end",
  color: theme.palette.text.primary,

  textTransform: "lowercase",
  textDecoration: "none",

  cursor: "pointer",
  "&:hover": {
    fontWeight: "700",
  },
}));

export const Container = styled(Box)<{ windowsize: Size }>(
  ({ theme, windowsize }) => ({
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: `${windowsize?.height}px`,
    boxSizing: "border-box",
    padding: "20px",
    gap: "16px",
    borderRadius: "8px",
    /*    border: `1px solid ${theme.palette.primary.main} `, */
    overflowY: "auto",
    "&::-webkit-scrollbar": {
      width: 6,
    },

    "&::-webkit-scrollbar-thumb:vertical": {
      borderRadius: 4,
      background: theme.palette.primary.main,
    },

    "&::-webkit-scrollbar-track:vertical": {
      borderRadius: 4,
      background: "transparent",
    },
  })
);

export const LoginButton = styled(Button)(({ theme }) => ({
  width: "100%",
  height: "42px",
  backgroundColor: theme.palette.primary.dark,
  color: theme.palette.primary.light,
  borderRadius: "30px",

  "&:hover": {
    backgroundColor: "#E2633F",
  },
  "&:disabled": {
    backgroundColor: theme.palette.text.secondary,
    color: theme.palette.text.disabled,
  },
}));

export const FormContainer = styled(Stack)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "24px",
}));

export const SubContainer = styled(Stack)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));
