import { Stack } from "@mui/material";
import React from "react";
import EfficientFrontier from "./EfficientFrontier";
import PotentialGrowth from "./PotentialGrowth";

const StrategiesView = ({
  isSubFilter,
  selected,
}: {
  isSubFilter: string;
  selected: string | undefined;
}) => {
  return (
    <Stack>
      {isSubFilter === "efficientFrontier" && selected && (
        <EfficientFrontier selected={selected} />
      )}

      {isSubFilter === "potentialGrowth" && selected && (
        <PotentialGrowth selected={selected} />
      )}
    </Stack>
  );
};

export default StrategiesView;
