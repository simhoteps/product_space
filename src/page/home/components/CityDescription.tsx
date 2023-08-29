import * as React from "react";

import Autocomplete from "@mui/material/Autocomplete";
import { turkeyCity } from "../data/MapData";
import { Box, Stack, TextField, Typography, styled } from "@mui/material";
import { Size, useWindowSize } from "utils/hooks/use_window_size";
import { SectionButtons } from "./SectionButtons";
import CityAutocomplete from "./CityAutocomplete";
import { CustomStyleButton } from "components/buttons/CustomButton";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { cityContext } from "context/CityProvider";

const TextBorder = styled(Box)<{ windowsize: Size }>(
  ({ theme, windowsize }) => ({
    border: `1px solid ${theme.palette.primary.main}`,
    padding: "8px",
    borderRadius: "8px",
    height: `calc(${windowsize?.height}px - 420px)`,
  })
);

const TextCotaniner = styled(Stack)(({ theme }) => ({
  width: "100%",
  padding: "4px 0px",
  height: `100%`,
  boxSizing: "border-box",
  overflowY: "auto",
  gap: "8px",
  "&::-webkit-scrollbar": {
    width: 6,
  },

  "&::-webkit-scrollbar-thumb:vertical": {
    borderRadius: 4,
    background: theme.palette.primary.main,
  },

  "&::-webkit-scrollbar-track:vertical": {
    borderRadius: 4,
    background: "transparent",
  },
}));

const CityDescription = () => {
  const windowsize: Size = useWindowSize();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { citiesValue, setFilter, setSubFilter } =
    React.useContext(cityContext);

  return (
    <Stack gap={"16px"}>
      <CityAutocomplete />
      <TextBorder windowsize={windowsize}>
        <TextCotaniner>
          <Typography variant="body2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Typography>
          <Typography variant="body2">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.10.32.{" "}
          </Typography>
          <Typography variant="body2">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).{" "}
          </Typography>
        </TextCotaniner>
      </TextBorder>
      <CustomStyleButton
        onClick={() => {
          setFilter("economicStructure");
          setSubFilter("exportBasket");
          navigate(`/home/map/${citiesValue?.city}`);
        }}
      >
        {t("buttons.searchForDetails")}
      </CustomStyleButton>

      <SectionButtons />
    </Stack>
  );
};

export default CityDescription;
