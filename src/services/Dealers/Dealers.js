import { toast } from "react-toastify";
import {
  deleteProduct,
  getOrders,
  getOrdersHistory,
  patchCOD,
  patchCloseShop,
  patchOnlinePayment,
  patchOrder,
  patchProducts,
  postProduct,
  putProduct,
} from "../DealersApi";
import { Await } from "react-router-dom";

const toggleClose = async (id, values, trigger, setTrigger) => {
  try {
    const data = {
      dealerId: id,
      data: !values,
    };
    const res = await patchCloseShop(data);
    setTrigger(!trigger);
    toast.success(res.data, { position: "top-center" });
  } catch (error) {
    toast.error(error, { position: "top-center" });
  }
};

const toggleCOD = async (values) => {
  try {
    const data = { COD: values };
    const res = await patchCOD(data);
    toast.success(res.data, { position: "top-center" });
    return res;
  } catch (error) {
    console.log(res);
    toast.error(error, { position: "top-center" });
  }
};

const toggleOnlinePayment = async (values) => {
  try {
    const data = { onlinePayment: values };
    const res = await patchOnlinePayment(data);
    toast.success(res.data, { position: "top-center" });
    return res;
  } catch (error) {
    console.log(res);
    toast.error(error, { position: "top-center" });
  }
};

const addProduct = async (product) => {
  try {
    const res = await postProduct(product);
    toast.success(res.data, { position: "top-center" });
  } catch (error) {
    toast.error(error, { position: "top-center" });
  }
};

const updateProduct = async (product) => {
  try {
    const res = await putProduct(product);
    toast.success(res.data, { position: "top-center" });
  } catch (error) {
    toast.error(error, { position: "top-center" });
  }
};

const disableProduct = async (productData) => {
  try {
    const res = await patchProducts(productData);
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
    toast.success(res.data, { position: "top-center" });
    return res;
  } catch (error) {
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
  toggleClose,
  disableProduct,
  orders,
  ordersHistory,
  addProduct,
  updateProduct,
  removeProduct,
  orderStatusUpdate,
  toggleCOD,
  toggleOnlinePayment,
};
