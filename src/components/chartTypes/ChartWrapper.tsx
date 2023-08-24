import React, { ReactNode } from "react";
import { Grid, styled, Paper, Typography, Stack } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  height: "400px",
  maxHeight: "400px",
  width: "100%",
  borderRadius: "16px",
  color: theme.palette.text.secondary,
}));

const ChartWrapper = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  return (
    <Grid sx={{ backgroundColor: "transparent" }} item xs={12} sm={6}>
      <Item sx={{ backgroundColor: "transparent" }}>
        <Typography
          sx={{
            height: "60px",
            padding: "10px",
            fontWeight: "700",
            boxSizing: "border-box",
          }}
        >
          {" "}
          {title}
        </Typography>
        <Stack
          sx={{
            height: "340px",
            maxHeight: "340px",
            padding: "10px",
            width: "100%",
            boxSizing: "border-box",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {children}
        </Stack>
      </Item>
    </Grid>
  );
};

export default ChartWrapper;
