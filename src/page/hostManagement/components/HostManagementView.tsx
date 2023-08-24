import React from "react";
import { Stack, Typography, Button } from "@mui/material";
import { CustomStyleButton } from "components/buttons/CustomButton";
import { useTheme } from "layouts/theme/ThemeContext";
import NewHostForm from "./NewHostForm";

const HostManagementView = () => {
  const { theme } = useTheme();
  return (
    <Stack>
      <Stack
        width={"100%"}
        justifyContent={"space-between"}
        alignItems={"center"}
        direction={"row"}
      >
        <Stack>
          <Typography fontWeight={700} variant="body1">
            Automation Hosts
          </Typography>
          <Typography
            sx={{ color: theme.palette.secondary.main }}
            fontWeight={700}
            variant="caption"
          >
            total 0 host
          </Typography>
        </Stack>
        <NewHostForm />
      </Stack>
    </Stack>
  );
};

export default HostManagementView;
