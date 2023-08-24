import React, { useContext, useEffect, useState } from "react";
import {
  Box,
  Button,
  Modal,
  Stack,
  TextField,
  Typography,
  alpha,
  styled,
} from "@mui/material";
import ReactFlow, { Node } from "reactflow";
import { IFilterValues, IValueTypes } from "../../types/types";
import { FilterFlowContext } from "../../context/FilterFlow";
import { CustomStyleButton } from "components/buttons/CustomButton";
import { ModalContent } from "components/modal/ModalContent";

const AddButton = styled(Button)(({ theme }) => ({
  ...theme.typography.subtitle2,
  width: "100%",
  textTransform: "capitalize",
  borderRadius: "8px",
  padding: "8px 16px",
  marginTop: "40px",
  backgroundColor: ` ${alpha(theme.palette.warning.dark, 0.5)}`,
  color: theme.palette.primary.light,
  "&:hover": {
    color: theme.palette.primary.light,
    backgroundColor: theme.palette.warning.dark,
  },
  "&:disabled": {
    backgroundColor: ` ${alpha(theme.palette.primary.main, 0.5)}`,
  },
}));

const CreateGroup = ({
  disabled,
  nodes,
}: {
  disabled: boolean;
  nodes: Node[];
}) => {
  let { group, setGroup, setNodes, setEdges } = useContext(FilterFlowContext);
  const [openShow, setOpenShow] = useState(false);
  const [gName, setGroupName] = useState("");

  const [newArr, setNewArr] = useState<IFilterValues[] | null>([]);

  useEffect(() => {
    const newDataArray = nodes.map((item) => item.data);
    setNewArr(newDataArray);
  }, [nodes]);

  return (
    <Stack>
      <CustomStyleButton
        onClick={() => {
          setOpenShow(true);
        }}
        disabled={disabled}
      >
        Create Group
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
          <Stack gap={"24px"}>
            <Stack gap={"4px"}>
              <Typography variant="subtitle2">Group Name</Typography>
              <TextField
                hiddenLabel
                placeholder="Enter name "
                id="filled-hidden-label-small"
                onChange={(e) => setGroupName(e.target.value)}
                value={gName}
                variant="outlined"
                size="small"
              />
            </Stack>
            <Stack gap={"4px"}>
              <Typography variant="subtitle2">Filters</Typography>
              <Stack gap={"16px"}>
                {nodes.map((item, index) => {
                  return (
                    <Stack
                      key={`nodesGruop${index}`}
                      direction={"row"}
                      gap={"32px"}
                    >
                      <Stack>
                        <Typography variant="caption">
                          {item.data.filterName}
                        </Typography>
                      </Stack>
                      <Stack gap={"2px"}>
                        {item.data.filterValues.map((e: IValueTypes) => {
                          return (
                            <Stack
                              key={`filterValues${e.filterValue}`}
                              direction={"row"}
                              gap={"12px"}
                            >
                              <Stack direction={"row"} gap={"4px"}>
                                <Typography fontWeight={700} variant="caption">
                                  Value:
                                </Typography>
                                <Typography variant="caption">
                                  {e.filterValue}
                                </Typography>
                              </Stack>
                              <Stack direction={"row"} gap={"4px"}>
                                <Typography fontWeight={700} variant="caption">
                                  Type:
                                </Typography>

                                <Typography variant="caption">
                                  {e.type}
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
            </Stack>
            <AddButton
              disabled={gName === ""}
              disableRipple
              onClick={() => {
                newArr &&
                  setGroup((prev) => [
                    ...prev,
                    { groupName: gName, values: newArr },
                  ]);
                setOpenShow(false);
                setGroupName("");
                setNewArr([]);
                setNodes([]);
                setEdges([]);
              }}
            >
              Create Button
            </AddButton>
          </Stack>
        </ModalContent>
      </Modal>
    </Stack>
  );
};

export default CreateGroup;
