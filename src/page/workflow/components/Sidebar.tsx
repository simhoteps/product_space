import { Box, Typography, styled } from "@mui/material";
import React from "react";
import { Size, useWindowSize } from "utils/hooks/use_window_size";
import datas from "data/newNodes";
import { observer } from "mobx-react";
import { useStores } from "utils/hooks/use_store";
import { IDataNode } from "../types/nodeTypes";

const SidebarContent = styled(Box)<{ windowsize: Size }>(
  ({ theme, windowsize }) => ({
    display: "flex",
    flexDirection: "column",
    width: "240px",
    border: `1px solid ${theme.palette.primary.main} `,
    boxSizing: "border-box",
    padding: "20px",
    gap: "8px",
    borderRadius: "8px",
    height: `calc(${windowsize?.height}px - 160px)`,
    overflowY: "auto",
    "&::-webkit-scrollbar": {
      width: 6,
    },

    "&::-webkit-scrollbar-thumb:vertical": {
      borderRadius: 4,
      background: theme.palette.primary.main,
    },

    "&::-webkit-scrollbar-track:vertical": {
      borderRadius: 4,
      background: "transparent",
    },
  })
);

const CustomDndnode = styled("div")(({ theme }) => ({
  width: "100%",
  height: "32px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  backgroundColor: "transparent",
  cursor: "grab",
  fontSize: "13px",
  "&:hover": {
    backgroundColor: "#DE481E60",
    color: "white",
    fontWeight: 700,
    border: `none`,
  },
}));

function Sidebar() {
  const onDragStart = (
    event: React.DragEvent<HTMLDivElement>,
    nodeType: string,
    nodeData: { data: IDataNode }
  ) => {
    const stringNode = JSON.stringify(nodeData);
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.setData("application/reactflow1", stringNode);
    event.dataTransfer.effectAllowed = "move";
  };
  const windowsize: Size = useWindowSize();
  const nodes: IDataNode[] = datas;

  return (
    <SidebarContent windowsize={windowsize}>
      <Typography variant="caption" align="center">
        You can drag these nodes to the pane on the right.
      </Typography>
      {nodes.map((item, index) => {
        return (
          <CustomDndnode
            key={index}
            onDragStart={(event) => {
              item.type &&
                onDragStart(event, item.type, {
                  data: item,
                });
            }}
            draggable
          >
            {item.name}
          </CustomDndnode>
        );
      })}
    </SidebarContent>
  );
}
export default observer(Sidebar);
