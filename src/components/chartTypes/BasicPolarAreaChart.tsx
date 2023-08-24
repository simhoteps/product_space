import React from "react";
import Chart from "react-apexcharts";

const data = [14, 23, 21, 17, 15, 10, 12, 17, 21];

const BasicPolarAreaChart = () => {
  return (
    <div>
      <Chart
        options={{
          chart: {
            height: 350,
            width: 400,
            type: "polarArea",
            toolbar: {
              show: false,
            },
          },
          stroke: {
            colors: ["#fff"],
          },
          grid: {
            show: false,
          },
          fill: {
            opacity: 0.8,
          },
          responsive: [
            {
              breakpoint: 480,
              options: {
                chart: {
                  width: 200,
                },
                legend: {
                  position: "bottom",
                },
              },
            },
          ],
        }}
        series={data}
        type="polarArea"
        height="325px"
        width={"420px"}
      />
    </div>
  );
};

export default BasicPolarAreaChart;
