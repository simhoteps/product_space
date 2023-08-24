import React, { useState, useEffect, useContext } from "react";
import {
  Stack,
  Typography,
  TextField,
  MenuItem,
  IconButton,
  AccordionSummary,
  AccordionDetails,
  styled,
  AccordionProps,
  alpha,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { isValidPhoneNumber } from "libphonenumber-js";
import {
  AddButton,
  ColumnItem,
  NotificationFormContiner,
  NotificationItem,
  PinkSwitch,
  RowItem,
  Title,
} from "./Components";
import { FilterFlowContext } from "page/alarmGroups/context/FilterFlow";
import { v4 as uuidv4 } from "uuid";
import { IFilterGroup } from "page/alarmGroups/types/types";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MuiAccordion from "@mui/material/Accordion";
import "react-toastify/dist/ReactToastify.css";
import { Notify } from "components/notify/notify";
import { useTheme } from "layouts/theme/ThemeContext";

interface InfoItemProps extends AccordionProps {
  borderInfo?: boolean;
}

const Accordion = styled((props: InfoItemProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme, borderInfo }) => ({
  borderRadius: "16px",
  boxShadow: borderInfo
    ? ` ${alpha(theme.palette.primary.contrastText, 0.1)}0px 0px 0px 1px`
    : "none",
  /*   "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  }, */
}));

