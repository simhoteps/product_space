import React from "react";
import {
  Grid,
  styled,
  Paper,
  Typography,
  Box,
  Stack,
  Divider,
  alpha,
} from "@mui/material";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import TimerRoundedIcon from "@mui/icons-material/TimerRounded";
import DisplaySettingsRoundedIcon from "@mui/icons-material/DisplaySettingsRounded";
import AccountBalanceWalletRoundedIcon from "@mui/icons-material/AccountBalanceWalletRounded";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useTheme } from "layouts/theme/ThemeContext";

const Item = styled(Box)(({ theme }) => ({
  /*   ...theme.typography.body2, */
  width: "100%",
  padding: theme.spacing(2),
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  boxShadow: ` ${alpha(theme.palette.primary.dark, 0.2)} 0px 1px 4px`,
  borderRadius: "16px",
  gap: "8px",
  color: theme.palette.text.secondary,
  /*  borderRight: `1px solid ${theme.palette.primary.main} `, */
}));

const IconContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1),
  display: "flex",
  alignItems: "center",
  borderRadius: "8px",
  backgroundColor: theme.palette.background.default,
}));

const SmallTitle = styled(Typography)(({ theme }) => ({
  ...theme.typography.body2,
  color: theme.palette.primary.dark,
}));

const DescText = styled(Typography)(({ theme }) => ({
  ...theme.typography.body1,
  color: theme.palette.primary.dark,
  fontWeight: 700,
}));

const CustomDivider = styled(Box)(({ theme }) => ({
  width: "100%",
  marginTop: "20px",
  marginBottom: "20px",
  borderBottom: `1px solid ${theme.palette.primary.main}`,
}));

const HeadDash = () => {
  const { theme } = useTheme();
  const dataArr = [
    {
      title: "Finished",
      value: "18",
      ratio: "increasing",
      ratioValue: "+8 tasks",
      icon: <ThumbUpAltIcon fontSize="medium" />,
    },
    {
      title: "Tracked",
      value: "32h",
      ratio: "decreasing",
      ratioValue: "-6 hours",
      icon: <TimerRoundedIcon fontSize="medium" />,
    },
    {
      title: "Efficiency",
      value: "90%",
      ratio: "decreasing",
      ratioValue: "+12%",
      icon: <DisplaySettingsRoundedIcon fontSize="medium" />,
    },
    {
      title: "Spent",
      value: "3000$",
      ratio: "increasing",
      ratioValue: "+400 $",
      icon: <AccountBalanceWalletRoundedIcon fontSize="medium" />,
    },
  ];

  return (
    <Stack
      sx={{
        margin: "40px 0px",
      }}
    >
      {/* <CustomDivider /> */}
      <Grid container spacing={2}>
        {dataArr.map((item, index) => {
          const isLastItem = index === dataArr.length - 1;
          return (
            <Grid sx={{ backgroundColor: "transparent" }} item xs={12} md={3}>
              <Stack direction={"row"} justifyContent={"space-between"}>
                <Item>
                  <IconContainer>{item.icon}</IconContainer>
                  <Stack>
                    <SmallTitle>{item.title}</SmallTitle>
                    <Stack direction={"row"} gap={"16px"} alignItems={"center"}>
                      <DescText> {item.value}</DescText>
                      <Stack
                        /*  bgcolor={
                      item.ratio === "decreasing"
                        ? theme.palette.success.main
                        : "error"
                    } */
                        direction={"row"}
                        alignItems={"center"}
                        borderRadius={"8px"}
                        padding={"2px"}
                      >
                        {item.ratio === "increasing" && <ArrowDropDownIcon />}
                        {item.ratio === "decreasing" && <ArrowDropUpIcon />}
                        <Typography
                          fontWeight={700}
                          color={
                            item.ratio === "decreasing" ? "success" : "error"
                          }
                          variant="caption"
                        >
                          {" "}
                          {item.ratioValue}
                        </Typography>
                      </Stack>
                    </Stack>{" "}
                  </Stack>
                </Item>
                {/*    <Divider
                  sx={{
                    display: isLastItem ? "none" : "flex",

                    backgroundColor: theme.palette.primary.main,
                  }}
                  orientation="vertical"
                  variant="middle"
                  flexItem
                /> */}
              </Stack>
            </Grid>
          );
        })}
      </Grid>
      {/* <CustomDivider /> */}
    </Stack>
  );
};

export default HeadDash;
