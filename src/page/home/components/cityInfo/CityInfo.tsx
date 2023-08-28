import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Stack, Button, Grid, SvgIcon } from "@mui/material";
import PageContainer from "components/box/PageContainer";
import { turkeyCity } from "page/home/data/MapData";
import { IMapData } from "page/home/types/types";

const CityInfo = () => {
  const { id } = useParams();

  const selected = turkeyCity.find((option) => option.city === id);

  return (
    <PageContainer>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <h1>{selected?.name}</h1>
        </Grid>
        <Grid item xs={12} md={2}>
          <path
            id={selected?.plateCode}
            className="city"
            fill={"#C56E4F"}
            d={selected?.d}
          />

          <Stack
            sx={{
              /* clipPath: */
              width: "400px",
              height: "400px",
              backgroundColor: "red",
              clipPath: ` ${selected?.d}`,
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}></Grid>
      </Grid>
    </PageContainer>
  );
};

export default CityInfo;
