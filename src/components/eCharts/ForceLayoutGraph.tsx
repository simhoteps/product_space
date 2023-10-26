import React from "react";
import ReactEcharts from "echarts-for-react";
import * as echarts from "echarts";
import "./TreemapDrillDown_Style.css";
import {
  ICategoriesPS,
  ILinksPS,
  INodesPS,
} from "page/dashboard/components/cityInfo/ProductSpace/type";
import { Size, useWindowSize } from "utils/hooks/use_window_size";

const ForceLayoutGraph = React.memo(
  ({
    categories,
    nodes,
    links,
  }: {
    categories: ICategoriesPS[];
    nodes: INodesPS[];
    links: { v: string; w: string }[];
  }) => {
    const windowsize: Size = useWindowSize();
    const formatUtil = echarts.format;
    return (
      <div>
        <ReactEcharts
          style={{
            /*  maxHeight: `calc(${windowsize?.height}px - 220px)`, */
            height: `70vh`,
          }}
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

                circular: {
                  rotateLabel: true,
                },
                data: nodes.map(function (node) {
                  return {
                    id: `${node.id}`,
                    name: `${node.name}`,
                    /* category: node.category, */
                    symbolSize: node.symbolSize * 10,
                  };
                }),
                /*   links: links, */
                links: links.map(function (edge) {
                  return {
                    source: edge.v,
                    target: edge.w,
                  };
                }),
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
                /*     force: {
                  friction: 0.5,
                  edgeLength: links.map(function (a) {
                    return a.value * 10;
                  }),
                }, */
              },
            ],
          }}
        />
      </div>
    );
  }
);

export default ForceLayoutGraph;
