import React from "react";
import PageContainer from "components/box/PageContainer";
import { IconKalkinmaAjansiFull } from "components/icons/AjansIcon";
import { Stack, Typography } from "@mui/material";
import HomeView from "./components/HomeView";

const HomePage = () => {
  return (
    <PageContainer bgcolor="none">
      <HomeView />
    </PageContainer>
  );
};

export default HomePage;
