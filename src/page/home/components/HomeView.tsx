import React, { useContext } from "react";
import { Stack, Grid, styled, Divider, Typography } from "@mui/material";
import MapsArr from "./maps/MapsArr";
import CityDescription from "./CityDescription";
import TripleChart from "./TripleChart";
import ScatterPlotEChart from "components/chats/ScatterPlotEChart";
import ColumnBasicChartEcharts from "components/chats/ColumnBasicChartEcharts";

const RightCotaniner = styled(Stack)(({ theme }) => ({
  width: "100%",

  padding: "24px",
  boxSizing: "border-box",
  overflowY: "auto",
  "&::-webkit-scrollbar": {
    width: 6,
  },

  "&::-webkit-scrollbar-thumb:vertical": {
    borderRadius: 4,
    background: theme.palette.primary.main,
  },

  "&::-webkit-scrollbar-track:vertical": {
    borderRadius: 4,
    background: "transparent",
  },
}));

const HomeView = () => {
  return (
    <Stack>
      <Grid spacing={4} container>
        <Grid xs={12} md={4} item>
          <CityDescription />
        </Grid>
        <Grid xs={12} md={8} item>
          <RightCotaniner>
            <MapsArr />

            <TripleChart />
          </RightCotaniner>
        </Grid>
      </Grid>
      <Stack marginTop={"48px"} gap={"8px"} width={"100%"}>
        <Divider>
          <Typography variant="subtitle2">
            Çeşitlilik (Div RCA{">"}1) / Ort Sıradanlık (Avg_Ubiq)
          </Typography>
        </Divider>
        <ScatterPlotEChart />
        <Divider>
          <Typography variant="subtitle2">
            Ekonomik Kompleksite (ECI)
          </Typography>
        </Divider>
        <ColumnBasicChartEcharts />
      </Stack>
    </Stack>
  );
};

export default HomeView;
