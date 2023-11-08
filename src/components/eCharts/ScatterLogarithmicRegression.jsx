import React, { useEffect, useRef } from "react";
import ReactEcharts from "echarts-for-react";
import * as echarts from "echarts";
import ecStat from 'echarts-stat';
import { useTheme } from "layouts/theme/ThemeContext";
import { Size, useWindowSize } from "utils/hooks/use_window_size";
import "./TreemapDrillDown_Style.css";
import { Stack } from "@mui/material";



const ScatterLogarithmicRegression = (props) => {
  const { theme } = useTheme();
  const windowsize = useWindowSize();
  const formatUtil = echarts.format;
  echarts.registerTransform(ecStat.transform.regression);
  return (
    <Stack
      sx={{
        height: `calc(${windowsize?.height}px - 260px)`,
      }}
    >
      <ReactEcharts
        style={{ width: "100%", height: "68vh", margin: "0", padding: "0" }}
        option={{
          dataset: [
            {
              source: props.data,
            },
            {
              transform: {
                type: "filter",
                config: { dimension: 4, eq: 2022 },
              },
            },
          
            {
              transform: {
                type: "ecStat:regression",
                config: {
                  method: "logarithmic",
                }, 
              },
            },
          ],
          title: {
            show: false,
          },
          legend: {
            data: ["2022"],
            bottom: 10,
          },
        /*   tooltip: {
            formatter: function (info) {
              console.log(info)
              return [
                '<div class="tooltip-title">  <div class="div-text">' +
                  formatUtil.addCommas(info.name) +
                  "</div> </div>",
           "Değeri: " + formatUtil.addCommas(info.data), 
              ].join("");
            },
          }, */
          toolbox: {
            feature: {
              dataZoom: {},
            
            },
          },
      tooltip: {
        formatter: function (params) {
          var tooltipContent = '';
          params.forEach(function (param) {
            
           tooltipContent += param.value[3] + ": " + param.value[0] + "<br>"
          });
          return tooltipContent;
        },
            trigger: "axis",
           /*  axisPointer: {
              type: "cross",
            }, */
          }, 
          xAxis: {
            scale: true,
            type: "value",
            splitLine: {
              lineStyle: {
                type: "dashed",
              },
            },
          },
          yAxis: {
            scale: true,
            type: "value",
            splitLine: {
              lineStyle: {
                type: "dashed",
              },
            },
          },
          visualMap: {
            show: false,
            dimension: 2,
            min: 20000,
            max: 1500000000,
            seriesIndex: [0, 1],
            inRange: {
              symbolSize: [10, 70]
            }
          },
          series: [
            {
              name: "2022",
              type: "scatter",
              datasetIndex: 1,
              label: {
                show: true,
                position: "top",
                textBorderColor: "none",
                fontSize: 9,
                formatter: function(params) {
                  return params.value[3]; // Yıl ismini döndürün.
                },
              },
            },
             {
              name: "line",
              type: "line",
              smooth: true,
              datasetIndex: 2,
              symbolSize: 0.1,
              symbol: "circle",
              label: { show: true, fontSize: 16 },
              labelLayout: { dx: -20 },
              encode: { label: 2, tooltip: 1 },
            }, 
            {
              type: "effectScatter",
              symbolSize: 9,
              itemStyle: {
                color: "red",
              },
              data:props.data.filter((item) => item[3] === props.selectCity)
                
            },
          ],
        }}
      />
    </Stack>
  );
};

export default ScatterLogarithmicRegression;
