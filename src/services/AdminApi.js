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
const addDealers = (dealersData) => {
  return axiosInstance("adminToken").post("admin/dealers", { ...dealersData });
};
const putDealers = (dealersData) => {
  return axiosInstance("adminToken").put("admin/dealers", { ...dealersData });
};
const patchDealers = (dealersData) => {
  return axiosInstance("adminToken").patch("admin/dealers", { ...dealersData });
};
const getUsers = () => {
  return axiosInstance("adminToken").get("admin/users");
};
const addUsers = (usersData) => {
  return axiosInstance("adminToken").post("admin/users", { ...usersData });
};
const putUsers = (usersData) => {
  return axiosInstance("adminToken").put("admin/users", { ...usersData });
};
const patchUsers = (usersData) => {
  return axiosInstance("adminToken").patch("admin/users", { ...usersData });
};
const deleteUsers = (usersData) => {
  return axiosInstance("adminToken").delete("admin/users", { data: usersData });
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
  addDealers,
  patchDealers,
  putDealers,
};
