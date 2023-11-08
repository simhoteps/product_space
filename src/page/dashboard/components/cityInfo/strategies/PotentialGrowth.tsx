import React, { useEffect, useState } from "react";
import { useTheme } from "layouts/theme/ThemeContext";
import { Button, Stack, alpha, styled } from "@mui/material";
import CustomScatterEChart from "components/eCharts/CustomScatterEChart";
import { SwitchButtons } from "./SwitchButtons";
import CustomLoading from "components/loading/CustomLoading";

/*
   "nace6": 51001,
   "pci(y)": -1.37303804264713,
  "rca(size)": 187.9683393615227,
    "distance(x)": 0.624182525621355,
    "RENK": 0,
    "cog(y2)": -1.09513104817585
 */

interface IType {
  city?: string;
  line?: number;
  data?: {
    category: string;
    data: {
      nace6: number;
      size: number;
      x: number;
      y1?: number;
      y2?: number;
      filterColor1?: number;
      filterColor2?: number;
    }[];
  }[];
}

const PotentialGrowth = ({ selected }: { selected: string | undefined }) => {
  const { theme } = useTheme();
  const [data, setData] = useState<IType[]>([]);
  const [state, setState] = useState<number>(1);
  const [lineShow, setLineShow] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);
  const getData = async () => {
    setLoading(true);
    try {
      await fetch("/data/cog-pci-dist.json")
        .then((response) => response.json())
        .then((data) => {
          const newData = data.filter((item: IType) => item.city === selected);
          setData(newData);
          setLoading(false);
        })
        .catch((error) => console.error("Veri okuma hatası:", error));
    } catch (error) {
      console.error("API çağrısı sırasında hata oluştu:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Stack>
      {loading ? (
        <CustomLoading />
      ) : (
        <Stack>
          <SwitchButtons
            buttonName1={"pci"}
            buttonName2={"cog"}
            onClick1={() => {
              setState(1);
              setLineShow(true);
            }}
            onClick2={() => {
              setState(2);
              setLineShow(true);
            }}
            state={state}
          />

          {data.length !== 0 && (
            <CustomScatterEChart
              state={state}
              data={data[0]}
              lineShow={true}
              xname={"distance"}
              yname={state === 1 ? "pci" : "cog"}
            />
          )}
        </Stack>
      )}
    </Stack>
  );
};

export default PotentialGrowth;
