import React, { useState, useEffect } from "react";
/* import { KBGSYIHData } from "../data/KBGSYIHData"; */
import { useTheme } from "layouts/theme/ThemeContext";
import { Stack, Typography } from "@mui/material";
import CustomLineCharts from "components/chats/CustomLineCharts";

import { useStores } from "utils/hooks/use_store";
import { observer } from "mobx-react";

interface ICityKBGSYH {
  year: number;
  id: string;
  il_Plaka: string;
  GSYH_TL: number;
  GSYH_US: number;
  RGSYH: number;
}

interface IGrow {
  id: string;
  plaka: string;
  KBGSYHlog: number;
  of: number;
  expy: number;
  eci: number;
}

const TripleChart = () => {
  const { theme } = useTheme();
  const { mainStore } = useStores();
  const citiesValue = mainStore.selectCitiesValue;
  const [cityData, setCityData] = useState<{
    city: string | undefined;
    data: number[];
  }>();
  const [loading, setLoading] = useState<boolean>(false);
  const [dataSort, setDataSort] = useState();

  const searchApi = async () => {
    setLoading(true);
    try {
      await fetch("/data/KBGSYH_city.json")
        .then((response) => response.json())
        .then((data) => {
          const filterData = data.filter(
            (item: ICityKBGSYH) => item.il_Plaka === citiesValue?.plateCode
          );
          const cityGSYHData = filterData.map(
            (item: ICityKBGSYH) => item.GSYH_US
          );
          const cityKBGSYHData = {
            city: citiesValue?.plateCode,
            data: cityGSYHData,
          };
          if (cityKBGSYHData) {
            setCityData(cityKBGSYHData);
            setLoading(false);
          }
        })
        .catch((error) => console.error("Veri okuma hatası:", error));
    } catch (error) {
      console.error("API çağrısı sırasında hata oluştu:", error);
    }
  };
  const getGrowInfo = async () => {
    setLoading(true);
    try {
      await fetch("/data/grafik_mevcutdurum.json")
        .then((response) => response.json())
        .then((data) => {
          const filterData = data
            .sort((a: IGrow, b: IGrow) => b.eci - a.eci)
            .findIndex((item: IGrow) => item.plaka === citiesValue?.plateCode);
          setDataSort(filterData + 1);
        })
        .catch((error) => console.error("Veri okuma hatası:", error));
    } catch (error) {
      console.error("API çağrısı sırasında hata oluştu:", error);
    }
  };

  /*   const lastDataSort = KBGSYIHData.sort(
    (a, b) => b.data[17] - a.data[17]
  ).findIndex((item) => item.plateCode === citiesValue?.plateCode); */

  const turkeyDataChart = {
    name: "TR_KBGSYH",
    data: [
      6021, 7376, 7971, 9735, 11018, 9044, 10629, 11289, 11675, 12582, 12178,
      11085, 10964, 10696, 9793, 9195, 8600, 9592,
    ],
  };
  useEffect(() => {
    searchApi();
    getGrowInfo();
  }, [, citiesValue?.city]);
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
        data={[turkeyDataChart.data]}
        colors={["#00baf0"]}
        range={[1000, 20000]}
        labels={""}
        title={"Kişi Başına Gayrisafi Yurt İçi Hasıla (KBGSYH)"}
        subtitle={`${turkeyDataChart?.data[17]}$`}
        value1={`${turkeyDataChart?.data[0]}$`}
        value2={""}
        value3={`${turkeyDataChart?.data[17]}$`}
        valueText1={"2004"}
        valueText2={""}
        valueText3={"2021"}
      />
      {cityData && (
        <CustomLineCharts
          data={[cityData?.data]}
          colors={["#6BB27B"]}
          range={[1000, 20000]}
          labels={""}
          title={`${mainStore.selectCitiesValue?.name} ili KBGSYH `}
          subtitle={"14th of 81"}
          value1={`${cityData?.data[0]}$`}
          value2={""}
          value3={`${cityData?.data[17]}$`}
          valueText1={"2004"}
          valueText2={""}
          valueText3={"2021"}
        />
      )}
      <Stack
        height={"250px"}
        width={"100%"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Typography align="center" variant="h6">
          <b> 2022 </b> yılı için <b> ECI </b>
          <br /> değerine göre <b> {mainStore.selectCitiesValue?.name} </b>
        </Typography>
        {dataSort && <Typography variant="h3">{dataSort}.</Typography>}
        <Stack direction={"row"} alignItems={"center"} gap={"4px"}>
          <Typography variant="body2">sıradadır</Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default observer(TripleChart);

/* 

import React, { useState, useEffect } from "react";
import { KBGSYIHData } from "../data/KBGSYIHData";
import { useTheme } from "layouts/theme/ThemeContext";
import { Stack, Typography } from "@mui/material";
import CustomLineCharts from "components/chats/CustomLineCharts";

import { useStores } from "utils/hooks/use_store";
import { observer } from "mobx-react";

interface ICityKBGSYH {
  year: number;
  id: string;
  il_Plaka: string;
  GSYH_TL: number;
  GSYH_US: number;
  RGSYH: number;
}

const TripleChart = () => {
  const { theme } = useTheme();
  const { mainStore } = useStores();
  const citiesValue = mainStore.selectCitiesValue;
  const [cityData, setCityData] = useState<{
    city: string | undefined;
    GSYH_TL: number[];
  }>();
  const [loading, setLoading] = useState<boolean>(true);

  const searchApi = async () => {
    try {
      await fetch("/data/KBGSYH_city.json")
        .then((response) => response.json())
        .then((data) => {
          const filterData = data.filter(
            (item: ICityKBGSYH) => item.il_Plaka === citiesValue?.plateCode
          );
          const cityGSYHData = filterData.map(
            (item: ICityKBGSYH) => item.GSYH_TL
          );
          const cityKBGSYHData = {
            city: citiesValue?.plateCode,
            GSYH_TL: cityGSYHData,
          };
          if (cityKBGSYHData) {
            setCityData(cityKBGSYHData);
            setLoading(false);
          }
        })
        .catch((error) => console.error("Veri okuma hatası:", error));
    } catch (error) {
      console.error("API çağrısı sırasında hata oluştu:", error);
    }
  };
  useEffect(() => {
    searchApi();
  }, []);

  const firstDataSort = KBGSYIHData.sort(
    (a, b) => b.data[0] - a.data[0]
  ).findIndex((item) => item.plateCode === citiesValue?.plateCode);

  const lastDataSort = KBGSYIHData.sort(
    (a, b) => b.data[17] - a.data[17]
  ).findIndex((item) => item.plateCode === citiesValue?.plateCode);
  const TurkeyDataChart = KBGSYIHData[0];

  const firstCityData = cityData?.GSYH_TL[0].toFixed(2);
  const lastCityData = cityData?.GSYH_TL[17].toFixed(2);
  const [calc, setCalc] = useState<number | undefined>(undefined);

  useEffect(() => {
    if (firstCityData !== undefined && lastCityData !== undefined) {
      setCalc(
        (parseFloat(lastCityData) * 100) / parseFloat(firstCityData) - 100
      );
    } else {
    }
  }, [cityData]);

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
        data={cityData?.GSYH_TL}
        colors={["#6BB27B"]}
        range={[3000, 160000]}
        labels={""}
        title={`${mainStore.selectCitiesValue?.name} ili KBGSYH `}
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
    </Stack>
  );
};

export default observer(TripleChart);

*/
