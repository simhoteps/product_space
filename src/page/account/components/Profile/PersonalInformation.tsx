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

const PersonalInformation = () => {
  return (
    <Container>
      <Stack direction={"row"} width={"100%"} justifyContent={"space-between"}>
        <Typography variant="body2" fontWeight={700}>
          Personal Information
        </Typography>
        <EditButton />
      </Stack>
      <Stack gap={"36px"}>
        <ItemContainer>
          <Items title={"First Name"} desc={"Devon "} />
          <Items title={"Last Name"} desc={"Lane "} />
        </ItemContainer>
        <ItemContainer>
          <Items title={"Email address"} desc={"devonLane@gmail.com "} />
          <Items title={"Phone"} desc={"+09 345 346 46 "} />
        </ItemContainer>
        <ItemContainer>
          <Items title={"Bio"} desc={"Team Manager"} />
        </ItemContainer>
      </Stack>
    </Container>
  );
};

export default PersonalInformation;
