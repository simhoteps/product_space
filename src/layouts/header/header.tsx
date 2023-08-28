import React, { useState } from "react";
import {
  AppBar,
  Box,
  BoxProps,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useTheme } from "layouts/theme/ThemeContext";

const ResponsiveBox = styled(Box)<BoxProps>(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  paddingLeft: "36px",
  width: "100%",
}));

const Header = () => {
  const { theme } = useTheme();
  const navigate = useNavigate();

  return (
    <>
      <AppBar
        data-testid="headerAppBar"
        sx={{
          backgroundColor: theme.palette.primary.dark,
          color: theme.palette.text.secondary,
          display: "flex",
          justifyItems: "center",
          height: "40px",
          zIndex: 1500,
        }}
        elevation={0}
      >
        <Toolbar
          variant="dense"
          sx={{
            height: "40px",
            minHeight: "40px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <ResponsiveBox>
            <Typography
              data-testid="titleName"
              onClick={() => {
                navigate("/");
              }}
              sx={{ cursor: "pointer" }}
              color="common.white"
              variant="body1"
            >
              Coronavirus (COVID-19) Dashboard
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                columnGap: "16px",
              }}
            ></Box>
          </ResponsiveBox>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
