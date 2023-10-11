import React, { useEffect, useRef } from "react";
import ReactEcharts from "echarts-for-react";
import * as echarts from "echarts";
import { useTheme } from "layouts/theme/ThemeContext";
import { Size, useWindowSize } from "utils/hooks/use_window_size";
import "./TreemapDrillDown_Style.css";
import { Stack } from "@mui/material";

interface TreeNode {
  name: string;
  value: number[];
  children?: TreeNode[];
}

const TreemapDrillDownUniq = ({
  cityName,
  cityData,
}: {
  cityName: string;
  cityData: TreeNode[];
}) => {
  const { theme } = useTheme();
  const windowsize: Size = useWindowSize();

  const minMaxValues = cityData.reduce(
    (acc: any, current: any) => {
      if (current.value[1] && current?.value[1] < acc.min) {
        acc.min = current.value2;
      }
      if (current.value[1] && current?.value[1] > acc.max) {
        acc.max = current.value[1];
      }
      return acc;
    },
    { min: Infinity, max: -Infinity }
  );

  return (
    <Stack
      sx={{
        height: `calc(${windowsize?.height}px - 260px)`,
      }}
    >
      <ReactEcharts
        style={{ width: "100%", height: "68vh", margin: "0", padding: "0" }}
        option={{
          title: {
            show: false,
          },

          visualMap: {
            type: "continuous",
            show: true,
            left: "center",
            itemHeight: 200,
            itemWidth: 12,
            orient: "horizontal",
            bottom: 19,
            min: -1 /*  minMaxValues.min, */,
            max: 4 /* minMaxValues.max, */,
            text: ["High", "Low"],
            calculable: true,
            textStyle: {
              color: theme.palette.primary.dark,
            },
          },
          tooltip: {
            formatter: function (info: TreeNode) {
              return [
                '<div class="tooltip-title">' +
                  echarts.format.encodeHTML(info.name) +
                  "</div>",
                "rca:" + info.value[0] + "<br>",
                "pci:" + info.value[1] + "<br>",
              ].join("");
            },
          },
          series: [
            {
              name: cityName,
              type: "treemap",
              left: 0,
              top: 0,
              right: 0,
              bottom: "10%",
              width: "100%",
              visualMin: -100,
              visualMax: 300,
              visualDimension: 3,
              legend: {
                padding: 0,
              },
              label: {
                show: true,
                formatter: "{b}",
                color: "#4B4952",
              },
              upperLabel: {
                show: true,
                height: 18,
                textBorderColor: "none",
                backgroundColor: theme.palette.background.paper,
              },
              data: cityData,
              roam: false,
              leafDepth: 2,
              levels: [
                {
                  itemStyle: {
                    borderColor: theme.palette.background.paper,
                    borderWidth: 4,
                    gapWidth: 4,
                  },
                },
                {
                  colorSaturation: [0.6, 0.7],
                  itemStyle: {
                    borderColor: theme.palette.background.paper,
                    gapWidth: 2,
                    borderWidth: 2,
                  },
                },
                {
                  colorSaturation: [0.6, 0.7],
                  itemStyle: {
                    borderColor: theme.palette.background.paper,
                    gapWidth: 1,
                  },
                },
                {
                  colorSaturation: [0.6, 0.7],
                },
              ],
            },
          ],
        }}
      />
    </Stack>
  );
};

export default TreemapDrillDownUniq;
/* const TreemapDrillDownUniq = React.memo(
  ({ cityName }: { cityName: string }) => {
    const { theme } = useTheme();
    const formatUtil = echarts.format;
    const chartRef = useRef<HTMLDivElement | null>(null);
    const windowsize: Size = useWindowSize();
    useEffect(() => {
      if (chartRef.current) {
        const myChart = echarts.init(chartRef.current);
        myChart.showLoading();

        fetch("/data/turkey_city_tree_map_color.json")
          .then((response) => response.json())
          .then((rawData) => {
            const cityData = rawData.find((item: any) => item.Ad === cityName);
            const minMaxValues = cityData.data.reduce(
              (acc: any, current: any) => {
                if (current.value2 && current?.value2 < acc.min) {
                  acc.min = current.value2;
                }
                if (current.value2 && current?.value2 > acc.max) {
                  acc.max = current.value2;
                }
                return acc;
              },
              { min: Infinity, max: -Infinity }
            );

            function mergeValues(arr: any) {
              arr.forEach((item: any) => {
                if (item.children) {
                  mergeValues(item.children);
                }

                if (
                  typeof item.value === "number" &&
                  typeof item.value2 === "number"
                ) {
                  item.value = [item.value, item.value2];
                  delete item.value2;
                }
              });
            }
            mergeValues(cityData.data);

            myChart.hideLoading();
            const option = {
              title: {
                show: false,
              },

              visualMap: {
                type: "continuous",
                show: true,
                left: "center",
                itemHeight: 200,
                itemWidth: 12,
                orient: "horizontal",
                bottom: 19,
                min: -2 ,
                max: 4 ,
                text: ["High", "Low"],
                calculable: true,
                textStyle: {
                  color: theme.palette.primary.dark,
                },
              },
              tooltip: {
                formatter: function (info: any) {
                  return [
                    '<div class="tooltip-title">  <div class="div-text">' +
                      echarts.format.encodeHTML(info.name) +
                      "</div> </div>",
                    "rca:" + info.value[0] + "<br>",
                    "pci:" + info.value[1] + "<br>",
                  ].join("");
                },
              },
              series: [
                {
                  name: cityName,
                  type: "treemap",
                  left: 0,
                  top: 0,
                  right: 0,
                  bottom: "10%",
                  width: "100%",
                  visibleMin: 300,
                  legend: {
                    padding: 0,
                  },
                  label: {
                    show: true,
                    formatter: "{b}",
                    color: "#4B4952",
                  },
                  upperLabel: {
                    show: true,
                    height: 18,
                    textBorderColor: "none",
                    backgroundColor: theme.palette.background.paper,
                  },
                  data: cityData.data,
                  value: "value",
                  color: "value2",
                  colorScale: "YlGnBu",

                  roam: false,
                  leafDepth: 2,
                  levels: [
                    {
                      itemStyle: {
                        borderColor: theme.palette.background.paper,
                        borderWidth: 4,
                        gapWidth: 4,
                      },
                    },
                    {
                      colorSaturation: [0.6, 0.7],
                      itemStyle: {
                        borderColor: theme.palette.background.paper,
                        gapWidth: 2,
                        borderWidth: 2,
                      },
                    },
                    {
                      colorSaturation: [0.6, 0.7],
                      itemStyle: {
                        borderColor: theme.palette.background.paper,
                        gapWidth: 1,
                      },
                    },
                    {
                      colorSaturation: [0.6, 0.7],
                    },
                  ],
                },
              ],
            };

            myChart.setOption(option);
          });
      }
    }, []);

    return (
      <Stack
        sx={{
          height: `calc(${windowsize?.height}px - 260px)`,
        }}
      >
        {" "}
        <div
          ref={chartRef}
          style={{
            width: "100%",
            height: "68vh",
            margin: "0",
            padding: "0",
          }}
        />
      </Stack>
    );
  }
);

export default TreemapDrillDownUniq;
 */
