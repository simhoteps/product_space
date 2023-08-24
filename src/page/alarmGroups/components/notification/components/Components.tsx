import React, { useState, useEffect } from "react";
import {
  Stack,
  Typography,
  alpha,
  styled,
  Switch,
  IconButton,
  Button,
  TableCell,
} from "@mui/material";
import { pink } from "@mui/material/colors";
import DeleteIcon from "@mui/icons-material/Delete";

export const PinkSwitch = styled(Switch)(({ theme }) => ({
  "& .MuiSwitch-switchBase.Mui-checked": {
    color: theme.palette.warning.dark,
    "&:hover": {
      backgroundColor: alpha(pink[600], theme.palette.action.hoverOpacity),
    },
  },
  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
    backgroundColor: theme.palette.warning.dark,
  },
}));

export const NotificationFormContiner = styled(Stack)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  gap: "24px",
  padding: "32px",
  borderRadius: "16px",
  /*   boxShadow: ` ${alpha(
    theme.palette.primary.contrastText,
    0.05
  )}0px 0px 0px 1px`, */
}));

export const RowItem = styled(Stack)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  gap: "4px",
  width: "100%",
}));

export const AddButton = styled(Button)(({ theme }) => ({
  ...theme.typography.subtitle2,
  /*  width: "140px", */
  textTransform: "capitalize",
  borderRadius: "8px",
  padding: "8px 24px",
  backgroundColor: ` ${alpha(theme.palette.warning.dark, 0.5)}`,
  color: theme.palette.background.paper,
  "&:hover": {
    color: theme.palette.primary.light,
    backgroundColor: theme.palette.warning.dark,
  },
  "&:disabled": {
    color: theme.palette.primary.main,
    backgroundColor: "transparent",
  },
}));

export const ColumnItem = styled(Stack)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "4px",
  width: "100%",
}));
export const Title = styled(Typography)(({ theme }) => ({
  ...theme.typography.subtitle2,
  fontWeight: 500,
}));

export const NotificationItem = ({
  arr,
  setArrValue,
}: {
  arr: string[] | number[];
  setArrValue: any;
}) => {
  return (
    <ColumnItem>
      <ColumnItem>
        {arr.map((item) => {
          return (
            <Stack
              direction={"row"}
              width={"100%"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Typography variant="subtitle2">{item}</Typography>
              <IconButton
                onClick={() => {
                  setArrValue((prev: any) =>
                    prev.filter((e: any) => e !== item)
                  );
                }}
              >
                <DeleteIcon />
              </IconButton>
            </Stack>
          );
        })}
      </ColumnItem>
    </ColumnItem>
  );
};
