import * as React from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { makeStyles, styled } from "@mui/material";
import "./style.css";

const columns: GridColDef[] = [
  {
    flex: 1,
    field: "id",

    headerName: "ID",
    renderHeader: (params) => {
      return (
        <div style={{ fontWeight: "bold" }}>{params.colDef.headerName}</div>
      );
    },
    /*    renderCell: (params) => {
      return <div style={{ width: "10%" }}>{params.value}</div>;
    }, */
  },
  {
    flex: 2,
    field: "firstName",
    headerName: "First name",
    renderHeader: (params) => {
      return (
        <div style={{ fontWeight: "bold" }}>{params.colDef.headerName}</div>
      );
    },
  },
  {
    flex: 2,
    field: "lastName",
    headerName: "Last name",
    renderHeader: (params) => {
      return (
        <div style={{ fontWeight: "bold" }}>{params.colDef.headerName}</div>
      );
    },
  },

  {
    flex: 2,
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: true,
    renderHeader: (params) => {
      return (
        <div style={{ fontWeight: "bold" }}>{params.colDef.headerName}</div>
      );
    },
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
  {
    flex: 1,
    field: "age",
    headerName: "Age",
    renderHeader: (params) => {
      return (
        <div style={{ fontWeight: "bold" }}>{params.colDef.headerName}</div>
      );
    },
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  { id: 10, lastName: "Ali", firstName: "Snith", age: 65 },
  { id: 11, lastName: "Veli", firstName: "Duo", age: 65 },
  { id: 12, lastName: "Rozi", firstName: "Pen", age: 65 },
];

export default function DataTable() {
  return (
    <div style={{ width: "100%" }}>
      <DataGrid
        className="dataGrid"
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[10, 15, 20]}
        checkboxSelection
      />
    </div>
  );
}

/* const StyledDataGrid = styled(DataGrid)`
  .mui-data-grid-row {
    cursor: pointer;
  }

  .mui-data-grid-cell {
    padding: 0 8px;
  }
`;

const customStyles = `
width: 100%;
  .MuiDataGrid-columnHeaderTitle .css-t89xny-MuiDataGrid-columnHeaderTitle: {
    color: #007bff;
    font-size: 110px;
    font-weight: bold;
  }
`; */
