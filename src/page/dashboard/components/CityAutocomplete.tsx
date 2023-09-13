import React, { useContext } from "react";
import { Autocomplete, Box, Stack, TextField } from "@mui/material";
import { cityContext } from "context/CityProvider";

import { IMapData } from "types/CityTypes";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { turkeySGKData } from "../data/NewData";
import { useStores } from "utils/hooks/use_store";
import { observer } from "mobx-react";

const CityAutocomplete = () => {
  const { t } = useTranslation();
  const { mainStore } = useStores();
  const { citiesValue, setCitiesValue, inputValue, setInputValue } =
    useContext(cityContext);

  return (
    <Stack width={"100%"}>
      {" "}
      <Autocomplete
        id="turkey_city_autocomplete"
        options={turkeySGKData}
        value={mainStore.selectCitiesValue}
        autoHighlight
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        onChange={(event: any, newValue: IMapData | null) => {
          setCitiesValue(newValue);
          mainStore.setSelectCitiesValue(newValue);
          /*    navigate(`/dashboard/map/${newValue?.city}`); */
        }}
        getOptionLabel={(option) => option.name}
        renderOption={(props, option) => (
          <Box
            component="li"
            sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
            {...props}
          >
            {option.name} ({option.plateCode})
          </Box>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            fullWidth
            size="small"
            label={t("autocomplete.chooseAcity")}
            variant="outlined"
            InputLabelProps={{
              children: "Choose a city",
            }}
          />
        )}
      />
    </Stack>
  );
};

export default observer(CityAutocomplete);
