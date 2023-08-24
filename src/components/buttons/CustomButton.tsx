import React from "react";
import { Button, alpha, styled } from "@mui/material";

export const CustomStyleButton = styled(Button)(({ theme }) => ({
  ...theme.typography.subtitle2,
  textTransform: "capitalize",
  borderRadius: "8px",
  padding: "6px 24px",
  backgroundColor: ` ${alpha(theme.palette.warning.dark, 0.5)}`,
  color: theme.palette.background.paper,
  "&:hover": {
    color: theme.palette.primary.light,
    backgroundColor: theme.palette.warning.dark,
  },
  "&:disabled": {
    border: `1px solid ${alpha(theme.palette.warning.dark, 0.5)}`,
    color: theme.palette.primary.main,
    backgroundColor: "transparent",
  },
}));
