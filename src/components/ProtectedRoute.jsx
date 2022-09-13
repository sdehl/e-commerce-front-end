import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

//Verify if user is logged
function ProtectedRouteUser({ redirectPath = "/Profile" }) {
  const gema = useSelector((state) => state.gema);

  if (gema.cart.length > 0) {
    if (!gema.userData.token) {
      return <Navigate to={redirectPath} replace />;
    }
    return <Outlet />;
  } else {
    return <Navigate to={redirectPath} replace />;
  }
}

function ProtectedRouteBilling({ redirectPath = "/cart" }) {
  const gema = useSelector((state) => state.gema);

  if (gema.cart.length === 0) {
    return <Navigate to={redirectPath} replace />;
  }
  return <Outlet />;
}

//Verify if user is admin
function ProtectedRouteAdmin({ redirectPath = "/" }) {
  const data = useSelector((state) => state.gema);
  console.log(data);
  if (!data.isAdmin) {
    console.log("hola");
    return <Navigate to={redirectPath} replace />;
  }
  return <Outlet />;
}

export { ProtectedRouteUser, ProtectedRouteAdmin, ProtectedRouteBilling };
