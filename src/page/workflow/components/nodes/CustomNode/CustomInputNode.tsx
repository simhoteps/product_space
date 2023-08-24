import React, { useContext, useState } from "react";
import {
  Box,
  Button,
  Divider,
  IconButton,
  Modal,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import { useTheme } from "layouts/theme/ThemeContext";
import { Handle, Position } from "reactflow";
import DocumentScannerIcon from "@mui/icons-material/DocumentScanner";
import { IDataNode, INodeParameters } from "page/workflow/types/nodeTypes";
import NodeForm from "./NodeForm";
import { observer } from "mobx-react";
import { useStores } from "utils/hooks/use_store";
import { FuncContext } from "page/workflow/context/FuncContext";
import { toJS } from "mobx";

const NodesContainer = styled("div")(({ theme }) => ({
  width: "150px",
  height: "36px",
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

const ModalContent = styled(Box)(({ theme }) => ({
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "400px",
  padding: "24px",
  borderRadius: "16px",
  backgroundColor: theme.palette.background.default,
}));

const handleStyle = {
  height: "8px",
  borderRadius: "4px",
  border: "medium none",
  width: " 20px",
  backgroundColor: "#8E8E8E",
};

function CustomInputNode({ data, id, type }: any) {
  const { theme } = useTheme();
  const { mainStore } = useStores();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  let { nodes, setNodes } = useContext(FuncContext);
  const handleSubmit = () => {
    const nodeIndex = mainStore.initialNodes.findIndex(
      (item) => item.id === id
    );
    console.log("first", nodeIndex);
    nodes[nodeIndex].data.data["parameters"] = mainStore.nodeObj;
    setNodes(nodes);
    setTimeout(() => {
      mainStore.nodeObj = {};
    }, 1000);
  };

  return (
    <NodesContainer key={id}>
      <Handle
        type="target"
        position={Position.Top}
        isConnectable
        style={handleStyle}
      />
      <NodesContent>
        <Typography align="center" fontSize={"8px"} variant="subtitle2">
          {data.name}
        </Typography>

        {data.data.parameters && (
          <IconButton onClick={handleOpen}>
            <DocumentScannerIcon sx={{ fontSize: "12px" }} />
          </IconButton>
        )}
      </NodesContent>

      <Handle
        type="source"
        position={Position.Bottom}
        id="b"
        isConnectable
        style={handleStyle}
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ModalContent>
          <Stack gap={"12px"}>
            <Typography variant="body1" fontWeight={700} component="h2">
              {data.name}
            </Typography>
            <Divider sx={{ width: "40%", marginBottom: "20px" }} />

            {data.data.parameters &&
              data.data.parameters.map((item: INodeParameters) => {
                return (
                  <div key={`NodeFormkey${data.id}`}>
                    <NodeForm
                      parameters={data.data.parameters}
                      parameter={item}
                      id={data.id}
                    />{" "}
                  </div>
                );
              })}

            <SubmitButton
              onClick={() => {
                handleSubmit();
                handleClose();
              }}
            >
              Submit
            </SubmitButton>
          </Stack>
        </ModalContent>
      </Modal>
    </NodesContainer>
  );
}

export default observer(CustomInputNode);
