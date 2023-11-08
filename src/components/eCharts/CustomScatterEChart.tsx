import React, { useEffect, useRef } from "react";
import ReactEcharts from "echarts-for-react";
import { useTheme } from "layouts/theme/ThemeContext";
import { Size, useWindowSize } from "utils/hooks/use_window_size";
import "./TreemapDrillDown_Style.css";
import { Stack } from "@mui/material";

interface IType {
  city?: string;
  line?: number;
  data?: {
    category: string;
    data: {
      nace6: number;
      size?: number;
      x: number;
      y1?: number;
      y2?: number;
      filterColor1?: number;
      filterColor2?: number;
    }[];
  }[];
}

const CustomScatterEChart = ({
  data,
  xname,
  yname,
  state,
  lineShow,
}: {
  data: IType;
  xname: string;
  yname: string;
  state: number;
  lineShow: boolean;
}) => {
  const { theme } = useTheme();
  const windowsize = useWindowSize();

  return (
    <Stack
      sx={{
        height: `calc(${windowsize?.height}px - 120px)`,
      }}
    >
      <ReactEcharts
        style={{ width: "100%", height: "66vh", margin: "0", padding: "0" }}
        option={{
          title: {
            show: false,
          },
          grid: {
            left: "3%",
            right: "8%",
            bottom: "20%",
            containLabel: true,
          },
          tooltip: {
            // trigger: 'axis',
            showDelay: 0,
            formatter: function (params: any) {
              if (params.value.length > 1) {
                return (
                  '<div class="tooltip-title"> ' +
                  "Grup :" +
                  params.seriesName +
                  "<br/>" +
                  "Ürün kodu :" +
                  params.value[2] +
                  ":<br/>" +
                  "x değeri :" +
                  params.value[0] +
                  ":<br/>" +
                  "y değeri :" +
                  params.value[1] +
                  " </div>"
                );
              } else {
                return params.value + "  ";
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
              dataView: {
                show: true,
              },
              saveAsImage: {},
            },
          },
          brush: {},
          legend: {
            data: data.data?.map((item) => item.category),
            left: "center",
            bottom: "0px",
          },
          xAxis: [
            {
              name: xname,
              type: "value",
              scale: true,
              axisLabel: {
                formatter: "{value}",
              },
              splitLine: {
                show: false,
              },
            },
          ],
          yAxis: [
            {
              name: yname,
              type: "value",
              scale: true,
              axisLabel: {
                formatter: "{value}",
              },
              splitLine: {
                show: false,
              },
            },
          ],
          series: data.data?.map((item) => {
            return {
              name: item.category,
              type: "scatter",
              emphasis: {
                focus: "series",
              },
              /*  itemStyle: {
                opacity: item.data.map((i) => {
                  return i.filterData === 0 ? 0.1 : 1;
                }),
              }, */
              data: item.data.map((cor) => {
                return {
                  value:
                    state === 1
                      ? [cor.x, cor.y1, cor.nace6]
                      : [cor.x, cor.y2, cor.nace6],
                  itemStyle: {
                    opacity:
                      state === 1
                        ? cor.filterColor1 === 0
                          ? 0.3
                          : 1
                        : cor.filterColor2 === 0
                        ? 0.3
                        : 1,
                  },
                  symbolSize: cor.size && cor.size / 7,
                };
              }),

              markLine: data.line &&
                lineShow && {
                  data: [
                    {
                      yAxis: data.line, // Y ekseninde 1 seviyesine bir çizgi çizecek
                      lineStyle: {
                        color: `#DE481E`, // Çizgi rengi
                        type: "dashed", // Çizgi tipi
                        cap: "round",
                        width: 3,
                      },
                      label: {
                        show: true,
                        position: "end", // Etiket pozisyonu
                        formatter: `${data.line}`, // Etiket metni
                      },
                    },
                  ],
                },
            };
          }),
        }}
      />
    </Stack>
  );
};

export default CustomScatterEChart;
