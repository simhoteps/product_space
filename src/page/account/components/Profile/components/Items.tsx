import React from "react";
import { Stack, Typography } from "@mui/material";
import { useTheme } from "layouts/theme/ThemeContext";

export const Items = ({ title, desc }: { title: string; desc: string }) => {
  const { theme } = useTheme();
  return (
    <Stack
      justifyContent={"space-between"}
      gap={"2px"}
      sx={{
        width: "340px",
      }}
    >
      <Typography
        variant="caption"
        sx={{ color: theme.palette.secondary.main }}
      >
        {title}
      </Typography>
      <Typography variant="subtitle2">{desc}</Typography>
    </Stack>
  );
};
