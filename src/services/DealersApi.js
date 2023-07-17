import axiosInstance from "../Axios/axios";

const dealersLogin = (loginCredentials) => {
  return axiosInstance("dealerToken").post("/dealers/login", {
    ...loginCredentials,
  });
};
const getProfile = () => {
  return axiosInstance("dealerToken").get("dealers/profile");
};
const getProducts = () => {
  return axiosInstance("dealerToken").get("dealers/products");
};
const postProduct = (product) => {
  return axiosInstance("dealerToken").post("dealers/products", { ...product });
};
const patchProducts = (productData) => {
  return axiosInstance("dealerToken").patch("dealers/products", {
    ...productData,
  });
};
const deleteProduct = (productData) => {
  return axiosInstance("dealerToken").delete("dealers/products", {
    data: productData,
  });
};

const getOrders = () => {
  return axiosInstance("dealerToken").get("dealers/orders/?");
};
const patchOrder = (orderStatus) => {
  return axiosInstance("dealerToken").patch("dealers/orders", {
    ...orderStatus,
  });
};
const getOrdersHistory = () => {
  return axiosInstance("dealerToken").get("dealers/orders-history");
};
export {
  dealersLogin,
  getProducts,
  postProduct,
  getProfile,
  patchProducts,
  deleteProduct,
  getOrders,
  patchOrder,
  getOrdersHistory,
};
