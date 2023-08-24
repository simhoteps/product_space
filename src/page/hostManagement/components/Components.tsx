import React from "react";
import { Stack, Typography, styled, TextField } from "@mui/material";

export const TitleContainer = styled(Stack)(({ theme }) => ({
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",

  gap: "16px",
  marginBottom: "36px",
  /*   borderBottom: `1px solid ${alpha(theme.palette.warning.dark, 0.7)}`, */
}));

export const FormTitle = styled(Typography)(({ theme }) => ({
  ...theme.typography.caption,
  fontWeight: 700,
}));

export const FormContainer = styled(Stack)(({ theme }) => ({
  width: "100%",
  flexDirection: "column",
  gap: "16px",
}));

export const ItemContainer = styled(Stack)(({ theme }) => ({
  width: "100%",
  flexDirection: "column",
  gap: "4px",
}));

export const FormTextField = styled(TextField)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,

  "& Input": {
    height: "20px",
    padding: "8px",
    fontWeight: 700,
    ...theme.typography.caption,

    "&:-webkit-autofill": {
      transitionDelay: "9999s",
      transitionProperty: "background-color, color",

      fontSize: "14px",
    },
  },
}));
