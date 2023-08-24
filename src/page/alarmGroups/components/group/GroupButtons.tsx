import React, { useContext } from "react";
import { Button, alpha, styled, Stack, Typography } from "@mui/material";
import CreateGroup from "./CreateGroup";
import ShowGroup from "./ShowGroup";
import { Node } from "reactflow";
import { observer } from "mobx-react";

const GroupButtons = ({
  disabled,
  nodes,
}: {
  disabled: boolean;
  nodes: Node[];
}) => {
  return (
    <Stack
      width={"100%"}
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <Typography variant="subtitle2">
        Connect nodes to one to create a group
      </Typography>
      <Stack direction={"row"} gap={"24px"}>
        <ShowGroup />
        <CreateGroup disabled={disabled} nodes={nodes} />
      </Stack>
    </Stack>
  );
};

export default observer(GroupButtons);
