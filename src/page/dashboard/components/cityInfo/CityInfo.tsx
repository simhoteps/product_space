import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Stack,
  Grid,
  styled,
  IconButton,
  Typography,
  CircularProgress,
} from "@mui/material";
import PageContainer from "components/box/PageContainer";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useTranslation } from "react-i18next";
import { SectionDashButtons } from "../SectionButtons";
import { cityContext } from "context/CityProvider";
import { turkeySGKData } from "page/dashboard/data/NewData";
import TreemapDrillDown from "components/eCharts/TreemapDrillDown";
import TreemapDrillDownUniq from "components/eCharts/TreemapDrillDownUniq";
import { Size, useWindowSize } from "utils/hooks/use_window_size";
import ProductSpace from "./ProductSpace/productSpace";
import { useTheme } from "layouts/theme/ThemeContext";
import CustomLoading from "components/loading/CustomLoading";

interface TreeNode {
  name: string;
  value: number[];
  children?: TreeNode[];
}
interface ITreeNode {
  name: string;
  value: number;
  children?: ITreeNode[];
}

const TitleText = styled(Typography)(({ theme }) => ({
  ...theme.typography.h5,
  textTransform: "uppercase",
  width: "100%",
  fontWeight: 700,
  marginLeft: "-24px",
}));

const ChartContainer = styled(Stack)(({ theme }) => ({
  width: "100%",
  borderRadius: "16px",
  padding: "24px",
  border: `1px solid ${theme.palette.primary.light}`,
}));

const LeftContainer = styled(Stack)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  gap: "24px",
  width: "100%",
}));

const TextContainer = styled(Stack)(({ theme }) => ({
  display: "flex",
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

const BackButton = styled(IconButton)(({ theme }) => ({
  padding: "0px",
  gap: "8px",
  "&:hover": {
    backgroundColor: "transparent",
  },
}));

const CityInfo = () => {
  const { theme } = useTheme();
  const { id } = useParams();
  const { t } = useTranslation();
  const windowsize: Size = useWindowSize();
  const navigate = useNavigate();
  const selected = turkeySGKData.find((option) => option.city === id);
  const { openSubFilter } = useContext(cityContext);
  const [treeData, setTreeData] = useState<ITreeNode[]>([]);
  const [treeLoading, setTreeLoading] = useState<boolean>(false);
  const [treeColorData, setTreeColorData] = useState<TreeNode[]>([]);
  useEffect(() => {
    setTreeLoading(true);
    fetch("/data/turkey_city_tree_map_color.json")
      .then((response) => response.json())
      .then((rawData) => {
        const cityData = rawData.find(
          (item: any) => item.Ad === selected?.name
        );
        setTreeData(cityData.data);
        const minMaxValues = cityData.data.reduce(
          (acc: any, current: any) => {
            if (current.value2 && current?.value2 < acc.min) {
              acc.min = current.value2;
            }
            if (current.value2 && current?.value2 > acc.max) {
              acc.max = current.value2;
            }
            return acc;
          },
          { min: Infinity, max: -Infinity }
        );

        function mergeValues(arr: any) {
          arr.forEach((item: any) => {
            if (item.children) {
              mergeValues(item.children);
            }

            if (
              typeof item.value === "number" &&
              typeof item.value2 === "number"
            ) {
              item.value = [item.value, item.value2];
              delete item.value2;
            }
          });
        }
        mergeValues(cityData.data);
        setTreeColorData(cityData.data);
      })
      .then(() => {
        setTreeLoading(false);
      });
  }, []);

  return (
    <PageContainer>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <LeftContainer>
            <Stack direction={"row"} width={"100%"}>
              <BackButton
                onClick={() => {
                  navigate("/dashboard");
                }}
              >
                <ArrowBackIcon />
              </BackButton>
              <TitleText align="center">{selected?.name}</TitleText>
            </Stack>
            <SectionDashButtons />
            <TextContainer
              sx={{
                maxHeight: `calc(${windowsize?.height}px - 430px)`,
              }}
            >
              <Typography variant="body2">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in
                classical literature, discovered the undoubtable source. Lorem
                Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
                Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
                written in 45 BC. This book is a treatise on the theory of
                ethics, very popular during the Renaissance. The first line of
                Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line
                in section 1.10.32. The standard chunk of Lorem Ipsum used since
                the 1500s is reproduced below for those interested. Sections
                1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by
                Cicero are also reproduced in their exact original form,
                accompanied by English versions from the 1914 translation by H.
                Rackham. Contrary to popular belief, Lorem Ipsum is not simply
                random text. It has roots in a piece of classical Latin
                literature from 45 BC, making it over 2000 years old. Richard
                McClintock, a Latin professor at Hampden-Sydney College in
                Virginia, looked up one of the more obscure Latin words,
                consectetur, from a Lorem Ipsum passage, and going through the
                cites of the word in classical literature, discovered the
                undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
                1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good
                and Evil) by Cicero, written in 45 BC. This book is a treatise
                on the theory of ethics, very popular during the Renaissance.
                The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",
                comes from a line in section 1.10.32. The standard chunk of
                Lorem Ipsum used since the 1500s is reproduced below for those
                interested. Sections 1.10.32 and 1.10.33 from "de Finibus
                Bonorum et Malorum" by Cicero are also reproduced in their exact
                original form, accompanied by English versions from the 1914
                translation by H. Rackham.
              </Typography>
            </TextContainer>
          </LeftContainer>
        </Grid>

        <Grid item xs={12} md={8}>
          <LeftContainer justifyContent={"center"}>
            <Stack
              direction={"row"}
              width={"100%"}
              justifyContent={"space-between"}
            >
              <Typography fontWeight={700} variant="h6">
                {t(`homeMap.${openSubFilter}`)}
              </Typography>
            </Stack>
            <ChartContainer
              sx={{
                height: `calc(${windowsize?.height}px - 190px)`,
              }}
            >
              {treeLoading === true ? (
                <CustomLoading />
              ) : (
                <>
                  {openSubFilter === "Introduction" && selected?.name && (
                    <TreemapDrillDown
                      cityName={selected?.name}
                      cityData={treeData}
                    />
                  )}
                  {openSubFilter === "EconomicComplexity" && selected?.name && (
                    <TreemapDrillDownUniq
                      cityName={selected?.name}
                      cityData={treeColorData}
                    />
                  )}
                  {openSubFilter === "whatIstheProductSpace" &&
                    selected?.name && <ProductSpace />}
                </>
              )}
            </ChartContainer>
          </LeftContainer>
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default CityInfo;
