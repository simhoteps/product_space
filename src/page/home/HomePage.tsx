import React from "react";
import PageContainer from "components/box/PageContainer";
import HomeView from "./components/HomeView";
import MapEchart from "components/chats/MapEchart";

const HomePage = () => {
  return (
    <PageContainer>
      <MapEchart />
      <HomeView />
    </PageContainer>
  );
};

export default HomePage;
