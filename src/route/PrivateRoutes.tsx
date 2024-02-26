import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router";
import MasterLayout from "layouts/MasterLayout";
import DashboardPage from "page/dashboard/DashboardPage";
import AccountPage from "page/account/AccountPage";
import HomePage from "page/home/HomePage";
import ReportsView from "page/reports/ReportsView";
import AboutPage from "page/about/AboutPage";
import CityInfo from "page/dashboard/components/cityInfo/CityInfo";
import DataPage from "page/data/DataPage";

const PrivateRoutes = () => {
  return (
    <Routes>
      <Route element={<MasterLayout />}>
        <Route path="auth/*" element={<Navigate to="/home" />} />
        <Route path="home" element={<HomePage />} />
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="dashboard/map/:id" element={<CityInfo />} />
        <Route path="account" element={<AccountPage />} />
        {/*         <Route path="about" element={<AboutPage />} />
        <Route path="data" element={<DataPage />} />
        <Route path="reports" element={<ReportsView />} /> */}
        <Route path="*" element={<Navigate to="/error/404" />} />
      </Route>
    </Routes>
  );
};

export default PrivateRoutes;
