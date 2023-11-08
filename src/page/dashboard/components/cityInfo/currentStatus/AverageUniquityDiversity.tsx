import { Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import { DescCom } from "./DescCom";
import CustomLoading from "components/loading/CustomLoading";
import ReactEcharts from "echarts-for-react";
import { useTheme } from "layouts/theme/ThemeContext";
import { Size, useWindowSize } from "utils/hooks/use_window_size";
import BasicScatterEChart from "components/eCharts/BasicScatterEChart";

interface ISpos {
  AD: string;
  PLAKA: string;
  Ç: number;
  OS: number;
  group: string;
}

interface ISposFilter {
  city: string;
  çeşitlilik: number;
  "Ortalama sıradanlık": number;
  team: string;
}

interface IFilter {
  name: string;
  x: number;
  y: number;
  size: number;
  filterData: number;
}

const AverageUniquityDiversity = ({ selectCity }: { selectCity: string }) => {
  const windowsize = useWindowSize();
  const [sposData, setSposData] = useState<ISposFilter[]>([]);
  const [newData, setNewData] = useState<
    { category: string; data: IFilter[] }[]
  >([]);
  const [loading, setLoading] = useState<boolean>(false);

  function filterAndMap(data: ISposFilter[], title: string) {
    const YSPDOS = data
      .filter((item) => item.team === title)
      .map((item) => {
        return {
          name: item.city,
          x: item.çeşitlilik,
          y: item["Ortalama sıradanlık"],
          size: 1,
          filterData: 1,
        };
      });

    return YSPDOS;
  }

  const getSposData = async () => {
    setLoading(true);
    try {
      await fetch("/data/grafik_C_OS.json")
        .then((response) => response.json())
        .then((data) => {
          const newData = data.map((item: ISpos) => {
            return {
              city: item.AD,
              çeşitlilik: item.Ç,
              "Ortalama sıradanlık": item.OS,
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
    if (sposData.length > 0) {
      // If sposData is not empty, set newData based on it
      setNewData([
        {
          category: "YÇ-DOS",
          data: filterAndMap(sposData, "YÇ-DOS"),
        },
        {
          category: "DÇ-YOS",
          data: filterAndMap(sposData, "DÇ-YOS"),
        },
        {
          category: "YÇ-YOS",
          data: filterAndMap(sposData, "YÇ-YOS"),
        },
        {
          category: "DÇ-DOS",
          data: filterAndMap(sposData, "DÇ-DOS"),
        },
      ]);
      setLoading(false);
    }
  }, [sposData]);

  useEffect(() => {
    getSposData();
  }, []);

  return (
    <Stack>
      {loading ? (
        <CustomLoading />
      ) : (
        <BasicScatterEChart data={newData} selectCity={selectCity} />
      )}
    </Stack>
  );
};

export default AverageUniquityDiversity;
