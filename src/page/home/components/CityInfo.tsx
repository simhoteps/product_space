import * as React from "react";

import Autocomplete from "@mui/material/Autocomplete";
import { turkeyCity } from "../data/MapData";
import { Box, Stack, TextField, Typography, styled } from "@mui/material";
import { Size, useWindowSize } from "utils/hooks/use_window_size";
import SectionButtons from "./SectionButtons";
import { IMapData } from "../types/types";

function CountrySelect() {
  return (
    <Autocomplete
      id="country-select-demo"
      options={turkeyCity}
      autoHighlight
      getOptionLabel={(option) => option.city}
      renderOption={(props, option) => (
        <Box
          component="li"
          sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
          {...props}
        >
          {option.name} ({option.plateCode})
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          fullWidth
          size="small"
          label="Choose a city"
          variant="outlined"
          InputLabelProps={{
            children: "Choose a city",
          }}
        />
      )}
    />
  );
}

const TextBorder = styled(Box)<{ windowsize: Size }>(
  ({ theme, windowsize }) => ({
    border: `1px solid ${theme.palette.primary.main}`,
    padding: "8px",
    borderRadius: "8px",
    height: `calc(${windowsize?.height}px - 400px)`,
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

const CityInfo = ({
  value,
  setValue,
  inputValue,
  setInputValue,
}: {
  value: IMapData | null;
  setValue: React.Dispatch<React.SetStateAction<IMapData | null>>;
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const windowsize: Size = useWindowSize();

  return (
    <Stack gap={"24px"}>
      <Autocomplete
        id="turkey_city_autocomplete"
        options={turkeyCity}
        value={value}
        autoHighlight
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        onChange={(event: any, newValue: IMapData | null) => {
          setValue(newValue);
        }}
        getOptionLabel={(option) => option.city}
        renderOption={(props, option) => (
          <Box
            component="li"
            sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
            {...props}
          >
            {option.name} ({option.plateCode})
          </Box>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            fullWidth
            size="small"
            label="Choose a city"
            variant="outlined"
            InputLabelProps={{
              children: "Choose a city",
            }}
          />
        )}
      />
      <TextBorder windowsize={windowsize}>
        <TextCotaniner>
          <Typography variant="subtitle1">
            Byzantion, MS. 4. yy’a kadar önemsiz bir şehir olarak kalır.
            Byzantion’un kaderi 312 yılında Konstantin’in İmparator olmasıyla
            değişir. Konstantin’in annesi Helena iyi bir Hristiyan’dır. Oğluna
            sürekli Hristiyanlıktan bahseder ve onun için dua eder. Konstantin,
            taht kavgaları sırasındaki son savaşından önce, gördüğü bir görüm
            dolayısıyla Hristiyanlığa sıcak bakmaya başlar. Sonrasında
            Hristiyanlara dini özgürlük verecek olan Milano Fermanı’nı imzalar.
            Bu fermanla Hristiyanların 300 yıl boyunca uğradıkları zulüm sona
            erer ve bu Konstantin’in en büyük başarılarından biridir.
          </Typography>
          <Typography variant="subtitle1">
            Konstantin’in büyük bir projesi daha vardır. Bu proje,
            imparatorluğun başkentini başka bir yere taşımaktır. Bunun nedeni
            Roma’nın kuzeyden gelebilecek olan barbar akınlarına karşı
            savunmasız olmasıdır. Bu doğrultuda, bugünkü İzmit bölgesi olan
            Nikomedia’yı, Truva’yı ve bugünkü İstanbul olan Byzantion’u düşünür.
            Konstantin Byzantion’da karar kılar. Byzantion’da karar kılmasındaki
            en büyük nedenlerinden biri, Byzantion’un konumudur. Marmara Denizi,
            Boğaz ve Haliç dolayısıyla yarımada olması, Roma gibi yedi tepeden
            oluşması, ticaret yollarının kontrolünü sağlamaktaki eşsiz avantajı,
            Konstantin’in kararında etkili olur. Şehrin büyümeye, değişime ve
            gelişmeye açık olması da başka bir motivasyon olur. Çünkü Roma’nın
            pagan mirasını yok etmek yerine yeni bir başkenti doğrudan Hristiyan
            bir şehir olarak inşa etme şansı vardır.
          </Typography>
          <Typography variant="subtitle1">
            Konstantin 330 yılında Roma İmparatorluğu’nun başkentini Byzantion’a
            taşır ve şehrin ismini Nova Roma yani, Yeni Roma, koyar.
            Konstantin’in ölümünden sonra şehir Konstantinopolis ismini alır.
            Konstantinopolis yeni bir çağın yeni başkenti olur.
          </Typography>
        </TextCotaniner>
      </TextBorder>

      <SectionButtons />
    </Stack>
  );
};

export default CityInfo;
