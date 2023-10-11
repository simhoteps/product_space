import { turkeyAllGeo } from "data/ turkeyMapsGeoJSON";
import ReactECharts from "echarts-for-react";
import { useTheme } from "layouts/theme/ThemeContext";
import { Stack } from "@mui/material";
import numeral from "numeral";
import { useStores } from "utils/hooks/use_store";
import { observer } from "mobx-react";
import { Size, useWindowSize } from "utils/hooks/use_window_size";
import { turkeySGKData } from "page/dashboard/data/NewData";

const echarts = require("echarts");
echarts.registerMap("TURKEY", turkeyAllGeo, {});

interface IMapValueData {
  name: string;
  value: string;
}

function MapTurkeyEchart({
  colorArr,
  visualMapShow,
  data,
  tooltipName,
}: {
  colorArr: string[];
  visualMapShow: boolean;
  data: IMapValueData[];
  tooltipName: string;
}) {
  const windowsize: Size = useWindowSize();
  const { mainStore } = useStores();
  const { theme } = useTheme();

  const newData = data.map((item) => ({
    name: item.name,
    value: numeral(item.value?.replace(",", ".")).value(),
    itemStyle: mainStore.selectCitiesValue?.name === item.name && {
      /*   color: "#FFE458", */
      borderWidth: 4,
    },
    label: mainStore.selectCitiesValue?.name === item.name && {
      show: true,
      fontWeight: 700,
      /*       color: theme.palette.primary.dark, */
    },
  }));

  const minMaxValues = newData.reduce(
    (acc, current) => {
      if (current.value && current?.value < acc.min) {
        acc.min = current.value;
      }
      if (current.value && current?.value > acc.max) {
        acc.max = current.value;
      }
      return acc;
    },
    { min: Infinity, max: -Infinity }
  );

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
      <ReactECharts
        style={{
          height: `calc(${windowsize?.height}px - 420px )`,
          width: "100%",
        }}
        option={{
          color: colorArr,
          tooltip: {
            trigger: "item",
            showDelay: 0,
            transitionDuration: 0.2,
          },
          visualMap: {
            show: true,
            left: "right",
            min: minMaxValues.min,
            max: minMaxValues.max,
            /*     inRange: {
              color: colorArr,
            }, */
            text: ["High", "Low"],
            calculable: true,
            textStyle: {
              color: theme.palette.primary.dark,
            },
          },

          toolbox: {
            show: false,
            left: "left",
            top: "top",
            feature: {
              dataView: { readOnly: false },
              restore: {},
              saveAsImage: {},
            },
          },
          animation: true,
          series: [
            {
              name: tooltipName,
              type: "map",
              roam: false,
              map: "TURKEY",
              emphasis: {
                label: {
                  show: true,
                },
              },
              label: {
                show: false,
              },
              itemStyle: {
                areaColor: "#eee",
                borderColor: "#eee",
                borderWidth: 1,
              },
              data: newData,
            },
          ],
        }}
        onEvents={{
          click: onChartClick,
        }}
      />
    </Stack>
  );
}
export default observer(MapTurkeyEchart);
