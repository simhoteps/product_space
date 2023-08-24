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
import {
  IFilterFlow,
  IFilterGroup,
  IFilterValues,
  INotificationFilter,
} from "../types/types";

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

export type FilterFlowType = {
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
  group: IFilterGroup[];
  setGroup: React.Dispatch<React.SetStateAction<IFilterGroup[]>>;
  notificationFilter: INotificationFilter[];
  setNotificationFilter: React.Dispatch<
    React.SetStateAction<INotificationFilter[]>
  >;
  sidebarList: IFilterFlow[];
  setSidebarList: React.Dispatch<React.SetStateAction<IFilterFlow[]>>;
};

const FilterFlowInitialValue: FilterFlowType = {
  setFlow: () => {},
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
  group: [],
  setGroup: function (value: React.SetStateAction<IFilterGroup[]>): void {
    throw new Error("Function not implemented.");
  },
  notificationFilter: [],
  setNotificationFilter: function (
    value: React.SetStateAction<INotificationFilter[]>
  ): void {
    throw new Error("Function not implemented.");
  },
  sidebarList: [],
  setSidebarList: function (value: React.SetStateAction<IFilterFlow[]>): void {
    throw new Error("Function not implemented.");
  },
};

export const FilterFlowContext = createContext<FilterFlowType>(
  FilterFlowInitialValue
);

export function FilterFlowProvider({ children }: { children: ReactNode }) {
  const [flow, setFlow] = useState<ReactFlowJsonObject>({
    nodes: initialNodes,
    edges: [],
    viewport: {
      x: 0,
      y: 0,
      zoom: 0,
    },
  });
  const [group, setGroup] = useState<IFilterGroup[]>([]);
  const [notificationFilter, setNotificationFilter] = useState<
    INotificationFilter[]
  >([]);
  const [sidebarList, setSidebarList] = useState<IFilterFlow[]>([
    {
      id: "1",
      type: "customNode",
      name: "filter 1",
      data: {
        filterName: "filter 1 ",
        filterValues: [
          { filterValue: "value 1 ", type: "tag" },
          { filterValue: "value 2 ", type: "hostName" },
        ],
      },
    },
    {
      id: "2",
      type: "customNode",
      name: "filter 2",
      data: {
        filterName: "filter 2 ",
        filterValues: [
          { filterValue: "value 3 ", type: "Dash" },
          { filterValue: "value 4 ", type: "dashName" },
        ],
      },
    },
  ]);

  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  return (
    <FilterFlowContext.Provider
      value={{
        nodes,
        setNodes,
        onNodesChange,
        edges,
        setEdges,
        onEdgesChange,
        flow,
        setFlow,
        group,
        setGroup,
        notificationFilter,
        setNotificationFilter,
        sidebarList,
        setSidebarList,
      }}
    >
      {children}
    </FilterFlowContext.Provider>
  );
}
