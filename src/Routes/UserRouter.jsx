import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../Pages/Users/Home/HomePage";
import Login from "../Pages/Users/Login/Login";
import Shops from "../Pages/Users/Shops/Shops";
import Orders from "../Pages/Users/Orders/Orders";
import Cart from "../Pages/Users/Cart/Cart";
import Products from "../Pages/Users/Products/Products";
import SingleProducts from "../Pages/Users/SingleProducts/SingleProducts";
import ProtectedRoute from "../Helpers/ProtectedRoute";
import Navbar from "../Components/Users/Navbar/Navbar";
import AdminFooter from "../Components/AdminFooter/AdminFooter";

export default function UserRouter() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/shops" element={<Shops />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<SingleProducts />} />
        <Route element={<ProtectedRoute role={"users"} route={"/login"} />}>
          <Route path="/orders" element={<Orders />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
      <AdminFooter/>
    </>
  );
}
