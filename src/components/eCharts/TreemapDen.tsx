import React from "react";
import ReactEcharts from "echarts-for-react";
import * as echarts from "echarts";
import { useTheme } from "layouts/theme/ThemeContext";
import { Size, useWindowSize } from "utils/hooks/use_window_size";
import "./TreemapDrillDown_Style.css";
import { Stack } from "@mui/material";

interface TreeNode {
  name: string;
  value: number[];
  children?: TreeNode[];
}

interface TreeNode1 {
  name: string;
  value: number;
  value2: number;
  children?: TreeNode[];
}

const originList = [
  {
    name: "B-MADENCİLİK VE TAŞ OCAKÇILIĞI",
    value: [0.63, -0.68],
    children: [
      {
        name: "5-Kömür ve linyit çıkartılması",
        value: [0.21, -0.99],
        children: [
          {
            name: "51001-Taş kömürü madenciliği",
            value: [0.7, -0.37],
          },
          {
            name: "52001-Linyit madenciliği",
            value: [0.42, 1.5],
          },
        ],
      },
    ],
  },
  {
    name: "C-İMALAT",
    value: [0.99, 0.27],
    children: [
      {
        name: "10-Gıda ürünlerinin imalatı",
        value: [1.75, 3],
        children: [
          {
            name: "101101-Sığır, koyun, keçi vb. hayvanların kesimi ve kesim sırasındaki etin işlenmesi (mezbahacılık) (taze, soğutulmuş veya dondurulmuş olarak saklanması dahil)",
            value: [0.6, 4],
          },
          {
            name: "101201-Kümes hayvanları etlerinin üretimi (taze veya dondurulmuş) (yenilebilir sakatatları dahil)",
            value: [0.58, -0.49],
          },
        ],
      },
      {
        name: "10-C",
        value: [2.75, -0.6],
        children: [
          {
            name: "etin işlenmesi",
            value: [0.4, 2],
          },
          {
            name: "etlerinin üretimi",
            value: [0.12, -0.1],
          },
        ],
      },
    ],
  },
];
const TreemapDen = () => {
  const { theme } = useTheme();
  const formatUtil = echarts.format;
  const windowsize: Size = useWindowSize();

  function mergeValues(arr: any) {
    arr.forEach((item: any) => {
      if (item.children) {
        mergeValues(item.children);
      }

      if (typeof item.value === "number" && typeof item.value2 === "number") {
        item.value = [item.value, item.value2];
        delete item.value2;
      }
    });
  }
  mergeValues(originList1);

  console.log(originList1);
  return (
    <Stack
      sx={{
        height: `calc(${windowsize?.height}px - 260px)`,
      }}
    >
      <ReactEcharts
        style={{ width: "100%", height: "68vh", margin: "0", padding: "0" }}
        option={{
          title: {
            show: false,
          },

          visualMap: {
            type: "continuous",
            show: true,
            left: "center",
            itemHeight: 200,
            itemWidth: 12,
            orient: "horizontal",
            bottom: 19,
            min: -1 /*  minMaxValues.min, */,
            max: 4 /* minMaxValues.max, */,
            text: ["High", "Low"],
            calculable: true,
            textStyle: {
              color: theme.palette.primary.dark,
            },
          },
          tooltip: {
            formatter: function (info: TreeNode) {
              return [
                '<div class="tooltip-title">' +
                  echarts.format.encodeHTML(info.name) +
                  "</div>",
                "rca:" + info.value[0] + "<br>",
                "pci:" + info.value[1] + "<br>",
              ].join("");
            },
          },
          series: [
            {
              name: "cityName",
              type: "treemap",
              left: 0,
              top: 0,
              right: 0,
              bottom: "10%",
              width: "100%",
              visualMin: -100,
              visualMax: 300,
              visualDimension: 3,
              legend: {
                padding: 0,
              },
              label: {
                show: true,
                formatter: "{b}",
                color: "#4B4952",
              },
              upperLabel: {
                show: true,
                height: 18,
                textBorderColor: "none",
                backgroundColor: theme.palette.background.paper,
              },
              data: originList,
              roam: false,
              leafDepth: 2,
              levels: [
                {
                  itemStyle: {
                    borderColor: theme.palette.background.paper,
                    borderWidth: 4,
                    gapWidth: 4,
                  },
                },
                {
                  colorSaturation: [0.6, 0.7],
                  itemStyle: {
                    borderColor: theme.palette.background.paper,
                    gapWidth: 2,
                    borderWidth: 2,
                  },
                },
                {
                  colorSaturation: [0.6, 0.7],
                  itemStyle: {
                    borderColor: theme.palette.background.paper,
                    gapWidth: 1,
                  },
                },
                {
                  colorSaturation: [0.6, 0.7],
                },
              ],
            },
          ],
        }}
      />
    </Stack>
  );
};

export default TreemapDen;

const originList1 = [
  {
    name: "B-MADENCİLİK VE TAŞ OCAKÇILIĞI",
    value: 0.63,
    value2: -0.68,
    children: [
      {
        name: "5-Kömür ve linyit çıkartılması",
        value: 0.21,
        value2: -0.99,
        children: [
          {
            name: "51001-Taş kömürü madenciliği",
            value: 0.0,
            value2: -1.37,
          },
          {
            name: "52001-Linyit madenciliği",
            value: 0.42,
            value2: 2,
          },
        ],
      },
    ],
  },
  {
    name: "C-İMALAT",
    value: 0.99,
    value2: 0.27,
    children: [
      {
        name: "10-Gıda ürünlerinin imalatı",
        value: 1.75,
        value2: -0.35,
        children: [
          {
            name: "101101-Sığır, koyun, keçi vb. hayvanların kesimi ve kesim sırasındaki etin işlenmesi (mezbahacılık) (taze, soğutulmuş veya dondurulmuş olarak saklanması dahil)",
            value: 0.6,
            value2: 4,
          },
          {
            name: "101201-Kümes hayvanları etlerinin üretimi (taze veya dondurulmuş) (yenilebilir sakatatları dahil)",
            value: 0.58,
            value2: -0.49,
          },
        ],
      },
      {
        name: "10-C",
        value: 2.75,
        value2: -0.6,
        children: [
          {
            name: "etin işlenmesi",
            value: 0.4,
            value2: 2,
          },
          {
            name: "etlerinin üretimi",
            value: 0.12,
            value2: -0.1,
          },
        ],
      },
    ],
  },
];
