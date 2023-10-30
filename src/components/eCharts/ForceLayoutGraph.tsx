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
    links: ILinksPS[];
  }) => {
    const windowsize: Size = useWindowSize();
    const formatUtil = echarts.format;

    return (
      <div>
        <ReactEcharts
          style={{
            height: `72vh`,
            width: "100%",
          }}
          option={{
            title: {},
            tooltip: {
              formatter: function (info: any) {
                return [
                  '<div class="tooltip-title">  <div class="div-text">' +
                    formatUtil.addCommas(info.name) +
                    "</div> </div>",
                  "Değeri: " + formatUtil.addCommas(info.data.symbolSize),
                ].join("");
              },
            },
            legend: [
              {
                show: true,
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
                circular: {
                  rotateLabel: false,
                },
                data: nodes.map(function (node) {
                  return {
                    id: `${node.id}`,
                    name: `${node.name}`,
                    category: `${node.category}`,
                    symbolSize: node.symbolSize * 15,
                  };
                }),

                links: links,
                /*   links: links.map(function (edge) {
                  return {
                    source: edge.v,
                    target: edge.w,
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
                  show: false,
                  /*  position: "right", */
                },
                scaleLimit: {
                  min: 0.5,
                  max: 2,
                },
                force: {
                  /*    gravity: 0.01, */
                  /*  friction: 0.5, */

                  repulsion: 5,
                  gravity: 0.01,
                  edgeLength: links.map(function (a) {
                    return a.value * 400;
                  }),

                  /*    edgeLength: links.map(function (a) {
                    return a.value * 400;
                  }), */
                },
                animation: false,
              },
            ],
          }}
        />
      </div>
    );
  }
);

export default ForceLayoutGraph;
