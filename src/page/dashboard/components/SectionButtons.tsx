import React, { ReactNode, useContext, useState } from "react";
import {
  Stack,
  Divider,
  Button,
  Typography,
  IconButton,
  styled,
  alpha,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import {
  IconEconomicStructure,
  IconGrowthOpportunities,
  IconMarketDynamics,
  IconProductSpace,
  IconStrategySpace,
} from "components/icons/Economy";
import { useTheme } from "layouts/theme/ThemeContext";
import { cityContext } from "context/CityProvider";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react";
import { useStores } from "utils/hooks/use_store";

const SubButton = styled(Button)<{ isSelect: boolean }>(
  ({ theme, isSelect }) => ({
    ...theme.typography.caption,
    textTransform: "none",
    padding: "8px",
    color: theme.palette.primary.dark,
    /*     boxShadow: `${alpha(
      theme.palette.primary.contrastText,
      0.1
    )} 0px 2px 8px 0px`, */
    fontWeight: isSelect ? 700 : 400,
    backgroundColor: isSelect ? theme.palette.warning.main : "transparent",

    "&:hover": {
      fontWeight: 700,
      color: theme.palette.primary.dark,
      boxShadow: `${alpha(
        theme.palette.primary.contrastText,
        0.3
      )} 0px 2px 8px 0px`,
    },
  })
);
const ButtonsBloks = ({
  title,
  icon,
  onClick,
  isSelect,
}: {
  title: string;
  icon: ReactNode;
  onClick: () => void;
  isSelect?: boolean;
}) => {
  const { theme } = useTheme();
  return (
    <Stack onClick={onClick} alignItems={"center"} gap={"4px"}>
      <IconButton
        sx={{
          backgroundColor: isSelect
            ? theme.palette.warning.main
            : "transparent",
          padding: "16px",
          "&:hover": {
            backgroundColor: theme.palette.warning.main,
          },
        }}
      >
        {icon}
      </IconButton>
      <Typography align="center" letterSpacing="0.1px" variant="overline">
        {title}
      </Typography>
    </Stack>
  );
};

const buttonArr = [
  {
    name: "currentStatus",
    icon: (
      <IconMarketDynamics
        sx={{
          width: { xs: "24px ", sm: "42px" },
          height: { xs: "24px ", sm: "42px" },
        }}
      />
    ),
    subButton: [
      "averageUniquityDiversity",
      "openForestAverageUbiquity",
      "openForestDiversity",
      "grossDomesticProductSophistication",
      "economicComplexity",
    ],
  },
  {
    name: "economicStructure",
    icon: (
      <IconEconomicStructure
        sx={{
          width: { xs: "24px ", sm: "42px" },
          height: { xs: "24px ", sm: "42px" },
        }}
      />
    ),
    subButton: [
      "specilizationofProductStructure",
      "complexityofProductStructure",
      "specilizationinExport",
      "complexityofExportStructure",
      "complexityofExportBasket",
    ],
  },
  {
    name: "productSpace",
    icon: (
      <IconProductSpace
        sx={{
          width: { xs: "24px ", sm: "42px" },
          height: { xs: "24px ", sm: "42px" },
        }}
      />
    ),
    subButton: ["whatIstheProductSpace", "productSpace"],
  },
  {
    name: "strategies",
    icon: (
      <IconStrategySpace
        sx={{
          width: { xs: "24px ", sm: "42px" },
          height: { xs: "24px ", sm: "42px" },
        }}
      />
    ),
    subButton: [
      "efficientFrontier",
      "potentialGrowth",
      "recommendedStrategicApproach",
      "latentSectorOpportunities",
    ],
  },

  /*
    {
    name: "marketDynamics",
    icon: (
      <IconMarketDynamics
        sx={{
          width: { xs: "24px ", sm: "42px" },
          height: { xs: "24px ", sm: "42px" },
        }}
      />
    ),
    subButton: [
      "exportGrowthDynamics",
      "growthinGlobalMarketShare",
      "diversificationIntoNewProducts",
    ],
  },   
  {
    name: "growthOpportunities",
    icon: (
      <IconGrowthOpportunities
        sx={{
          width: { xs: "24px ", sm: "42px" },
          height: { xs: "24px ", sm: "42px" },
        }}
      />
    ),
    subButton: [
      "potentialGrowthOpportunities",
      "newProductOpportunities",
      "summary",
    ],
  }, */
];

export const SectionButtons = observer(() => {
  const navigate = useNavigate();
  const { mainStore } = useStores();
  const { t } = useTranslation();
  const { citiesValue, setFilter, setSubFilter } = useContext(cityContext);
  return (
    <Stack gap={"16px"} width={"100%"}>
      <Stack gap={"16px"} width={"100%"}>
        <Divider>
          <Typography variant="subtitle2">
            {t("homeMap.specificSection")}
          </Typography>
        </Divider>

        <Stack direction={"row"} gap={"16px"} justifyContent={"space-between"}>
          {buttonArr.map((item, i) => {
            return (
              <ButtonsBloks
                key={`sidebarTabs.${i}`}
                title={t(`sidebarTabs.${item.name}`)}
                icon={item.icon}
                /*    isSelect={openFilter === item.name} */
                onClick={() => {
                  navigate(
                    `/dashboard/map/${mainStore.selectCitiesValue?.city}`
                  );
                  setFilter(item.name);
                  setSubFilter(item.subButton[0]);
                }}
              />
            );
          })}
        </Stack>
      </Stack>
    </Stack>
  );
});

export const SectionDashButtons = () => {
  const { t } = useTranslation();
  const { openFilter, setFilter, openSubFilter, setSubFilter } =
    useContext(cityContext);
  return (
    <Stack gap={"16px"} width={"100%"}>
      <Stack gap={"16px"} width={"100%"}>
        <Stack direction={"row"} gap={"16px"} justifyContent={"space-between"}>
          {buttonArr.map((item) => {
            return (
              <ButtonsBloks
                key={`sidebarTabs.${item.name}`}
                title={t(`sidebarTabs.${item.name}`)}
                icon={item.icon}
                isSelect={openFilter === item.name}
                onClick={() => {
                  openFilter === item.name
                    ? setFilter("")
                    : setFilter(item.name);
                }}
              />
            );
          })}
        </Stack>
      </Stack>
      {buttonArr.map((item) => {
        return (
          <>
            {openFilter === item.name && (
              <Stack key={`sidebarTabs.${item.name}`} gap={"16px"}>
                <Divider>
                  <Typography variant="subtitle2">
                    {t(`sidebarTabs.${item.name}`)}
                  </Typography>
                </Divider>
                <Stack direction={"row"} gap={"16px"} width={"100%"}>
                  {item.subButton.map((sub) => {
                    return (
                      <SubButton
                        isSelect={sub === openSubFilter}
                        onClick={() => {
                          setSubFilter(sub);
                        }}
                      >
                        {t(`sidebarTabs.${sub}`)}
                      </SubButton>
                    );
                  })}
                </Stack>
                <Divider />
              </Stack>
            )}
          </>
        );
      })}
    </Stack>
  );
};
