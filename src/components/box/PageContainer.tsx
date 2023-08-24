import React from "react";
import { Box, BoxProps } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Size, useWindowSize } from "utils/hooks/use_window_size";

const Content = styled(Box)<BoxProps>(({ theme }) => ({
  width: "100%",
  /*   backgroundColor: theme.palette.background.paper, */
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  padding: "24px",
  boxSizing: "border-box",
  borderRadius: "16px",
  paddingBottom: "16px",
  height: "100%",
  overflowY: "auto",
  "&::-webkit-scrollbar": {
    width: 6,
  },

  "&::-webkit-scrollbar-thumb:vertical": {
    borderRadius: 4,
    background: theme.palette.primary.main,
  },

  "&::-webkit-scrollbar-track:vertical": {
    borderRadius: 4,
    background: "transparent",
  },
}));

const Cotaniner = styled(Box)<{ windowsize: Size }>(
  ({ theme, windowsize }) => ({
    width: "100%",
    padding: "12px",
    height: `calc(${windowsize?.height}px - 88px)`,
    boxSizing: "border-box",
    borderRadius: "16px",
    backgroundColor: theme.palette.background.paper,
  })
);

const PageContainer = (props: BoxProps) => {
  const windowsize: Size = useWindowSize();
  return (
    <Cotaniner windowsize={windowsize}>
      <Content>{props.children}</Content>
    </Cotaniner>
  );
};

export default PageContainer;
