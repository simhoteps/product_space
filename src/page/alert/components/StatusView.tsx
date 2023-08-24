import React from "react";
import { Stack, Typography, alpha, styled } from "@mui/material";

const StatusContainer = styled(Stack)(({ theme }) => ({
  flexDirection: "row",
  gap: "24px",
  width: "100%",
  margin: "24px 0px",

  [theme.breakpoints.down("lg")]: {
    flexDirection: "column",
  },
}));
const StatusColumn = styled(Stack)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
}));

const StatusContent = styled(Stack)<{ cusColor: string }>(
  ({ theme, cusColor }) => ({
    display: "flex",
    flexDirection: "row",
    gap: "4px",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "42px",
    borderRadius: "32px",
    backgroundColor: ` ${alpha(cusColor, 0.07)}`,

    boxShadow: `${alpha(cusColor, 0.3)}0px 1px 10px 0px`,
    "&:hover": {
      boxShadow: `${alpha(cusColor, 0.6)}0px 1px 10px 0px`,
    },
  })
);

const StatusItem = ({
  title,
  count,
  cusColor,
}: {
  title: string;
  count: number;
  cusColor: string;
}) => {
  return (
    <StatusColumn>
      <StatusContent cusColor={cusColor}>
        <Typography variant="subtitle1">{title}: </Typography>{" "}
        <Typography variant="subtitle2">{count}</Typography>
      </StatusContent>
    </StatusColumn>
  );
};

const StatusView = () => {
  return (
    <StatusContainer>
      <StatusItem cusColor="#FE0002" title={"Critical"} count={19} />
      <StatusItem cusColor="#FF6F00" title={"Warning"} count={235566} />
      <StatusItem cusColor="#F2B90C" title={"Major"} count={123} />
      <StatusItem cusColor="#538C51" title={"Minor"} count={56} />
      <StatusItem cusColor="#2D4B73" title={"info"} count={15} />
    </StatusContainer>
  );
};

export default StatusView;
