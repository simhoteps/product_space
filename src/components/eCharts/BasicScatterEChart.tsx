import React, { useEffect, useRef } from "react";
import ReactEcharts from "echarts-for-react";
import { useTheme } from "layouts/theme/ThemeContext";
import { Size, useWindowSize } from "utils/hooks/use_window_size";
import "./TreemapDrillDown_Style.css";
import { Stack } from "@mui/material";

interface IType {
  category: string;
  data?: {
    name: string;
    size: number;
    x: number;
    y: number;
    filterData: number;
  }[];
}

const BasicScatterEChart = ({
  data,
  selectCity,
}: {
  data: IType[];
  selectCity: string;
}) => {
  const { theme } = useTheme();
  const windowsize = useWindowSize();

  return (
    <Stack
      sx={{
        height: `calc(${windowsize?.height}px - 230px)`,
      }}
    >
      <ReactEcharts
        style={{
          width: "100%",
          height: "67vh",
          margin: "0",
          padding: "0",
        }}
        option={{
          title: {
            show: false,
          },
          grid: {
            left: "3%",
            right: "7%",
            bottom: "7%",
            containLabel: true,
          },
          tooltip: {
            // trigger: 'axis',
            showDelay: 0,
            formatter: function (params: any) {
              if (params.value.length > 1) {
                return (
                  "Ürün kodu :" +
                  params.value[2] +
                  "<br/>" +
                  "x değeri :" +
                  params.value[0] +
                  "<br/>" +
                  "y değeri :" +
                  params.value[1]
                );
              } else {
                return (
                  params.seriesName + " <br/>" + "x değeri :" + params.value
                );
              }
            },
            axisPointer: {
              show: true,
              type: "cross",
              lineStyle: {
                type: "dashed",
                width: 1,
              },
            },
          },
          toolbox: {
            feature: {
              dataZoom: {},
            },
          },
          legend: {
            data: data.map((i) => i.category),
            left: "center",
            bottom: "0px",
          },
          xAxis: [
            {
              type: "value",
              scale: true,
              axisLabel: {
                formatter: "{value}",
              },
              splitLine: {
                show: true, // Show grid lines
                lineStyle: {
                  type: "dashed", // Set grid line style
                  width: 1, // Set grid line width
                },
              },
            },
          ],
          yAxis: [
            {
              type: "value",
              scale: true,
              axisLabel: {
                formatter: "{value}",
              },
              splitLine: {
                show: true, // Show grid lines
                lineStyle: {
                  type: "dashed", // Set grid line style
                  width: 1, // Set grid line width
                },
              },
            },
          ],

          series: data.map((item) => {
            return {
              name: item.category,
              type: "scatter",
              emphasis: {
                focus: "series",
              },
              data: item.data?.map((i) => {
                return {
                  value: [i.x, i.y, i.name],
                  /*   itemStyle: {
                      color: i.name === selectCity ? "red" : "blue", // Set color based on i.name
                    }, */
                };
              }),
              label: {
                show: true,
                position: "top",
                textBorderColor: "none",
                fontSize: 9,
                formatter: function (params: any) {
                  return params.value[2];
                },
              },
            };
          }),
        }}
      />
    </Stack>
  );
};

export default BasicScatterEChart;
