import React from "react";
import ReactApexChart from "react-apexcharts";

class SteplineLineChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          data: [34, 44, 54, 21, 12, 43, 33, 23, 66, 66, 58],
        },
      ],
      options: {
        chart: {
          type: "line",
          height: 350,
        },
        stroke: {
          curve: "stepline",
        },
        dataLabels: {
          enabled: false,
        },
        title: {
          text: "Stepline Chart",
          align: "left",
        },
        markers: {
          hover: {
            sizeOffset: 4,
          },
        },
      },
    };
  }

  render() {
    return (
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="line"
          height={330}
          width={440}
        />
      </div>
    );
  }
}

export default SteplineLineChart;
