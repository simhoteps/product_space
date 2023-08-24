import { createContext, ReactNode, useEffect, useState } from "react";
import { Node, ReactFlowInstance } from "reactflow";
import { IFilterValues } from "../types/types";

const types: { [char: string]: string } = {};

export type typesContextType = {
  reactFlowInstance: ReactFlowInstance | null;
  setReactFlowInstance: any;
  nodeData: IFilterValues;
  setData: (newState: {}) => void;
};

//context to share types adn functions from nodes to flow

const initialValue: typesContextType = {
  reactFlowInstance: null,
  setReactFlowInstance: () => {},
  nodeData: {},
  setData: () => {},
};

export const filterTypesContext = createContext<typesContextType>(initialValue);

export function FilterTypesProvider({ children }: { children: ReactNode }) {
  const [reactFlowInstance, setReactFlowInstance] =
    useState<ReactFlowInstance | null>(null);
  const [nodeData, setData] = useState<IFilterValues>({});

  return (
    <filterTypesContext.Provider
      value={{
        reactFlowInstance,
        setReactFlowInstance,
        nodeData,
        setData,
      }}
    >
      {children}
    </filterTypesContext.Provider>
  );
}
