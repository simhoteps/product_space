import React from "react";
import { Stack, Typography } from "@mui/material";
import { useTheme } from "layouts/theme/ThemeContext";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

export const DescCom = () => {
  const { theme } = useTheme();
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      gap={"4px"}
      width={"100%"}
      justifyContent={"center"}
    >
      <FiberManualRecordIcon
        sx={{
          color: theme.palette.primary.main,
          fontSize: "14px",
        }}
      />
      <Typography variant="caption">
        Tklayıp grafik içindeki değerleri daha detaylı görebilirsiniz
      </Typography>
    </Stack>
  );
};
