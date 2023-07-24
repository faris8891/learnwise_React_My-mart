import axiosInstance from "../Axios/axios";

const postLogin = (loginCredential) => {
  return axiosInstance("userToken").post("/login", { ...loginCredential });
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

export { postLogin, getShops, getProducts, getCart, postCart, deleteCart,postPayment };
