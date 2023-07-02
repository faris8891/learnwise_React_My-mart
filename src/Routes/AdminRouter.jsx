import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminLogin from "../Pages/Admin/Login/AdminLogin";
import Error404 from "../Pages/Error404";
import AdminHome from "../Pages/Admin/AdminHome/AdminHome";
import AdminNavBar from "../Components/AdminNavbar/AdminNavBar";
import AdminFooter from "../Components/AdminFooter/AdminFooter";
import Dealers from "../Pages/Admin/Dealers/Dealers";

export default function AdminRouter() {
  return (
    <>
      <AdminNavBar />
      <Routes>
        <Route path="/" element={<AdminLogin />} />
        <Route path="dashboard" element={<AdminHome />} />
        <Route path="dealers" element={<Dealers/>} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <AdminFooter />
    </>
  );
}
