import { ApexOptions } from "apexcharts";
import Chart from "react-apexcharts";

const CustomChartArea = () => {
  /*   const labelColor = getCSSVariableValue('--kt-gray-800')
  const strokeColor = getCSSVariableValue('--kt-gray-300')
  const baseColor = getCSSVariableValue('--kt-' + 'primary')
  const lightColor = getCSSVariableValue('--kt-' + 'primary' + '-light') */

  const data = [30, 25, 45, 30, 55, 55]; // yüzde değeri
  const dataTotal = "Net Profit"; // toplam adet
  const categories = ["Feb", "Mar", "Apr", "May", "Jun", "Jul"];

  /* return {
    series: [
      {
        name: 'Net Profit',
        data: [30, 25, 45, 30, 55, 55],
      },
    ],
    chart: {
      fontFamily: 'inherit',
      type: 'area',
      height: '150px',
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
      sparkline: {
        enabled: true,
      },
    },
    plotOptions: {},
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      type: 'solid',
      opacity: 1,
    },
    stroke: {
      curve: 'smooth',
      show: true,
      width: 3,
      colors: [baseColor],
    },
    xaxis: {
      categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
        style: {
          colors: labelColor,
          fontSize: '12px',
        },
      },
      crosshairs: {
        show: false,
        position: 'front',
        stroke: {
          color: strokeColor,
          width: 1,
          dashArray: 3,
        },
      },
      tooltip: {
        enabled: false,
      },
    },
    yaxis: {
      min: 0,
      max: 60,
      labels: {
        show: false,
        style: {
          colors: labelColor,
          fontSize: '12px',
        },
      },
    },
    states: {
      normal: {
        filter: {
          type: 'none',
          value: 0,
        },
      },
      hover: {
        filter: {
          type: 'none',
          value: 0,
        },
      },
      active: {
        allowMultipleDataPointsSelection: false,
        filter: {
          type: 'none',
          value: 0,
        },
      },
    },
    tooltip: {
      style: {
        fontSize: '12px',
      },
      y: {
        formatter: function (val: any) {
          return '$' + val + ' thousands'
        },
      },
    },
    colors: [lightColor],
    markers: {
      colors: [lightColor],
      strokeColors: [baseColor],
      strokeWidth: 3,
    },
  } */
  return (
    <div>
      {" "}
      <Chart
        options={{
          chart: {
            fontFamily: "inherit",
            type: "area",
            height: "150px",
            toolbar: {
              show: false,
            },
            zoom: {
              enabled: false,
            },
            sparkline: {
              enabled: true,
            },
          },
          plotOptions: {},
          legend: {
            show: false,
          },
          dataLabels: {
            enabled: false,
          },
          fill: {
            type: "solid",
            opacity: 1,
          },
          stroke: {
            curve: "smooth",
            show: true,
            width: 3,
            /*      colors: [baseColor], */
          },
          xaxis: {
            categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul"],
            axisBorder: {
              show: false,
            },
            axisTicks: {
              show: false,
            },
            labels: {
              show: false,
              style: {
                /*     colors: , */
                fontSize: "12px",
              },
            },
            crosshairs: {
              show: false,
              position: "front",
              stroke: {
                color: "green",
                width: 1,
                dashArray: 3,
              },
            },
            tooltip: {
              enabled: false,
            },
          },
          yaxis: {
            min: 0,
            max: 60,
            labels: {
              show: false,
              style: {
                colors: "red",
                fontSize: "12px",
              },
            },
          },
          states: {
            normal: {
              filter: {
                type: "none",
                value: 0,
              },
            },
            hover: {
              filter: {
                type: "none",
                value: 0,
              },
            },
            active: {
              allowMultipleDataPointsSelection: false,
              filter: {
                type: "none",
                value: 0,
              },
            },
            /* tooltip: {
              style: {
                fontSize: '12px',
              },
              y: {
                formatter: function (val: any) {
                  return '$' + val + ' thousands'
                },
              },
            }, */
            /*   colors: [lightColor], */
            /*  markers: {
              colors: [lightColor],
              strokeColors: [baseColor],
              strokeWidth: 3,
            }, */
          },
        }}
        series={data}
        type="area"
        /*   width="500px" */
        height="325px"
      />
    </div>
  );
};
export default CustomChartArea;
