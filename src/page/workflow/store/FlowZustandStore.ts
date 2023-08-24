import { create } from 'zustand';
import {
  Connection,
  Edge,
  EdgeChange,
  Node,

  NodeChange,
  addEdge,

  OnNodesChange,
  OnEdgesChange,
  OnConnect,
  applyNodeChanges,
  applyEdgeChanges,
  ReactFlowInstance,
} from 'reactflow';

import initialNodes from '../initial/nodes';
import initialEdges from '../initial/edges';
import { useCallback, useState } from 'react';
import { IDataNode } from '../types/nodeTypes';

let id = 0;
const getId = () => `dndnode_${id++}`;

export type NodeData = {
  color: string;
};

export type RFState = {
  nodes: Node<IDataNode>[];
  edges: Edge[];
 /*  reactFlowInstance:ReactFlowInstance | null; */
/*    setNodes: React.Dispatch<React.SetStateAction<Node<any, string | undefined>[]>>  */
  onNodesChange: OnNodesChange;
  onEdgesChange: OnEdgesChange;
  onConnect: OnConnect;
/*   onDrop : React.DragEventHandler<HTMLDivElement> | undefined, */
  updateNodeColor: (nodeId: string, color: string) => void;
};

// this is our useStore hook that we can use in our components to get parts of the store and call actions
const useStore = create<RFState>((set, get) => ({
    
  nodes: initialNodes,
  edges: initialEdges,


  onNodesChange: (changes: NodeChange[]) => {
    set({
      nodes: applyNodeChanges(changes, get().nodes),
    });
  },
  onEdgesChange: (changes: EdgeChange[]) => {
    set({
      edges: applyEdgeChanges(changes, get().edges),
    });
  },
  onConnect: (connection: Connection) => {
    set({
      edges: addEdge(connection, get().edges),
    });
  },



  updateNodeColor: (nodeId: string, color: string) => {
    set({
      nodes: get().nodes.map((node) => {
        if (node.id === nodeId) {
          // it's important to create a new object here, to inform React Flow about the cahnges
          node.data = { ...node.data,[nodeId]:color };
        }

        return node;
      }),
    });
  },
}));

export default useStore;
