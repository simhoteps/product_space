import React from "react";
import { TableBody, TableCell, TableRow } from "@mui/material";

interface CustomTableRowProps {
  children?: React.ReactNode;
  tabIndex?: number;
  width?: string | number;
}

export const CustomTableBody = TableBody;

export const CustomTableRow = ({ children, ...rest }: CustomTableRowProps) => {
  return (
    <TableRow hover tabIndex={-1} {...rest}>
      {children}
    </TableRow>
  );
};

export const CustomTableCell = ({
  children,
  width,
  ...rest
}: CustomTableRowProps) => {
  return (
    <TableCell align="left" style={{ width }} {...rest}>
      {children}
    </TableCell>
  );
};
