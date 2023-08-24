import React, { useCallback } from "react";
import { Box, Typography, styled } from "@mui/material";
import { useTheme } from "layouts/theme/ThemeContext";
import { Handle, Position } from "reactflow";

const NodesContainer = styled("div")(({ theme }) => ({
  width: "150px",
  height: "70px",
  border: `1px solid ${theme.palette.primary.main}`,
  /*   padding: " 5px", */
  borderRadius: "5px",
  color: theme.palette.primary.dark,
  backgroundColor: "transparent",
}));

const NodesContent = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "4px ",
}));

function TitleNodes({ data, id, type }: any) {
  const { theme } = useTheme();
  const node = data.node.data;

  return (
    <NodesContainer>
      <Handle type="target" position={Position.Top} isConnectable />
      <NodesContent>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: theme.palette.warning.main,
            borderRadius: "4px 4px 0px 0px",
          }}
        >
          <Typography height={"24px"} color={"white"} variant="body2">
            {node.name}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            padding: "4px",
            boxSizing: "border-box",
          }}
        >
          <Typography align="center" fontSize={"8px"} variant="caption">
            {node.data.ansible.name}
          </Typography>
        </Box>
      </NodesContent>

      <Handle type="source" position={Position.Bottom} id="b" isConnectable />
    </NodesContainer>
  );
}

export default TitleNodes;
