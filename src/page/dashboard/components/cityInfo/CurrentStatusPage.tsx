import { Divider, Stack, Typography } from "@mui/material";
import ScatterPlotEChart from "components/antDesignCharts/ScatterPlotEChart";
import ColumnBasicChartEcharts from "components/chats/ColumnBasicChartEcharts";
import React, { useEffect, useState } from "react";
import { Size, useWindowSize } from "utils/hooks/use_window_size";

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

const CurrentStatusPage = ({
  isSubFilter,
  selected,
}: {
  isSubFilter: string;
  selected: string | undefined;
}) => {
  const windowsize: Size = useWindowSize();
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

  return (
    <Stack>
      {isSubFilter === "averageUniquityDiversity" &&
        selected &&
        cosData.length > 1 && (
          <ScatterPlotEChart
            cheight={`calc(${windowsize?.height}px - 260px)`}
            sizeField={"city"}
            xField={"çeşitlilik"}
            yField={"Ortalama sıradanlık"}
            colorField={"team"}
            data={cosData}
          />
        )}
      {isSubFilter === "openForestAverageUbiquity" &&
        selected &&
        sposData.length > 1 && (
          <ScatterPlotEChart
            cheight={`calc(${windowsize?.height}px - 260px)`}
            sizeField={"city"}
            xField={"Ortalama sıradanlık"}
            yField={"sp"}
            colorField={"team"}
            data={sposData}
          />
        )}
      {isSubFilter === "economicComplexity" &&
        selected &&
        sposData.length > 1 && (
          <ColumnBasicChartEcharts
            cheight={`calc(${windowsize?.height}px - 260px)`}
          />
        )}
    </Stack>
  );
};

export default CurrentStatusPage;
