import React, { useContext } from "react";
import PageContainer from "components/box/PageContainer";
import CustomerTab from "components/customer/CustomerTab";
import HostManagementView from "./components/HostManagementView";
import HostTable from "./components/HostTable";
import { Stack } from "@mui/material";
import { customerContext } from "context/CustomerProvider";
import CustomLoding from "components/loading/CustomLoading";

const HostManagementPage = () => {
  const { isLoadingCustomer } = useContext(customerContext);

  return (
    <PageContainer>
      <CustomerTab />
      {isLoadingCustomer ? (
        <CustomLoding />
      ) : (
        <Stack gap={"48px"}>
          <HostManagementView />
          <HostTable />
        </Stack>
      )}
    </PageContainer>
  );
};

export default HostManagementPage;
