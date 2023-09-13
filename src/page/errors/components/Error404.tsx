import { FC } from "react";
import { Link } from "react-router-dom";
import { toImageUrl } from "utils/helpers/AssetHelpers";
import "../styles/ErrorStyles.scss";
import { useStores } from "utils/hooks/use_store";
import { observer } from "mobx-react";
import { Stack, Typography } from "@mui/material";
import { useTheme } from "layouts/theme/ThemeContext";

const Error404: FC = observer(() => {
  const { theme } = useTheme();
  const { mainStore } = useStores();
  return (
    <Stack
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: " 100vh",
        width: " 100%",
        gap: "16px",
        background:
          " radial-gradient(circle,rgba(47, 47, 69, 1) 0%, rgba(30, 30, 44, 1) 100%)",
      }}
    >
      {/* <img
        className="imgStyles"
        src={toImageUrl("/media/illustrations/error/404-error.png")}
        alt=""
        style={{}}
      /> */}

      <Typography
        sx={{
          color: theme.palette.warning.dark,
          fontSize: { xs: "48px", sm: "120px", md: "240px" },
          fontWeight: 700,
        }}
      >
        404
      </Typography>
      <h1 className="descText">ERROR! PAGE NOT FOUNT</h1>
      <Link
        onClick={() => {}}
        to="/"
        className="linkStyles"
        style={{ textDecoration: "none" }}
      >
        Return Home
      </Link>
    </Stack>
  );
});

export { Error404 };
