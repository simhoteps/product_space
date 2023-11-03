import React from "react";
import Chart from "react-apexcharts";

const data = [
  {
    name: "Sample A",
    data: [
      { x: "Jan", y: 50, z: 15 },
      { x: "Feb", y: 20, z: 10 },
      { x: "Mar", y: 30, z: 12 },
    ],
  },
  {
    name: "Sample B",
    data: [
      { x: "Jan", y: 20, z: 10 },
      { x: "Feb", y: 30, z: 12 },
      { x: "Mar", y: 10, z: 5 },
    ],
  },
  {
    name: "Sample C",
    data: [
      { x: "Jan", y: 10, z: 5 },
      { x: "Feb", y: 40, z: 10 },
      { x: "Mar", y: 20, z: 20 },
    ],
  },
];

const BubbleChart = () => {
  return (
    <div>
      {" "}
      <Chart
        options={{
          chart: {
            height: 350,
            type: "bubble",
            toolbar: {
              show: false,
            },
          },
          dataLabels: {
            enabled: false,
          },
          fill: {
            opacity: 0.8,
          },
          /*   title: {
            text: "Simple Bubble Chart",
          }, */
          xaxis: {
            tickAmount: 12,
            type: "category",
          },
          yaxis: {
            max: 70,
          },
          grid: {
            show: false,
          },
        }}
        series={data}
        type="bubble"
        width="420px"
        height="325px"
      />
    </div>
  );
};

export default BubbleChart;
