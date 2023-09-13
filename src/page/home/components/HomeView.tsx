import React from "react";
import {
  IconCukurOva,
  IconKalkinmaAjansi,
  IconKalkinmaAjansiFull,
  IconMersin,
  IconSanayiBakanligi,
  IconTrakya,
} from "components/icons/AjansIcon";
import { Divider, Stack, Typography, alpha } from "@mui/material";
import MapsArr from "./maps/MapsArr";
import { useTheme } from "layouts/theme/ThemeContext";
import { Size, useWindowSize } from "utils/hooks/use_window_size";
import { Link } from "react-router-dom";

const sizeStyle = {
  width: "160px",
  height: "160px",
  "&:hover": {
    transition: " all .2s ease-in-out",
    transform: " scale(1.1)",
  },
};

const dataArr = [
  {
    name: "Tekno Yatırım",
    url: "https://teknoyatirim.sanayi.gov.tr/",
    img: "https://www.sanayi.gov.tr/assets/img/apps/1.png",
  },
  {
    name: "BİLTEK",
    url: "https://biltek.sanayi.gov.tr/",
    img: "https://www.sanayi.gov.tr/assets/img/apps/4.png",
  },
  {
    name: "GBS",
    url: "https://gbs.sanayi.gov.tr/",
    img: "https://www.sanayi.gov.tr/assets/img/apps/3.png",
  },
  {
    name: "ONTEK",
    url: "https://ontek.sanayi.gov.tr/login.xhtml",
    img: "https://www.sanayi.gov.tr/assets/img/apps/4.png",
  },
  {
    name: "Lonca",
    url: "https://www.lonca.gov.tr/ ",
    img: "https://www.sanayi.gov.tr/assets/img/apps/8.png",
  },
  {
    name: "Kalkınma ",
    url: "https://www.kalkinmakutuphanesi.gov.tr/",
    img: "https://www.sanayi.gov.tr/assets/img/apps/9.png",
  },
  {
    name: "KAYS",
    url: "https://kaysuygulama.sanayi.gov.tr/Kays/KaysIstemci/giris.jsp",
    img: "https://www.sanayi.gov.tr/assets/img/apps/10.png",
  },
  {
    name: "Yatırıma Destek",
    url: "https://www.yatirimadestek.gov.tr/",
    img: "https://www.sanayi.gov.tr/assets/img/apps/11.png",
  },
  {
    name: "YERSİS",
    url: "https://yersis.gov.tr/web",
    img: "https://www.sanayi.gov.tr/assets/img/apps/12.png",
  },
  {
    name: "Dijital Verimlilik Kütüphanesi",
    url: "https://verimlilikkutuphanesi.sanayi.gov.tr/",
    img: "https://www.sanayi.gov.tr/assets/img/apps/15.png",
  },
  {
    name: "Edergi",
    url: "https://edergi.sanayi.gov.tr/",
    img: "https://www.sanayi.gov.tr/assets/img/apps/14.png",
  },
  {
    name: "Verimlilik Proje Ödülleri",
    url: "https://vpo.sanayi.gov.tr/hakkinda",
    img: "https://www.sanayi.gov.tr/assets/img/apps/16.png",
  },
  /*   { name: "", url: "", img: "" }, */
];

const HomeView = () => {
  const { theme } = useTheme();
  const windowsize: Size = useWindowSize();
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.open("https://www.example.com", "_blank");
  };

  return (
    <Stack
      sx={{
        width: "100%",
        alignItems: "center",
        gap: "120px",
      }}
    >
      <Stack
        sx={{
          width: "100%",
          marginTop: "64px",

          alignItems: "center",
          justifyContent: "center",
          gap: "36px",
          /* 
          height: `calc(${windowsize?.height}px - 100px )`, */
        }}
      >
        <Stack
          sx={{
            width: "100%",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <Typography
            sx={{
              color: theme.palette.error.main,
            }}
            fontFamily={"Calistoga"}
            variant="h2"
          >
            TÜRKİYE ÜRÜN UZAYI ATLASI
          </Typography>
          <Typography
            align="center"
            sx={{
              width: "50%",
            }}
            variant="body2"
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book
          </Typography>
        </Stack>

        <Stack direction={"row"} gap="48px">
          <a
            href={"https://www.sanayi.gov.tr/anasayfa"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconSanayiBakanligi sx={sizeStyle} />
          </a>
          <a
            href={
              "https://www.sanayi.gov.tr/merkez-birimi/b94224510b7b/hakkimizda"
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconKalkinmaAjansiFull sx={sizeStyle} />
          </a>
          <a
            href={"https://www.cka.org.tr/"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconCukurOva sx={sizeStyle} />
          </a>
          <a
            href={"https://www.trakyaka.org.tr/"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconTrakya sx={sizeStyle} />
          </a>
          <a
            href={"https://www.mersin.edu.tr/"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconMersin sx={sizeStyle} />
          </a>
        </Stack>
      </Stack>
      <Stack
        sx={{
          padding: "24px 64px",
          borderRadius: "16px",
          boxShadow: `${alpha(
            theme.palette.primary.contrastText,
            0.1
          )} 0px 4px 12px`,
          width: "90%",
          alignItems: "center",
          backgroundColor: `${alpha(theme.palette.background.paper, 0.4)} `,
        }}
      >
        <Stack gap={"8px"} marginTop={"24px"} marginBottom={"48px"}>
          <Typography
            fontFamily={"Calistoga"}
            align="center"
            fontWeight={700}
            variant="h5"
            sx={{
              color: theme.palette.error.main,
            }}
          >
            COĞRAFİ İSTATİSTİKLER
          </Typography>
          <Typography align="center" variant="caption">
            Tuik, ECI , Div ve evDiv istatistiki verilerine buradan
            ulaşabilirsiniz{" "}
          </Typography>
        </Stack>

        <MapsArr />
      </Stack>
      <Stack
        sx={{
          width: "90%",
          gap: "64px",
        }}
      >
        <Typography
          fontFamily={"Calistoga"}
          align="center"
          fontWeight={700}
          variant="h6"
          sx={{
            color: theme.palette.error.main,
          }}
        >
          UYGULAMALAR
        </Typography>
        <Stack
          direction={"row"}
          gap={"24px"}
          sx={{
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            width: "100%",
          }}
        >
          {dataArr.map((item) => {
            return (
              <a
                style={{
                  textDecoration: "none",
                  color: theme.palette.primary.dark,
                }}
                key={`HomeView${item.name}`}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                /*  onClick={()=>handleLinkClick()} */
              >
                <Stack
                  sx={{
                    borderRadius: "16px",
                    padding: "16px",
                    boxShadow: `${alpha(
                      theme.palette.primary.contrastText,
                      0.1
                    )} 0px 4px 12px`,
                    backgroundColor: `${alpha(
                      theme.palette.background.paper,
                      0.4
                    )} `,
                    "&:hover": {
                      boxShadow: `${alpha(
                        theme.palette.primary.contrastText,
                        0.3
                      )} 0px 4px 12px`,
                      backgroundColor: `${alpha(
                        theme.palette.background.paper,
                        0.8
                      )} `,
                    },
                  }}
                >
                  <Typography variant="subtitle2" align="center">
                    {item.name}
                  </Typography>
                  <img width={"120px"} src={item.img} alt="" />
                </Stack>
              </a>
            );
          })}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default HomeView;
