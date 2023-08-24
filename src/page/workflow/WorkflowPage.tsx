import React from "react";
import { Stack } from "@mui/material";
import PageContainer from "components/box/PageContainer";
import CustomReactFlow from "./components";
import { ReactFlowProvider } from "reactflow";
import { TypesProvider } from "./context/TypesContext";
import { FuncProvider } from "./context/FuncContext";

const WorkflowPage = () => {
  return (
    <PageContainer>
      <Stack gap={"16px"}>
        <ReactFlowProvider>
          <FuncProvider>
            <TypesProvider>
              <CustomReactFlow />
            </TypesProvider>
          </FuncProvider>
        </ReactFlowProvider>
      </Stack>
    </PageContainer>
  );
};

export default WorkflowPage;
