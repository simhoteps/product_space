import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { styled } from "@mui/material";
import Profile from "./Profile/Profile";
import SupportView from "./Support/SupportView";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const CustomTab = styled(Tab)(({ theme }) => ({
  textTransform: "lowercase",
  paddingRight: "24px",
}));

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      style={{ width: "100%" }}
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box
          sx={{
            padding: "10px 30px",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "32px",
          }}
        >
          {children}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        height: 224,
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{
          borderRight: 1,
          borderColor: "divider",
          minWidth: "140px",
        }}
      >
        <CustomTab label="My Profile" {...a11yProps(0)} />
        <CustomTab label="Security" {...a11yProps(1)} />
        <CustomTab label="Teams" {...a11yProps(2)} />
        <CustomTab label="Billing" {...a11yProps(3)} />
        <CustomTab label="Support" {...a11yProps(4)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Typography variant="body1" fontWeight={700}>
          My Profile
        </Typography>
        <Profile />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Typography variant="body1" fontWeight={700}>
          Security
        </Typography>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Typography variant="body1" fontWeight={700}>
          Teams
        </Typography>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Typography variant="body1" fontWeight={700}>
          Billing
        </Typography>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Typography variant="body1" fontWeight={700}>
          Support
        </Typography>
        <SupportView />
      </TabPanel>
    </Box>
  );
}
