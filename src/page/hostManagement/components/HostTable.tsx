import * as React from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { IconButton, Stack, Typography } from "@mui/material";
import DeleteModal from "components/modal/DeleteModal";
import { Notify } from "components/notify/notify";
import { CustomTableCell, TableContiner } from "components/tableCom/components";
import EditIcon from "@mui/icons-material/Edit";
import ReceiptIcon from "@mui/icons-material/Receipt";
import CustomTooltip from "components/tooltip/tooltip";

interface DataProps {
  ipAddress: string;
  prop: string;
  credentialName: string;
  actions: string;
}

const dataArr = [
  {
    ipAddress: "10.10.200.119",
    prop: "10.10.200.118",
    credentialName: ".administrator",
  },
  {
    ipAddress: "11.111.11.11",
    prop: "10.10.200.118",
    credentialName: ".administrator",
  },
  {
    ipAddress: "0.0.0.3",
    prop: "10.10.200.118",
    credentialName: ".administrator",
  },
  {
    ipAddress: "10.10.200.145",
    prop: "10.10.200.118",
    credentialName: ".administrator",
  },
];

interface HeadCell {
  id: string;
  label: string;
}

const headCells: readonly HeadCell[] = [
  {
    id: "ipAddress",
    label: "IP Address",
  },
  {
    id: "prop",
    label: "PROP",
  },
  {
    id: "credentialName",
    label: "Credential Name",
  },
  {
    id: "actions",
    label: "Actions",
  },
];

export default function HostTable() {
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
  const rows = dataArr;

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
                  return (
                    <TableRow
                      hover
                      id={`host-table-checkbox-${index}`}
                      role="checkbox"
                      tabIndex={-1}
                      sx={{ cursor: "pointer" }}
                    >
                      <CustomTableCell text={row.ipAddress} />
                      <CustomTableCell text={row.prop} />
                      <CustomTableCell text={row.credentialName} />
                      <TableCell align="center">
                        <Stack direction={"row"} alignItems={"center"}>
                          <CustomTooltip title={"Show Log"}>
                            <IconButton>
                              <ReceiptIcon />
                            </IconButton>
                          </CustomTooltip>
                          <CustomTooltip title={"Edit"}>
                            <IconButton>
                              <EditIcon />
                            </IconButton>
                          </CustomTooltip>

                          <DeleteModal
                            onClick={() => {
                              Notify.notifyWarning(
                                "Notification removed from list"
                              );

                              /*        setNotificationFilter((prev: any) =>
                              prev.filter((e: any) => e.uuid !== row.uuid)
                            ); */
                            }}
                          />
                        </Stack>
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
