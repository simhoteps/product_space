import * as React from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { IconButton, Stack, Typography, styled, alpha } from "@mui/material";
import { FilterFlowContext } from "page/alarmGroups/context/FilterFlow";
import { useContext } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import DeleteModal from "components/modal/DeleteModal";
import { Notify } from "components/notify/notify";
import {
  CustomArrTableCell,
  TableContiner,
} from "components/tableCom/components";

interface HeadCell {
  id: string;
  label: string;
}

const headCells: readonly HeadCell[] = [
  {
    id: "notificationName",
    label: "Notification Name",
  },
  {
    id: "groupName",
    label: "Group Name",
  },
  {
    id: "ticket",
    label: "Ticket",
  },
  {
    id: "email",
    label: "Email",
  },
  {
    id: "phone",
    label: "Phone",
  },
  {
    id: "tag",
    label: "Tag",
  },
  {
    id: "Actions",
    label: "Actions",
  },
];

export default function EnhancedTable() {
  let { notificationFilter, setNotificationFilter } =
    useContext(FilterFlowContext);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const rows = notificationFilter;

  return (
    <Box sx={{ width: "100%" }}>
      <TableContiner>
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={"medium"}
          >
            <TableHead>
              <TableRow>
                {headCells.map((headCell) => (
                  <TableCell key={`TableCell${headCell.id}`} align={"left"}>
                    <Typography variant="subtitle2">
                      {headCell.label}
                    </Typography>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      sx={{ cursor: "pointer" }}
                    >
                      <TableCell component="th" id={labelId} scope="row">
                        {row.notificationName}
                      </TableCell>
                      <TableCell>
                        {row.selectGroup.groupName === "" ? (
                          <Typography variant="body2">-</Typography>
                        ) : (
                          <Typography variant="body2">
                            {row.selectGroup.groupName}
                          </Typography>
                        )}
                      </TableCell>
                      <TableCell>
                        <Stack>
                          {row.ticket === true ? (
                            <Typography color={"info.main"} variant="subtitle2">
                              {" "}
                              on
                            </Typography>
                          ) : (
                            <Typography
                              color={"warning.dark"}
                              variant="subtitle2"
                            >
                              off
                            </Typography>
                          )}
                        </Stack>
                      </TableCell>
                      <CustomArrTableCell arr={row.email} />
                      <CustomArrTableCell arr={row.phone} />
                      <CustomArrTableCell arr={row.tag} />
                      <TableCell align="center">
                        <DeleteModal
                          onClick={() => {
                            Notify.notifyWarning(
                              "Notification removed from list"
                            );

                            setNotificationFilter((prev: any) =>
                              prev.filter((e: any) => e.uuid !== row.uuid)
                            );
                          }}
                        />
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 15, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContiner>
    </Box>
  );
}
