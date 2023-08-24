import React, { useContext, useState } from "react";
import {
  IconButton,
  Stack,
  Typography,
  Modal,
  Box,
  styled,
} from "@mui/material";
import { useTheme } from "layouts/theme/ThemeContext";
import { FilterFlowContext } from "page/alarmGroups/context/FilterFlow";
import { IFilterValues } from "page/alarmGroups/types/types";
import DeleteIcon from "@mui/icons-material/Delete";

import DeleteModal from "components/modal/DeleteModal";
import { Notify } from "components/notify/notify";
import { CustomStyleButton } from "components/buttons/CustomButton";

const ModalContent = styled(Box)(({ theme }) => ({
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  maxWidth: "1100px",
  transform: "translate(-50%, -50%)",
  width: "70%",
  padding: "48px 24px 48px 48px",
  borderRadius: "16px",
  backgroundColor: theme.palette.background.default,
}));

const ModalScroll = styled(Stack)(({ theme }) => ({
  gap: "32px",
  paddingTop: "24px",
  height: "540px",
  maxHeight: "720px",
  overflowY: "auto",
  "&::-webkit-scrollbar": {
    width: 6,
  },

  "&::-webkit-scrollbar-thumb:vertical": {
    borderRadius: 4,
    background: theme.palette.primary.main,
  },

  "&::-webkit-scrollbar-track:vertical": {
    borderRadius: 4,
    background: "transparent",
  },
}));

const ShowGroup = () => {
  const { theme } = useTheme();
  let { group, setGroup } = useContext(FilterFlowContext);
  const [openShow, setOpenShow] = useState(false);
  return (
    <Stack gap={"32px"}>
      <CustomStyleButton
        onClick={() => {
          setOpenShow(true);
        }}
      >
        Show All Notification
      </CustomStyleButton>

      <Modal
        open={openShow}
        onClose={() => {
          setOpenShow(false);
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ModalContent>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            paddingRight={"24px"}
          >
            <Typography fontWeight={700} variant="body1">
              Group Name{" "}
            </Typography>
            <Typography fontWeight={700} variant="body1">
              Filter Values{" "}
            </Typography>

            <Typography fontWeight={700} variant="body1">
              Actions{" "}
            </Typography>
          </Stack>
          <ModalScroll>
            {group.map((item, i) => {
              return (
                <Stack
                  direction={"row"}
                  gap={"48px"}
                  alignItems={"flex-start"}
                  justifyContent={"space-between"}
                  key={`ShowGroupContainer${i}`}
                >
                  <Typography width={"180px"} fontWeight={700} variant="body2">
                    {" "}
                    {item.groupName}
                  </Typography>

                  <Stack gap={"8px"}>
                    {item.values?.map((e: IFilterValues, j) => {
                      return (
                        <Stack
                          direction="row"
                          gap={"64px"}
                          key={`ShowGroupFilter${j}`}
                        >
                          <Stack direction={"row"} gap={"2px"}>
                            <Typography
                              color={"secondary"}
                              fontWeight={700}
                              variant="body2"
                            >
                              Filter Name:
                            </Typography>
                            <Typography variant="body2">
                              {e.filterName}
                            </Typography>
                          </Stack>

                          <Stack direction={"row"} gap={"24px"}>
                            {e.filterValues?.map((k, p) => {
                              return (
                                <Stack key={`ShowGroupFilterValues${p}`}>
                                  <Stack direction={"row"} gap={"2px"}>
                                    <Typography
                                      color={"secondary"}
                                      fontWeight={700}
                                      variant="caption"
                                    >
                                      Filter Value:
                                    </Typography>
                                    <Typography variant="caption">
                                      {k.filterValue}
                                    </Typography>
                                  </Stack>
                                  <Stack direction={"row"} gap={"2px"}>
                                    <Typography
                                      color={"secondary"}
                                      fontWeight={700}
                                      variant="caption"
                                    >
                                      Filter Type:
                                    </Typography>
                                    <Typography variant="caption">
                                      {k.type}
                                    </Typography>
                                  </Stack>
                                </Stack>
                              );
                            })}
                          </Stack>
                        </Stack>
                      );
                    })}
                  </Stack>
                  <Stack
                    display={"flex"}
                    justify-content={"flex-end"}
                    alignItems={"center"}
                    direction={"row"}
                    width={"60px"}
                  >
                    <DeleteModal
                      onClick={() => {
                        Notify.notifyWarning("Notification removed from list");
                        setGroup(
                          group.filter((ns) => ns.groupName !== item.groupName)
                        );
                      }}
                    />
                    {/* <IconButton
                      onClick={() => {
                        setGroup(
                          group.filter((ns) => ns.groupName !== item.groupName)
                        );
                      }}
                    >
                      <DeleteIcon />
                    </IconButton> */}
                  </Stack>
                </Stack>
              );
            })}
          </ModalScroll>{" "}
        </ModalContent>
      </Modal>
    </Stack>
  );
};

export default ShowGroup;
