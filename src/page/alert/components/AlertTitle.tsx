import React from "react";
import LocalPrintshopIcon from "@mui/icons-material/LocalPrintshop";
import { IconButton, Stack, Typography } from "@mui/material";

const AlertTitle = () => {
  return (
    <Stack direction={"row"} justifyContent={"space-between"}>
      <Stack>
        <Typography variant="subtitle2">All Alerts</Typography>
        <Typography variant="caption"> total 6 </Typography>
      </Stack>
      <Stack>
        <IconButton>
          <LocalPrintshopIcon />
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default AlertTitle;
