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
const addUsers = (userData) => {
  return axiosInstance("adminToken").post("admin/users", { ...userData });
};
const putUsers = (userData) => {
  return axiosInstance("adminToken").put("admin/users", { ...userData });
};
const patchUsers = (userData) => {
  return axiosInstance("adminToken").patch("admin/users", { ...userData });
};
const deleteUsers = (userData) => {
  return axiosInstance("adminToken").delete("admin/users", { data: userData });
};
const addDealers = (userData) => {
  return axiosInstance("adminToken").post("admin/dealers", { ...userData });
};
export {
  adminLogin,
  adminProfile,
  getDealers,
  getUsers,
  patchUsers,
  addUsers,
  deleteUsers,
  putUsers,
  addDealers
};
