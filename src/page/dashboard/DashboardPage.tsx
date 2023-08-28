import React, { useContext } from "react";
import PageContainer from "components/box/PageContainer";
import { Stack } from "@mui/material";
import { useTheme } from "layouts/theme/ThemeContext";
import { useTranslation } from "react-i18next";

const DashboardPage = () => {
  const { theme } = useTheme();

  return (
    <PageContainer>
      <Stack gap={"16px"}></Stack>
    </PageContainer>
  );
};

export default DashboardPage;
