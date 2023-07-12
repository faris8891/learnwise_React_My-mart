import { Route, Routes } from "react-router-dom";
import DealersLogin from "../Pages/Dealers/DealersLogin/DealersLogin";
import Orders from "../Pages/Dealers/Orders/Orders";
import OrderHistory from "../Pages/Dealers/OrderHistory/OrderHistory";
import Products from "../Pages/Dealers/Products/Products";
import FeedBack from "../Pages/Dealers/FeedBack/FeedBack";
import DealersNavBar from "../Components/Dealers/DealersNavbar/DealersNavbar";
import AdminFooter from "../Components/AdminFooter/AdminFooter";

export default function DealerRouter() {
  return (
    <>
      <DealersNavBar />
      <Routes>
        <Route path="/" element={<DealersLogin />} />
        <Route path="orders" element={<Orders />} />
        <Route path="order-history" element={<OrderHistory />} />
        <Route path="products" element={<Products />} />
        <Route path="feedbacks" element={<FeedBack />} />
      </Routes>
      <AdminFooter />
    </>
  );
}
