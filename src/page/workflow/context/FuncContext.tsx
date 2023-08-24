import React, { useContext, useState } from "react";
import _ from "lodash";
import { ReactNode, createContext } from "react";
import {
  Edge,
  EdgeChange,
  Node,
  NodeChange,
  ReactFlowJsonObject,
  addEdge,
  useEdgesState,
  useNodesState,
} from "reactflow";
import ShortUniqueId from "short-unique-id";
import { typesContext } from "./TypesContext";
import { IDataNode } from "../types/nodeTypes";

export type FlowType = {
  data: ReactFlowJsonObject;
};

const initialNodes: Node[] = [
  {
    id: "1",
    type: "input",
    data: { label: "Start" },
    position: { x: 250, y: 5 },
  },
];

type OnChange<ChangesType> = (changes: ChangesType[]) => void;
const uid = new ShortUniqueId({ length: 5 });

export type FuncContextType = {
  nodes: Node[];
  setNodes: React.Dispatch<
    React.SetStateAction<Node<any, string | undefined>[]>
  >;
  onNodesChange: OnChange<NodeChange>;
  edges: Edge[];
  setEdges: React.Dispatch<React.SetStateAction<Edge<any>[]>>;
  onEdgesChange: OnChange<EdgeChange>;
  flow: ReactFlowJsonObject;
  setFlow: React.Dispatch<React.SetStateAction<ReactFlowJsonObject>>;
  updateNodes: (nodes: Node[], edges: Edge[]) => void;
  updateFlow: (newFlow: IDataNode) => void;
};

const FuncContextInitialValue: FuncContextType = {
  updateFlow: (newFlow: IDataNode) => {},
  setFlow: () => {},
  updateNodes: (nodes: Node[], edges: Edge[]) => {},
  flow: {
    nodes: initialNodes,
    edges: [],
    viewport: {
      x: 0,
      y: 0,
      zoom: 0,
    },
  },
  nodes: [],
  setNodes: () => {},
  edges: [],
  onNodesChange: () => {},
  setEdges: function (value: React.SetStateAction<Edge<any>[]>): void {
    throw new Error("Function not implemented.");
  },
  onEdgesChange: function (changes: EdgeChange[]): void {
    throw new Error("Function not implemented.");
  },
};

export const FuncContext = createContext<FuncContextType>(
  FuncContextInitialValue
);

export function FuncProvider({ children }: { children: ReactNode }) {
  const [flow, setFlow] = useState<ReactFlowJsonObject>({
    nodes: initialNodes,
    edges: [],
    viewport: {
      x: 0,
      y: 0,
      zoom: 0,
    },
  });
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  /*   const updateNodes = (nodes: Node[], edges: Edge[]) => {
    nodes.forEach((node) => {
      const template = templates[node.data.type];
      if (!template) {
        setErrorData({ title: `Unknown node type: ${node.data.type}` });
        return;
      }
      if (Object.keys(template["template"]).length > 0) {
        node.data.node.base_classes = template["base_classes"];
        edges.forEach((edge) => {
          if (edge.source === node.id) {
            edge.sourceHandle = edge.sourceHandle
              .split("|")
              .slice(0, 2)
              .concat(template["base_classes"])
              .join("|");
          }
        });
        node.data.node.description = template["description"];
        node.data.node.template = updateTemplate(
          template["template"] as unknown as APITemplateType,
          node.data.node.template as APITemplateType
        );
      }
    });
  };
 */

  const updateNodes = (nodes: Node[], edges: Edge[]) => {
    nodes.forEach((node) => {
      console.log("updateNodes", node);
      /*      const nodeData1 = nodeData[node.nodeName];
      if (!nodeData1) {
        console.log({ title: `Unknown node type: ${node.data.type}` });
        return;
      }
      console.log("nodeData" ,nodeData1),
      console.log("updateNodes node" ,node) */
      /*     if (Object.keys(template["template"]).length > 0) {
        node.data.node.base_classes = template["base_classes"];
        edges.forEach((edge) => {
          if (edge.source === node.id) {
            edge.sourceHandle = edge.sourceHandle
              .split("|")
              .slice(0, 2)
              .concat(template["base_classes"])
              .join("|");
          }
        });
        node.data.node.description = template["description"];
        node.data.node.template = updateTemplate(
          template["template"] as unknown as APITemplateType,
          node.data.node.template as APITemplateType
        );
      } */
    });
  };

  function updateFlow(newFlow: IDataNode) {
    console.log("newFlow", newFlow);
    setFlow((prevState) => {
      const newFlows = { ...prevState };
      const index = newFlows.nodes.findIndex((flow) => flow.id === newFlow.id);
      if (index !== -1) {
        newFlows.nodes[index].data.parameters = newFlow.data?.parameters ?? "";
      }
      return newFlows;
    });
  }
  /* 
  function updateFlow(newFlow: FlowType) {
    setFlow((prevState) => {
      const newFlows = [...prevState];
      const index = newFlows.findIndex((flow) => flow.id === newFlow.id);
      if (index !== -1) {
        newFlows[index].description = newFlow.description ?? "";
        newFlows[index].data = newFlow.data;
        newFlows[index].name = newFlow.name;
      }
      return newFlows;
    }); 
  } */

  return (
    <FuncContext.Provider
      value={{
        nodes,
        setNodes,
        onNodesChange,
        edges,
        setEdges,
        onEdgesChange,
        flow,
        setFlow,
        updateFlow,
        updateNodes,
      }}
    >
      {children}
    </FuncContext.Provider>
  );
}
