import { Routes, Route, Navigate } from "react-router-dom";
import { LoginPage } from "../pages/login";
import { RegisterPage } from "../pages/register";
import { Dashboard } from "../pages/dashboard";
import { useState } from "react";
import { ProtectedRoutes } from "../components/ProtectedRoutes";

export function RoutesMain() {
  const [user, setUser] = useState([]);
  return (
    <Routes>
      <Route path="/dashboard" element={<ProtectedRoutes user={user} />}>
        <Route
          path="/dashboard"
          element={<Dashboard user={user} setUser={setUser} />}
        />
        <Route path="/dashboard" element={<Navigate to="/dashboard" />} />
      </Route>
      <Route path="/" element={<LoginPage user={user} setUser={setUser} />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
}
