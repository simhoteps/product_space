import * as React from "react";
import { styled, CSSObject, Theme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Drawer from "@mui/material/Drawer";
import { observer } from "mobx-react";
import { useStores } from "utils/hooks/use_store";
import CustomMenuItem from "./CustomMenuItem";
import { IconLogoLarge } from "components/icons/Logos";
import { Link } from "react-router-dom";
import { Stack, Typography } from "@mui/material";
import { useTheme } from "layouts/theme/ThemeContext";

const drawerWidth = 250;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")<{ open: boolean }>(({ theme, open }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  boxSizing: "border-box",
  height: "90px",
  padding: open === true ? "16px 20px " : "20px 10px",

  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const LargeDrawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  "& .MuiPaper-root": {
    margin: "10px",
    height: "calc(100% - 20px)",
    boxSizing: "border-box",
    borderRadius: "16px",
    borderRight: "none",
  },
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const TitleSub = styled(Typography)(({ theme }) => ({
  ...theme.typography.h1,
  fontSize: "28px",
  lineHeight: "30px",
  fontWeight: 600,
  fontFamily: "Saira Condensed",
  textDecoration: "none",
  color: theme.palette.text.primary,
}));

const TitleDsc = styled(Typography)(({ theme }) => ({
  fontSize: "10px",
  lineHeight: "12px",
  fontWeight: 600,
  letterSpacing: "3px",
  fontFamily: "Saira Condensed",
  textDecoration: "none",
  color: theme.palette.text.primary,
}));

const Title = () => {
  const { theme } = useTheme();
  return (
    <Stack
      gap={"16px"}
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <Stack>
        <TitleSub> Robenice </TitleSub>
        <TitleDsc>orchestrator</TitleDsc>
      </Stack>

      <IconLogoLarge
        sx={{
          width: "40px",
          height: "40px",
        }}
        fill={theme.palette.text.primary}
      />
    </Stack>
  );
};

function CustomMuiSidebar() {
  const { theme } = useTheme();
  const { mainStore } = useStores();
  const open = mainStore.sidebarIsOpen;

  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        variant="temporary"
        open={mainStore.mobileIsOpen}
        onClose={() => {
          mainStore.setMobileOpen(false);
        }}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        <DrawerHeader open={open}>
          {open && (
            <Link
              onClick={() => {
                mainStore.setTopbarTitle("Dashboard");
              }}
              style={{
                textDecoration: "none",
              }}
              to="/dashboard"
            >
              <Title />
            </Link>
          )}
          <Divider />
        </DrawerHeader>
        <CustomMenuItem open={open} />
      </Drawer>
      <LargeDrawer
        sx={{
          display: { xs: "none", sm: "block" },
        }}
        variant="permanent"
        open={open}
      >
        <DrawerHeader open={open}>
          {open && (
            <Link
              onClick={() => {
                mainStore.setTopbarTitle("Dashboard");
              }}
              style={{
                textDecoration: "none",
              }}
              to="/dashboard"
            >
              <Title />
            </Link>
          )}
          <IconButton onClick={() => mainStore.setSidebarIsOpen()}>
            {open === false ? (
              <IconLogoLarge fill={theme.palette.text.primary} />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <CustomMenuItem open={open} />
      </LargeDrawer>
    </Box>
  );
}

export default observer(CustomMuiSidebar);
