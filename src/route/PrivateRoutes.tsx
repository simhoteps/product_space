import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router";
import MasterLayout from "layouts/MasterLayout";
import DashboardPage from "page/dashboard/DashboardPage";
import AccountPage from "page/account/AccountPage";
import HomePage from "page/home/HomePage";
import CityInfo from "page/home/components/cityInfo/CityInfo";

const PrivateRoutes = () => {
  return (
    <Routes>
      <Route element={<MasterLayout />}>
        <Route path="auth/*" element={<Navigate to="/home" />} />
        <Route path="home" element={<HomePage />} />
        <Route path="home/map/:id" element={<CityInfo />} />
        {/*    <Route path="dashboard" element={<DashboardPage />} /> */}
        <Route path="account" element={<AccountPage />} />
        <Route path="*" element={<Navigate to="/error/404" />} />
      </Route>
    </Routes>
  );
};

export default PrivateRoutes;
