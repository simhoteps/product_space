import React from "react";
import {
  AppBar,
  Box,
  Button,
  Stack,
  Toolbar,
  alpha,
  styled,
  useTheme,
} from "@mui/material";
import ThemeSwitcher from "layouts/theme/themeSwitcher";
import AccountSettings from "./components/AccountSettings";
import NotificationsMenu from "./components/Notifications";
import { useStores } from "utils/hooks/use_store";
import LanguageSwitcher from "layouts/lang/language_switcher";
import HeaderNav from "./components/HeaderNav";
import { Link } from "react-router-dom";

/* const AppBarCustom = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.secondary,
  boxShadow: `${theme.palette.background.default} 0px 10px 10px -10px`,
  display: "flex",
  justifyItems: "center",
  height: "64px",
  zIndex: 1500,
}));
 */
const ToolbarCustom = styled(Toolbar)(({ theme }) => ({
  height: "64px",
  minHeight: "64px",
  display: "flex",
  justifyContent: "center",
  /*   backgroundColor: theme.palette.background.paper, */
  boxShadow: `${alpha(
    theme.palette.primary.contrastText,
    0.1
  )} 0px 10px 10px -10px`,
}));

const ResponsiveBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  paddingLeft: "36px",
  width: "100%",
}));

const RowBox = styled(Stack)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "8px",
}));

const LoginButton = styled(Button)(({ theme }) => ({
  display: "flex",
  backgroundColor: "transparent",
  textTransform: "capitalize",

  "&:hover": {
    color: theme.palette.primary.dark,
    fontWeight: 700,
    backgroundColor: "transparent",
  },
}));

const Topbar = () => {
  const theme = useTheme();
  const { loginStore } = useStores();

  return (
    /*     <AppBarCustom data-testid="headerAppBar" /*  elevation={0} > */
    <ToolbarCustom variant="dense">
      <ResponsiveBox>
        <Link
          style={{
            textDecoration: "none",
            color: theme.palette.primary.dark,
          }}
          to="/home"
        >
          <h3 style={{ textTransform: "capitalize" }}>Product Space</h3>
        </Link>
        <HeaderNav />
        {loginStore.currentUser.key === undefined &&
        loginStore.currentUser.key === "" ? (
          <RowBox>
            <LanguageSwitcher />
            <LoginButton>Giriş Yap</LoginButton>
          </RowBox>
        ) : (
          <RowBox>
            <LanguageSwitcher />
            <ThemeSwitcher />
            <NotificationsMenu />
            <AccountSettings />
          </RowBox>
        )}
      </ResponsiveBox>
    </ToolbarCustom>
    /*     </AppBarCustom> */
  );
};

export default Topbar;
