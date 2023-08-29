import React from "react";
import {
  Stack,
  styled,
  Button,
  alpha,
  Tooltip,
  IconButton,
  Menu,
  Typography,
  Divider,
  MenuItem,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { useTheme } from "layouts/theme/ThemeContext";
import MenuIcon from "@mui/icons-material/Menu";

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

export const HeaderNav = () => {
  const { t } = useTranslation();
  return (
    <RowBox sx={{ display: { xs: "none ", sm: "none", md: "flex" } }}>
      <CustomButton> {t("topbar.explore")}</CustomButton>
      <CustomButton> {t("topbar.data")}</CustomButton>
      <CustomButton> {t("topbar.publication")}</CustomButton>
      <CustomButton> {t("topbar.about")}</CustomButton>
    </RowBox>
  );
};

export const HeaderNavMobile = () => {
  const { theme } = useTheme();
  const { t } = useTranslation();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Stack
      sx={{
        display: {
          md: "none",
        },
      }}
    >
      <Tooltip title={t("Menu")}>
        <IconButton
          onClick={handleClick}
          size="small"
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          <MenuIcon sx={{ fontSize: "18px" }} />
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
            <Typography pl={"14px"} variant="subtitle2" fontWeight={700}>
              Menu
            </Typography>
          </Stack>

          <Divider sx={{ marginTop: "10px", marginBottom: "10px" }} />

          <MenuItem onClick={handleClose}>
            <Typography variant="caption"> {t("topbar.explore")}</Typography>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Typography variant="caption"> {t("topbar.data")}</Typography>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Typography variant="caption">
              {" "}
              {t("topbar.publication")}
            </Typography>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Typography variant="caption"> {t("topbar.about")}</Typography>
          </MenuItem>
        </Stack>
      </Menu>
    </Stack>
  );
};
