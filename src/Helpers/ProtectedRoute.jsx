import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
const ProtectedRoute = ({ role, route }) => {
  const navigate = useNavigate();
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    if (role === "admin") {
      const adminToken = Cookies.get("adminToken");
      if (adminToken) {
        setAuth(true);
      } else {
        navigate(route);
      }
    } else if (role === "dealers") {
      const dealerToken = Cookies.get("dealerToken");
      if (dealerToken) {
        setAuth(true);
      } else {
        navigate(route);
      }
    }
  }, []);

  if (auth === null) return;

  return auth ? <Outlet /> : <Navigate to={route} />;
};
export default ProtectedRoute;
