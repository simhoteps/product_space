import React from "react";
import { Stack, Tooltip, Typography } from "@mui/material";
import "./maps_style.css";
import { turkeyMapCity } from "page/home/data/TurkeyMapCity";
import { useNavigate } from "react-router-dom";
import { turkeySGKData } from "page/dashboard/data/NewData";
import { useStores } from "utils/hooks/use_store";

const CustomTooltip = ({ title }: { title: string }) => (
  <Stack gap={"8px"} padding={"8px"}>
    <Typography variant="subtitle2">{title}</Typography>
  </Stack>
);

const MapsArr = () => {
  const navigate = useNavigate();
  const { mainStore } = useStores();
  const onChartClick = (params: any) => {
    if (params.name) {
      const newData = turkeySGKData.find((item) => item.name === params.name);
      if (newData) {
        mainStore.setSelectCitiesValue(newData);
      }
    }
  };
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
          {turkeyMapCity.map((city) => {
            return (
              <Tooltip
                arrow
                key={city.plateCode}
                title={<CustomTooltip title={city.name} />}
              >
                <path
                  id={city.plateCode}
                  data-city-name={city.city}
                  className="city"
                  fill={"#D03337"}
                  d={city.d}
                  onClick={() => {
                    navigate(`/dashboard`);
                    onChartClick(city);
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
