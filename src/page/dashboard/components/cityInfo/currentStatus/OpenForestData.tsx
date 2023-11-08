import React from "react";
import { openForestDiversityData } from "./openForestDiversityData";
import { Stack } from "@mui/material";
import { Size, useWindowSize } from "utils/hooks/use_window_size";
import BasicScatterEChart from "components/eCharts/BasicScatterEChart";

const OpenForestData = ({ selectCity }: { selectCity: string }) => {
  const windowsize = useWindowSize();
  const data = openForestDiversityData.map((item) => {
    return {
      name: item.city,
      x: item.Div_kc,
      y: item.of,
      size: 1,
      filterData: 1,
    };
  });

  const newData = [
    {
      category: "il",
      data: data,
    },
  ];

  return (
    <Stack>
      <BasicScatterEChart data={newData} selectCity={selectCity} />
    </Stack>
  );
};

export default OpenForestData;

{
  /*     <Stack
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
            data: newData.category,
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
                show: false,
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
                show: false,
              },
            },
          ],
          series: [
            {
              type: "scatter",
              data: data.data?.map((item) => [item.x, item.y, item.name]),
              label: {
                show: true,
                position: "top",

                textBorderColor: "none",
                fontSize: 9,
                formatter: function (params: any) {
                  return params.value[2]; // Yıl ismini döndürün.
                },
              },
            },
            {
              type: "effectScatter",
              symbolSize: 9,
              itemStyle: {
                color: "red",
              },
              data: data.data
                ?.filter((item) => item.name === selectCity)
                .map((item) => [item.x, item.y, item.name]),
            },
          ],
        }}
      />
    </Stack> */
}
