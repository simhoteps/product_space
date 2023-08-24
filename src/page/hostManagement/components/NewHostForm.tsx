import React, { useContext, useState } from "react";
import {
  Stack,
  Modal,
  Typography,
  IconButton,
  styled,
  alpha,
  TextField,
} from "@mui/material";
import { CustomStyleButton } from "components/buttons/CustomButton";
import { ModalContent } from "components/modal/ModalContent";
import CloseIcon from "@mui/icons-material/Close";
import CreateCrendentialManagement from "./CreateCrendentialManagement";
import {
  FormContainer,
  FormTextField,
  FormTitle,
  ItemContainer,
  TitleContainer,
} from "./Components";

const NewHostForm = () => {
  const [isOpen, setOpen] = useState<boolean>(false);

  return (
    <Stack>
      <CustomStyleButton
        onClick={() => {
          setOpen(true);
        }}
      >
        {" "}
        New Host
      </CustomStyleButton>
      <Modal
        open={isOpen}
        onClose={() => {
          setOpen(false);
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ModalContent>
          <Stack gap={"16px"}>
            <TitleContainer>
              <Typography fontWeight={700} variant="body1">
                {" "}
                New Host{" "}
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
                <FormTitle>OS Type:</FormTitle>

                <FormTextField
                  placeholder="Select"
                  select
                  fullWidth
                  variant="outlined"
                  size="small"
                  onBlur={(event) => {
                    /*   handleGroupChange(event.target.value);
                     */
                  }}
                >
                  {/*  {group.map((option) => (
                    <MenuItem key={option.groupName} value={option.groupName}>
                      {option.groupName}
                    </MenuItem>
                  ))} */}
                </FormTextField>
              </ItemContainer>

              <ItemContainer>
                <FormTitle>IP Address:</FormTitle>
                <FormTextField
                  id="from_ip_address"
                  fullWidth
                  placeholder="Enter ip address "
                  variant="outlined"
                  size="small"
                  /*   onChange={(e) => setGroupName(e.target.value)}
                value={gName} */
                />
              </ItemContainer>

              <ItemContainer>
                <FormTitle>Host Name:</FormTitle>
                <FormTextField
                  id="from_host_name"
                  fullWidth
                  placeholder="Enter host name "
                  variant="outlined"
                  size="small"
                  /*   onChange={(e) => setGroupName(e.target.value)}
                value={gName} */
                />
              </ItemContainer>

              <ItemContainer>
                <FormTitle>Crendential Management:</FormTitle>
                <Stack direction={"row"} gap={"6px"}>
                  <FormTextField
                    id="from_select_rendential_management"
                    placeholder="Select"
                    select
                    fullWidth
                    variant="outlined"
                    size="small"
                    onBlur={(event) => {
                      /*   handleGroupChange(event.target.value);
                       */
                    }}
                  >
                    {/*  {group.map((option) => (
                    <MenuItem key={option.groupName} value={option.groupName}>
                      {option.groupName}
                    </MenuItem>
                  ))} */}
                  </FormTextField>
                  <CreateCrendentialManagement />
                </Stack>
              </ItemContainer>

              <ItemContainer>
                <FormTitle>PROP IP Address:</FormTitle>
                <FormTextField
                  id="from_prop_ip_address"
                  fullWidth
                  placeholder="Enter props "
                  variant="outlined"
                  size="small"
                  /*   onChange={(e) => setGroupName(e.target.value)}
                value={gName} */
                />
              </ItemContainer>
              <ItemContainer>
                <CustomStyleButton>Summit</CustomStyleButton>
              </ItemContainer>
            </FormContainer>
          </Stack>
        </ModalContent>
      </Modal>
    </Stack>
  );
};

export default NewHostForm;
