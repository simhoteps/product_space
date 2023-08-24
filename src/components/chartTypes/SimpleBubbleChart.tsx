import React from "react";
import ReactApexChart from "react-apexcharts";

interface DataPoint {
  x: string;
  y: number;
  z: number;
}

const data = [
  { x: "A", y: 20, z: 10 },
  { x: "B", y: 10, z: 20 },
  { x: "C", y: 30, z: 15 },
  { x: "D", y: 40, z: 25 },
  { x: "E", y: 60, z: 13 },
  { x: "F", y: 50, z: 30 },
  { x: "G", y: 25, z: 25 },
  { x: "H", y: 32, z: 17 },
];
const SimpleBubbleChart: React.FC = () => {
  const series = [
    {
      data: data.map((item) => ({ x: item.x, y: item.y, z: item.z })),
    },
  ];

  return (
    <ReactApexChart
      options={{
        chart: {
          height: 350,
          type: "bubble",
        },
        dataLabels: {
          enabled: false,
        },
        fill: {
          opacity: 0.8,
        },
        xaxis: {
          tickAmount: 12,
          type: "category",
        },
        yaxis: {
          max: 70,
        },
      }}
      series={series}
      type="bubble"
      height={350}
      width={460}
    />
  );
};

export default SimpleBubbleChart;
