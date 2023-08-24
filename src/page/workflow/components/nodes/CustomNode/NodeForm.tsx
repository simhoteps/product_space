import React, { useState } from "react";
import { INodeParameters } from "page/workflow/types/nodeTypes";
import { MenuItem, Stack, Switch, Typography, styled } from "@mui/material";
import { StyledTextField } from "components/textField/CustomTextField";
import { useStores } from "utils/hooks/use_store";
import { observer } from "mobx-react";
import { toJS } from "mobx";

const TextFieldTitle = styled(Typography)(({ theme }) => ({
  ...theme.typography.caption,
  fontWeight: 700,
  color: theme.palette.secondary.main,
}));

const NodeForm = ({
  id,
  parameter,
  parameters,
}: {
  id: string;
  parameter: INodeParameters;
  parameters: INodeParameters[];
}) => {
  const [checked, setChecked] = useState<boolean>(parameter.values);
  const { mainStore } = useStores();

  const handleInputChange = (event?: any) => {
    const nodeIndex = parameters.findIndex(
      (item) => item.parameter_name === parameter.parameter_name
    );
    parameters[nodeIndex]["values"] = event;
    mainStore.nodeObj = parameters;
    console.log("newObje", toJS(parameters));
  };

  return (
    <div>
      {parameter.parameter_type === "multiple" ? (
        <Stack gap={"6px"}>
          <TextFieldTitle>{parameter.parameter_name}:</TextFieldTitle>
          <StyledTextField
            id="outlined-select-currency"
            select
            fullWidth
            size="small"
            placeholder={"Select"}
            onBlur={(event) => {
              handleInputChange(event.target.value);
            }}
          >
            {parameter.values.map((option: any) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </StyledTextField>
        </Stack>
      ) : parameter.parameter_type === "boolean" ? (
        <Stack
          direction={"row"}
          width={"100%"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <TextFieldTitle>{parameter.parameter_name}:</TextFieldTitle>
          <Stack direction={"row"} alignItems={"center"} gap={"4px"}>
            <Typography variant="caption">False</Typography>
            <Switch
              color={parameter.values === true ? "info" : "error"}
              checked={checked}
              onChange={(event) => {
                setChecked(!checked);
                handleInputChange(event.target.checked);
              }}
            />
            <Typography variant="caption">True</Typography>
          </Stack>
        </Stack>
      ) : (
        <Stack gap={"6px"}>
          <TextFieldTitle>{parameter.parameter_name}:</TextFieldTitle>
          <StyledTextField
            id={parameter.parameter_name}
            name={parameter.parameter_name}
            type={parameter.parameter_type}
            fullWidth
            variant="outlined"
            size="small"
            placeholder={parameter.values}
            onBlur={(event) => {
              handleInputChange(event.target.value);
            }}
          />
        </Stack>
      )}
    </div>
  );
};

export default observer(NodeForm);
