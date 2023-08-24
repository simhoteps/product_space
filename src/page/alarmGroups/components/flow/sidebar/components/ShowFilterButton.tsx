import * as React from "react";
import AddIcon from "@mui/icons-material/Add";
import {
  Box,
  Button,
  IconButton,
  MenuItem,
  Modal,
  Stack,
  TextField,
  Typography,
  alpha,
  styled,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { useTheme } from "layouts/theme/ThemeContext";
import { IFilterFlow } from "../../../../types/types";
import { useContext } from "react";
import { FilterFlowContext } from "page/alarmGroups/context/FilterFlow";
import { Notify } from "components/notify/notify";

const ButtonContainer = styled(Stack)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "8px ",
  boxShadow: ` ${alpha(
    theme.palette.secondary.main,
    0.25
  )}  0px 2px 5px -1px,${alpha(
    theme.palette.primary.contrastText,
    0.3
  )}  0px 1px 3px -1px `,

  borderRadius: "32px",
  textTransform: "lowercase",
  padding: "8px 16px",
  "&:active": {
    boxShadow: "none",
  },
}));

const AddButton = styled(IconButton)<{ colorH: string }>(
  ({ theme, colorH }) => ({
    textTransform: "lowercase",
    padding: "4px 8px",
    "&:hover": {
      transition: "all 0.2s ease-in-out",
      transform: "scale(1.1)",
      color: colorH,
      backgroundColor: "transparent",
    },
  })
);

const CancelButton = styled(IconButton)(({ theme }) => ({
  width: "88px",
  textTransform: "lowercase",
  borderRadius: "8px",
  ...theme.typography.subtitle2,
  marginTop: "36px",
  padding: "8px 16px",
  border: `1px solid ${theme.palette.primary.main}`,
  "&:hover": {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.light,
  },
}));

const DeleteButton = styled(IconButton)(({ theme }) => ({
  width: "88px",
  textTransform: "lowercase",
  borderRadius: "8px",
  ...theme.typography.subtitle2,
  marginTop: "36px",
  padding: "8px 16px",
  border: `1px solid ${theme.palette.error.main}`,
  "&:hover": {
    backgroundColor: theme.palette.error.main,
    color: theme.palette.primary.light,
  },
}));

const ModalContent = styled(Box)(({ theme }) => ({
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "420px",
  padding: "48px",
  borderRadius: "16px",
  backgroundColor: theme.palette.background.default,
}));

const ModalDeleteContent = styled(Box)(({ theme }) => ({
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  padding: "48px",
  borderRadius: "16px",
  backgroundColor: theme.palette.background.default,
}));

function ShowFilterButton({ filter }: { filter?: IFilterFlow }) {
  const { theme } = useTheme();
  let { setSidebarList } = useContext(FilterFlowContext);
  const [openShow, setOpenShow] = React.useState(false);
  const [openDelete, setOpenDelete] = React.useState(false);
  const handleOpen = () => setOpenShow(true);
  const handleClose = () => setOpenShow(false);

  return (
    <Box>
      <ButtonContainer>
        <Typography sx={{ cursor: "grab" }} variant="caption">
          {filter?.name}
        </Typography>
        <Stack direction={"row"}>
          {" "}
          <AddButton
            disableRipple
            onClick={handleOpen}
            colorH={theme.palette.primary.dark}
          >
            <RemoveRedEyeIcon sx={{ fontSize: "16px" }} />
          </AddButton>{" "}
          <AddButton
            colorH={theme.palette.warning.dark}
            disableRipple
            onClick={() => {
              setOpenDelete(true);
            }}
          >
            <DeleteIcon sx={{ fontSize: "16px" }} />
          </AddButton>
        </Stack>
      </ButtonContainer>

      <Modal
        open={openShow}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ModalContent>
          <Stack gap={"16px"}>
            <Stack gap={"4px"}>
              <Typography variant="subtitle2">Filter Name</Typography>
              <Typography variant="caption">
                {filter?.data?.filterName}
              </Typography>
            </Stack>
            <Stack gap={"4px"}>
              <Typography variant="subtitle2">Values</Typography>
              {filter?.data?.filterValues?.map((e, i) => {
                return (
                  <Stack
                    key={`ShowFilterButtonValues${i}`}
                    direction={"row"}
                    gap={"8px"}
                  >
                    <Stack direction={"row"} gap={"4px"} width={"160px"}>
                      <Typography sx={{ fontWeight: 700 }} variant="caption">
                        value:
                      </Typography>
                      <Typography variant="caption">{e.filterValue}</Typography>
                    </Stack>
                    <Stack direction={"row"} gap={"4px"}>
                      <Typography sx={{ fontWeight: 700 }} variant="caption">
                        type:
                      </Typography>
                      <Typography variant="caption">{e.type}</Typography>
                    </Stack>
                  </Stack>
                );
              })}
            </Stack>
          </Stack>
        </ModalContent>
      </Modal>
      {/* Delete Modal */}
      <Modal
        open={openDelete}
        onClose={() => setOpenDelete(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ModalDeleteContent>
          <Typography align="center" fontWeight={700} variant="body1">
            You are about to <br /> delete this filter. <br /> Continue?
          </Typography>
          <Stack
            direction={"row"}
            width={"100%"}
            gap={"16px"}
            justifyContent={"flex-end"}
          >
            <CancelButton onClick={() => setOpenDelete(false)}>
              {" "}
              CANCEL
            </CancelButton>
            <DeleteButton
              onClick={() => {
                Notify.notifyWarning("Removed from list");
                setOpenDelete(false);
                setSidebarList((prev: any) =>
                  prev.filter((e: any) => e.id !== filter?.id)
                );
              }}
            >
              DELETE
            </DeleteButton>
          </Stack>
        </ModalDeleteContent>
      </Modal>
    </Box>
  );
}
export default ShowFilterButton;
