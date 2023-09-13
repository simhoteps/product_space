import React, { useContext, useEffect, useState } from "react";
import {
  CircularProgress,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  Typography,
} from "@mui/material";
import MapTurkeyEchart from "components/chats/MapTurkeyEchart";
import { useTranslation } from "react-i18next";
import LocalPrintshopIcon from "@mui/icons-material/LocalPrintshop";
import { turkeySGKData } from "page/dashboard/data/NewData";

interface ISelection {
  sort: string;
  name: string;
}
const selectionArr = [
  { sort: "tuik", name: "KBGSYİH2021 (TÜİK-TL)" },
  { sort: "eci", name: "Ekonomik Kompleksite (ECI)" },
  { sort: "of", name: "Açık Orman (lnOF)" },
  { sort: "div", name: "Çeşitlilik (Div RCA{>}1)" },
  { sort: "avgUbiq", name: "Ort Sıradanlık (Avg_Ubiq)" },
];

const colorTuik = ["#99B7F9", "#829FD9", "#4E64A6", "#273273", "#131A40"];
const colorEci = ["#F0696D", "#DA494D", "#BD2A2E", "#AC1C20", "#791013"];
const colorOf = ["#F5D599", "#EAB350", "#E2A027", "#CC8708", "#B27606"];
const colorDiv = ["#F3B287", "#F39F67", "#EB7325", "#D85F10", "#9A450E"];
const colorAvgUbiq = ["#D2E7EB", "#8CB6BD", "#638E95", "#3B7781", "#37565B"];

const TurkeyMapView = () => {
  const [select, setSelect] = useState<string>(selectionArr[0].sort);
  const { t } = useTranslation();
  const [isLoading, setLoading] = useState(false);

  const handleChange = (event: SelectChangeEvent) => {
    setSelect(event.target.value);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };
  useEffect(() => {}, []);
  const dataTuik = turkeySGKData.map((item) => ({
    name: item.name,
    value: item.tuik,
  }));
  const dataEci = turkeySGKData.map((item) => ({
    name: item.name,
    value: item.eci,
  }));
  const dataOf = turkeySGKData.map((item) => ({
    name: item.name,
    value: item.of,
  }));
  const dataDiv = turkeySGKData.map((item) => ({
    name: item.name,
    value: item.div,
  }));
  const dataAvgUbiq = turkeySGKData.map((item) => ({
    name: item.name,
    value: item.avgUbiq,
  }));

  const fullData = [
    {
      sort: "tuik",
      name: "KBGSYİH2021 (TÜİK-TL)",
      data: dataTuik,
      color: colorTuik,
    },
    {
      sort: "eci",
      name: "Ekonomik Kompleksite (ECI)",
      data: dataEci,
      color: colorEci,
    },
    { sort: "of", name: "Açık Orman (lnOF)", data: dataOf, color: colorOf },
    {
      sort: "div",
      name: "Çeşitlilik (Div RCA{>}1)",
      data: dataDiv,
      color: colorDiv,
    },
    {
      sort: "avgUbiq",
      name: "Ort Sıradanlık (Avg_Ubiq)",
      data: dataAvgUbiq,
      color: colorAvgUbiq,
    },
  ];

  return (
    <Stack>
      <Stack
        direction={"row"}
        alignItems={"flex-end"}
        justifyContent={"flex-end"}
        gap={"8px"}
      >
        <FormControl
          sx={{ minWidth: "250px", maxWidth: "400px" }}
          variant="standard"
          size="small"
        >
          <InputLabel id="selection_arr_select_label">sektör seçin</InputLabel>
          <Select
            id="selection_arr_select"
            value={select}
            label="Age"
            onChange={handleChange}
          >
            {selectionArr.map((item) => {
              return (
                <MenuItem key={`textArr_${item.name}`} value={item.sort}>
                  <Typography fontWeight={400} variant="subtitle2">
                    {item.name}
                  </Typography>
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
        <IconButton>
          <LocalPrintshopIcon />
        </IconButton>
      </Stack>
      {isLoading ? (
        <Stack
          sx={{
            height: "400px",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CircularProgress size={"100px"} color="warning" />
        </Stack>
      ) : (
        fullData.map((item) => {
          return (
            item.sort === select && (
              <MapTurkeyEchart
                key={`MapTurkeyEchart${item.name}`}
                tooltipName={item.name}
                data={item.data}
                colorArr={item.color}
                visualMapShow={false}
              />
            )
          );
        })
      )}
    </Stack>
  );
};

export default TurkeyMapView;
