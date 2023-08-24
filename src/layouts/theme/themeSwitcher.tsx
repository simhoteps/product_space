// ThemeSwitcher.ts
import React, { useEffect } from "react";
import { IconButton } from "@mui/material";
import { useTheme } from "./ThemeContext";
import darkTheme from "./dark";
import lightTheme from "./light";
import CustomTooltip from "../../components/tooltip/tooltip";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

const ThemeSwitcher = () => {
  const { theme, setCurrentTheme } = useTheme();

  const setThemeFromString = (themeName: string | null) => {
    switch (themeName) {
      case "dark":
        setCurrentTheme(darkTheme);
        break;
      case "light":
        setCurrentTheme(lightTheme);
        break;
      default:
        setCurrentTheme(lightTheme);
        break;
    }
  };
  setThemeFromString(localStorage.getItem("theme"));

  const switchTheme = () => {
    switch (theme) {
      case lightTheme:
        setCurrentTheme(darkTheme);
        localStorage.setItem("theme", "dark");
        break;
      case darkTheme:
        setCurrentTheme(lightTheme);
        localStorage.setItem("theme", "light");
        break;
    }
  };

  return (
    <CustomTooltip
      title={
        localStorage.getItem("theme") === "light"
          ? "Switch to dark"
          : "Switch to light "
      }
      placement="bottom"
    >
      <IconButton
        disableRipple
        onClick={switchTheme}
        sx={{
          width: 30,
          height: 30,
        }}
      >
        {localStorage.getItem("theme") === "light" ? (
          <LightModeIcon sx={{ fontSize: "18px" }} />
        ) : localStorage.getItem("theme") === "dark" ? (
          <DarkModeIcon sx={{ fontSize: "18px" }} />
        ) : (
          <LightModeIcon sx={{ fontSize: "18px" }} />
        )}
      </IconButton>
    </CustomTooltip>
  );
};

export default ThemeSwitcher;
