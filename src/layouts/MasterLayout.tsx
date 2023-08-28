import React, { useEffect } from "react";
import AppContainer from "components/box/AppContainer";
import Topbar from "./topbar/Topbar";
import { Outlet } from "react-router";
import { useStores } from "utils/hooks/use_store";
import { observer } from "mobx-react";

const MasterLayout = () => {
  const { mainStore } = useStores();

  /*   function extractPathFromURL(url: string): string {
    const baseUrl = "http://localhost:3000/";
    const path = url.replace(baseUrl, "");
    return path;
  }

  const url = window.location.href;
  const extractedPath = extractPathFromURL(url); */

  return (
    <AppContainer>
      <Topbar />
      <Outlet />
    </AppContainer>
  );
};

export default observer(MasterLayout);
