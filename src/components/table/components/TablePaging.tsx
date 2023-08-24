import React from "react";
import { Pagination } from "@mui/material";
import { StyledPagingContainer } from "./TableStyle";

export const PagingComponent = ({
  totalPages,
  currentPage,
  onChange,
  ...rest
}: {
  totalPages: number;
  currentPage: number;
  onChange: (e: any) => void;
}) => {
  return (
    <StyledPagingContainer>
      <Pagination
        count={totalPages}
        shape="rounded"
        page={currentPage}
        onChange={(e, val) => onChange(val)}
        color="primary"
        siblingCount={1}
        {...rest}
      />
    </StyledPagingContainer>
  );
};

export default PagingComponent;
