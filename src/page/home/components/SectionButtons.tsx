import React, { ReactNode } from "react";
import { Stack, Divider, Button, Typography, IconButton } from "@mui/material";
import { useTranslation } from "react-i18next";
import {
  IconEconomicStructure,
  IconGrowthOpportunities,
  IconMarketDynamics,
  IconStrategySpace,
} from "components/icons/Economy";

const ButtonsBloks = ({ title, icon }: { title: string; icon: ReactNode }) => {
  return (
    <Stack alignItems={"center"} gap={"8px"}>
      <IconButton sx={{ padding: "16px" }}>{icon}</IconButton>
      <Typography letterSpacing="0.1px" variant="overline">
        {title}
      </Typography>
    </Stack>
  );
};

const SectionButtons = () => {
  const { t } = useTranslation();
  return (
    <Stack gap={"16px"}>
      <Divider>
        <Typography variant="subtitle2">
          {t("homeMap.specificSection")}
        </Typography>
      </Divider>
      <Stack direction={"row"} justifyContent={"space-between"}>
        <ButtonsBloks
          title={t("homeMap.economicStructure")}
          icon={
            <IconEconomicStructure sx={{ width: "42px", height: "42px" }} />
          }
        />
        <ButtonsBloks
          title={t("homeMap.marketDynamics")}
          icon={<IconMarketDynamics sx={{ width: "42px", height: "42px" }} />}
        />
        <ButtonsBloks
          title={t("homeMap.strategySpace")}
          icon={<IconStrategySpace sx={{ width: "42px", height: "42px" }} />}
        />
        <ButtonsBloks
          title={t("homeMap.growthOpportunities")}
          icon={
            <IconGrowthOpportunities sx={{ width: "42px", height: "42px" }} />
          }
        />
      </Stack>
    </Stack>
  );
};

export default SectionButtons;
