import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

//Verify if user is logged
function ProtectedRouteUser({ redirectPath = "/Profile" }) {
  const data = useSelector((state) => state.gema.userData);
  if (!data) {
    return <Navigate to={redirectPath} replace />;
  }
  return <Outlet />;
}

//Verify if user is admin
function ProtectedRouteAdmin({ redirectPath = "/" }) {
  const data = useSelector((state) => state.gema.userData);
  if (!data.isAdmin) {
    return <Navigate to={redirectPath} replace />;
  }
  return <Outlet />;
}

export { ProtectedRouteUser, ProtectedRouteAdmin };
