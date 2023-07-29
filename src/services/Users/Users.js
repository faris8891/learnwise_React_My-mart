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
  postPayment,
} from "../UsersApi";

const usersLogin = async (loginCredential) => {
  try {
    const res = await postLogin(loginCredential);
    return res;
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
    console.log(res);
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
