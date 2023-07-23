import { toast } from "react-toastify";
import { getProducts, getShops, postLogin } from "../UsersApi";

const usersLogin = async (loginCredential) => {
  try {
    const res = await postLogin(loginCredential);
    return res;
  } catch (error) {
    toast.error(error, { position: "top-center" });
  }
};

const allShops = async () => {
  try {
    const res = await getShops();
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
const allProducts = async (dealerId) => {
  try {
    const res = await getProducts(dealerId);
    return res.data[0];
  } catch (error) {
    console.log(error);
  }
};
export { usersLogin, allShops, allProducts };
