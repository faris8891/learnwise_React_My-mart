import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "../Pages/Users/Home/HomePage";
import Login from "../Pages/Users/Login/Login";
import Shops from "../Pages/Users/Shops/Shops";
import Orders from "../Pages/Users/Orders/Orders";
import Cart from "../Pages/Users/Cart/Cart";
import Products from "../Pages/Users/Products/Products";
import SingleProducts from "../Pages/Users/SingleProducts/SingleProducts";
import ProtectedRoute from "../Helpers/ProtectedRoute";
import Error404 from "../Pages/Error404";
import UsersNavbar from "../Components/Users/Navbar/UsersNavbar";
import UsersFooter from "../Components/Users/UsersFooter/UsersFooter";

export default function UserRouter() {
  const location = useLocation();
  const showNavbar = !location.pathname.includes("/login");
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<UsersNavbar />}>
        <Route element={<UsersFooter />} >
          <Route index element={<HomePage />} />
          <Route path="/shops" element={<Shops />} />
          <Route path="/shops/:dealerId" element={<Products />} />
          <Route
            path="/shops/:dealerId/:productId"
            element={<SingleProducts />}
          />
          <Route element={<ProtectedRoute role={"users"} route={"/login"} />}>
            <Route path="/orders" element={<Orders />} />
            <Route path="/cart" element={<Cart />} />
          </Route>
        </Route>
        </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  );
}
