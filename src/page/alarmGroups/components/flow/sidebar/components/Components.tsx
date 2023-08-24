import * as React from "react";
import AddIcon from "@mui/icons-material/Add";
import { Box, IconButton, Stack, alpha, styled } from "@mui/material";
import { Size } from "utils/hooks/use_window_size";

export const SidebarContent = styled(Box)<{ windowsize: Size }>(
  ({ theme, windowsize }) => ({
    display: "flex",
    flexDirection: "column",
    width: "240px",
    boxShadow: ` ${alpha(
      theme.palette.secondary.main,
      0.25
    )}  0px 2px 5px -1px,${alpha(
      theme.palette.primary.contrastText,
      0.3
    )}  0px 1px 3px -1px `,
    boxSizing: "border-box",
    padding: "16px",
    gap: "8px",
    borderRadius: "32px",

    height: `calc(${windowsize?.height}px - 375px)`,
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

export const ButtonsContainer = styled(Box)<{ windowsize: Size }>(
  ({ theme, windowsize }) => ({
    display: "flex",
    flexDirection: "column",
    boxSizing: "border-box",
    padding: "4px",
    gap: "8px",

    height: `calc(${windowsize?.height}px - 300px)`,
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
