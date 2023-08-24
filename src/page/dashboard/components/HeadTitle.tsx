import React from "react";
import { Box, Stack, Typography, styled } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { useStores } from "utils/hooks/use_store";

const HeadContainer = styled(Stack)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "space-between",
  gap: "6px",
  marginBottom: "18px",
}));
const DateContainer = styled(Stack)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  gap: "6px",
  alignItems: "center",
}));

const NameTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  color: theme.palette.primary.dark,
}));

const NameDesc = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
}));

const HeadTitle = () => {
  const { loginStore } = useStores();
  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  return (
    <HeadContainer>
      <Stack direction={"row"} width={"100%"} justifyContent={"space-between"}>
        <Stack>
          <NameTitle variant="h4">
            Hello, {loginStore.currentUser.user?.first_name}{" "}
            {loginStore.currentUser.user?.last_name}
          </NameTitle>
          <NameDesc variant="body2">
            Track team progress here. You almost reach a goal!
          </NameDesc>
        </Stack>
        <DateContainer>
          <Typography>
            {day}.{month}.{year}
          </Typography>{" "}
          <CalendarMonthIcon />
        </DateContainer>
      </Stack>
    </HeadContainer>
  );
};

export default HeadTitle;
