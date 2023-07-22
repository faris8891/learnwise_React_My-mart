import axiosInstance from "../Axios/axios";

const postLogin = (loginCredential) => {
  return axiosInstance("userToken").post("/login", { ...loginCredential });
};
const getShops = () => {
  return axiosInstance("userToken").get("/shops");
};

export { postLogin,getShops };
