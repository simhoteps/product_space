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
  IconStrategySpace,
} from "components/icons/Economy";
import { useTheme } from "layouts/theme/ThemeContext";
import { cityContext } from "context/CityProvider";
import { useNavigate } from "react-router-dom";

const SubButton = styled(Button)<{ isSelect: boolean }>(
  ({ theme, isSelect }) => ({
    ...theme.typography.caption,
    textTransform: "none",
    padding: "8px",
    color: theme.palette.primary.dark,
    boxShadow: `${alpha(
      theme.palette.primary.contrastText,
      0.1
    )} 0px 2px 8px 0px`,
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
    name: "economicStructure",
    icon: <IconEconomicStructure sx={{ width: "42px", height: "42px" }} />,
    subButton: ["Introduction", "exportBasket", "exportComplexity"],
  },
  {
    name: "marketDynamics",
    icon: <IconMarketDynamics sx={{ width: "42px", height: "42px" }} />,
    subButton: [
      "exportGrowthDynamics",
      "growthinGlobalMarketShare",
      "diversificationIntoNewProducts",
    ],
  },
  {
    name: "strategySpace",
    icon: <IconStrategySpace sx={{ width: "42px", height: "42px" }} />,
    subButton: [
      "whatIstheProductSpace",
      "productSpace",
      "EcommendedStrategicApproach",
    ],
  },
  {
    name: "growthOpportunities",
    icon: <IconGrowthOpportunities sx={{ width: "42px", height: "42px" }} />,
    subButton: [
      "potentialGrowthOpportunities",
      "newProductOpportunities",
      "summary",
    ],
  },
];

export const SectionButtons = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { citiesValue, openFilter, setFilter, openSubFilter, setSubFilter } =
    useContext(cityContext);
  return (
    <Stack gap={"16px"} width={"100%"}>
      <Stack gap={"16px"} width={"100%"}>
        <Divider>
          <Typography variant="subtitle2">
            {t("homeMap.specificSection")}
          </Typography>
        </Divider>

        <Stack direction={"row"} gap={"16px"} justifyContent={"space-between"}>
          {buttonArr.map((item) => {
            return (
              <ButtonsBloks
                title={t(`homeMap.${item.name}`)}
                icon={item.icon}
                /*    isSelect={openFilter === item.name} */
                onClick={() => {
                  navigate(`/home/map/${citiesValue?.city}`);
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
};

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
                title={t(`homeMap.${item.name}`)}
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
              <Stack gap={"16px"}>
                <Divider>
                  <Typography variant="subtitle2">
                    {t(`homeMap.${item.name}`)}
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
                        {t(`homeMap.${sub}`)}
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
