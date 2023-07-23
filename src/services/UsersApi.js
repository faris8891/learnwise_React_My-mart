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

export { postLogin,getShops,getProducts };
