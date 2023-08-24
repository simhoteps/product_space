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
  styled,
} from "@mui/material";
import { useContext, useState } from "react";
import { IFilterValues, IValueTypes } from "page/alarmGroups/types/types";
import DeleteModal from "components/modal/DeleteModal";
import { Notify } from "components/notify/notify";
import { FilterFlowContext } from "page/alarmGroups/context/FilterFlow";
import { v4 as uuidv4 } from "uuid";

const AddButton = styled(IconButton)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  width: "100%",
  alignContent: "center",
  justifyContent: "space-between",
  gap: "6px ",
  border: `1px solid ${theme.palette.primary.light}`,
  borderRadius: "16px",
  textTransform: "lowercase",
  padding: "8px",

  "&:hover": {
    fontWeight: 700,
    color: theme.palette.primary.dark,
    border: `1px solid ${theme.palette.primary.main}`,
    backgroundColor: "transparent",
  },
}));

const AddSmallButton = styled(IconButton)(({ theme }) => ({
  height: "40px",
  border: `1px solid ${theme.palette.primary.main}`,
  borderRadius: "4px",
  padding: "8px",

  "&:hover": {
    color: theme.palette.primary.dark,
    border: `1px solid ${theme.palette.primary.dark}`,
    backgroundColor: "transparent",
  },
}));

const CreateButton = styled(IconButton)(({ theme }) => ({
  border: `1px solid ${theme.palette.primary.light}`,
  width: "100%",
  borderRadius: "8px",
  marginTop: "36px",
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.light,
  padding: "8px",

  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.primary.light,
    /*     color: theme.palette.primary.dark,
    border: `1px solid ${theme.palette.primary.dark}`,
    backgroundColor: "transparent", */
  },
  "&:disabled": {
    backgroundColor: theme.palette.primary.light,
  },
}));

const ModalContent = styled(Box)(({ theme }) => ({
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "580px",
  padding: "48px",
  borderRadius: "16px",
  backgroundColor: theme.palette.background.default,
}));

const currencies = [
  {
    value: "tag",
    label: "Tag",
  },
  {
    value: "hostName",
    label: "HostName",
  },
  {
    value: "Descriptiontext",
    label: "Descriptiontext",
  },
];

function AddFilter() {
  let { setSidebarList } = useContext(FilterFlowContext);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [filterName, setFilterName] = useState<string>("");
  const [filterValue, setFilterValue] = useState<string>("");
  const [filterType, setFilterType] = useState<{
    value?: string;
    label?: string;
  }>({});
  const [filterValueArr, setValueArr] = useState<IValueTypes[]>([]);

  const handleInputChange = (event?: any) => {
    const index = currencies.findIndex((item) => item.value === event);
    setFilterType(currencies[index]);
  };

  const handleAddFilter = () => {
    setValueArr((prev: any) => [
      ...prev,
      { filterValue: filterValue, type: filterType.label },
    ]);
    setFilterValue("");
  };

  return (
    <div>
      <AddButton onClick={handleOpen}>
        <Typography variant="caption">Create Filter</Typography>
        <AddIcon />
      </AddButton>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ModalContent>
          <Stack gap={"16px"}>
            <Stack gap={"4px"}>
              <Typography variant="subtitle2">Filter Name</Typography>
              <TextField
                id="filterName_textField"
                placeholder="Enter name "
                variant="outlined"
                size="small"
                value={filterName}
                onChange={(e) => {
                  setFilterName(e.target.value);
                }}
              />
            </Stack>
            <Stack
              direction={"row"}
              gap={"6px"}
              width={"100%"}
              alignItems={"flex-end"}
            >
              <Stack gap={"4px"} width={"100%"}>
                <Typography variant="subtitle2">Value</Typography>
                <TextField
                  id="filterValue_textField"
                  fullWidth
                  placeholder="Enter value "
                  variant="outlined"
                  size="small"
                  value={filterValue}
                  onChange={(e) => {
                    setFilterValue(e.target.value);
                  }}
                />
              </Stack>

              <Stack gap={"4px"} width={"100%"}>
                <Typography variant="subtitle2">Type</Typography>
                <TextField
                  id="filterType_textField"
                  placeholder="Select"
                  select
                  fullWidth
                  variant="outlined"
                  size="small"
                  onBlur={(event) => {
                    handleInputChange(event.target.value);
                  }}
                >
                  {currencies.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Stack>

              <AddSmallButton
                disabled={filterValue === "" || filterType === undefined}
                onClick={() => {
                  handleAddFilter();
                }}
              >
                <AddIcon />
              </AddSmallButton>
            </Stack>
            {filterValueArr.map((item) => {
              return (
                <Stack
                  direction={"row"}
                  gap={"6px"}
                  width={"100%"}
                  alignItems={"flex-end"}
                >
                  <Stack gap={"4px"} width={"100%"}>
                    <Typography variant="body2">{item.filterValue}</Typography>
                  </Stack>
                  <Stack gap={"4px"} width={"100%"}>
                    <Typography variant="body2">{item.type}</Typography>
                  </Stack>
                  <DeleteModal
                    onClick={() => {
                      Notify.notifyWarning("Removed from list");
                      setValueArr((prev: any) =>
                        prev.filter(
                          (e: any) =>
                            e.filterValue &&
                            e.type !== (item.filterValue && item.type)
                        )
                      );
                    }}
                  />
                </Stack>
              );
            })}

            <CreateButton
              disabled={filterName === "" || filterValueArr.length === 0}
              onClick={() => {
                handleClose();
                setSidebarList((prev) => [
                  ...prev,
                  {
                    id: `${uuidv4()}`,
                    type: "customNode",
                    name: filterName,
                    data: {
                      filterName: filterName,
                      filterValues: filterValueArr,
                    },
                  },
                ]);
                setFilterName("");
                setValueArr([]);
              }}
            >
              <Typography variant="subtitle2">Create Filter</Typography>
            </CreateButton>
          </Stack>
        </ModalContent>
      </Modal>
    </div>
  );
}
export default AddFilter;
