import { Stack } from "@mui/material";
import React from "react";
import Chart from "react-apexcharts";

const data = [44, 55, 67, 83]; // yüzde değeri
const dataTotal = "249"; // toplam adet
const labelsName = ["Data 1", "Data 2", "Data 3", " Data 4"];

const MultipleRadialbarsChart = () => {
  return (
    <Stack width={"100%"}>
      <Chart
        options={{
          chart: {
            height: 350,
            type: "radialBar",
          },
          plotOptions: {
            radialBar: {
              dataLabels: {
                name: {
                  fontSize: "22px",
                },
                value: {
                  fontSize: "16px",
                },
                total: {
                  show: true,
                  label: "Total",
                  formatter: function (w) {
                    return dataTotal;
                  },
                },
              },
            },
          },
          labels: labelsName,
        }}
        series={data}
        type="radialBar"
        width="auto"
        height="240px"
      />
    </Stack>
  );
};

export default MultipleRadialbarsChart;
