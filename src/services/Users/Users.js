import { toast } from "react-toastify";
import {
  deleteCart,
  getCart,
  getProducts,
  getShops,
  postCart,
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
    console.log(res);
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
export {
  usersLogin,
  allShops,
  allProducts,
  cart,
  addToCart,
  removeFromCart,
  payment,
};
