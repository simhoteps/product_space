import React from "react";
import { styled } from "@mui/material";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";

/**
 * @param className to style the component
 */

const CustomTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip
    arrow
    disableInteractive
    classes={{ popper: className }}
    {...props}
  />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "20px",
    height: "auto",
    backgroundColor: "#616161",
    color: "#DFDCDA",
    maxWidth: "229px",
    borderRadius: "8px",
    lineHeight: "19px",
  },
}));

export default CustomTooltip;
