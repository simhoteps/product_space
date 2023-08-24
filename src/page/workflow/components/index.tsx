import React, { useRef, useCallback, useContext, useEffect } from "react";
import ReactFlow, {
  addEdge,
  useNodesState,
  useEdgesState,
  Controls,
  Edge,
  Connection,
  updateEdge,
  NodeChange,
} from "reactflow";
import "reactflow/dist/style.css";
import Sidebar from "./Sidebar";
import "./index.css";
import ButtonEdge from "./edges/ButtonEdge";
import { Size, useWindowSize } from "utils/hooks/use_window_size";
import { observer } from "mobx-react";
import { useStores } from "utils/hooks/use_store";
import { IDataNode } from "../types/nodeTypes";
import { styled } from "@mui/material";
import CustomInputNode from "./nodes/CustomNode/CustomInputNode";
import { typesContext } from "../context/TypesContext";
import { FlowType, FuncContext } from "../context/FuncContext";
import { toJS } from "mobx";

const ReactFlowContent = styled("div")<{ windowsize: Size }>(
  ({ theme, windowsize }) => ({
    display: "flex",
    flexGrow: 1,
    flexDirection: "row",
    width: "%70",
    height: `calc(${windowsize.height}px - 90px)`,
  })
);

const nodeTypes = {
  customNode: CustomInputNode,
};
let id = 0;
const getId = () => `dndnode_${id++}`;

const edgeTypes = {
  buttonedge: ButtonEdge,
};

const CustomReactFlow = () => {
  const { mainStore } = useStores();
  const windowsize: Size = useWindowSize();
  const reactFlowWrapper = useRef<HTMLDivElement>(null);
  const { nodeData, reactFlowInstance, setReactFlowInstance } =
    useContext(typesContext);
  let { flow, nodes, setNodes, onNodesChange, edges, setEdges, onEdgesChange } =
    useContext(FuncContext);
  /* const [nodes, setNodes, onNodesChange] = useNodesState(
    mainStore.initialNodes
  ); */
  /*   const [edges, setEdges, onEdgesChange] = useEdgesState([]); */
  const onConnect = useCallback((params: Edge | Connection) => {
    setEdges((eds) => addEdge({ ...params, type: "buttonedge" }, eds));
  }, []);

  // bu yeniden düzenlemeye sağlayaxak
  /*   useEffect(() => {
    setNodes(mainStore.initialNodes);
    setEdges(mainStore.initialEdges);
  }, [flow, reactFlowInstance, setEdges, setNodes]); */

  const onEdgeUpdate = useCallback(
    (oldEdge: Edge, newConnection: Connection) =>
      setEdges((els) => updateEdge(oldEdge, newConnection, els)),
    []
  );

  /*  useEffect(() => {
    mainStore.setInitialEdges(edges);
    mainStore.setInitialNode(nodes);
  }, [nodes, edges]); */

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
      const node: IDataNode = JSON.parse(
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

      /*  if (mainStore.initialNodes.some((node) => node?.id === `${id}`)) {
        setNodes((nds) => nds.concat(newNode));
      } else {
        const indexToDelete = mainStore.initialNodes.findIndex(
          (item) => item.id === `${id}`
        );
      } */
    },
    [reactFlowInstance]
  );

  console.log("nodes", nodes);
  console.log("mainStore.initialNodes", toJS(mainStore.initialNodes));

  /*   const onNodesChange = useCallback((changes: any) => {
    setNodes((ns) => applyNodeChanges(changes, ns));
  }, []);  */

  return (
    <div className="dndflow">
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
    </div>
  );
};

export default observer(CustomReactFlow);
