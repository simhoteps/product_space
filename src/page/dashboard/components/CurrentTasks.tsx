import React from "react";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import SearchIcon from "@mui/icons-material/Search";
import AppsIcon from "@mui/icons-material/Apps";
import { Stack, Typography, styled } from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import WatchLaterIcon from "@mui/icons-material/WatchLater";

const SubContent = styled(Stack)(({ theme }) => ({
  gap: "24px",
  minWidth: "200px",
  overflowX: "auto",
  "&::-webkit-scrollbar": {
    height: 4,
    width: 0,
  },

  "&::-webkit-scrollbar-thumb:horizontal": {
    borderRadius: 50,
    background: theme.palette.primary.main,
  },

  "&::-webkit-scrollbar-track:horizontal": {
    borderRadius: 50,
  },
}));

const dataArr = [
  {
    desc: "Product Review for UI8 Market",
    status: "In progress",
    hour: "4h",
    icon: <AutoGraphIcon />,
    color: "#EB913A",
    bgColor: "#DEE5F0",
  },
  {
    desc: "UX Research for Product",
    status: "On hold",
    hour: "8h",
    icon: <SearchIcon />,
    color: "#5C9DD7",
    bgColor: "#F9E6CF",
  },
  {
    desc: "App design and development",
    status: "Done",
    hour: "32h",
    icon: <AppsIcon />,
    color: "#81D1BB",
    bgColor: "#F6F6F6",
  },
];

const CurrentTasks = () => {
  return (
    <Stack gap={"24px"} padding={"40px 24px"}>
      <Stack direction={"row"} alignItems={"center"} gap={"36px"}>
        <Typography variant="body1" fontWeight={700}>
          Current Tasks
        </Typography>
        <Typography variant="caption">Done 30%</Typography>
      </Stack>
      <SubContent>
        {dataArr.map((item) => {
          return (
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
              gap={"16px"}
            >
              <Stack
                direction={"row"}
                alignItems={"center"}
                width={"220px"}
                gap={"12px"}
              >
                {item.icon}
                <Typography variant="caption"> {item.desc}</Typography>
              </Stack>
              <Stack
                direction={"row"}
                alignItems={"center"}
                gap={"4px"}
                width={"100px"}
              >
                <FiberManualRecordIcon
                  sx={{ color: item.color, fontSize: "10px" }}
                />
                <Typography variant="caption"> {item.status}</Typography>
              </Stack>
              <Stack
                direction={"row"}
                alignItems={"center"}
                gap={"8px"}
                width={"30px"}
              >
                <WatchLaterIcon fontSize="small" />
                <Typography variant="caption"> {item.hour}</Typography>
              </Stack>
              <Stack>
                <MoreHorizIcon />
              </Stack>
            </Stack>
          );
        })}
      </SubContent>
    </Stack>
  );
};

export default CurrentTasks;
