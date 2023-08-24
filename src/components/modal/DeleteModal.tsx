import React from "react";
import {
  Stack,
  IconButton,
  Modal,
  styled,
  Box,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CustomTooltip from "components/tooltip/tooltip";

const ModalDeleteContent = styled(Box)(({ theme }) => ({
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  padding: "48px",
  borderRadius: "16px",
  backgroundColor: theme.palette.background.default,
}));

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

const CustomButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: "transparent",
  "&:hover": {
    backgroundColor: "transparent",
    color: theme.palette.warning.dark,
  },
}));
const DeleteModal = ({ onClick }: { onClick: () => void }) => {
  const [openDelete, setOpenDelete] = React.useState(false);
  return (
    <Stack>
      <CustomTooltip title={"Delete"}>
        <CustomButton
          onClick={() => {
            setOpenDelete(true);
          }}
          sx={{ padding: "2px" }}
        >
          <DeleteIcon />
        </CustomButton>
      </CustomTooltip>

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
            <CancelButton
              onClick={() => {
                setOpenDelete(false);
              }}
            >
              {" "}
              CANCEL
            </CancelButton>
            <DeleteButton
              onClick={() => {
                onClick();
                setOpenDelete(false);
              }}
            >
              DELETE
            </DeleteButton>
          </Stack>
        </ModalDeleteContent>
      </Modal>
    </Stack>
  );
};

export default DeleteModal;
