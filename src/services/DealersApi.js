import axiosInstance from "../Axios/axios";

const dealersLogin = (loginCredentials) => {
  return axiosInstance("dealersToken").post("/dealers/login", {
    ...loginCredentials,
  });
};
export { dealersLogin };
