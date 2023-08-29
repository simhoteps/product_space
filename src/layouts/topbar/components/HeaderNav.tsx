import React from "react";
import { Stack, styled, Button, alpha } from "@mui/material";
import { useTranslation } from "react-i18next";

const CustomButton = styled(Button)(({ theme }) => ({
  display: "flex",
  backgroundColor: "transparent",
  textTransform: "capitalize",
  color: ` ${alpha(theme.palette.primary.dark, 0.65)}`,

  "&:hover": {
    color: theme.palette.primary.dark,
    fontWeight: 700,
    backgroundColor: "transparent",
  },
}));

const RowBox = styled(Stack)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "8px",
}));

const HeaderNav = () => {
  const { t } = useTranslation();
  return (
    <RowBox>
      <CustomButton> {t("topbar.explore")}</CustomButton>
      <CustomButton> {t("topbar.data")}</CustomButton>
      <CustomButton> {t("topbar.publication")}</CustomButton>
      <CustomButton> {t("topbar.about")}</CustomButton>
    </RowBox>
  );
};

export default HeaderNav;
