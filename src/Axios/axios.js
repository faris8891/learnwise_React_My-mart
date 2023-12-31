import axios from "axios";
import Cookies from "js-cookie";

const axiosInstance = (tokenName) => {
  const instance = axios.create({
    baseURL: import.meta.env.VITE_SERVER_URL,
    // baseURL: "mymart0.vercel.app",
    timeout: 5000,
    headers: {
      "Content-Type": "application/json",
    },
  });

  // instance request interceptor
  instance.interceptors.request.use((request) => {
    const token = Cookies.get(tokenName);
    request.headers.Authorization = token;
    return request;
  });

  // instance response interceptor
  instance.interceptors.response.use(
    (response) => response,
    (error) => Promise.reject(error.response.data)
  );

  return instance;
};
export default axiosInstance;
