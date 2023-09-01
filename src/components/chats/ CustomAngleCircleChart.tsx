import React from "react";
import Chart from "react-apexcharts";

/* const data = [76, 67, 61, 90];
const labelsName = ["Vimeo", "Messenger", "Facebook", "LinkedIn"];
const circleColors = ["#1ab7ea", "#0084ff", "#39539E", "#0077B5"];
 */
const CustomAngleCircleChart = ({
  labelsName,
  circleColors,
  data,
}: {
  labelsName: string[];
  circleColors: string[];
  data: number[];
}) => {
  return (
    <div style={{ width: "100%" }}>
      {" "}
      <Chart
        options={{
          plotOptions: {
            radialBar: {
              offsetY: 0,
              startAngle: 0,
              endAngle: 270,
              hollow: {
                margin: 5,
                size: "30%",
                background: "transparent",
                image: undefined,
              },
              dataLabels: {
                name: {
                  show: false,
                },
                value: {
                  show: false,
                },
              },
            },
          },
          colors: circleColors,
          labels: labelsName,
          legend: {
            show: true,
            floating: true,
            fontSize: "14px",
            position: "left",
            offsetX: 30,
            offsetY: 8,
            labels: {
              useSeriesColors: true,
            },
            markers: {
              strokeWidth: 0,
            },
            formatter: function (seriesName, opts) {
              return (
                seriesName + ":  " + opts.w.globals.series[opts.seriesIndex]
              );
            },
            itemMargin: {
              vertical: 3,
            },
          },
          responsive: [
            {
              breakpoint: 480,
              options: {
                legend: {
                  show: false,
                },
              },
            },
          ],
        }}
        series={data}
        type="radialBar"
        width="100%"
        height="325px"
      />
    </div>
  );
};

export default CustomAngleCircleChart;
