import { ReactFlowInstance } from "reactflow";
import { IDataNode } from "./nodeTypes";

const types: { [char: string]: string } = {};

export type typesContextType = {
 reactFlowInstance: ReactFlowInstance | null;
 setReactFlowInstance: any; 
 deleteNode: (idx: string) => void;
  types: typeof types;
  setTypes: (newState: {}) => void;
  nodeData: IDataNode;
  setData: (newState: {}) => void;
};
