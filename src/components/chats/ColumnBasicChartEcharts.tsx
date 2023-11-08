import React from "react";
import ReactEcharts from "echarts-for-react";
import { Stack } from "@mui/material";

import numeral from "numeral";
import { useTheme } from "layouts/theme/ThemeContext";
import { turkeySGKData } from "page/dashboard/data/NewData";

interface Item {
  name: string;
  eci: number;
}

const ColumnBasicChartEcharts = ({
  cheight,
  selectCity,
}: {
  cheight: string;
  selectCity: string;
}) => {
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
  const CityName = sortedData.map((item) => {
    return item.name;
  });

  const CityValues = sortedData.map((item) => {
    return item.eci;
  });

  const cityColors = CityName.map((city) => {
    return city === selectCity
      ? theme.palette.error.main
      : theme.palette.info.dark;
  });

  return (
    <Stack width={"120%"} marginBottom={"24px"} marginLeft={"-9%"}>
      <ReactEcharts
        style={{
          height: cheight,
        }}
        option={{
          tooltip: {
            trigger: "item",
            formatter: "{b}: {c} ",
          },
          xAxis: {
            type: "category",
            data: CityName,

            pointStyle: {
              fillOpacity: 1,
            },
            axisLabel: {
              interval: 0,
              rotate: 90,
              fontSize: "9px",
              color: theme.palette.primary.dark,
            },
          },
          yAxis: {
            type: "value",
            axisLabel: {
              color: theme.palette.primary.dark,
            },
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
              itemStyle: {
                color: (params: any) => {
                  console.log(params);
                  return cityColors[params.dataIndex];
                },
              },
            },
          ],
        }}
      />
    </Stack>
  );
};

export default ColumnBasicChartEcharts;
