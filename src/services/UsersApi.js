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

export { postLogin, getShops, getProducts, getCart, postCart };
