import React, { useState, useEffect } from "react";
import { Scatter } from "@ant-design/plots";
import { useTheme } from "layouts/theme/ThemeContext";

const ScatterPlotEChart = ({
  data,
  xField,
  yField,
  sizeField,
  colorField,
  cheight,
}: {
  data: any;
  xField: string;
  yField: string;
  sizeField: string;
  colorField: string;
  cheight: string | number | undefined;
}) => {
  const { theme } = useTheme();
  const config = {
    appendPadding: 30,
    data,

    sizeField: sizeField,
    xField: xField,
    yField: yField,
    colorField: colorField,
    size: 5,
    shape: "circle",
    pointStyle: {
      fillOpacity: 1,
    },
    yAxis: {
      nice: true,
      line: {
        style: {
          stroke: "#aaa",
        },
      },
      label: {
        style: {
          fill: theme.palette.primary.dark,
        },
      },
    },
    xAxis: {
      label: {
        style: {
          fill: theme.palette.primary.dark,
        },
      },
      grid: {
        line: {
          style: {
            stroke: "#eee",
          },
        },
      },
      line: {
        style: {
          stroke: "#aaa",
        },
      },
    },

    label: {
      /*      rotate: 45  , */
      style: {
        fontSize: 9,
        textAlign: "center",
        color: theme.palette.primary.dark,
        fill: theme.palette.primary.dark,
      },
      formatter: (item: any) => {
        return item.city;
      },
    },
  };

  return (
    <Scatter
      style={{
        height: cheight,
      }}
      {...config}
    />
  );
};

export default ScatterPlotEChart;