const NotificationForm = () => {
  const { theme } = useTheme();
  let { group, setNotificationFilter } = useContext(FilterFlowContext);
  const [notificationName, setNotificationName] = useState<string>("");
  const [checkboxValue, setCheckboxValue] = useState<boolean>(false);
  const [selectGroup, setSelectGroup] = useState<IFilterGroup>({
    groupName: "",
  });

  /* Email */
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [emailArr, setEmailArrValue] = useState<string[]>([]);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setEmail(e.target.value);
    setIsEmailValid(validateEmail(email));
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (email.trim() === "") {
      setIsEmailValid(false);
    } else if (isEmailValid) {
      setEmailArrValue((prev: any) => [...prev, email]);
      setEmail("");
    } else {
      setIsEmailValid(false);
    }
  };
  /* Email */

  /* Phone */
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isPhoneValid, setIsPhoneValid] = useState(true);
  const [phoneArr, setPhoneArrValue] = useState<number[]>([]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(event.target.value);
  };
  const handleCheckNumber = () => {
    const isValidNumber = isValidPhoneNumber(phoneNumber, "TR"); // 'TR' for Turkey, you can change it to your desired country code
    setIsPhoneValid(isValidNumber);
    if (isValidNumber) {
      setPhoneArrValue((prev: any) => [...prev, phoneNumber]);
      setPhoneNumber("");
    } else {
    }
  };
  /* Phone */

  /* Tag */
  const [tagValue, setTagValue] = useState<string>("");
  const [isTagValid, setIsTagValid] = useState(true);
  const [tagArr, setTagArr] = useState<string[]>([]);

  const handleTag = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (tagValue.trim() === "") {
      setIsTagValid(false);
    } else if (isEmailValid) {
      setTagArr((prev: any) => [...prev, tagValue]);
      setTagValue("");
    } else {
      setIsTagValid(false);
    }
  };
  /* Tag */

  /* Select Group */
  const handleGroupChange = (event?: any) => {
    const nodeIndex = group.findIndex((item) => item.groupName === event);
    setSelectGroup(group[nodeIndex]);
  };
  /*Select Group  */

  /* Accordion */
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleAccordionChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  /* Accordion */

  /* Accordion */

  const handleNewObj = () => {
    setNotificationFilter((prev: any) => [
      ...prev,
      {
        uuid: `${uuidv4()}`,
        notificationName: notificationName,
        selectGroup: selectGroup,
        ticket: checkboxValue,
        email: emailArr,
        phone: phoneArr,
        tag: tagArr,
      },
    ]);

    setNotificationName("");
    setSelectGroup({ groupName: "" });
    setCheckboxValue(false);
    setEmailArrValue([]);
    setPhoneArrValue([]);
    setTagArr([]);
  };
  /* Accordion */

  return (
    <Accordion
      borderInfo={expanded === "panel1"}
      expanded={expanded === "panel1"}
      onChange={handleAccordionChange("panel1")}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon fontSize="large" />}
        aria-controls="panel1bh-content"
        id="panel1bh-header"
        sx={{
          borderRadius: "16px",
          backgroundColor:
            expanded === "panel1"
              ? "none"
              : ` ${alpha(theme.palette.background.default, 0.8)}`,
        }}
      >
        <Typography
          variant="subtitle1"
          sx={{
            fontWeight: 700,
            width: "33%",
            flexShrink: 0,
          }}
        >
          Create New Notification
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <NotificationFormContiner>
          <Stack direction={"row"} width={"100%"} gap={"32px"}>
            <ColumnItem>
              <Title>Notification Name </Title>
              <TextField
                hiddenLabel
                type="text"
                placeholder="Enter name "
                variant="outlined"
                size="small"
                value={notificationName}
                onChange={(e) => {
                  setNotificationName(e.target.value);
                }}
              />
            </ColumnItem>
            <ColumnItem>
              <Title>Select Group </Title>
              <TextField
                placeholder="Select"
                select
                fullWidth
                variant="outlined"
                size="small"
                onBlur={(event) => {
                  handleGroupChange(event.target.value);
                }}
              >
                {group.map((option) => (
                  <MenuItem key={option.groupName} value={option.groupName}>
                    {option.groupName}
                  </MenuItem>
                ))}
              </TextField>
            </ColumnItem>
            <ColumnItem maxWidth={"120px"}>
              <Title>Ticket </Title>
              <Stack direction={"row"} alignItems={"center"} gap={"8px"}>
                <Typography variant="caption">off</Typography>
                <PinkSwitch
                  value={checkboxValue}
                  onChange={(e) => {
                    setCheckboxValue(e.target.checked);
                  }}
                />
                <Typography variant="caption">on</Typography>
              </Stack>
            </ColumnItem>
          </Stack>
          <Stack direction={"row"} width={"100%"} gap={"32px"}>
            <ColumnItem>
              <Title>Email </Title>
              <RowItem>
                <TextField
                  fullWidth
                  type="email"
                  placeholder="Email "
                  onChange={handleEmailChange}
                  value={email}
                  variant="outlined"
                  size="small"
                  error={!isEmailValid}
                  helperText={
                    !isEmailValid && "Please enter a valid e-mail address."
                  }
                />
                <IconButton onClick={handleSubmit}>
                  <AddIcon />
                </IconButton>
              </RowItem>
              <NotificationItem setArrValue={setEmailArrValue} arr={emailArr} />
            </ColumnItem>
            <ColumnItem>
              <Title>Phone </Title>
              <RowItem>
                <TextField
                  fullWidth
                  type="number"
                  placeholder="Phone "
                  variant="outlined"
                  size="small"
                  value={phoneNumber}
                  onChange={handleInputChange}
                  error={!isPhoneValid}
                  helperText={!isPhoneValid && "Enter a valid phone number."}
                />
                <IconButton onClick={handleCheckNumber}>
                  <AddIcon />
                </IconButton>
              </RowItem>
              <NotificationItem setArrValue={setPhoneArrValue} arr={phoneArr} />
            </ColumnItem>
            <ColumnItem>
              <Title>Tag </Title>
              <RowItem>
                <TextField
                  fullWidth
                  type="text"
                  placeholder="Tag"
                  variant="outlined"
                  size="small"
                  value={tagValue}
                  onChange={(e) => {
                    setIsTagValid(true);
                    setTagValue(e.target.value);
                  }}
                  error={!isTagValid}
                  helperText={!isTagValid && "Enter a valid tag."}
                />
                <IconButton onClick={handleTag}>
                  <AddIcon />
                </IconButton>
              </RowItem>
              <NotificationItem setArrValue={setTagArr} arr={tagArr} />
            </ColumnItem>
          </Stack>

          <Stack width={"100%"} alignItems={"flex-end"}>
            <AddButton
              onClick={() => {
                handleNewObj();
                Notify.notifySuccess("Notification added to list");
              }}
              sx={{ width: "120px" }}
              disabled={notificationName === "" || selectGroup.groupName === ""}
            >
              Add
            </AddButton>
          </Stack>
        </NotificationFormContiner>
      </AccordionDetails>
    </Accordion>
  );
};

export default NotificationForm;
