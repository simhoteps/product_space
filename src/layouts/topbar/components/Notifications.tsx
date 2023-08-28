import React from "react";
import {
  Badge,
  Divider,
  IconButton,
  Menu,
  Stack,
  Tooltip,
  Typography,
  styled,
} from "@mui/material";
import { useTheme } from "layouts/theme/ThemeContext";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { useTranslation } from "react-i18next";

const Container = styled(Stack)(({ theme }) => ({
  width: "320px",
  padding: "16px",
  gap: "8px",
  justifyContent: "flex-start",
}));

const SubContainer = styled(Stack)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  width: "100%",
  maxWidth: "290px",
  justifyContent: "space-between",
  mb: "10px",
}));

const DescText = styled(Typography)(({ theme }) => ({
  whiteSpace: "nowrap",
  width: "180px",
  overflow: "hidden",
  textOverflow: "ellipsis",
  pl: "14px",

  "&:hover": {
    fontWeight: 700,
  },
}));

const dataArr = [
  {
    desc: "Expecting value: line 1 column 1 line 1 column 1",
    date: "12.07.2022",
  },
  {
    desc: " { custom_stats: {}, global_custom_stats: {}, }",
    date: "  15.07.2022",
  },
  {
    desc: " {Expecting value: {}, global_custom_stats: {}, }",
    date: "  18.07.2022",
  },
];

const NotificationsMenu = () => {
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
    <div>
      <Tooltip title={t("header.notif")}>
        <IconButton
          onClick={handleClick}
          size="small"
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          <Badge
            color="error"
            variant="dot"
            sx={{ fontSize: "18px" }}
            badgeContent={4}
          >
            <NotificationsActiveIcon sx={{ fontSize: "18px" }} />
          </Badge>
        </IconButton>
      </Tooltip>

      <Menu
        anchorEl={anchorEl}
        id="notifications-menu"
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
        <Container>
          <SubContainer>
            <Typography variant="subtitle2">Notifications:</Typography>
            <Typography variant="caption">
              Total {dataArr.length > 0 ? dataArr.length : 0}
            </Typography>
          </SubContainer>
          <Divider />
          <Stack mt="10px" gap={"12px"}>
            {dataArr.map((item, index) => {
              return (
                <SubContainer key={` NotificationsSubContainer${index}`}>
                  <Stack direction={"row"} gap={"4px"} alignItems={"center"}>
                    <FiberManualRecordIcon
                      color="warning"
                      sx={{ fontSize: "12px" }}
                    />
                    <DescText variant="caption">{item.desc}</DescText>
                  </Stack>

                  <Typography variant="caption"> {item.date}</Typography>
                </SubContainer>
              );
            })}
          </Stack>
        </Container>
      </Menu>
    </div>
  );
};

export default NotificationsMenu;
