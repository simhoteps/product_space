import React, { useState } from "react";
import {
  Stack,
  IconButton,
  Modal,
  styled,
  Typography,
  MenuItem,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { ModalContent } from "components/modal/ModalContent";
import CloseIcon from "@mui/icons-material/Close";
import {
  FormContainer,
  FormTextField,
  FormTitle,
  ItemContainer,
  TitleContainer,
} from "./Components";
import { CustomStyleButton } from "components/buttons/CustomButton";

const CrendentialTypeArr = [
  { value: "1", label: "Windows Cre." },
  { value: "2", label: "SSH Key" },
  { value: "3", label: "API Key" },
  { value: "4", label: "Network" },
];

const CreateCrendentialManagement = () => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [selectGroup, setSelectGroup] = useState<{
    value?: string;
    label?: string;
  }>({});

  /* Select Group */
  const handleGroupChange = (event?: any) => {
    const nodeIndex = CrendentialTypeArr.findIndex(
      (item) => item.value === event
    );
    setSelectGroup(CrendentialTypeArr[nodeIndex]);
  };
  /*Select Group  */

  return (
    <Stack>
      <IconButton
        onClick={() => {
          setOpen(true);
        }}
      >
        <AddIcon />
      </IconButton>

      <Modal
        open={isOpen}
        onClose={() => {
          setOpen(false);
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ModalContent>
          <TitleContainer>
            <Typography fontWeight={700} variant="body1">
              Create Crendential Management
            </Typography>
            <IconButton
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon sx={{ fontSize: "18px" }} />
            </IconButton>
          </TitleContainer>
          <FormContainer>
            <ItemContainer>
              <FormTitle>Credent Name:</FormTitle>
              <FormTextField
                id="form_credent_name"
                fullWidth
                placeholder="Enter name "
                variant="outlined"
                size="small"
                /*   onChange={(e) => setGroupName(e.target.value)}
                value={gName} */
              />
            </ItemContainer>
            <ItemContainer>
              <FormTitle>Crendential Type:</FormTitle>
              <FormTextField
                id="form_crendential_type"
                placeholder="Select"
                select
                fullWidth
                variant="outlined"
                size="small"
                onBlur={(event) => {
                  handleGroupChange(event.target.value);
                }}
              >
                {CrendentialTypeArr.map((option) => (
                  <MenuItem key={option.label} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </FormTextField>
            </ItemContainer>
            <ItemContainer>
              <FormTitle>Enter {selectGroup.label} </FormTitle>
              <FormTextField
                id="from_credent_enter"
                fullWidth
                placeholder="Enter "
                variant="outlined"
                size="small"
                /*   onChange={(e) => setGroupName(e.target.value)}
                value={gName} */
              />
            </ItemContainer>
            <ItemContainer marginTop={"36px"}>
              <CustomStyleButton>Summit</CustomStyleButton>
            </ItemContainer>
          </FormContainer>
        </ModalContent>
      </Modal>
    </Stack>
  );
};

export default CreateCrendentialManagement;
