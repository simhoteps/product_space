import React, { useContext } from "react";
import CustomAngleCircleChart from "components/chartTypes/ CustomAngleCircleChart";
import ApexLineChart from "components/chartTypes/ApexLineChart";
import { AreaRadarPlot } from "components/chartTypes/AreaRadarPlot";
import BasicPolarAreaChart from "components/chartTypes/BasicPolarAreaChart";
import { BasicWaterfallPlot } from "components/chartTypes/BasicWaterfallPlot";
import ChartWrapper from "components/chartTypes/ChartWrapper";
import ColumnPlotCornerRadius from "components/chartTypes/ColumnPlotCornerRadius";
import CustomRoseChart from "components/chartTypes/CustomRoseChart";
import CustomMultiLineCharts from "components/chartTypes/CutomMultiLineCharts";
import DashboardRadialTreeGraph from "components/chartTypes/DashboardRadialTreeGraph";
import { DonutPlotStatistics } from "components/chartTypes/DonutPlotStatistics";
import MissingValueLineChats from "components/chartTypes/MissingValueLineChats";
import MultipleRadialbarsChart from "components/chartTypes/MultipleRadialbarsChart";
import { PieInteractionChart } from "components/chartTypes/PieInteractionChart";
import { PolarHeatmapPlot } from "components/chartTypes/PolarHeatmapPlot";
import { PyramidFunnelPlot } from "components/chartTypes/PyramidFunnelPlot";
import { QuarterCirclePie } from "components/chartTypes/QuarterCirclePie";
import { ScatterPlotLabel } from "components/chartTypes/ScatterPlotLabel";
import StackedAreaPlot from "components/chartTypes/StackedAreaPlot";
import SteplineLineChart from "components/chartTypes/SteplineLineChart";
import PageContainer from "components/box/PageContainer";
import { Grid, Stack } from "@mui/material";
import BubbleChart from "components/chartTypes/BubbleChart";
import DemoLiquid from "components/chartTypes/LiquidPlot";
import HeadDash from "./components/HeadDash";
import HeadTitle from "./components/HeadTitle";
import { useTheme } from "layouts/theme/ThemeContext";
import CurrentTasks from "./components/CurrentTasks";
import LineCharts from "./components/LineChart";

const DashboardPage = () => {
  const { theme } = useTheme();

  return (
    <PageContainer>
      <HeadTitle />

      <Stack gap={"16px"}>
        <HeadDash />
        <LineCharts />
        <CurrentTasks />
        <Grid container spacing={2}>
          <ChartWrapper
            title="Total Sales"
            children={<MultipleRadialbarsChart />}
          />
          <ChartWrapper
            title="Total View"
            children={<CustomAngleCircleChart />}
          />
          <ChartWrapper title="Profit FY" children={<BasicPolarAreaChart />} />
          <ChartWrapper
            title="Product Analysis by Category"
            children={<BubbleChart />}
          />
          <ChartWrapper
            title="Organization"
            children={<DashboardRadialTreeGraph />}
          />
          <ChartWrapper
            title="Sales performance report"
            children={<CustomRoseChart />}
          />
          {/*   <ChartWrapper
             title="Organization Graph"
             children={<DemoOrganizationGraph />}
           /> */}
          <ChartWrapper
            title="Performance"
            children={<CustomMultiLineCharts />}
          />
          <ChartWrapper title="Savings" children={<ColumnPlotCornerRadius />} />
          <ChartWrapper title="Marketing" children={<StackedAreaPlot />} />
          <ChartWrapper
            title="Income Statistics"
            children={<ApexLineChart />}
          />
          <ChartWrapper
            title="Missing Value"
            children={<MissingValueLineChats />}
          />
          <ChartWrapper title="Daily Use " children={<SteplineLineChart />} />
          <ChartWrapper
            title="Campaign Activity"
            children={<QuarterCirclePie />}
          />
          <ChartWrapper
            title="Campaign Performance"
            children={<PieInteractionChart />}
          />
          <ChartWrapper
            title=" Total Customer"
            children={<DonutPlotStatistics />}
          />
          <ChartWrapper title="Sales" children={<ScatterPlotLabel />} />
          <ChartWrapper title=" Heatmap " children={<PolarHeatmapPlot />} />
          <ChartWrapper title="Area " children={<AreaRadarPlot />} />
          <ChartWrapper title="Activity" children={<BasicWaterfallPlot />} />
          <ChartWrapper title="Liquid" children={<DemoLiquid />} />
        </Grid>
      </Stack>
    </PageContainer>
  );
};

export default DashboardPage;
