import axiosInstance from "../Axios/axios";

const adminLogin = (loginData) => {
    return axiosInstance("adminToken").post("/admin/login", { ...loginData });
};
export { adminLogin };
