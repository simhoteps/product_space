import { Stack } from "@mui/material";
import { cityContext } from "context/CityProvider";
import numeral from "numeral";
import { turkeySGKData } from "page/home/data/NewData";
import React, { useContext, useState } from "react";
import Chart from "react-apexcharts";

const MultipleRadialbarsChart = ({
  labelsName,
  dataTotal,
}: /*   data, */
{
  labelsName: string[];
  dataTotal: string;
  /*   data: (number | null)[]; */
}) => {
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
        series={[123, 56, 78, 9, 34]}
        type="radialBar"
        width="auto"
        height="240px"
      />
    </Stack>
  );
};

export default MultipleRadialbarsChart;
