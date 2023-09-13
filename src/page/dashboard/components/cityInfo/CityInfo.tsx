import React, { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Stack,
  Button,
  Grid,
  styled,
  IconButton,
  Typography,
  alpha,
} from "@mui/material";
import PageContainer from "components/box/PageContainer";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useTranslation } from "react-i18next";
import MiserablesEcharts from "components/chats/MiserablesEcharts";
import { SectionDashButtons } from "../SectionButtons";
import { cityContext } from "context/CityProvider";
import { turkeySGKData } from "page/dashboard/data/NewData";

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
  /*   boxShadow: `${alpha(
    theme.palette.primary.contrastText,
    0.3
  )} 0px 2px 8px 0px`, */
}));

const TopTitle = styled(Typography)(({ theme }) => ({
  ...theme.typography.caption,
  borderBottom: `1px solid ${theme.palette.primary.light}`,
  fontWeight: 500,
}));

const TopDesc = styled(Typography)(({ theme }) => ({
  ...theme.typography.body2,
  fontWeight: 700,
}));

const LeftContainer = styled(Stack)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  gap: "24px",
  width: "100%",
}));

const BackButton = styled(IconButton)(({ theme }) => ({
  padding: "0px",
  gap: "8px",
  "&:hover": {
    backgroundColor: "transparent",
  },
}));

const CityInfo = () => {
  const { id } = useParams();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const selected = turkeySGKData.find((option) => option.city === id);
  const { openSubFilter } = useContext(cityContext);
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
            <Typography variant="body2">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, "Lorem
              ipsum dolor sit amet..", comes from a line in section 1.10.32. The
              standard chunk of Lorem Ipsum used since the 1500s is reproduced
              below for those interested. Sections 1.10.32 and 1.10.33 from "de
              Finibus Bonorum et Malorum" by Cicero are also reproduced in their
              exact original form, accompanied by English versions from the 1914
              translation by H. Rackham.
            </Typography>
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
              <Stack direction={"row"} gap={"24px"}>
                <Stack gap={"4px"} alignItems={"center"}>
                  <TopTitle>Total Exports</TopTitle>
                  <TopDesc>TL 900B</TopDesc>
                </Stack>
                <Stack gap={"4px"} alignItems={"center"}>
                  <TopTitle>Exporter Rank</TopTitle>
                  <TopDesc>5. OF 133</TopDesc>
                </Stack>
                <Stack gap={"4px"} alignItems={"center"}>
                  <TopTitle>Current Account</TopTitle>
                  <TopDesc>TL 450B</TopDesc>
                </Stack>
              </Stack>
            </Stack>
            <ChartContainer>
              <MiserablesEcharts />
            </ChartContainer>

            {/*     <TreemapEcharts /> */}
          </LeftContainer>
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default CityInfo;
