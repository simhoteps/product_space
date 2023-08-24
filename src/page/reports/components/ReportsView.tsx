import React from "react";
import { Grid } from "@mui/material";
import ChartWrapper from "./ChartWrapper";
import MultipleRadialbarsChart from "./charts/MultipleRadialbarsChart";
import CustomAngleCircleChart from "./charts/ CustomAngleCircleChart";
import BasicPolarAreaChart from "./charts/BasicPolarAreaChart";
import CustomRoseChart from "components/chartTypes/CustomRoseChart";
import ApexLineChart from "./charts/ApexLineChart";

const ReportsView = () => {
  return (
    <div>
      <Grid container spacing={2}>
        <ChartWrapper
          title={"Total View"}
          children={<CustomAngleCircleChart />}
        />
        <ChartWrapper
          title={"Total Sales"}
          children={<BasicPolarAreaChart />}
        />
        <ChartWrapper title={"Profit FY"} children={<CustomRoseChart />} />
        <ChartWrapper
          title={"Sales performance report"}
          children={<MultipleRadialbarsChart />}
        />
        <ChartWrapper
          title={"Sales performance report"}
          children={<ApexLineChart />}
        />
      </Grid>
    </div>
  );
};

export default ReportsView;
