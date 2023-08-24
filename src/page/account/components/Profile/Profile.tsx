import React from "react";
import { Stack } from "@mui/material";
import SubProfile from "./SubProfile";
import PersonalInformation from "./PersonalInformation";
import Address from "./Address";

const Profile = () => {
  return (
    <Stack gap={"16px"}>
      <SubProfile />
      <PersonalInformation />
      <Address />
    </Stack>
  );
};

export default Profile;
