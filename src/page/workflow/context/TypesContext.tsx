import { createContext, ReactNode, useEffect, useState } from "react";
import { Node, ReactFlowInstance } from "reactflow";
import { IDataNode } from "../types/nodeTypes";
import { typesContextType } from "../types/TypesContex";

//context to share types adn functions from nodes to flow

const initialValue: typesContextType = {
  reactFlowInstance: null,
  setReactFlowInstance: () => {},
  deleteNode: () => {},
  types: {},
  setTypes: () => {},
  nodeData: {},
  setData: () => {},
};

export const typesContext = createContext<typesContextType>(initialValue);

export function TypesProvider({ children }: { children: ReactNode }) {
  /*   const [reactFlowInstance, setReactFlowInstance] =
    useState<ReactFlowInstance | null>(null); */
  const [reactFlowInstance, setReactFlowInstance] =
    useState<ReactFlowInstance | null>(null);
  const [types, setTypes] = useState({});
  const [nodeData, setData] = useState<IDataNode>({});

  function deleteNode(idx: string) {
    reactFlowInstance?.setNodes(
      reactFlowInstance?.getNodes().filter((n: Node) => n.id !== idx)
    );
    reactFlowInstance?.setEdges(
      reactFlowInstance
        ?.getEdges()
        .filter((ns) => ns.source !== idx && ns.target !== idx)
    );
  }
  return (
    <typesContext.Provider
      value={{
        types,
        setTypes,
        reactFlowInstance,
        setReactFlowInstance,
        deleteNode,
        nodeData,
        setData,
      }}
    >
      {children}
    </typesContext.Provider>
  );
}
