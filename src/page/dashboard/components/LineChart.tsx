import React from "react";
import { Divider, Stack, Typography, styled } from "@mui/material";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import DashedLineChart from "components/chartTypes/DashedLineChart";
import CircularProgressWithLabel from "components/chartTypes/CircularProgressWithLabel";
import { useTheme } from "layouts/theme/ThemeContext";

const Container = styled(Stack)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  gap: "48px",
  width: "100%",

  [theme.breakpoints.down("sm")]: {
    width: "100%",
    flexDirection: "column",
  },
}));

const LineCharts = () => {
  const { theme } = useTheme();
  return (
    <Container>
      <DashedLineChart />
      <Stack
        sx={{
          height: "420px",
          backgroundColor: theme.palette.background.default,
          width: "100%",
          maxWidth: "420px",
          borderRadius: "16px",
          padding: "32px",
          gap: "16px",
          justifyContent: "space-between",
        }}
      >
        <Stack>
          <Typography variant="subtitle2">Campaigns Stats</Typography>
          <Typography variant="caption">Impressions</Typography>
        </Stack>
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Stack>
            <Typography sx={{ color: "#ABA5C8" }} variant="caption">
              Chairs
            </Typography>
            <Stack direction={"row"} alignItems={"center"} gap={"16px"}>
              <Typography fontSize={"18px"} variant="subtitle2">
                48,234
              </Typography>
              <Stack direction={"row"}>
                <TrendingUpIcon sx={{ fontSize: "12px" }} />
                <Typography variant="caption">10%</Typography>
              </Stack>
            </Stack>
          </Stack>

          <CircularProgressWithLabel value={63} color={"#ABA5C8"} />
        </Stack>
        <Divider />
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Stack>
            <Typography sx={{ color: "#D67359" }} variant="caption">
              Bedrooms
            </Typography>
            <Stack direction={"row"} alignItems={"center"} gap={"16px"}>
              <Typography fontSize={"18px"} variant="subtitle2">
                65,456
              </Typography>
              <Stack direction={"row"}>
                <TrendingUpIcon sx={{ fontSize: "12px" }} />
                <Typography variant="caption">20%</Typography>
              </Stack>
            </Stack>
          </Stack>

          <CircularProgressWithLabel value={35} color={"#D67359"} />
        </Stack>
        <Divider />
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Stack>
            <Typography sx={{ color: "#CFAF5A" }} variant="caption">
              Kitchens
            </Typography>
            <Stack direction={"row"} alignItems={"center"} gap={"16px"}>
              <Typography fontSize={"18px"} variant="subtitle2">
                14,234
              </Typography>
              <Stack direction={"row"}>
                <TrendingDownIcon sx={{ fontSize: "12px" }} />
                <Typography variant="caption">40%</Typography>
              </Stack>
            </Stack>
          </Stack>
          <CircularProgressWithLabel value={22} color={"#CFAF5A"} />
        </Stack>
      </Stack>
    </Container>
  );
};

export default LineCharts;
