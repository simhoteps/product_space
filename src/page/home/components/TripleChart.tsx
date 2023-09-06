import React, { useContext, useState, useEffect } from "react";
import { cityContext } from "context/CityProvider";
import { KBGSYIHData } from "../data/KBGSYIHData";
import { useTheme } from "layouts/theme/ThemeContext";
import { Stack, Typography } from "@mui/material";
import CustomLineCharts from "components/chats/CustomLineCharts";
import { turkeySGKData } from "../data/NewData";
import numeral from "numeral";

const TripleChart = () => {
  const { theme } = useTheme();
  const { citiesValue } = useContext(cityContext);

  const CityDataChart = KBGSYIHData.find(
    (option) => option.plateCode === citiesValue?.plateCode
  );

  const firstDataSort = KBGSYIHData.sort(
    (a, b) => b.data[0] - a.data[0]
  ).findIndex((item) => item.plateCode === citiesValue?.plateCode);

  const lastDataSort = KBGSYIHData.sort(
    (a, b) => b.data[17] - a.data[17]
  ).findIndex((item) => item.plateCode === citiesValue?.plateCode);
  const TurkeyDataChart = KBGSYIHData[0];

  /* 
  const SelectCityDataChart = turkeySGKData.find(
    (option) => option.plateCode === citiesValue?.plateCode
  );
 const multipleRadialLabelsName = [
    "KBGSYIH2021 (TÜİK-TL)",
    "Ekonomik Kompleksite (ECI)",
    "Açık Orman (lnOF)",
    "Çeşitlilik (Div RCA>1)",
    "Ort Sıradanlık (Avg_Ubiq)",
  ];

  const multipleRadialData = [
    numeral(SelectCityDataChart?.tuik.replace(",", ".")).value(),
    numeral(SelectCityDataChart?.eci.replace(",", ".")).value(),
    numeral(SelectCityDataChart?.inOF.replace(",", ".")).value(),
    numeral(SelectCityDataChart?.rca.replace(",", ".")).value(),
    numeral(SelectCityDataChart?.AvgUbiq.replace(",", ".")).value(),
  ];
 */
  const firstCityData = CityDataChart?.data[0].toFixed(2);
  const lastCityData = CityDataChart?.data[17].toFixed(2);
  const [calc, setCalc] = useState<number | undefined>(undefined);

  useEffect(() => {
    if (firstCityData !== undefined && lastCityData !== undefined) {
      setCalc(
        (parseFloat(lastCityData) * 100) / parseFloat(firstCityData) - 100
      );
    } else {
    }
  }, [CityDataChart]);

  return (
    <Stack
      sx={{
        [theme.breakpoints.down("lg")]: {
          flexDirection: "column",
        },
      }}
      direction={"row"}
      gap={"24px"}
    >
      <CustomLineCharts
        data={[TurkeyDataChart.data]}
        colors={["#00baf0"]}
        range={[3000, 160000]}
        labels={""}
        title={"Kişi Başına Gayrisafi Yurt İçi Hasıla (KBGSYH)"}
        subtitle={`${TurkeyDataChart?.data[17].toFixed(2)}tl`}
        value1={`${TurkeyDataChart?.data[0].toFixed(2)}tl`}
        value2={""}
        value3={`${TurkeyDataChart?.data[17].toFixed(2)}tl`}
        valueText1={"2004"}
        valueText2={""}
        valueText3={"2021"}
      />
      <CustomLineCharts
        data={[CityDataChart?.data]}
        colors={["#6BB27B"]}
        range={[3000, 160000]}
        labels={""}
        title={"İl Bazında KBGSYH"}
        subtitle={"14th of 81"}
        value1={`Sırası:${firstDataSort + 1}`}
        value2={""}
        value3={`Sırası:${lastDataSort + 1}`}
        valueText1={"2004"}
        valueText2={""}
        valueText3={"2021"}
      />
      <Stack
        height={"250px"}
        width={"100%"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Typography variant="h6">
          <b> 2004 </b>growth rate in <b> 2021 </b>
        </Typography>
        <Typography variant="h3">%{calc?.toFixed()}</Typography>
        <Stack direction={"row"} alignItems={"center"} gap={"4px"}>
          <Typography variant="body2">Güncel Sıralama:</Typography>
          <Typography variant="body1">{lastDataSort + 1}</Typography>
        </Stack>
      </Stack>

      {/*     <MultipleRadialbarsChart
        labelsName={multipleRadialLabelsName}
        dataTotal={"400"}
            data={multipleRadialData} 
      /> */}

      {/* <CustomAngleCircleChart
        labelsName={multipleRadialLabelsName}
        circleColors={["#ACCAF2", "#607EA6", "#204473", "#D0ECF2", "#7E8C69"]}
        data={[23, 879, 879, 9, 9]}
      /> */}
    </Stack>
  );
};

export default TripleChart;
