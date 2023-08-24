import React, { createRef, useState } from "react";
import {
  Box,
  BoxProps,
  Dialog,
  DialogProps,
  IconButton,
  IconButtonProps,
  MenuItem,
  Stack,
  Typography,
  alpha,
  styled,
} from "@mui/material";
import { IconLogoMedium } from "components/icons/Logos";
import QRCode from "react-qr-code";
import ReactToPrint, { useReactToPrint } from "react-to-print";
import PrintIcon from "@mui/icons-material/Print";
import ReportsView from "../ReportsView";
import CustomTooltip from "components/tooltip/tooltip";
import DownloadIcon from "@mui/icons-material/Download";
import CloseIcon from "@mui/icons-material/Close";
import { useTheme } from "layouts/theme/ThemeContext";

const PdfDialog = styled((props: DialogProps) => (
  <Dialog maxWidth={false} scroll={"paper"} {...props} />
))(({ theme }) => ({
  borderRadius: "8px",
  display: "flex",
  justifyContent: "center",
  flexWrap: "nowrap",
  zIndex: 2700,
  paddingRight: "8px",
  "& .MuiPaper-root": {
    maxWidth: "1800px",
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    backgroundColor: theme.palette.secondary.dark,

    "&::-webkit-scrollbar": {
      width: 4,
    },
    "&::-webkit-scrollbar-thumb:vertical": {
      borderRadius: 10,
      width: 3,
      backgroundColor: theme.palette.primary.main,
    },
    "&::-webkit-scrollbar-track:vertical": {
      borderRadius: 10,
      backgroundColor: theme.palette.primary.light,
    },
  },
  "& .MuiModal-root": {
    maxWidth: "1800px",
  },
}));

const PdfA4Container = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  width: "1028px",
  height: "1400px",
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  borderRadius: "4px",
  color: theme.palette.text.secondary,
  padding: "32px",
  boxSizing: "border-box",
}));

const OverlayButton = styled((props: IconButtonProps) => (
  <IconButton disableRipple {...props} />
))(({}) => ({
  borderRadius: "4px",
}));

interface PdfHeadingProps extends BoxProps {
  name: string;

  qrCode?: any;
}
interface PdfFooterProps extends BoxProps {
  userName?: string;
}
const PdfHeading = styled(({ name, qrCode, ...props }: PdfHeadingProps) => (
  <Box {...props}>
    <Box display="flex" alignItems="center" gap="10px">
      {props.children}
      <Typography
        variant="h6"
        fontWeight={700}
        color="text.secondary"
        sx={{ "& span": { color: "secondary.main" } }}
      >
        {name}
      </Typography>
    </Box>
    {qrCode}
  </Box>
))(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  borderBottom: "1px solid",
  borderColor: alpha(theme.palette.primary.dark, 0.6),
  paddingBottom: "8px",
}));

const PdfFooter = styled(({ userName, ...props }: PdfFooterProps) => (
  <Box {...props}>
    <Typography fontSize={9} color="text.secondary" flex={1}>
      {new Date().toLocaleDateString()}
    </Typography>
  </Box>
))(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  paddingY: "8px",
  color: theme.palette.secondary.main,
}));

const ChartsPrint = () => {
  const { theme } = useTheme();
  const [openPrint, setOpenPrint] = useState(false);
  const imagePrintRef = createRef<HTMLElement>();
  const handlePrint = useReactToPrint({
    content: () => imagePrintRef.current,
  });

  return (
    <Stack>
      <Stack direction={"row"} alignItems={"center"} gap={"4px"}>
        <CustomTooltip
          children={
            <IconButton
              onClick={() => {
                setOpenPrint(true);
              }}
            >
              <PrintIcon color="primary" />
            </IconButton>
          }
          title={"Charts Print"}
        />
        <CustomTooltip
          children={
            <IconButton
              onClick={() => {
                setOpenPrint(true);
              }}
            >
              <DownloadIcon color="primary" />
            </IconButton>
          }
          title={"Download Charts"}
        />
      </Stack>

      <PdfDialog
        open={openPrint}
        onClose={() => {
          setOpenPrint(false);
        }}
      >
        <PdfA4Container ref={imagePrintRef}>
          <PdfHeading
            name={"Print Chart"}
            qrCode={<QRCode value={"deneme"} size={64} />}
          >
            <IconLogoMedium />
          </PdfHeading>
          <ReportsView />
          <PdfFooter id="printfooter" userName={"info@robence.com"} />
        </PdfA4Container>
        <Box pr={5}>
          <Box
            display="flex"
            flexDirection="column"
            gap={1}
            mt={1}
            mx={"3px"}
            position="fixed"
          >
            <OverlayButton
              onClick={() => {
                setOpenPrint(false);
              }}
            >
              <CloseIcon
                sx={{ color: theme.palette.background.paper }}
                fontSize="small"
              />
            </OverlayButton>
            <OverlayButton onClick={handlePrint}>
              <DownloadIcon
                sx={{ color: theme.palette.background.paper }}
                fontSize="small"
              />
            </OverlayButton>
            <OverlayButton onClick={handlePrint}>
              <PrintIcon
                sx={{ color: theme.palette.background.paper }}
                fontSize="small"
              />
            </OverlayButton>
          </Box>
        </Box>
      </PdfDialog>
    </Stack>
  );
};

export default ChartsPrint;
