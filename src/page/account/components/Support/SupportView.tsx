import React from "react";
import {
  Box,
  Button,
  Stack,
  TextField,
  Typography,
  alpha,
  styled,
} from "@mui/material";
import { toImageUrl } from "utils/helpers/AssetHelpers";
import { Size, useWindowSize } from "utils/hooks/use_window_size";
import { renderToString } from "react-dom/server";
import IconSupport from "components/icons/support";

const Container = styled(Stack)<{ windowsize: Size }>(
  ({ theme, windowsize }) => ({
    width: "100%",
    gap: "48px",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    opacity: 0.9,
    height: `calc(${windowsize?.height}px - 220px )`,
    borderRadius: "16px",
    backgroundColor: ` ${alpha(theme.palette.warning.light, 1)} `,
  })
);

const FormContainer = styled(Stack)(({ theme }) => ({
  width: "420px",
  height: "540px",
  gap: "24px",
  /*  boxShadow: ` ${alpha(
        theme.palette.primary.contrastText,
        0.35
      )}   0px 5px 15px`, */
  borderRadius: "32px",
  padding: "32px",
  boxSizing: "border-box",
  backgroundColor: theme.palette.background.paper,
}));

const SendButton = styled(Button)(({ theme }) => ({
  height: "40px",
  border: `1px solid ${theme.palette.primary.main}`,
  borderRadius: "4px",
  padding: "8px",
  marginTop: "32px",
  "&:hover": {
    color: theme.palette.primary.light,
    border: `none`,
    backgroundColor: "#DA8C76",
  },
}));

const SupportView = () => {
  const windowsize: Size = useWindowSize();
  return (
    <Container windowsize={windowsize}>
      <FormContainer>
        <Stack gap={"4px"} width={"100%"} alignItems={"center"}>
          <Typography variant="h6" marginBottom={"24px"} fontWeight={700}>
            Contact us
          </Typography>
          <Typography variant="caption">
            You can send us your questions by filling out the form below. You
            will be answered as soon as possible. Fields with an asterisk (*)
            are required.
          </Typography>
        </Stack>

        <Stack gap={"4px"}>
          <Typography variant="subtitle2">Topic title*</Typography>
          <TextField
            /*  id="" */
            placeholder="Enter..."
            fullWidth
            variant="outlined"
            size="small"
          />
        </Stack>
        <Stack gap={"4px"}>
          <Typography variant="subtitle2">Message*</Typography>
          <TextField
            /*  id="outlined-select-currency" */
            placeholder="Enter..."
            fullWidth
            maxRows={6}
            minRows={6}
            multiline
            variant="outlined"
            size="small"
          />
        </Stack>

        <SendButton>Sent</SendButton>
      </FormContainer>

      {/*   <IconSupport
            sx={{
              width: "350px",
              height: "399px",
            }}
      
          /> */}
    </Container>
  );
};

export default SupportView;
