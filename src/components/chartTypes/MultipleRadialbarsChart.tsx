import React from "react";
import Chart from "react-apexcharts";

const data = [44, 55, 67, 83]; // yüzde değeri
const dataTotal = "249"; // toplam adet
const labelsName = ["Apples", "Oranges", "Bananas", "Berries"];

const MultipleRadialbarsChart = () => {
  return (
    <div>
      {" "}
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
        height="325px"
      />
    </div>
  );
};

export default MultipleRadialbarsChart;
