import React, { useEffect, useRef } from "react";
import ReactEcharts from "echarts-for-react";
import * as echarts from "echarts";
import { useTheme } from "layouts/theme/ThemeContext";
import { Size, useWindowSize } from "utils/hooks/use_window_size";
import "./TreemapDrillDown_Style.css";
import { Stack } from "@mui/material";

interface ITreeNode {
  name: string;
  value: number;
  children?: ITreeNode[];
}

const TreemapDrillDown = ({
  cityName,
  cityData,
}: {
  cityName: string | undefined;
  cityData: ITreeNode[];
}) => {
  const { theme } = useTheme();
  const windowsize: Size = useWindowSize();
  const formatUtil = echarts.format;
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

          tooltip: {
            formatter: function (info: {
              value: any;
              name: any;
              treePathInfo: any;
            }) {
              var value = info.value;
              var treePathInfo = info.treePathInfo;
              var treePath = [];
              for (var i = 1; i < treePathInfo.length; i++) {
                treePath.push(treePathInfo[i].name);
              }
              return [
                '<div class="tooltip-title">  <div class="div-text">' +
                  formatUtil.addCommas(info.name) +
                  "</div> </div>",
                "Value: " + formatUtil.addCommas(value),
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
              },
              upperLabel: {
                show: true,
                height: 18,
                textBorderColor: "none",
              },
              data: cityData,
              roam: false,
              leafDepth: 1,
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
                    borderColorSaturation: 0.8,
                    gapWidth: 2,
                    borderWidth: 2,
                  },
                },
                {
                  colorSaturation: [0.6, 0.7],
                  itemStyle: {
                    borderColorSaturation: 0.6,
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

export default TreemapDrillDown;
/* 
const TreemapDrillDown = React.memo(({ cityName }: { cityName: string }) => {
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
          myChart.hideLoading();

          const option = {
            title: {
              show: false,
            },

            tooltip: {
              formatter: function (info: {
                value: any;
                name: any;
                treePathInfo: any;
              }) {
                var value = info.value;
                var treePathInfo = info.treePathInfo;
                var treePath = [];
                for (var i = 1; i < treePathInfo.length; i++) {
                  treePath.push(treePathInfo[i].name);
                }
                return [
                  '<div class="tooltip-title">  <div class="div-text">' +
                    formatUtil.addCommas(info.name) +
                    "</div> </div>",
                  "Value: " + formatUtil.addCommas(value),
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
                },
                upperLabel: {
                  show: true,
                  height: 18,
                  textBorderColor: "none",
                },
                data: cityData.data,
                roam: false,
                leafDepth: 1,
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
                      borderColorSaturation: 0.8,
                      gapWidth: 2,
                      borderWidth: 2,
                    },
                  },
                  {
                    colorSaturation: [0.6, 0.7],
                    itemStyle: {
                      borderColorSaturation: 0.6,
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
});

export default TreemapDrillDown;
 */
