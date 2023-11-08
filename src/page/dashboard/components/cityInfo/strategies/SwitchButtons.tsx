import React, { useEffect, useState } from "react";
import { useTheme } from "layouts/theme/ThemeContext";
import { Button, Stack, alpha, styled } from "@mui/material";

export const CustomStyleButton = styled(Button)(({ theme }) => ({
  ...theme.typography.body2,
  padding: "2px 36px",
  border: `1px solid ${alpha(theme.palette.warning.main, 0.4)}`,
  /*   backgroundColor: `${alpha(theme.palette.warning.dark, 0.5)}`, */
  color: theme.palette.primary.dark,
  "&:hover": {
    color: theme.palette.primary.dark,
    backgroundColor: `${alpha(theme.palette.warning.main, 0.7)}`,
  },
}));

export const SwitchButtons = ({
  buttonName1,
  buttonName2,
  onClick1,
  onClick2,
  state,
}: {
  buttonName1: string;
  buttonName2: string;
  onClick1: () => void;
  onClick2: () => void;
  state: number;
}) => {
  const { theme } = useTheme();
  return (
    <Stack
      width={"100%"}
      justifyContent={"center"}
      direction={"row"}
      alignItems={"center"}
    >
      <CustomStyleButton
        sx={{
          borderRadius: "8px 0px 0px 8px",
          backgroundColor:
            state === 1 ? theme.palette.warning.main : "transparent",
        }}
        onClick={onClick1}
      >
        {buttonName1}
      </CustomStyleButton>
      <CustomStyleButton
        sx={{
          borderRadius: "0px 8px 8px 0px",
          backgroundColor:
            state === 2 ? theme.palette.warning.main : "transparent",
        }}
        onClick={onClick2}
      >
        {buttonName2}
      </CustomStyleButton>
    </Stack>
  );
};
