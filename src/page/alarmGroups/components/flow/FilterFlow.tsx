import React, { useRef, useCallback, useContext, useEffect } from "react";
import ReactFlow, {
  addEdge,
  Controls,
  Edge,
  Connection,
  updateEdge,
} from "reactflow";
import "reactflow/dist/style.css";
import "./index.css";
import { Size, useWindowSize } from "utils/hooks/use_window_size";
import { observer } from "mobx-react";
import { useStores } from "utils/hooks/use_store";
import { Button, Stack, Typography, alpha, styled } from "@mui/material";
import { toJS } from "mobx";
import { FilterFlowContext } from "page/alarmGroups/context/FilterFlow";
import { IFilterFlow, IFilterValues } from "page/alarmGroups/types/types";
import Sidebar from "./sidebar/Sidebar";
import CustomNode from "./nodes/CustomNode";
import { filterTypesContext } from "page/alarmGroups/context/TypesContext";
import GroupButtons from "../group/GroupButtons";
/* import CreateGroup from "../group/CreateGroup"; */

const Content = styled(Stack)<{ windowsize: Size }>(
  ({ theme, windowsize }) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: `calc(${windowsize.height}px - 360px)`,
    padding: " 8px 8px",
    gap: "24px",
    borderRadius: "32px",
    boxShadow: ` ${alpha(
      theme.palette.primary.contrastText,
      0.15
    )}  0px 2px 8px`,
  })
);
const ReactFlowContent = styled("div")<{ windowsize: Size }>(
  ({ theme, windowsize }) => ({
    display: "flex",
    flexGrow: 1,
    flexDirection: "row",
    width: "100%",
    height: `calc(${windowsize.height}px - 170px)`,
  })
);

const nodeTypes = {
  customNode: CustomNode,
};

const edgeTypes = {
  /*   buttonedge: ButtonEdge, */
};

let id = 0;
const getId = () => `dndnode_${id++}`;

const FilterFlow = () => {
  const { mainStore } = useStores();
  const windowsize: Size = useWindowSize();
  const reactFlowWrapper = useRef<HTMLDivElement>(null);
  const { nodeData, reactFlowInstance, setReactFlowInstance } =
    useContext(filterTypesContext);
  let { flow, nodes, setNodes, onNodesChange, edges, setEdges, onEdgesChange } =
    useContext(FilterFlowContext);

  const onConnect = useCallback((params: Edge | Connection) => {
    setEdges((eds) => addEdge({ ...params, type: "buttonedge" }, eds));
  }, []);

  const onEdgeUpdate = useCallback(
    (oldEdge: Edge, newConnection: Connection) =>
      setEdges((els) => updateEdge(oldEdge, newConnection, els)),
    []
  );

  const onDragOver = useCallback((event: any) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  const onDrop = useCallback(
    (event: any) => {
      event.preventDefault();

      const reactFlowBounds = reactFlowWrapper.current!.getBoundingClientRect();
      const type = event.dataTransfer.getData("application/reactflow");

      if (typeof type === "undefined" || !type) {
        return;
      }
      const node: IFilterFlow = JSON.parse(
        event.dataTransfer.getData("application/reactflow1")
      );

      const position = reactFlowInstance!.project({
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      });

      const newNode = {
        id: getId(),
        type,
        position,
        data: node.data,
      };

      setNodes((nds) => nds.concat(newNode));
      mainStore.setInitialNode(newNode);
    },
    [reactFlowInstance]
  );

  return (
    <Content windowsize={windowsize}>
      <ReactFlowContent windowsize={windowsize} ref={reactFlowWrapper}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onMove={() => {
            /*  setNodes(mainStore.initialNodes); */
          }}
          onEdgeUpdate={onEdgeUpdate}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onInit={setReactFlowInstance}
          onDrop={onDrop}
          onDragOver={onDragOver}
          nodeTypes={nodeTypes}
          edgeTypes={edgeTypes}
          fitView
        >
          <Controls />
        </ReactFlow>
        <Sidebar />
      </ReactFlowContent>
      <GroupButtons
        nodes={nodes}
        disabled={nodes.length !== edges.length + 1}
      />
      {/*      <CreateGroup nodes={nodes} disabled={nodes.length !== edges.length + 1} /> */}
    </Content>
  );
};

export default observer(FilterFlow);
