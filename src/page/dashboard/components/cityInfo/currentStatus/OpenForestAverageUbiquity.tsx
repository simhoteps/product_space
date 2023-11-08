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
  SP: number;
  OS: number;
  group: string;
}

interface ISposFilter {
  city: string;
  "Ortalama sıradanlık": number;
  sp: number;
  team: string;
}

interface IFilter {
  name: string;
  x: number;
  y: number;
  size: number;
  filterData: number;
}

const OpenForestAverageUbiquity = ({ selectCity }: { selectCity: string }) => {
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
          x: item["Ortalama sıradanlık"],
          y: item.sp,
          size: 1,
          filterData: 1,
        };
      });

    return YSPDOS;
  }

  const getSposData = async () => {
    setLoading(true);
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
    if (sposData.length > 0) {
      // If sposData is not empty, set newData based on it
      setNewData([
        {
          category: "YSP-DOS",
          data: filterAndMap(sposData, "YSP-DOS"),
        },
        {
          category: "DSP-YOS",
          data: filterAndMap(sposData, "DSP-YOS"),
        },
        {
          category: "YSP-YOS",
          data: filterAndMap(sposData, "YSP-YOS"),
        },
        {
          category: "DSP-DOS",
          data: filterAndMap(sposData, "DSP-DOS"),
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
        /*  <ReactEcharts
          style={{
            width: "100%",
            height: "64vh",
            margin: "0",
            padding: "0",
          }}
          option={{
            title: {
              show: false,
            },
            grid: {
              left: "3%",
              right: "7%",
              bottom: "7%",
              containLabel: true,
            },
            tooltip: {
              // trigger: 'axis',
              showDelay: 0,
              formatter: function (params: any) {
                if (params.value.length > 1) {
                  return (
                    "Ürün kodu :" +
                    params.value[2] +
                    "<br/>" +
                    "x değeri :" +
                    params.value[0] +
                    "<br/>" +
                    "y değeri :" +
                    params.value[1]
                  );
                } else {
                  return (
                    params.seriesName + " <br/>" + "x değeri :" + params.value
                  );
                }
              },
              axisPointer: {
                show: true,
                type: "cross",
                lineStyle: {
                  type: "dashed",
                  width: 1,
                },
              },
            },
            toolbox: {
              feature: {
                dataZoom: {},
              },
            },
            legend: {
              data: newData.map((i) => i.category),
              left: "center",
              bottom: "0px",
            },
            xAxis: [
              {
                type: "value",
                scale: true,
                axisLabel: {
                  formatter: "{value}",
                },
                splitLine: {
                  show: false,
                },
              },
            ],
            yAxis: [
              {
                type: "value",
                scale: true,
                axisLabel: {
                  formatter: "{value}",
                },
                splitLine: {
                  show: false,
                },
              },
            ],

            series: newData.map((item) => {
              return {
                name: item.category,
                type: "scatter",
                emphasis: {
                  focus: "series",
                },
                data: item.data?.map((i) => {
                  return {
                    value: [i.x, i.y, i.name],
               
                  };
                }),
                label: {
                  show: true,
                  position: "top",
                  textBorderColor: "none",
                  fontSize: 9,
                  formatter: function (params: any) {
                    return params.value[2];
                  },
                },
              };
            }),
          }}
        /> */
      )}
    </Stack>
  );
};

export default OpenForestAverageUbiquity;
