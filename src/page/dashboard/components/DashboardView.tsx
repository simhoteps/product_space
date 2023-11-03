import React, { useContext, useEffect, useState } from "react";
import { Stack, Grid, styled, Divider, Typography } from "@mui/material";
import CityDescription from "./CityDescription";
import TripleChart from "./TripleChart";
import ColumnBasicChartEcharts from "components/chats/ColumnBasicChartEcharts";
import TurkeyMapView from "./maps/TurkeyMapView";
import { observer } from "mobx-react";
import { turkeySGKData } from "../data/NewData";
import numeral from "numeral";
import ScatterPlotEChart from "components/antDesignCharts/ScatterPlotEChart";

const RightCotaniner = styled(Stack)(({ theme }) => ({
  width: "100%",
  justifyContent: "space-between",
  /*   padding: "24px", */
  boxSizing: "border-box",
  overflowY: "auto",
  "&::-webkit-scrollbar": {
    width: 6,
  },

  "&::-webkit-scrollbar-thumb:vertical": {
    borderRadius: 4,
    background: theme.palette.primary.main,
  },

  "&::-webkit-scrollbar-track:vertical": {
    borderRadius: 4,
    background: "transparent",
  },
}));

interface ICos {
  AD: string;
  PLAKA: string;
  Ç: number;
  OS: number;
  group: string;
}

interface ICosType {
  city: string;
  çeşitlilik: number;
  "Ortalama sıradanlık": number;
  team: string;
}

interface ISpos {
  AD: string;
  PLAKA: string;
  SP: number;
  OS: number;
  group: string;
}

interface ISposType {
  city: string;
  sp: number;
  "Ortalama sıradanlık": number;
  team: string;
}

const DashboardView = () => {
  const [cosData, setCosData] = useState<ICosType[]>([]);
  const [sposData, setSposData] = useState<ISposType[]>([]);

  const getCosData = async () => {
    try {
      await fetch("/data/grafik_C_OS.json")
        .then((response) => response.json())
        .then((data) => {
          const newData = data.map((item: ICos) => {
            return {
              city: item.AD,
              çeşitlilik: item.Ç,
              "Ortalama sıradanlık": item.OS,
              team: item.group,
            };
          });
          setCosData(newData);
        })
        .catch((error) => console.error("Veri okuma hatası:", error));
    } catch (error) {
      console.error("API çağrısı sırasında hata oluştu:", error);
    }
  };
  const getSposData = async () => {
    try {
      await fetch("/data/grafik_SP_OS.json")
        .then((response) => response.json())
        .then((data) => {
          const newData = data.map((item: ISpos) => {
            return {
              city: item.AD,
              "Ortalama sıradanlık": item.OS,
              sp: item.SP,
              team: item.group,
            };
          });
          setSposData(newData);
        })
        .catch((error) => console.error("Veri okuma hatası:", error));
    } catch (error) {
      console.error("API çağrısı sırasında hata oluştu:", error);
    }
  };

  useEffect(() => {
    getCosData();
    getSposData();
  }, []);

  /*  const newData = turkeySGKData.map((item) => {
    return {
      city: item.name,
      div: numeral(item.div.replace(",", ".")).value(),
      evDiv: numeral(item.avgUbiq.replace(",", ".")).value(),
      team: item.group,
    };
  });
  const dataKB1 = [...newData].sort((a, b) =>
    a.div ? (b.div ? a?.div - b?.div : 0) : 0
  );
  const scatter1dData = [...dataKB1].sort((a, b) =>
    a.evDiv ? (b.evDiv ? a?.evDiv - b?.evDiv : 0) : 0
  );
 */
  /*   const newData2 = turkeySGKData.map((item) => {
    return {
      city: item.name,
      div: numeral(item.div.replace(",", ".")).value(),
      inOF: numeral(item.of.replace(",", ".")).value(),
      team: item.group,
    };
  });
  const dataKB2 = [...newData2].sort((a, b) =>
    a.div ? (b.div ? a?.div - b?.div : 0) : 0
  );
  const scatter2dData = [...dataKB2].sort((a, b) =>
    b.inOF ? (a.inOF ? b?.inOF - a?.inOF : 0) : 0
  ); */

  return (
    <Stack>
      <Grid spacing={4} container>
        <Grid xs={12} md={4} item>
          <CityDescription />
        </Grid>
        <Grid xs={12} md={8} item>
          <RightCotaniner>
            <TurkeyMapView />
            <TripleChart />
          </RightCotaniner>
        </Grid>
      </Grid>
      <Stack marginTop={"48px"} gap={"8px"} width={"100%"}>
        <Divider>
          <Typography variant="subtitle2">
            Ortalama Sıradanlık (OS)-Çeşitlilik (Ç)
          </Typography>
        </Divider>
        {/*   {cosData.length > 1 && (
      <ScatterPlotEChart
            sizeField={"city"}
            xField={"çeşitlilik"}
            yField={"Ortalama sıradanlık"}
            colorField={"team"}
            data={cosData}
          /> 
        )} */}
        {sposData.length > 1 && (
          <>
            <Divider>
              <Typography variant="subtitle2">
                Sıçrama Potansiyeli (SP)-Ortalama Sıradanlık (SP)
              </Typography>
            </Divider>
            {/*   <ScatterPlotEChart
              sizeField={"city"}
              xField={"Ortalama sıradanlık"}
              yField={"sp"}
              colorField={"team"}
              data={sposData}
            /> */}
          </>
        )}

        <Divider>
          <Typography variant="subtitle2">
            Ekonomik Kompleksite (ECI)
          </Typography>
        </Divider>
        {/*  <ColumnBasicChartEcharts /> */}
      </Stack>
    </Stack>
  );
};

export default observer(DashboardView);
