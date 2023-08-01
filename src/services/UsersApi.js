import axios from "axios";
import axiosInstance from "../Axios/axios";

const postLogin = (loginCredential) => {
  return axiosInstance("userToken").post("/login", { ...loginCredential });
};

const postOtpLogin = (mobileNumber) => {
  return axiosInstance("userToken").post("/otp-login", { ...mobileNumber });
};

const putOtpVerify = (otp) => {
  return axiosInstance("userToken").put("/otp-login", { ...otp });
};

const postRegister = (userCredential) => {
  return axiosInstance("userToken").post("/register", { ...userCredential });
};

const getProfile = () => {
  return axiosInstance("userToken").get("/profiles");
};

const getShops = () => {
  return axiosInstance("userToken").get("/shops");
};

const getProducts = (dealerId) => {
  return axiosInstance("userToken").get(`/products/${dealerId}`);
};

const getCart = () => {
  return axiosInstance("userToken").get("/cart");
};

const postCart = (products) => {
  return axiosInstance("userToken").post("/cart", { ...products });
};

const deleteCart = (products) => {
  return axiosInstance("userToken").delete("/cart", { data: products });
};

const postPayment = (checkout) => {
  return axiosInstance("userToken").post("/pay", { ...checkout });
};

const postPaymentVerify = (data, orderId) => {
  return axiosInstance("userToken").post(`/pay-verify/${orderId}`, { ...data });
};

const postCheckout = (checkout) => {
  return axiosInstance("userToken").post("/checkout", { ...checkout });
};

const getOrders = () => {
  return axiosInstance("userToken").get("/orders");
};

const postFeedback = (feedback) => {
  return axiosInstance("userToken").post("/feedback", { ...feedback });
};

export {
  postLogin,
  postRegister,
  postOtpLogin,
  putOtpVerify,
  getProfile,
  getShops,
  getProducts,
  getCart,
  postCart,
  deleteCart,
  postPayment,
  postPaymentVerify,
  postCheckout,
  getOrders,
  postFeedback,
};
