import React from "react";
import ReactEcharts from "echarts-for-react";
import * as echarts from "echarts";
import "./TreemapDrillDown_Style.css";
import {
  ICategoriesPS,
  ILinksPS,
  INodesPS,
} from "page/dashboard/components/cityInfo/ProductSpace/type";

const ForceLayoutGraph = React.memo(
  ({
    categories,
    nodes,
    links,
  }: {
    categories: ICategoriesPS[];
    nodes: INodesPS[];
    links: ILinksPS[];
  }) => {
    const formatUtil = echarts.format;
    return (
      <div>
        <ReactEcharts
          style={{ height: "550px" }}
          option={{
            title: {},
            tooltip: {
              formatter: function (info: {
                value: any;
                name: any;
                treePathInfo: any;
              }) {
                return [
                  '<div class="tooltip-title">  <div class="div-text">' +
                    formatUtil.addCommas(info.name) +
                    "</div> </div>",
                  "Value: " + formatUtil.addCommas(info.value),
                ].join("");
              },
            },
            legend: [
              {
                data: categories.map(function (a) {
                  return a.name;
                }),
              },
            ],
            series: [
              {
                name: "Les Miserables",
                type: "graph",
                layout: "force",
                animation: false,
                data: nodes.map(function (node) {
                  return {
                    category: node.category,
                    id: `${node.id}`,
                    name: node.name,
                    /*   value: node.symbolSize, */
                    symbolSize: node.symbolSize / 10,
                  };
                }),
                links: links,
                /*  links: links
                  .filter((edge) => edge.value > 0.4)
                  .map(function (edge) {
                    return {
                      source: edge.source,
                      target: edge.target,
                    };
                  }), */
                categories: categories,
                emphasis: {
                  focus: "adjacency",
                  label: {
                    position: "right",
                    show: true,
                  },
                },
                roam: true,
                label: {
                  position: "right",
                },
                scaleLimit: {
                  min: 0.1,
                  max: 1,
                },
                force: {
                  friction: 0.5,
                  edgeLength: links.map(function (a) {
                    return a.value * 10;
                  }),
                },
              },
            ],
          }}
        />
      </div>
    );
  }
);

export default ForceLayoutGraph;
