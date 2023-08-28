import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Stack,
  Button,
  Grid,
  styled,
  IconButton,
  Typography,
} from "@mui/material";
import PageContainer from "components/box/PageContainer";
import { turkeyCity } from "page/home/data/MapData";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useTranslation } from "react-i18next";
import CityAutocomplete from "../CityAutocomplete";
import MiserablesEcharts from "components/chats/MiserablesEcharts";
import SectionButtons from "../SectionButtons";
import TreemapEcharts from "components/chats/TreemapEcharts";

const BackText = styled(Typography)(({ theme }) => ({
  ...theme.typography.subtitle1,
  "&:hover": {
    fontWeight: 700,
  },
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
  "&:hover": {
    backgroundColor: "transparent",
  },
}));

const CityInfo = () => {
  const { id } = useParams();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const selected = turkeyCity.find((option) => option.city === id);

  return (
    <PageContainer>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <LeftContainer>
            <BackButton
              onClick={() => {
                navigate("/home");
              }}
            >
              <ArrowBackIcon /> <BackText>{t("navigation.back")}</BackText>
            </BackButton>
            <CityAutocomplete />
            <SectionButtons />
            <Typography variant="body1">
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
            <Typography width={"100%"} align="center" variant="h3">
              {selected?.name}
            </Typography>
            <MiserablesEcharts />
            {/*     <TreemapEcharts /> */}
          </LeftContainer>
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default CityInfo;
