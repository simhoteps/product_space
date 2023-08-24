import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router";
import MasterLayout from "layouts/MasterLayout";
import AlertsPage from "page/alert/AlertsPage";
import DashboardPage from "page/dashboard/DashboardPage";
import FlowPage from "page/workflow/WorkflowPage";
import SettingsPage from "page/settings/SettingsPage";
import AccountPage from "page/account/AccountPage";
import { ReportsPage } from "page/reports/ReportsPage";
import HostManagementPage from "page/hostManagement/HostManagementPage";
import AutomationPage from "page/automation/AutomationPage";
import AlarmGroupsPage from "page/alarmGroups/AlarmGroupsPage";
import CustomLoading from "components/loading/CustomLoading";

const PrivateRoutes = () => {
  return (
    <Routes>
      <Route element={<MasterLayout />}>
        <Route path="auth/*" element={<Navigate to="/dashboard" />} />
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="alerts" element={<AlertsPage />} />
        <Route path="automation" element={<AutomationPage />} />
        <Route path="workflow" element={<FlowPage />} />
        <Route path="hostManagement" element={<HostManagementPage />} />
        <Route path="reports" element={<ReportsPage />} />
        <Route path="settings" element={<SettingsPage />} />
        <Route path="alarmGroups" element={<AlarmGroupsPage />} />
        <Route path="account" element={<AccountPage />} />
        <Route path="*" element={<Navigate to="/error/404" />} />
      </Route>
    </Routes>
  );
};

export default PrivateRoutes;
