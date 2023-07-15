import { toast } from "react-toastify";
import { getOrders, getOrdersHistory, patchProducts, postProduct } from "../DealersApi";


const addProduct = async (product) => {
  try {
    const res = await postProduct(product)
    console.log(res);
  } catch (error) {
    console.log(error);
  }
}
const disableProduct = async (productData) => {
  try {
    const res = await patchProducts(productData);
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
const ordersHistory = async () => {
  try {
    const res = await getOrdersHistory();
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
export { disableProduct, orders, ordersHistory ,addProduct};
