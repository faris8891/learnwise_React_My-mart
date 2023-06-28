import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminLogin from "../Pages/Admin/Login/AdminLogin";
import Error404 from "../Pages/Error404";

export default function AdminRouter() {
  return (
    <Routes>
      <Route path="/" element={<AdminLogin />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}
