import React from "react";
import Chart from "react-apexcharts";

const data = [
  {
    name: "Sample A",
    data: [
      { x: "Jan", y: 50, z: 15 },
      { x: "Feb", y: 20, z: 10 },
      { x: "Mar", y: 30, z: 12 },
      { x: "Apr", y: 40, z: 14 },
      { x: "May", y: 50, z: 16 },
      { x: "Jun", y: 30, z: 10 },
      { x: "Jul", y: 40, z: 12 },
      { x: "Aug", y: 50, z: 14 },
      { x: "Sep", y: 60, z: 16 },
      { x: "Oct", y: 70, z: 18 },
      { x: "Nov", y: 60, z: 14 },
      { x: "Dec", y: 50, z: 10 },
    ],
  },
  {
    name: "Sample B",
    data: [
      { x: "Jan", y: 20, z: 10 },
      { x: "Feb", y: 30, z: 12 },
      { x: "Mar", y: 10, z: 5 },
      { x: "Apr", y: 40, z: 14 },
      { x: "May", y: 30, z: 10 },
      { x: "Jun", y: 20, z: 8 },
      { x: "Jul", y: 40, z: 12 },
      { x: "Aug", y: 50, z: 14 },
      { x: "Sep", y: 60, z: 16 },
      { x: "Oct", y: 70, z: 18 },
      { x: "Nov", y: 60, z: 14 },
      { x: "Dec", y: 50, z: 10 },
    ],
  },
  {
    name: "Sample C",
    data: [
      { x: "Jan", y: 10, z: 5 },
      { x: "Feb", y: 40, z: 10 },
      { x: "Mar", y: 20, z: 15 },
      { x: "Apr", y: 50, z: 16 },
      { x: "May", y: 60, z: 20 },
      { x: "Jun", y: 20, z: 8 },
      { x: "Jul", y: 40, z: 12 },
      { x: "Aug", y: 50, z: 14 },
      { x: "Sep", y: 60, z: 16 },
      { x: "Oct", y: 70, z: 18 },
      { x: "Nov", y: 60, z: 14 },
      { x: "Dec", y: 50, z: 10 },
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
