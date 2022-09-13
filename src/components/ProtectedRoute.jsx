import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

//Verify if user is logged
function ProtectedRouteUser({ redirectPath = "/Profile" }) {
  const twitter = useSelector((state) => state.twitter);
  if (!twitter.user.token) {
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
  const gema = useSelector((state) => state.gema);
  if (!gema.user.token.admin) {
    return <Navigate to={redirectPath} replace />;
  }
  return <Outlet />;
}

export default ProtectedRouteBilling;
