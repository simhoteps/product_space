import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { Box, Stack } from "@mui/material";
import { useTheme } from "layouts/theme/ThemeContext";
import "./style.css";

export default function CustomLoading() {
  const [progress, setProgress] = React.useState(0);
  const { theme } = useTheme();

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 10
      );
    }, 150);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <Stack
      sx={{
        width: "100%",
        alignItems: "center",
        height: "50vh",
        justifyContent: "center",
      }}
    >
      <Stack>
        <CircularProgress
          size={"100px"}
          sx={{
            color: theme.palette.primary.main,
          }}
          value={progress}
        />
      </Stack>
    </Stack>
  );
}
