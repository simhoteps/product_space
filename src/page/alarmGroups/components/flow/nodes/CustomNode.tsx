import React, { useContext } from "react";
import { Box, Button, IconButton, Typography, styled } from "@mui/material";
import { useTheme } from "layouts/theme/ThemeContext";
import { Handle, Position } from "reactflow";
import DocumentScannerIcon from "@mui/icons-material/DocumentScanner";
import { observer } from "mobx-react";
import { useStores } from "utils/hooks/use_store";
import { FuncContext } from "page/workflow/context/FuncContext";
import { toJS } from "mobx";

const NodesContainer = styled("div")(({ theme }) => ({
  width: "90px",
  height: "32px",
  alignItems: "center",
  justifyContent: "center",
  border: `1px solid ${theme.palette.primary.main}`,
  padding: "4px 8px",
  borderRadius: "5px",
  color: theme.palette.primary.dark,
  backgroundColor: "transparent",
}));

export const SubmitButton = styled(Button)(({ theme }) => ({
  width: "100%",
  height: "42px",
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.light,
  borderRadius: "30px",
  marginTop: "24px",

  "&:hover": {
    backgroundColor: "#E2633F",
  },
  "&:disabled": {
    backgroundColor: theme.palette.text.secondary,
    color: theme.palette.text.disabled,
  },
}));

const NodesContent = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "4px ",
}));

const handleStyle = {
  height: "8px",
  /*  borderRadius: "4px", */
  border: "medium none",
  width: " 16px",
  backgroundColor: "#8E8E8E",
};

function CustomNode({ data, id, type }: any) {
  const { theme } = useTheme();
  const { mainStore } = useStores();
  let { nodes, setNodes } = useContext(FuncContext);

  return (
    <NodesContainer key={id}>
      <Handle
        type="target"
        position={Position.Top}
        isConnectable
        style={handleStyle}
      />
      <NodesContent>
        <Typography
          color={theme.palette.primary.dark}
          align="center"
          fontSize={"8px"}
          variant="subtitle2"
        >
          {data.filterName}
        </Typography>
      </NodesContent>

      <Handle
        type="source"
        position={Position.Bottom}
        id="b"
        isConnectable
        style={handleStyle}
      />
    </NodesContainer>
  );
}

export default observer(CustomNode);
