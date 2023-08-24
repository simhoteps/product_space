import React from "react";
import { Button, IconButton, Typography, styled } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

const CButton = styled(IconButton)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  gap: "6px ",
  border: `1px solid ${theme.palette.primary.light}`,
  borderRadius: "16px",
  textTransform: "lowercase",
  padding: "6px 20px",

  "&:hover": {
    color: theme.palette.primary.dark,
    border: `1px solid ${theme.palette.primary.dark}`,
    backgroundColor: "transparent",
  },
}));

export const EditButton = () => {
  return (
    <CButton>
      <Typography variant="body2">edit</Typography>{" "}
      <EditIcon sx={{ fontSize: "14px" }} />
    </CButton>
  );
};
