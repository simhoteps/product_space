import React, { useContext } from "react";
import PageContainer from "components/box/PageContainer";
import EnhancedTable from "./components/EnhancedTable";
import { Stack } from "@mui/material";

const AutomaitionPage = () => {
  return (
    <PageContainer>
      <Stack>
        <EnhancedTable />
      </Stack>
    </PageContainer>
  );
};

export default AutomaitionPage;
