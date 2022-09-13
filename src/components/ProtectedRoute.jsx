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

function ProtectedRouteBilling({ redirectPath = "/cart" }) {
  console.log("entro a middleware");
  const gema = useSelector((state) => state.gema);
  console.log("state", gema);
  if (gema.cart.length === 0) {
    console.log("gmea cart", gema.cart);
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
