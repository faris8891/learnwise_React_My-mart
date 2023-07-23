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
import Error404 from "../Pages/Error404"


export default function UserRouter() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/shops" element={<Shops />} />
        <Route path="/shops/:dealerId" element={<Products />} />
        <Route path="/shops/:dealerId/:productId" element={<SingleProducts />} />
        <Route element={<ProtectedRoute role={"users"} route={"/login"} />}>
          <Route path="/orders" element={<Orders />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
        <Route path="*" element={<Error404/> } />
      </Routes>
    </>
  );
}
