import React from "react";
import { Stack, Typography } from "@mui/material";

import ChartsPrint from "./print/ChartsPrint";

const ReportsHeader = () => {
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <Typography variant="subtitle2">All Reports </Typography>
      <Stack direction={"row"} alignItems={"center"}>
        <ChartsPrint />
      </Stack>
    </Stack>
  );
};

export default ReportsHeader;
