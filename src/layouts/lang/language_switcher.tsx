import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "layouts/theme/ThemeContext";
import { MenuItem, Stack, Typography } from "@mui/material";
import HeadersMenu from "components/menu/HeaderMenu";
import PublicIcon from "@mui/icons-material/Public";
import "./config";

function LanguageSwitcher() {
  const { theme } = useTheme();
  const { t } = useTranslation();
  const { i18n } = useTranslation("language");
  const [selectLang, setSelect] = useState<string>("tr");

  const arrLang = [
    { name: "Türkçe", label: "tr" },
    { name: "english ", label: "en" },
  ];

  return (
    <div>
      <HeadersMenu
        tooltipName={t("header.language")}
        buttonChild={
          <Stack alignItems={"center"} direction={"row"} gap={"4px"}>
            <PublicIcon sx={{ fontSize: "16px" }} />

            {/*    <Typography variant="subtitle2">{selectLang}</Typography> */}
          </Stack>
        }
        menuChild={
          <Stack
            sx={{
              width: "54px",
              padding: "4px",
            }}
          >
            {arrLang.map((lang) => {
              return (
                <MenuItem
                  key={lang.name}
                  onClick={() => {
                    i18n.changeLanguage(lang.label);
                    setSelect(lang.label);
                  }}
                >
                  <Typography variant="body2">{lang.label}</Typography>
                </MenuItem>
              );
            })}
          </Stack>
        }
      />
      {/*    <Grid container justifyContent="center" alignItems="baseline">
        <CustomButton
          sx={{
            color: theme.palette.text.disabled,
            fontSize: "13px",
            fontFamily: "Nunito ",
          }}
          onClick={() => i18n.changeLanguage("en")}
        >
          en
        </CustomButton>
        <br />
        <Typography
          sx={{
            color: theme.palette.text.disabled,
            fontSize: "13px",
            marginLeft: "5px",
            fontFamily: "Nunito ",
          }}
        >
          |
        </Typography>
        <CustomButton
          sx={{
            color: theme.palette.text.disabled,
            fontSize: "13px",
            marginLeft: "5px",
            fontFamily: "Nunito ",
          }}
          onClick={() => i18n.changeLanguage("tr")}
        >
          tr
        </CustomButton>
      </Grid> */}
    </div>
  );
}
export default LanguageSwitcher;
