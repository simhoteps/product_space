import { makeAutoObservable, runInAction } from "mobx";
import { RootStore } from "store/_RootStore";
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
} from "reactflow";

export type NodeData = {
  color: string;
};

export type RFState = {
  nodes: Node<NodeData>[];
  edges: Edge[];
  onNodesChange: OnNodesChange;
  onEdgesChange: OnEdgesChange;
  onConnect: OnConnect;
  updateNodeColor: (nodeId: string, color: string) => void;
};

export default class FlowStore {
  private rootStore: RootStore;
  initialEdges: Edge[] = [];
  initialNodes: Node[] = [
    {
      id: "1",
      type: "input",
      data: { label: "Start" },
      position: { x: 250, y: 5 },
    },
  ];

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;

    makeAutoObservable(this);
  }
}
