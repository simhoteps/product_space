import React from "react";
import { Stack, Grid, styled } from "@mui/material";
import CityDescription from "./CityDescription";
import TripleChart from "./TripleChart";
import TurkeyMapView from "./maps/TurkeyMapView";
import { observer } from "mobx-react";

const RightCotaniner = styled(Stack)(({ theme }) => ({
  width: "100%",
  justifyContent: "space-between",
  /*   padding: "24px", */
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

const DashboardView = () => {
  return (
    <Stack>
      <Grid spacing={4} container>
        <Grid xs={12} md={4} item>
          <CityDescription />
        </Grid>
        <Grid xs={12} md={8} item>
          <RightCotaniner>
            <TurkeyMapView />
            <TripleChart />
          </RightCotaniner>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default observer(DashboardView);
