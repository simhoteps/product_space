import React from "react";
import ReactEcharts from "echarts-for-react";
import { Stack } from "@mui/material";
import { turkeySGKData } from "page/home/data/NewData";
import numeral from "numeral";
import { useTheme } from "layouts/theme/ThemeContext";

interface Item {
  name: string;
  eci: number;
}

const ColumnBasicChartEcharts = () => {
  const { theme } = useTheme();
  const cityData = turkeySGKData.map((item) => {
    return {
      name: item.name,
      eci: numeral(item.eci.replace(",", ".")).value(),
    };
  });
  const sortedData = [...cityData].sort((a, b) => {
    if (a.eci === null || b.eci === null) {
      return 0;
    }
    return b.eci - a.eci;
  });

  const sortedData2 = [...cityData].sort((a, b) => b.eci! - a.eci! || 0);

  const CityName = sortedData.map((item) => {
    return item.name;
  });

  const CityValues = sortedData.map((item) => {
    return item.eci;
  });

  return (
    <Stack width={"120%"} marginBottom={"24px"} marginLeft={"-9%"}>
      <ReactEcharts
        option={{
          tooltip: {
            trigger: "item",
            formatter: "{b}: {c} ",
          },
          xAxis: {
            type: "category",
            data: CityName,
            axisLabel: { interval: 0, rotate: 90, fontSize: "9px" },
          },
          yAxis: {
            type: "value",
            axisTick: {
              show: false,
            },
            splitLine: {
              show: true,
              lineStyle: { color: theme.palette.primary.light, opacity: 0.5 },
            },
          },

          series: [
            {
              data: CityValues,
              type: "bar",
            },
          ],
        }}
      />
    </Stack>
  );
};

export default ColumnBasicChartEcharts;
