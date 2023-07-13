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
export { dealersLogin, getProducts, getProfile };
