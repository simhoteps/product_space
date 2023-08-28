import React, { useContext, useRef, useState } from "react";
import { styled, Stack, Tab, Tabs, alpha, Typography } from "@mui/material";
import { useResponsiveBreakpoints } from "utils/hooks/useResponsiveBreakpoints";
import { customerContext } from "context/CustomerProvider";
import { ICustomer } from "context/TypeContext";

const TabContent = styled(Stack)(({ theme }) => ({
  width: "100%",
  flexDirection: "row",
  alignItems: "center",
  padding: "8px",
  boxShadow: ` ${alpha(
    theme.palette.primary.contrastText,
    0.1
  )} 0px 10px 10px -10px`,
}));

interface StyledTabsProps {
  children?: React.ReactNode;
  value: number;
  customWidth: number;

  onChange: (event: React.SyntheticEvent, newValue: number) => void;
}

const StyledTabs = styled((props: StyledTabsProps) => (
  <Tabs
    {...props}
    variant="scrollable"
    scrollButtons
    sx={{
      maxWidth: `calc(${props.customWidth}px-120px )`,
      width: `calc(${props.customWidth}px-120px )`,
    }}
    allowScrollButtonsMobile
    aria-label="scrollable force tabs example"
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))(({ theme }) => ({
  minWidth: "250px",
  display: "flex",
  alignItems: "center",
  minHeight: "24px",
  "& .MuiTabs-indicator": {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  "& .MuiTabs-indicatorSpan": {
    maxWidth: 40,
    width: "100%",
    backgroundColor: "transparent",
  },
  "& .MuiTabScrollButton-root": {
    height: "36px",
    maxHeight: "36px",
    minHeight: "36px",
  },
}));

interface StyledTabProps {
  label: string;
  setOnClick?: () => void;
}

const StyledTab = styled((props: StyledTabProps) => (
  <Tab onClick={props.setOnClick} disableRipple {...props} />
))(({ theme }) => ({
  ...theme.typography.subtitle2,
  textTransform: "none",
  height: "32px",
  maxHeight: "32px",
  minHeight: "32px",
  fontWeight: 400,
  fontSize: theme.typography.pxToRem(15),
  marginRight: theme.spacing(1),
  color: theme.palette.text.primary,
  "&.Mui-selected": {
    ...theme.typography.subtitle2,
    borderRadius: "50px",
    /*   backgroundColor: theme.palette.success.main, */
    fontWeight: 700,
    backgroundColor: `${alpha(theme.palette.warning.dark, 0.8)} `,
    color: theme.palette.background.paper,
  },
  /*   "&.Mui-focusVisible": {
    backgroundColor: "rgba(100, 95, 228, 0.32)",
  }, */
}));

export default function CustomerTab() {
  const [value, setValue] = useState<number>(0);
  const customerContainerRef = useRef<HTMLDivElement>(null);
  const customerContainerWidth = useResponsiveBreakpoints(customerContainerRef);
  const { customers, selectCustomer, setSelectCustomer, setLoadingCustomer } =
    useContext(customerContext);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleLoading = () => {
    setLoadingCustomer(true);
    setTimeout(() => {
      setLoadingCustomer(false);
    }, 500);
  };

  return (
    <TabContent ref={customerContainerRef}>
      <Typography variant="subtitle2">Customers : </Typography>
      <StyledTabs
        value={value}
        onChange={handleChange}
        customWidth={customerContainerWidth}
      >
        {customers.map((item: ICustomer) => {
          return (
            <StyledTab
              setOnClick={() => {
                setSelectCustomer(item);
                handleLoading();
              }}
              key={`customers${item.name}`}
              label={item.name}
            />
          );
        })}
      </StyledTabs>
    </TabContent>
  );
}
