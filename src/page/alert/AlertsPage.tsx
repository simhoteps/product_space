import React, { useContext, useEffect } from "react";
import PageContainer from "components/box/PageContainer";
import { Stack } from "@mui/material";

import AlertTitle from "./components/AlertTitle";
import StatusView from "./components/StatusView";
import AlertTable from "./components/AlertTable";

const AlertsPage = () => {
  return (
    <PageContainer>
      <Stack gap={"16px"}>
        <AlertTitle />
        <StatusView />
        <AlertTable />
      </Stack>
    </PageContainer>
  );
};

export default AlertsPage;
