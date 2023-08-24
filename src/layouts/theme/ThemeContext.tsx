// ThemeContext.ts
import React, { useState, useContext, Dispatch, SetStateAction } from "react";
import { Theme } from "@mui/material";
import lightTheme from "./light";

interface ThemeContextProps {
  theme: Theme;
  setCurrentTheme: Dispatch<SetStateAction<Theme>>;
}

export const ThemeContext = React.createContext<ThemeContextProps>({
  theme: lightTheme,
  setCurrentTheme: () => {},
} as ThemeContextProps);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentTheme, setCurrentTheme] = useState<Theme>(lightTheme);

  return (
    <ThemeContext.Provider
      value={{
        theme: currentTheme,
        setCurrentTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
