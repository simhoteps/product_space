import React from "react";
import PageContainer from "components/box/PageContainer";
import FilterTabs from "./components/FilterTabs";
import { FilterFlowProvider } from "./context/FilterFlow";
import { FilterTypesProvider } from "./context/TypesContext";

const AlarmGroupsPage = () => {
  return (
    <PageContainer>
      <FilterFlowProvider>
        <FilterTypesProvider>
          <FilterTabs />
        </FilterTypesProvider>
      </FilterFlowProvider>
    </PageContainer>
  );
};

export default AlarmGroupsPage;
