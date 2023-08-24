import { TextField, styled } from "@mui/material";

export const StyledTextField = styled(TextField)(({ theme }) => ({
  "& Input": {
    backgroundColor: "transparent",
    "&:-webkit-autofill": {
      transitionDelay: "9999s",
      transitionProperty: "background-color,transparent ",
    },
  },
}));
