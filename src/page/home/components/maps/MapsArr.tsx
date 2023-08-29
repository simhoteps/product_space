import React, { ReactNode, useContext } from "react";
import { Stack, Tooltip, Typography } from "@mui/material";
import "./maps_style.css";
import { useNavigate } from "react-router-dom";

import { turkeyCity } from "page/home/data/MapData";
import { IMapData, IMapTooltip } from "types/CityTypes";
import { cityContext } from "context/CityProvider";

const CustomTooltip = ({ input }: { input: IMapTooltip }) => (
  <Stack gap={"8px"} padding={"8px"}>
    <Typography variant="subtitle2">{input.title}</Typography>
    <Stack gap={"4px"}>
      <Typography variant="caption">Data 1 : {input.data1}</Typography>
      <Typography variant="caption">Data 2 : {input.data2}</Typography>
      <Typography variant="caption">Data 3 : {input.data3}</Typography>
      <Typography variant="caption">Data 4 : {input.data4}</Typography>
    </Stack>
  </Stack>
);

const MapsArr = () => {
  const navigate = useNavigate();
  const { citiesValue, setCitiesValue } = useContext(cityContext);
  return (
    <Stack width={"100%"}>
      <svg
        id="svg-turkey-map"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        viewBox="0 0 800 350"
        style={{
          transform: "scaleY(1)",
        }}
      >
        <g>
          {turkeyCity.map((city) => {
            return (
              <Tooltip
                arrow
                key={city.plateCode}
                title={<CustomTooltip input={{ title: city.name }} />}
              >
                <path
                  id={city.plateCode}
                  data-city-name={city.city}
                  className="city"
                  fill={citiesValue?.name === city.name ? "#C56E4F" : "#75ACBA"}
                  d={city.d}
                  onClick={() => {
                    setCitiesValue(city);
                    /*    navigate("/home/map/" + city.city); */
                  }}
                />
              </Tooltip>
            );
          })}
        </g>
      </svg>
    </Stack>
  );
};

export default MapsArr;
