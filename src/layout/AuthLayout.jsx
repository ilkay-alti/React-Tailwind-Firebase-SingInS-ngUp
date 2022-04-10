import { Navigate, Outlet } from "react-router-dom";
import { useIsLoggedIn } from "../config/hooks";
const AuthLayout = () => {
  const isLoggedIn = useIsLoggedIn();
  if (isLoggedIn === null) {
    return <div>LOADINGGG....</div>;
  } else if (isLoggedIn === true) {
    return <Navigate replace to={"/"} />;
  }
  return <Outlet />;
};
export default AuthLayout;
