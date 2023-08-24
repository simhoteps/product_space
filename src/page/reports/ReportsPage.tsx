import React, { useContext } from "react";
import PageContainer from "components/box/PageContainer";
import ReportsView from "./components/ReportsView";
import ReportsHeader from "./components/ReportsHeader";

export const ReportsPage = () => {
  return (
    <PageContainer>
      <ReportsHeader />

      <ReportsView />
    </PageContainer>
  );
};
