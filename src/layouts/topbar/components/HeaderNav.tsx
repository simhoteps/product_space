import React from "react";
import { Stack, styled, Button, alpha } from "@mui/material";

const CustomButton = styled(Button)(({ theme }) => ({
  display: "flex",
  backgroundColor: "transparent",
  textTransform: "capitalize",
  color: ` ${alpha(theme.palette.primary.dark, 0.65)}`,

  "&:hover": {
    color: theme.palette.primary.dark,
    fontWeight: 700,
    backgroundColor: "transparent",
  },
}));

const RowBox = styled(Stack)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "8px",
}));

const HeaderNav = () => {
  return (
    <RowBox>
      <CustomButton>Explore</CustomButton>
      <CustomButton>Data</CustomButton>
      <CustomButton>Publication</CustomButton>
      <CustomButton>Learn</CustomButton>
      <CustomButton>About</CustomButton>
    </RowBox>
  );
};

export default HeaderNav;
