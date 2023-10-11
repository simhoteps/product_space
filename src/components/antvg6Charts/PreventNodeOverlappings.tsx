import React, { useEffect, useRef } from "react";
import G6 from "@antv/g6";

const insertCss = `
  .g6-tooltip {
    border-radius: 6px;
    font-size: 12px;
    color: #fff;
    background-color: #000;
    padding: 2px 8px;
    text-align: center;
  }
`;

const data = {
  nodes: [
    {
      id: "Myriel",
      size: 14,
    },
    {
      id: "Napoleon",
      size: 30,
    },
    {
      id: "Performance",
      size: 3,
    },
    {
      id: "Response",
      size: 7,
    },
    {
      id: "Elastic Logs",
      size: 2,
    },
    {
      id: "Service Status",
      size: 23,
    },
    {
      id: "Paycore",
      size: 4,
    },
  ],
  edges: [
    {
      source: "Napoleon",
      target: "Myriel",
      value: 1,
    },
    {
      source: "Napoleon",
      target: "Performance",
      value: 2,
    },
    {
      source: "Performance",
      target: "Response",
      value: 2,
    },
    {
      source: "Myriel",
      target: "Elastic Logs",
    },
    {
      source: "Napoleon",
      target: "Service Status",
      value: 3,
    },
    {
      source: "Napoleon",
      target: "Paycore",
      value: 3,
    },
  ],
};

const PreventNodeOverlappings: React.FC = () => {
  useEffect(() => {
    const graph = new G6.Graph({
      container: "container",
      layout: {
        type: "force",
        preventOverlap: true,
      },
      defaultNode: {
        style: {
          fill: "steelblue",
          stroke: "#666",
        },
        labelCfg: {
          style: {
            fill: "#fff",
          },
        },
      },
      defaultEdge: {
        style: {
          stroke: "#ccc",
        },
        labelCfg: {
          style: {
            fill: "#000",
          },
        },
      },

      modes: {
        default: [
          "drag-canvas",
          {
            type: "tooltip",

            formatText: function formatText(model) {
              const text = "Name: " + model.id;
              return text;
            },
            delegateStyle: {
              border: "1px solid black",
              backgroundColor: "white",
            },
          },
        ],
      },
    });

    /* 
    const nodes = data.nodes;
    nodes.forEach((node) => {
      node.size = Math.random() * 30 + 5;
    });
    graph.data({
      nodes,
      edges: data.edges,
    });
    graph.render(); */

    graph.read(data);

    return () => {
      graph.destroy();
    };
  }, []);

  return (
    <div
      id="container"
      style={{
        width: "100%",
        height: "650px",
      }}
    ></div>
  );
};

export default PreventNodeOverlappings;
