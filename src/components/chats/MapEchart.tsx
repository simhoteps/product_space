import { turkeyAllGeo } from "data/ turkeyMapsGeoJSON";
import { useState, useEffect } from "react";
import ReactECharts from "echarts-for-react";
import { turkeyMockData } from "page/home/data/MockTurkeydata";
const echarts = require("echarts");

echarts.registerMap("TURKEY", turkeyAllGeo, {});

export default function MapEchart() {
  return (
    <div className="App">
      <h2>TURKEY MAP</h2>

      <ReactECharts
        option={{
          color: ["#2196f3", "#e91e63"],
          tooltip: {
            trigger: "item",
            showDelay: 0,
            transitionDuration: 0.2,
          },
          visualMap: {
            left: "right",
            min: 0,
            max: 81,
            inRange: {
              color: [
                "#313695",
                "#4575b4",
                "#74add1",
                "#abd9e9",
                "#e0f3f8",
                "#ffffbf",
                "#fee090",
                "#fdae61",
                "#f46d43",
                "#d73027",
                "#a50026",
              ],
            },
            text: ["High", "Low"],
            calculable: true,
          },
          /*     visualMap: {
            show: true,
            type: "piecewise",
            showLabel: false,
            dimension: 1,
            top: 0,
            backgroundColor: "#fff",
            left: "center",
            orient: "horizontal",
            categories: ["Category 1", "Category 2"],
            hoverLink: false,
            inRange: {
              color: {
                "Category 1": "#2196f3",
                "Category 2": "#e91e63",
              },
            },
          }, */
          toolbox: {
            show: false,
            left: "left",
            top: "top",
            feature: {
              dataView: { readOnly: false },
              restore: {},
              saveAsImage: {},
            },
          },
          series: [
            {
              name: "Category 1",
              type: "map",
              roam: true,
              map: "TURKEY",
              emphasis: {
                disabled: false,
                label: {
                  show: false,
                },
                itemStyle: {
                  areaColor: "#eee",
                  shadowColor: "rgba(0, 0, 0, 0.5)",
                  shadowBlur: 5,
                },
              },
              select: {
                disabled: true,
              },
              itemStyle: {
                areaColor: "#eee",
                color: "red",
                borderWidth: 1,
              },
              data: turkeyMockData.data,
            },
          ],
        }}
        style={{ height: "600px", width: "100%" }}
      />
    </div>
  );
}
