import { toast } from "react-toastify";
import {
  deleteProduct,
  getOrders,
  getOrdersHistory,
  patchOrder,
  patchProducts,
  postProduct,
} from "../DealersApi";

const addProduct = async (product) => {
  try {
    const res = await postProduct(product);
    toast.success(res.data, { position: "top-center" });
  } catch (error) {
    toast.error(error, { position: "top-center" });
  }
};
const disableProduct = async (productData) => {
  try {
    const res = await patchProducts(productData);
    console.log(res);
    toast.success(res.data, { position: "top-center" });
    return res;
  } catch (error) {
    toast.error(error, { position: "top-center" });
  }
};
const removeProduct = async (productId) => {
  try {
    const res = await deleteProduct(productId);
    toast.success(res.data, { position: "top-center" });
    return res;
  } catch (error) {
    toast.error(error, { position: "top-center" });
  }
};
const orders = async () => {
  try {
    const res = await getOrders();
    return res;
  } catch (error) {}
};
const orderStatusUpdate = async (orderStatus) => {
  try {
    const res = await patchOrder(orderStatus);
    console.log(res);
    toast.success(res.data, { position: "top-center" });
    return res;
  } catch (error) {
    console.log(error);
    toast.error(error, { position: "top-center" });
  }
};
const ordersHistory = async () => {
  try {
    const res = await getOrdersHistory();
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
export {
  disableProduct,
  orders,
  ordersHistory,
  addProduct,
  removeProduct,
  orderStatusUpdate,
};
