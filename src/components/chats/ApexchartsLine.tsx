import React from "react";
import { useTheme } from "layouts/theme/ThemeContext";
import ReactApexChart from "react-apexcharts";

const ApexchartsLine = () => {
  const { theme } = useTheme();

  return (
    <div style={{ width: "100%" }}>
      <ReactApexChart
        width={"100%"}
        maxWidth={"1400px"}
        height={250}
        options={{
          chart: {
            stacked: false,
            type: "line",
            zoom: {
              enabled: false,
            },
          },

          dataLabels: {
            enabled: false,
          },
          stroke: {
            width: [3, 4, 3],
            curve: "smooth",
            dashArray: [0, 8, 5],
          },
          title: {
            /*             text: "Statistics", */
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
              show: false,
              style: {
                colors: theme.palette.primary.main,
              },
            },
            axisBorder: {
              show: false, // x-ekseni çizgisini gizle
            },
          },
          yaxis: {
            labels: {
              show: false,
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
          colors: ["#ABA5C8"], // Replace these colors with your desired colors
        }}
        series={[
          {
            name: "Session Duration",
            data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10],
          },
        ]}
        type="line"
      />
    </div>
  );
};

export default ApexchartsLine;
