import React, { useContext } from "react";
import { Stack, Grid, Button } from "@mui/material";
import MapsArr from "./maps/MapsArr";
import CityDescription from "./CityDescription";
import LineChatEcharts from "components/chats/LineChatEcharts";
import PolarChartEcharts from "components/chats/PolarChartEcharts";
import MiserablesEcharts from "components/chats/MiserablesEcharts";
import ApexchartsLine from "components/chats/ApexchartsLine";
import CustomLineCharts from "components/chats/CustomLineCharts";
import { cityContext } from "context/CityProvider";
import { useTheme } from "layouts/theme/ThemeContext";

const HomeView = () => {
  const { theme } = useTheme();
  const { citiesValue } = useContext(cityContext);

  return (
    <Grid spacing={4} container>
      <Grid xs={12} md={4} item>
        <CityDescription />
      </Grid>
      <Grid xs={12} md={8} item>
        <Stack direction={"column"} padding={"24px"}>
          <Stack width={"100%"}>
            <MapsArr />
          </Stack>

          <Stack
            sx={{
              [theme.breakpoints.down("lg")]: {
                flexDirection: "column",
              },
            }}
            direction={"row"}
            gap={"24px"}
          >
            <CustomLineCharts
              data={[[1131, 1604, 1240, 1731, 1304, 2101, 3501]]}
              colors={["#00baf0"]}
              range={[0, 6000]}
              labels={""}
              title={"GDP PER CAPITA, 2021"}
              subtitle={"$70,219"}
              value1={"$28,690"}
              value2={" 5th OF 133"}
              value3={"$70,219"}
              valueText1={"1993"}
              valueText2={""}
              valueText3={"2023"}
            />
            <CustomLineCharts
              data={[[1408, 901, 4540, 403, 520, 1751, 902]]}
              colors={["#6BB27B"]}
              range={[0, 6000]}
              labels={""}
              title={"GDP PER CAPITA, 2021"}
              subtitle={"14th of 133"}
              value1={"4th"}
              value2={""}
              value3={"9th"}
              valueText1={"1993"}
              valueText2={""}
              valueText3={"2023"}
            />

            <PolarChartEcharts />
          </Stack>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default HomeView;
