import React, { useContext } from "react";
import { Stack } from "@mui/material";
import NotificationForm from "./components/NotificationForm";
import { FilterFlowContext } from "page/alarmGroups/context/FilterFlow";
import NotificationTable from "./components/NotificationTable";

const NotificationFilter = () => {
  let { notificationFilter } = useContext(FilterFlowContext);
  return (
    <Stack gap={"48px"} justifyContent={"space-between"}>
      <NotificationForm />
      {notificationFilter.length > 0 && <NotificationTable />}
    </Stack>
  );
};

export default NotificationFilter;
