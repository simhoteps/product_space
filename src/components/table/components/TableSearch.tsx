import React from "react";
import { TextField } from "@mui/material";

const TableSearchbox = ({
  onChange,
  value,
}: {
  onChange: (e: any) => void;
  value: string;
}) => {
  return (
    <div className="search-bar">
      <TextField
        placeholder="Search..."
        inputProps={{
          "aria-label": "search table rows",
        }}
        variant="outlined"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="table-search"
      />
    </div>
  );
};

export default TableSearchbox;
