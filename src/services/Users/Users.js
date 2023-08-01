import { toast } from "react-toastify";
import {
  deleteCart,
  getCart,
  getOrders,
  getProducts,
  getProfile,
  getShops,
  postCart,
  postCheckout,
  postFeedback,
  postLogin,
  postOtpLogin,
  postPayment,
  postRegister,
  putOtpVerify,
} from "../UsersApi";
import Cookies from "js-cookie";

const usersLogin = async (loginCredential) => {
  try {
    const res = await postLogin(loginCredential);
    return res;
  } catch (error) {
    toast.error(error, { position: "top-center" });
  }
};

const otpLogin = async (mobileNumber) => {
  try {
    const res = await postOtpLogin(mobileNumber);
    const expiryTimeInMinutes = 5;
    const expiryDate = new Date();
    expiryDate.setTime(expiryDate.getTime() + expiryTimeInMinutes * 60 * 1000);
    Cookies.set("otpToken", res.data, { expires: expiryDate });
  } catch (error) {
    toast.error(error, { position: "top-center" });
  }
};

const verifyOTP = async (otp) => {
  try {
    const res = await putOtpVerify(otp);
    Cookies.set("userToken", res.data);
    return res.data;
  } catch (error) {
    toast.error(error, { position: "top-center" });
  }
};

const userRegister = async (userCredential) => {
  try {
    const res = await postRegister(userCredential);
    toast.success(res.data, { position: "top-center" });
  } catch (error) {
    toast.error(error, { position: "top-center" });
  }
};

const profile = async () => {
  try {
    const res = await getProfile();
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

const allShops = async () => {
  try {
    const res = await getShops();
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
const allProducts = async (dealerId) => {
  try {
    const res = await getProducts(dealerId);
    return res.data[0];
  } catch (error) {
    console.log(error);
  }
};

const cart = async () => {
  try {
    const res = await getCart();
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

const addToCart = async (products) => {
  try {
    const res = await postCart(products);
    toast.success(res.data, { position: "top-center" });
  } catch (error) {
    console.log(error);
    toast.error(error, { position: "top-center" });
  }
};

const removeFromCart = async (productId) => {
  try {
    const res = await deleteCart(productId);
    toast.success(res.data, { position: "top-center" });
    return res;
  } catch (error) {
    console.log(error);
    toast.error(error, { position: "top-center" });
  }
};

const payment = async (checkout) => {
  try {
    const res = await postPayment(checkout);
    return res;
  } catch (error) {
    console.log(error);
  }
};

const checkoutCOD = async () => {
  try {
    const res = await postCheckout();
    toast.success(res.data, { position: "top-center" });
    return res;
  } catch (error) {
    toast.error(error, { position: "top-center" });
  }
};

const allOrders = async () => {
  try {
    const res = await getOrders();
    return res;
  } catch (error) {
    console.log(error);
  }
};

const addFeedback = async (feedback) => {
  try {
    const res = await postFeedback(feedback);
  } catch (error) {
    console.log(error);
  }
};
export {
  usersLogin,
  otpLogin,
  verifyOTP,
  userRegister,
  profile,
  allShops,
  allProducts,
  cart,
  addToCart,
  removeFromCart,
  payment,
  checkoutCOD,
  allOrders,
  addFeedback,
};
