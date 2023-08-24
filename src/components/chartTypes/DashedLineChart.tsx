import { useTheme } from "layouts/theme/ThemeContext";
import React from "react";
import ReactApexChart from "react-apexcharts";
import "./tooltipCss.css";

const DashedLineChart = () => {
  const { theme } = useTheme();

  return (
    <div style={{ width: "100%" }}>
      <ReactApexChart
        width={"100%"}
        maxWidth={"1400px"}
        height={400}
        options={{
          chart: {
            stacked: false,
            type: "line",
            zoom: {
              enabled: false,
            },
          },
          /*     responsive: [
            {
              breakpoint: 768,
              options: {
                chart: {
                  height: 400,
                  width: "420px",
                },
              },
            },
            {
              breakpoint: 1920,
              options: {
                chart: {
                  height: 450,
                  width: "750px",
                },
              },
            },
            {
              breakpoint: 2150,
              options: {
                chart: {
                  height: 450,
                  width: "1000px",
                },
              },
            },
            {
              breakpoint: 2400,
              options: {
                chart: {
                  height: 450,
                  width: "1400px",
                },
              },
            },
          ], */
          dataLabels: {
            enabled: false,
          },
          stroke: {
            width: [3, 4, 3],
            curve: "smooth",
            dashArray: [0, 8, 5],
          },
          title: {
            text: "Statistics",
            align: "left",
            style: {
              color: theme.palette.primary.main,
            },
          },
          legend: {
            labels: {
              colors: theme.palette.primary.main,
            },
            tooltipHoverFormatter: function (
              val: string,
              opts: {
                w: {
                  globals: { series: { [x: string]: { [x: string]: string } } };
                };
                seriesIndex: string | number;
                dataPointIndex: string | number;
              }
            ) {
              return (
                val +
                " - " +
                opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] +
                ""
              );
            },
          },

          markers: {
            size: 0,
            /* colors: theme.palette.primary.main, */
            hover: {
              sizeOffset: 6,
            },
          },
          xaxis: {
            categories: [
              "01 Jan",
              "02 Jan",
              "03 Jan",
              "04 Jan",
              "05 Jan",
              "06 Jan",
              "07 Jan",
              "08 Jan",
              "09 Jan",
              "10 Jan",
              "11 Jan",
              "12 Jan",
            ],
            labels: {
              style: {
                colors: theme.palette.primary.main,
              },
            },
          },
          yaxis: {
            labels: {
              style: {
                colors: theme.palette.primary.main,
              },
            },
          },
          tooltip: {
            theme: theme.palette.primary.dark,
            cssClass: "tooltipCss",
            y: [
              {
                title: {
                  formatter: function (val: string) {
                    return val + " (mins)";
                  },
                },
              },
              {
                title: {
                  formatter: function (val: string) {
                    return val + " per session";
                  },
                },
              },
              {
                title: {
                  formatter: function (val: any) {
                    return val;
                  },
                },
              },
            ],
          },

          grid: {
            show: false,
            borderColor: "#f1f1f1",
          },
          colors: ["#ABA5C8", "#D67359", "#CFAF5A"], // Replace these colors with your desired colors
        }}
        series={[
          {
            name: "Session Duration",
            data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10],
          },
          {
            name: "Page Views",
            data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35],
          },
          {
            name: "Total Visits",
            data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47],
          },
        ]}
        type="line"
      />
    </div>
  );
};

export default DashedLineChart;
