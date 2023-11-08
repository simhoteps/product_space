import React, { useEffect, useState } from "react";
import { Button, Stack, styled, alpha } from "@mui/material";
import CustomScatterEChart from "components/eCharts/CustomScatterEChart";
import { SwitchButtons } from "./SwitchButtons";
import CustomLoading from "components/loading/CustomLoading";

/*  "nace6": "",
                        "tersdens(x)": 2.66,
                        "Fark_Teknoloji(y2)": -2.37,
                        "FARK_Verimlilik (y1)": -0.1,
                        "RENKy2": 0,
                        "RENKy1": 0 */

interface IType {
  city?: string;
  line?: number;
  data?: {
    category: string;
    data: {
      nace6: number;
      size?: number;
      x: number;
      y1?: number;
      y2?: number;
      filterColor1?: number;
      filterColor2?: number;
    }[];
  }[];
}

const EfficientFrontier = ({ selected }: { selected: string | undefined }) => {
  const [data, setData] = useState<IType[]>([]);
  const [state, setState] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const getData = async () => {
    setLoading(false);
    try {
      await fetch("/data/dif-den.json")
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
            buttonName1={"Fark Karmaşıklık (Difference of Complexity)"}
            buttonName2={"Fark Sofistikasyon (Difference of Sophistication)"}
            onClick1={() => {
              setState(1);
            }}
            onClick2={() => {
              setState(2);
            }}
            state={state}
          />
          {data.length !== 0 && (
            <CustomScatterEChart
              data={data[0]}
              state={state}
              lineShow={false}
              xname={"tersdens"}
              yname={state === 1 ? "fark verimlilik" : "fark teknoloji"}
            />
          )}
        </Stack>
      )}
    </Stack>
  );
};

export default EfficientFrontier;
