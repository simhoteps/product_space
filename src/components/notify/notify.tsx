import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Typography } from "@mui/material";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
/**
 * @param text Content of notification
 * @param onClickSuccess Function that runs when the notification is clicked
 */

const notifySuccess = (text: string, onClickSuccess?: () => void) => {
  toast.success(
    <div onClick={onClickSuccess}>
      <Typography
        variant="caption"
        sx={{
          color: "#398E4C",
        }}
      >
        {text}
      </Typography>
    </div>,
    {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
      icon: <CheckCircleOutlineIcon sx={{ color: "#398E4C" }} />,
    }
  );
};

/**
 * @param text Content of notification
 * @param onClickWarning Function that runs when the notification is clicked
 */

const notifyWarning = (text: string, onClickWarning?: () => void) => {
  toast.warning(
    <div onClick={onClickWarning}>
      <Typography variant="caption" sx={{ color: "#F54F29" }}>
        {text}
      </Typography>
    </div>,
    {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
      icon: <WarningAmberIcon sx={{ color: "#F54F29" }} />,
    }
  );
};

/**
 * @param text Content of notification
 * @param onClickError Function that runs when the notification is clicked
 */

const notifyError = (text: string, onClickError?: () => void) => {
  toast.error(
    <div onClick={onClickError}>
      <Typography variant="caption" sx={{ color: "#FF0E00" }}>
        {text}
      </Typography>
    </div>,
    {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      /*  theme: "light", */
      /*   type: "success",
       */
      icon: <ErrorOutlineIcon sx={{ color: "#FF0E00" }} />,
    }
  );
};

/**
 * @returns notifySuccess, notifyError, notifyWarning
 */
const Notifies = () => {
  return { notifySuccess, notifyError, notifyWarning };
};

export const Notify = Notifies();
