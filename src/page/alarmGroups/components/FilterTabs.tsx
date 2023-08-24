import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { styled } from "@mui/material";
import FilterFlow from "./flow/FilterFlow";
import NotificationFilter from "./notification/NotificationFilter";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const CustomTab = styled(Tab)(({ theme }) => ({
  textTransform: "capitalize",
  paddingRight: "24px",
  "&:focus": {
    color: theme.palette.warning.dark,
  },
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

function FilterTabs() {
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
        <CustomTab label="Create Filter" {...a11yProps(0)} />
        <CustomTab label="Notification Filter" {...a11yProps(1)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Typography color={"warning.dark"} variant="body1" fontWeight={700}>
          Create Filter
        </Typography>
        <FilterFlow />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Typography color={"warning.dark"} variant="body1" fontWeight={700}>
          Notification Filter
        </Typography>
        <NotificationFilter />
        {/*   <ShowGroup /> */}
      </TabPanel>
    </Box>
  );
}
export default FilterTabs;
