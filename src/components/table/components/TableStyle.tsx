import { Table } from "@mui/material";
import { styled, Box } from "@mui/system";

export const CustomTableContainer = styled(Box)(() => ({
  width: "100%",
  "& .user-table-utility": {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "20px 0 10px 0",
    "@media (max-width: 600px)": {
      flexDirection: "column",
      marginTop: "10px",
      margin: "0",
    },
  },
  "& .pagination-wrapper": {
    display: "flex",
    justifyContent: "center",
    "@media (max-width: 600px)": {
      order: "2",
      marginTop: "20px",
      marginBottom: "10px",
    },
  },
  "& .paging-wrapper": {
    display: "flex",
    justifyContent: "center",
    marginTop: "20px",
  },
  "& .search-bar": {
    display: "flex",
    justifyContent: "center",
    "@media (max-width: 800px)": {
      order: "1",
      marginTop: "10px",
    },
  },
  "& .MuiFormControl-root": {
    backgroundColor: "#F3F1EF",
    color: "#231B15",
    "& .MuiInputBase-root:after": {
      border: "0 !important",
    },
    "& .MuiInputBase-root:before": {
      border: "0 !important",
    },
    "& input": {
      color: "#231B15",
      padding: "18px",
      border: "0",
    },
    "&:after": {
      borderBottom: "0",
    },
  },
  "& .user-search-icon": {
    backgroundColor: "#F85F14",
    "& svg": {
      padding: "17px 20px 18px 20px",
      color: "#FFF",
      position: "relative",
      top: "2px",
    },
  },
  "& .nowrap": {
    whiteSpace: "nowrap",
  },
}));

export const CustomTableContent = styled(Table)(() => ({
  "& .MuiTableCell-root": {
    overflow: "hidden",
    fontSize: "14px",
    overflowWrap: "anywhere",
  },
  "& .MuiTableCell-head": {
    color: "#F85F14",
    fontWeight: "500",
  },
  "& .nowrap": {
    whiteSpace: "nowrap",
  },
}));

export const StyledPagingContainer = styled(Box)(() => ({
  display: "flex",
  width: "100%",
  justifyContent: "center",
  margin: "10px 0",
  "@media (max-width: 600px)": {
    "> *": {
      margin: 0,
      "& .MuiPagination-ul": {
        flexWrap: "nowrap",
      },
    },
  },
}));
