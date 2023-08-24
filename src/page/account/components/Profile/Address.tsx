import React from "react";
import { Stack, Typography, styled } from "@mui/material";
import { EditButton } from "./EditButton";
import { Items } from "./components/Items";

const Container = styled(Stack)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "space-between",
  width: "100%",
  padding: "30px ",
  border: `1px solid ${theme.palette.primary.light}`,
  borderRadius: "16px",
}));

const ItemContainer = styled(Stack)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  width: "80%",
}));

const Address = () => {
  return (
    <Container>
      <Stack direction={"row"} width={"100%"} justifyContent={"space-between"}>
        <Typography variant="body2" fontWeight={700}>
          Address
        </Typography>
        <EditButton />
      </Stack>
      <Stack gap={"36px"}>
        <ItemContainer>
          <Items title={"Country"} desc={"United Kingdom "} />
          <Items title={"City/State"} desc={"Leeds. East London "} />
        </ItemContainer>
        <ItemContainer>
          <Items title={"Postal Code"} desc={"ERT 2354"} />
          <Items title={"TAX ID"} desc={"AS45645756"} />
        </ItemContainer>
      </Stack>
    </Container>
  );
};

export default Address;
