import React from "react";
import { Box, styled, Button } from "@mui/material";
import { useTheme } from "layouts/theme/ThemeContext";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import DeviceHubIcon from "@mui/icons-material/DeviceHub";
import EarbudsIcon from "@mui/icons-material/Earbuds";
import TimelineIcon from "@mui/icons-material/Timeline";
import MultipleStopIcon from "@mui/icons-material/MultipleStop";
import SettingsEthernetIcon from "@mui/icons-material/SettingsEthernet";
import TextFormatIcon from "@mui/icons-material/TextFormat";
import { IconFlowIfElse, IconFlowText } from "components/icons/Logos";
import { useStores } from "utils/hooks/use_store";
import { EdgeProps, addEdge, useEdgesState } from "reactflow";
import { cleanFilterItem } from "@mui/x-data-grid/hooks/features/filter/gridFilterUtils";
import { observer } from "mobx-react";

const SelectContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "center",

  maxWidth: "160px",
  padding: "12px",
  gap: "8px",
  backgroundColor: theme.palette.background.paper,
  border: `1px solid ${theme.palette.primary.light} `,
  borderRadius: "4px",
}));

const SelectButton = styled(Button)<{ select: boolean }>(
  ({ theme, select }) => ({
    minWidth: "24px",
    width: "24px",
    height: "24px",

    backgroundColor: select ? "#DE481E" : "transparent",
    boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px",
    "&:hover": {
      /*    backgroundColor: "transparent", */
      /* backgroundColor: "#DE481E", */
      backgroundColor: theme.palette.background.default,
      boxShadow:
        " rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
    },
  })
);

const ButtonGroups = ({ id, label }: { id?: string; label?: any }) => {
  const { theme } = useTheme();
  const { mainStore } = useStores();
  const edges = mainStore.initialEdges;

  function addLaber(data: any) {
    console.log("Button Groups", edges);
    const index = edges.findIndex((obje) => obje.id === id);
    if (index !== -1) {
      const updatedEdges = [...edges];
      addEdge({ ...(updatedEdges[index].label = data) }, edges);
      console.log(updatedEdges);
    }
  }

  return (
    <SelectContainer>
      <SelectButton
        select={Boolean(label === "DeviceHubIcon")}
        onClick={() => {
          addLaber("DeviceHubIcon");
        }}
      >
        <DeviceHubIcon fontSize="small" />
      </SelectButton>
      <SelectButton
        select={Boolean(label === "EarbudsIcon")}
        onClick={() => {
          addLaber("EarbudsIcon");
        }}
      >
        <EarbudsIcon fontSize="small" />
      </SelectButton>
      <SelectButton
        select={Boolean(label === "TimelineIcon")}
        onClick={() => {
          addLaber("TimelineIcon");
        }}
      >
        <TimelineIcon fontSize="small" />
      </SelectButton>
      <SelectButton
        select={Boolean(label === "MultipleStopIcon")}
        onClick={() => {
          addLaber("MultipleStopIcon");
        }}
      >
        <MultipleStopIcon fontSize="small" />
      </SelectButton>
      <SelectButton
        select={Boolean(label === "SettingsEthernetIcon")}
        onClick={() => {
          addLaber("SettingsEthernetIcon");
        }}
      >
        <SettingsEthernetIcon fontSize="small" />
      </SelectButton>
      <SelectButton
        select={Boolean(label === "IconFlowIfElse")}
        onClick={() => {
          addLaber("IconFlowIfElse");
        }}
      >
        <IconFlowIfElse fill={theme.palette.primary.main} />
      </SelectButton>
      <SelectButton
        select={Boolean(label === "IconFlowText")}
        onClick={() => {
          addLaber("IconFlowText");
        }}
      >
        <IconFlowText fill={theme.palette.primary.main} />
      </SelectButton>
      <SelectButton
        select={Boolean(label === "TextFormatIcon")}
        onClick={() => {
          addLaber("TextFormatIcon");
        }}
      >
        <TextFormatIcon fontSize="small" />
      </SelectButton>
    </SelectContainer>
  );
};

export default observer(ButtonGroups);
