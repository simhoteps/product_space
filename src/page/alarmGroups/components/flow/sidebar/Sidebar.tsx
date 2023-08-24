import { Box, Typography } from "@mui/material";
import React, { useContext } from "react";
import { Size, useWindowSize } from "utils/hooks/use_window_size";
import { observer } from "mobx-react";
import { IFilterFlow, IFilterValues } from "page/alarmGroups/types/types";
import { ButtonsContainer, SidebarContent } from "./components/Components";
import ShowFilterButton from "./components/ShowFilterButton";
import AddFilter from "./components/AddFilter";
import { FilterFlowContext } from "page/alarmGroups/context/FilterFlow";

function Sidebar() {
  const onDragStart = (
    event: React.DragEvent<HTMLDivElement>,
    nodeType: string,
    nodeData: { data?: IFilterValues }
  ) => {
    const stringNode = JSON.stringify(nodeData);
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.setData("application/reactflow1", stringNode);
    event.dataTransfer.effectAllowed = "move";
  };

  const windowsize: Size = useWindowSize();
  let { sidebarList, setSidebarList } = useContext(FilterFlowContext);

  return (
    <SidebarContent windowsize={windowsize}>
      <ButtonsContainer windowsize={windowsize}>
        <Typography variant="caption" align="center">
          You can drag these nodes to the pane on the right.
        </Typography>

        {sidebarList.map((item, index) => {
          return (
            <Box
              key={`ShowFilterButton${index}`}
              onDragStart={(event) => {
                item.type &&
                  onDragStart(event, item.type, {
                    data: item.data,
                  });
              }}
              draggable
            >
              <ShowFilterButton filter={item} />
            </Box>
          );
        })}
      </ButtonsContainer>

      <AddFilter />
    </SidebarContent>
  );
}
export default observer(Sidebar);
