import React, { useContext } from "react";
import { Autocomplete, Box, Stack, TextField } from "@mui/material";
import { cityContext } from "context/CityProvider";
import { turkeyCity } from "../data/MapData";
import { IMapData } from "types/CityTypes";

const CityAutocomplete = () => {
  const { citiesValue, setCitiesValue, inputValue, setInputValue } =
    useContext(cityContext);
  return (
    <Stack width={"100%"}>
      {" "}
      <Autocomplete
        id="turkey_city_autocomplete"
        options={turkeyCity}
        value={citiesValue}
        autoHighlight
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        onChange={(event: any, newValue: IMapData | null) => {
          setCitiesValue(newValue);
        }}
        getOptionLabel={(option) => option.city}
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
            label="Choose a city"
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

export default CityAutocomplete;
