import React, { FC, useState, useEffect, Suspense } from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import App from "../App";
import { ErrorsPage } from "page/errors/ErrorsPage";
import { Logout } from "@mui/icons-material";
import PrivateRoutes from "./PrivateRoutes";
import AuthPage from "page/auth/AuthPage";
import CustomLoading from "components/loading/CustomLoading";
import MasterLayout from "layouts/MasterLayout";

/* const { PUBLIC_URL } = process.env.PUBLIC_URL;
console.log("PUBLIC_URL", PUBLIC_URL); */

const AppRoutes: FC = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Suspense fallback={<CustomLoading />}>
        <Routes>
          <Route element={<App />}>
            <Route path="error/*" element={<ErrorsPage />} />
            <Route path="logout" element={<Logout />} />

            {loading ? (
              <>
                <Route path="/*" element={<CustomLoading />} />
              </>
            ) : sessionStorage.getItem("user") ? (
              <>
                <Route path="/*" element={<PrivateRoutes />} />
                <Route index element={<Navigate to="/home" />} />
              </>
            ) : (
              <>
                <Route path="auth/*" element={<AuthPage />} />
                <Route path="*" element={<Navigate to="/auth" />} />
              </>
            )}
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export { AppRoutes };

/* sessionStorage.getItem("user")  */
