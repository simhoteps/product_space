import React from "react";
import { CustomTableContainer, CustomTableContent } from "./TableStyle";
import PagingComponent from "./TablePaging";
/* import TableSearchbox from "./TableSearch"; */
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import CustomTableColumn, { CustomTableHead } from "./TableHead";
import { useTable } from "./TableHooks";

const CustomTable = ({
  children,
  minWidth,
}: {
  children?: React.ReactNode;
  minWidth?: string;
}) => {
  return (
    <CustomTableContainer>
      <TableContainer>
        <CustomTableContent style={{ minWidth }}>{children}</CustomTableContent>
      </TableContainer>
    </CustomTableContainer>
  );
};

CustomTable.Body = TableBody;

CustomTable.Row = ({ children, ...rest }: { children: React.ReactNode }) => {
  return (
    <TableRow hover tabIndex={-1} {...rest}>
      {children}
    </TableRow>
  );
};

CustomTable.Cell = ({
  children,
  width,
  ...rest
}: {
  width?: string;
  children: React.ReactNode;
}) => {
  return (
    <TableCell width={width} align="left" {...rest}>
      {children}
    </TableCell>
  );
};

CustomTable.Header = CustomTableHead;
CustomTable.Column = CustomTableColumn;
CustomTable.useTable = useTable;
CustomTable.Paging = PagingComponent;
/* CustomTable.Search = TableSearchbox; */
CustomTable.defaultProps = {};

export default CustomTable;
