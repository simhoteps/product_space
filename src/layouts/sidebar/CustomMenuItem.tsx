import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import SpaceDashboardRoundedIcon from "@mui/icons-material/SpaceDashboardRounded";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import { useStores } from "utils/hooks/use_store";
import { useTheme } from "layouts/theme/ThemeContext";
import { observer } from "mobx-react";
import { Link } from "react-router-dom";
import CustomTooltip from "components/tooltip/tooltip";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import DescriptionIcon from "@mui/icons-material/Description";
import SettingsIcon from "@mui/icons-material/Settings";
import DisplaySettingsIcon from "@mui/icons-material/DisplaySettings";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import { Size, useWindowSize } from "utils/hooks/use_window_size";
import TextsmsIcon from "@mui/icons-material/Textsms";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import ErrorIcon from "@mui/icons-material/Error";
import FilterListIcon from "@mui/icons-material/FilterList";

const listItemButtonStyles = {
  "&:hover": {
    backgroundColor: "transparent",
    transition: "all 0.2s ease-in-out",
    transform: "scale(1.05)",
  },
};

const listItemTextStyles = {
  fontSize: "8px",
  "&:hover": {
    fontWeight: 700,
  },
};

const CustomListText = styled(Typography)<{ ishover: boolean }>(
  ({ theme, ishover }) => ({
    fontSize: "12px",
    color: ishover === true ? "#DE481E" : theme.palette.text.secondary,
    "&:hover": {
      fontWeight: 700,
    },
  })
);

const CustomList = styled(List)<{ windowsize: Size }>(
  ({ theme, windowsize }) => ({
    display: "flex",
    flexDirection: "column",
    height: `calc(${windowsize?.height}px - 120px)`,
    justifyContent: "space-between",
    padding: "16px 0px 0px 4px",
    boxSizing: "border-box",
  })
);
const listArr = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icons: <SpaceDashboardRoundedIcon sx={{ fontSize: "20px" }} />,
  },
  {
    title: "Alerts",
    path: "alerts",
    icons: <ErrorIcon sx={{ fontSize: "20px" }} />,
  },
  {
    title: "Automation",
    path: "automation ",
    icons: <AutoFixHighIcon sx={{ fontSize: "20px" }} />,
  },
  {
    title: "Workflow",
    path: "workflow",
    icons: <AccountTreeIcon sx={{ fontSize: "20px" }} />,
  },
  {
    title: "Host management",
    path: "hostManagement",
    icons: <DisplaySettingsIcon sx={{ fontSize: "20px" }} />,
  },
  {
    title: "Reports",
    path: "reports",
    icons: <DescriptionIcon sx={{ fontSize: "20px" }} />,
  },
  {
    title: "Alarm Groups",
    path: "alarmGroups",
    icons: <NotificationsActiveIcon sx={{ fontSize: "20px" }} />,
  },
];

const listLastArr = [
  {
    title: "Settings",
    path: "settings",
    icons: <SettingsIcon sx={{ fontSize: "20px" }} />,
  },
  {
    title: "Account",
    path: "account",
    icons: <ManageAccountsIcon sx={{ fontSize: "20px" }} />,
  },
];

const CustomMenuItem = ({ open }: { open: boolean }) => {
  const { theme } = useTheme();
  const { mainStore } = useStores();
  const windowsize: Size = useWindowSize();

  return (
    <div>
      <CustomList windowsize={windowsize}>
        <Stack>
          {listArr.map((text, index) => (
            <ListItem
              onClick={() => {
                mainStore.setTopbarTitle(text.title);
              }}
              key={text.path}
              disablePadding
            >
              <Link
                style={{
                  width: "100%",
                  textDecoration: "none",
                  height: "40px",
                }}
                to={text.path}
              >
                <ListItemButton sx={listItemButtonStyles} disableRipple>
                  <CustomTooltip title={text.title}>
                    <ListItemIcon
                      style={{
                        width: "36px",
                        minWidth: "40px",
                        color:
                          mainStore.topbarTitle === text.title
                            ? "#DE481E"
                            : theme.palette.text.secondary,
                      }}
                    >
                      {text.icons}
                    </ListItemIcon>
                  </CustomTooltip>

                  {open === true && (
                    <>
                      <CustomListText
                        ishover={Boolean(mainStore.topbarTitle === text.title)}
                      >
                        {text.title}
                      </CustomListText>
                    </>
                  )}
                </ListItemButton>
              </Link>
            </ListItem>
          ))}
        </Stack>
        <Stack>
          {listLastArr.map((text, index) => (
            <ListItem
              onClick={() => {
                mainStore.setTopbarTitle(text.title);
              }}
              key={text.path}
              disablePadding
            >
              <Link
                style={{
                  width: "100%",
                  textDecoration: "none",
                  height: "40px",
                }}
                to={text.path}
              >
                <ListItemButton sx={listItemButtonStyles} disableRipple>
                  <CustomTooltip title={text.title}>
                    <ListItemIcon
                      style={{
                        width: "36px",
                        minWidth: "40px",
                        color:
                          mainStore.topbarTitle === text.title
                            ? "#DE481E"
                            : theme.palette.text.secondary,
                      }}
                    >
                      {text.icons}
                    </ListItemIcon>
                  </CustomTooltip>

                  {open === true && (
                    <>
                      <CustomListText
                        ishover={Boolean(mainStore.topbarTitle === text.title)}
                      >
                        {text.title}
                      </CustomListText>
                    </>
                  )}
                </ListItemButton>
              </Link>
            </ListItem>
          ))}
        </Stack>
      </CustomList>
    </div>
  );
};

export default observer(CustomMenuItem);
