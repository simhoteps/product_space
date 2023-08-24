import React from "react";
import ReactApexChart from "react-apexcharts";

class MissingValueLineChats extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "Peter",
          data: [5, 5, 10, 8, 7, 5, 4, null, null, null, 10, 10, 7, 8, 6, 9],
        },
        {
          name: "Johnny",
          data: [
            10,
            15,
            null,
            12,
            null,
            10,
            12,
            15,
            null,
            null,
            12,
            null,
            14,
            null,
            null,
            null,
          ],
        },
        {
          name: "David",
          data: [
            null,
            null,
            null,
            null,
            3,
            4,
            1,
            3,
            4,
            6,
            7,
            9,
            5,
            null,
            null,
            null,
          ],
        },
      ],
      options: {
        chart: {
          height: 350,
          type: "line",
          zoom: {
            enabled: false,
          },
          animations: {
            enabled: false,
          },
        },
        stroke: {
          width: [5, 5, 4],
          curve: "straight",
        },
        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
        title: {
          text: "Missing data (null values)",
        },
        xaxis: {},
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
          height={320}
          width={440}
        />
      </div>
    );
  }
}

export default MissingValueLineChats;
