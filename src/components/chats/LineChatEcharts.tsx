import React from "react";
import ReactEcharts from "echarts-for-react";
import { Stack } from "@mui/material";

const LineChatEcharts = () => {
  return (
    <Stack width={"100%"}>
      <ReactEcharts
        option={{
          xAxis: {
            type: "category",
            data: [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sept",
              "Oct",
              "Nov",
              "Dec",
            ],
          },
          yAxis: {
            type: "value",
          },
          series: [
            {
              data: [
                820, 932, 901, 934, 1290, 1330, 1320, 820, 932, 901, 934, 1290,
              ],
              type: "line",
              lineStyle: {
                color: " #25f1f5",
                width: 2,
              },
              itemStyle: {
                borderWidth: 2,
                borderColor: "#a5b0af",
              },
            },
          ],
        }}
      />
    </Stack>
  );
};

export default LineChatEcharts;
