import { Routes, Route } from "react-router-dom";
import AdminLogin from "../Pages/Admin/Login/AdminLogin";
import Error404 from "../Pages/Error404";
import AdminHome from "../Pages/Admin/AdminHome/AdminHome";
import AdminNavBar from "../Components/AdminNavbar/AdminNavBar";
import AdminFooter from "../Components/AdminFooter/AdminFooter";
import Dealers from "../Pages/Admin/Dealers/Dealers";
import Users from "../Pages/Admin/Users/Users";
import SingleDealer from "../Pages/Admin/SingleDealer/SingleDealer";
import SingleUser from "../Pages/Admin/SingleUser/SingleUser";
import AdminProtected from "../Helpers/AdminProtected";

export default function AdminRouter() {
  return (
    <>
      <AdminNavBar />
      <Routes>
        <Route path="/" element={<AdminLogin />} />

        <Route element={<AdminProtected role={"admin"} route={"/admin"} />}>
          <Route path="dashboard" element={<AdminHome />} />
          <Route path="dealers" element={<Dealers />} />
          <Route path="dealers/:dealer_id" element={<SingleDealer />} />
          <Route path="users" element={<Users />} />
          <Route path="users/:user_id" element={<SingleUser />} />
        </Route>

        <Route path="*" element={<Error404 />} />
      </Routes>
      <AdminFooter />
    </>
  );
}
