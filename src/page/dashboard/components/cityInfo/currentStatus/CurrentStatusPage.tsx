import React, { useEffect, useState } from "react";
import { Stack, Typography } from "@mui/material";
import ColumnBasicChartEcharts from "components/chats/ColumnBasicChartEcharts";
import { Size, useWindowSize } from "utils/hooks/use_window_size";
import { scarterdata } from "./scarterdata";
import ScatterLogarithmicRegression from "components/eCharts/ScatterLogarithmicRegression";
import OpenForestData from "./OpenForestData";
import OpenForestAverageUbiquity from "./OpenForestAverageUbiquity";
import AverageUniquityDiversity from "./AverageUniquityDiversity";

const CurrentStatusPage = ({
  isSubFilter,
  selected,
}: {
  isSubFilter: string;
  selected: string | undefined;
}) => {
  const windowsize: Size = useWindowSize();

  const sData = scarterdata.map((item) => [
    item.expy,
    item.KBGSYHlog,
    17,
    item.city,
    2022,
  ]);

  return (
    <Stack>
      {isSubFilter === "averageUniquityDiversity" && selected && (
        <AverageUniquityDiversity selectCity={selected} />
      )}
      {isSubFilter === "openForestAverageUbiquity" && selected && (
        <OpenForestAverageUbiquity selectCity={selected} />
      )}
      {isSubFilter === "openForestDiversity" && selected && (
        <OpenForestData selectCity={selected} />
      )}
      {isSubFilter === "grossDomesticProductSophistication" && selected && (
        <ScatterLogarithmicRegression data={sData} selectCity={selected} />
      )}
      {isSubFilter === "economicComplexity" && selected && (
        <Stack>
          <ColumnBasicChartEcharts
            selectCity={selected}
            cheight={`calc(${windowsize?.height}px - 260px)`}
          />
        </Stack>
      )}
    </Stack>
  );
};

export default CurrentStatusPage;
