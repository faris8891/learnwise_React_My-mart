import axiosInstance from "../Axios/axios";

const adminLogin = (loginData) => {
  return axiosInstance("adminToken").post("/admin/login", { ...loginData });
};
const adminProfile = () => {
  return axiosInstance("adminToken").get("admin/profile");
};
const getDealers = () => {
  return axiosInstance("adminToken").get("admin/dealers");
};
const getUsers = () => {
  return axiosInstance("adminToken").get("admin/users");
};
const patchUsers = (userData) => {
  return axiosInstance("adminToken").patch("admin/users",{...userData});
};
export { adminLogin, adminProfile, getDealers, getUsers ,patchUsers};
