import React, { useRef } from "react";
import { Box, styled } from "@mui/material";
import AddFilter from "./flow/sidebar/components/AddFilter";

import { useResponsiveBreakpoints } from "utils/hooks/useResponsiveBreakpoints";

const Content = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  padding: " 8px 24px",
  gap: "24px",
  borderRadius: "32px",
  border: `1px solid ${theme.palette.primary.main}`,
  /* backgroundColor: theme.palette.background.default, */
}));

const FiltersContent = styled(Box)<{ filtersContainerWidth: number }>(
  ({ theme, filtersContainerWidth }) => ({
    width: "100%",
    display: "flex",
    flexDirection: "row",
    padding: " 8px 0px",
    overflowX: "auto",
    maxWidth: `calc(${filtersContainerWidth}px - 70px)`,
    "&::-webkit-scrollbar": {
      height: "5px",
    },

    "&::-webkit-scrollbar-thumb:horizontal": {
      borderRadius: "20px",
      backgroundColor: theme.palette.primary.main,
    },

    "&::-webkit-scrollbar-track:horizontal": {
      borderRadius: "20px",
      background: "transparent",
    },
    gap: "8px",
  })
);

const FilterList = () => {
  const filtersContainerRef = useRef<HTMLDivElement>(null);
  const filtersContainerWidth = useResponsiveBreakpoints(filtersContainerRef);

  return (
    <Content ref={filtersContainerRef}>
      <FiltersContent
        filtersContainerWidth={filtersContainerWidth}
      ></FiltersContent>

      <AddFilter />
    </Content>
  );
};

export default FilterList;
