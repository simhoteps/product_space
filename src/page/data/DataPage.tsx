import { Stack, Typography } from "@mui/material";
import PreventNodeOverlappings from "components/antvg6Charts/PreventNodeOverlappings";
import PageContainer from "components/box/PageContainer";
import TreemapEcharts from "components/chats/TreemapEcharts";
import React, { useEffect, useMemo, useState } from "react";

interface UserData {
  ilPlaka: string;
  nace6: number;
  calisanSayisi: number;
  yil: number;
  diversity: number;
  ubiquity: number;
  mcp: number;
  eci: number;
  pci: number;
  density: number;
  coi: number;
  cog: number;
  rca: number;
  expy: number;
  prody: number;
  of: number;
  "High kc-Low kc1": number;
  "Low kc-Low kc1": number;
  "Low kc-High kc1": number;
  "High kc-High kc1": number;
  "High kc1-Low lnOF": number;
  "Low kc1-Low lnOF": number;
  "Low kc1-High lnOF": number;
  "High kc1-High lnOF": number;
}

interface IData {
  value: number;
  name: string;
  path: string;
  children: any;
}

const CHUNK_SIZE = 100;

const MyComponent: React.FC = () => {
  const [cityData, setCityData] = useState<IData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch("/allCityDataFile.json")
      .then((response) => response.json())
      .then((data) => {
        const filterData = data.map((item: UserData) => ({
          value: item.rca,
          name: `${item.nace6}`,
          path: `Assistant/${item.nace6}`,
          children: null,
        }));

        // Verileri sayfalara böl
        const pages = Math.ceil(filterData.length / CHUNK_SIZE);
        for (let i = 0; i < pages; i++) {
          const pageData = filterData.slice(
            i * CHUNK_SIZE,
            (i + 1) * CHUNK_SIZE
          );

          // Sayfa verilerini yükle
          setCityData(pageData);

          // Sayfanın yüklendiğine dair bildirim
          setLoading(false);
        }
      })
      .catch((error) => console.error("Veri okuma hatası:", error));
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  // React memoization kullanarak TreemapEcharts bileşenini optimize et
  const TreemapEcharts = React.memo((props: any) => {
    return (
      <>
        <Stack gap={"24px"}>
          {props.data.map((item: IData) => {
            return (
              <Stack
                key={`${item.value}`}
                direction={"row"}
                gap={"24px"}
                alignItems={"center"}
              >
                <Typography variant="body1">{item.name}</Typography>
              </Stack>
            );
          })}
        </Stack>
        {/*  <TreemapEcharts data={cityData} /> */}
      </>
    );
  });

  /*   useEffect(() => {
    fetch("/allCityDataFile.json")
      .then((response) => response.json())
      .then((data) => {
        const filterData = data.map((item: UserData) => ({
          value: item.rca,
          name: `${item.nace6}`,
          path: `Assistant/${item.nace6}`,
          children: null,
        }));
        setCityData(filterData);
      })
      .catch((error) => console.error("Veri okuma hatası:", error));
  }, []);

  if (!cityData) {
    return <div>Loading...</div>;
  }
 */
  return (
    <PageContainer>
      {/*       <TreemapEcharts data={cityData} /> */}
    </PageContainer>
  );
};

export default MyComponent;
