import { useContext, useEffect } from "react";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../Providers/UserContext";

export function ProtectedRoutes() {
  const { user, loading } = useContext(UserContext);
  const location = useLocation();

  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, []);

  return (
    <>
      <Outlet />
    </>
  );
}
