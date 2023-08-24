import { Avatar, Stack, Box, Typography, styled } from "@mui/material";
import { EditButton } from "./EditButton";

const Container = styled(Stack)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  padding: "30px ",
  border: `1px solid ${theme.palette.primary.light}`,
  borderRadius: "16px",
}));

const SubProfile = () => {
  return (
    <Container>
      <Stack direction={"row"} gap={"16px"}>
        <Avatar sx={{ width: "72px", height: "72px" }}>D</Avatar>
        <Box>
          <Typography variant="subtitle2">Devon Lane</Typography>
          <Typography variant="body2">Team Meneger</Typography>
          <Typography variant="caption">Leed, United Kingdom </Typography>
        </Box>
      </Stack>
      <EditButton />
    </Container>
  );
};

export default SubProfile;
