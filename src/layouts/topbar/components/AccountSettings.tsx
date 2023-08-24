import React from "react";
import {
  Avatar,
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import { Logout, PersonAdd, Settings } from "@mui/icons-material";
import { useTheme } from "layouts/theme/ThemeContext";
import PersonIcon from "@mui/icons-material/Person";
import { observer } from "mobx-react";
import { useStores } from "utils/hooks/use_store";

const AccountSettings = () => {
  const { theme } = useTheme();
  const { loginStore } = useStores();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <Tooltip title="Account settings">
        <IconButton
          onClick={handleClick}
          size="small"
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          <PersonIcon sx={{ fontSize: "18px" }} />
        </IconButton>
      </Tooltip>

      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <Stack minWidth={"240px"} p={"20px"}>
          <Stack gap={"4px"}>
            <Typography pl={"14px"} variant="caption" fontWeight={700}>
              Account:
            </Typography>
            <Typography pl={"14px"} variant="caption">
              example@mail.com
            </Typography>
          </Stack>

          <Divider sx={{ marginTop: "10px", marginBottom: "10px" }} />
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <Settings fontSize="small" />
            </ListItemIcon>
            <Typography variant="caption">Settings</Typography>
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleClose();
              loginStore.handleLogOut();
            }}
          >
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            <Typography variant="caption">Logout</Typography>
          </MenuItem>
        </Stack>
      </Menu>
    </div>
  );
};

export default observer(AccountSettings);
