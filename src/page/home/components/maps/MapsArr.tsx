import React, { useContext } from "react";
import { Stack, Tooltip, Typography, styled } from "@mui/material";
import "./maps_style.css";
import { useNavigate } from "react-router-dom";
import { IMapTooltip } from "types/CityTypes";
import { cityContext } from "context/CityProvider";
import { turkeySGKData } from "page/home/data/NewData";

const TextBorder = styled(Stack)(({ theme }) => ({
  flexWrap: "nowrap",
  flexDirection: "row",
  alignItems: "center",
  gap: "4px",
}));

const TitleText = styled(Typography)(({ theme }) => ({
  ...theme.typography.caption,
  flexWrap: "nowrap",
}));

const CustomTooltip = ({ input }: { input: IMapTooltip }) => (
  <Stack gap={"8px"} padding={"8px"}>
    <Typography variant="subtitle2">{input.title}</Typography>
    <Stack gap={"4px"}>
      <TextBorder>
        <TitleText>KBGSYİH2021 (TÜİK-TL):</TitleText>
        <Typography fontWeight={700} variant="caption">
          {input.tuik}
        </Typography>
      </TextBorder>
      <TextBorder>
        <TitleText> Ekonomik Kompleksite (ECI):</TitleText>
        <Typography fontWeight={700} variant="caption">
          {input.eci}
        </Typography>
      </TextBorder>
      <TextBorder>
        <TitleText> Açık Orman (lnOF):</TitleText>
        <Typography fontWeight={700} variant="caption">
          {input.inOF}
        </Typography>
      </TextBorder>

      <TextBorder>
        <TitleText> Çeşitlilik (Div RCA{">"}1):</TitleText>
        <Typography fontWeight={700} variant="caption">
          {input.rca}
        </Typography>
      </TextBorder>

      <TextBorder>
        <TitleText> Ort Sıradanlık (Avg_Ubiq) :</TitleText>
        <Typography fontWeight={700} variant="caption">
          {input.avgUbiq}
        </Typography>
      </TextBorder>
    </Stack>
  </Stack>
);

const MapsArr = () => {
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
          {turkeySGKData.map((city) => {
            return (
              <Tooltip
                arrow
                key={city.plateCode}
                title={
                  <CustomTooltip
                    input={{
                      title: city.name,
                      tuik: city.tuik,
                      eci: city.eci,
                      inOF: city.inOF,
                      rca: city.rca,
                      avgUbiq: city.AvgUbiq,
                      group: city.group,
                    }}
                  />
                }
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
