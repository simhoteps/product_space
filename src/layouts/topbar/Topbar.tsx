import React, { useEffect, useState } from "react";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import {
  Badge,
  Box,
  BoxProps,
  Button,
  IconButton,
  IconButtonProps,
  Stack,
  styled,
  useTheme,
} from "@mui/material";
import ThemeSwitcher from "layouts/theme/themeSwitcher";
import { IconLogoMedium } from "components/icons/Logos";
import { useStores } from "utils/hooks/use_store";
import { observer } from "mobx-react";

import AccountSettings from "./components/AccountSettings";
import NotificationsMenu from "./components/Notifications";
import { useParams } from "react-router";

const BoxContent = styled(Box)<BoxProps>(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  height: "64px",
  width: "100%",
  padding: "8px",
}));

const SidebarButton = styled(IconButton)<IconButtonProps>(({ theme }) => ({
  "&:hover": {
    color: "#DE481E",
    backgroundColor: "transparent",
    fontWeight: 700,
  },
}));

const Topbar = () => {
  const theme = useTheme();
  const { mainStore } = useStores();

  return (
    <BoxContent>
      <Stack direction={"row"} alignItems={"center"} gap={"8px"}>
        <SidebarButton
          sx={{
            display: { xs: "block ", sm: "none" },
          }}
          onClick={() => {
            mainStore.setMobileOpen(true);
          }}
        >
          <MenuOutlinedIcon />
        </SidebarButton>
        <Stack sx={{ display: { xs: "block ", sm: "none" }, height: "24px" }}>
          <IconLogoMedium />
        </Stack>

        <h3 style={{ textTransform: "capitalize" }}>{mainStore.topbarTitle}</h3>
      </Stack>
      <Stack direction={"row"} alignItems={"center"} gap={"8px"}>
        <ThemeSwitcher />
        <NotificationsMenu />
        <AccountSettings />
      </Stack>
    </BoxContent>
  );
};

export default observer(Topbar);
