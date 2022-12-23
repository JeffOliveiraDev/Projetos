import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import { LoginPage } from "../pages/login/login";
import { RegisterPage } from "../pages/register";
import { DashboardPage } from "../pages/dashboard";
import { ProtectedRoutes } from "../components/ProtectedRoutes";

export function RoutesMain() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="register" element={<RegisterPage />} />
      <Route path="/dashboard" element={<ProtectedRoutes />}>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/dashboard" element={<Navigate to="/dashboard" />} />
      </Route>
    </Routes>
  );
}
