import React from "react";
import { TableCell, TableHead, TableRow, TableSortLabel } from "@mui/material";

export const CustomTableHead = ({
  sortKey,
  sortDir,
  onSort,
  children,
  ...rest
}: {
  sortKey: any;
  sortDir: false | "asc" | "desc";
  onSort: any;
  children: any;
}) => {
  let hasSorting = sortDir && sortKey && onSort ? true : false;
  let headers = !hasSorting
    ? children
    : React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          onSort,
          sortDir: child.props.id === sortKey ? sortDir : false,
          sortable: !hasSorting ? false : child.props.sortable,
        });
      });
  return (
    <TableHead {...rest}>
      <TableRow>{headers}</TableRow>
    </TableHead>
  );
};

export const CustomTableColumn = ({
  id,
  children,
  cellProps = {},
  className = "",
  sortable = true,
  sortDir = false,
  onSort,
}: {
  id: string;
  children: React.ReactNode;
  cellProps?: any;
  className?: string;
  sortable?: boolean;
  sortDir?: false | "asc" | "desc";
  onSort?: (e: any) => void;
}) => {
  let canSort = onSort && sortable;
  /*  console.log(
    "CustomTableColumn",
    "id:",
    id,
    "sortable:",
    sortable,
    "sortDir:",
    sortDir,
    "onSort:",
    onSort
  ); */

  return (
    <TableCell
      key={id}
      align="left"
      padding="default"
      sortDirection={sortDir}
      className={"nowrap " + className}
      {...cellProps}
    >
      {canSort ? (
        <TableSortLabel
          active={!!sortDir}
          direction={sortDir || "asc"}
          onClick={() => onSort && onSort(id)}
        >
          {children}
          {canSort ? (
            <span
              style={{
                border: 0,
                clip: "rect(0 0 0 0)",
                height: 1,
                margin: -1,
                overflow: "hidden",
                padding: 0,
                position: "absolute",
                top: 20,
                width: 1,
              }}
            >
              {sortDir === "desc" ? "sorted descending" : "sorted ascending"}
            </span>
          ) : null}
        </TableSortLabel>
      ) : (
        children
      )}
    </TableCell>
  );
};

export default CustomTableColumn;
