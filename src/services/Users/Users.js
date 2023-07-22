import { toast } from "react-toastify";
import { getShops, postLogin } from "../UsersApi";

const usersLogin = async (loginCredential) => {
  try {
    const res = await postLogin(loginCredential);
    return res;
  } catch (error) {
    toast.error(error, { position: "top-center" });
  }
};

const shops = async () => {
  try {
    const res = await getShops();
    return(res.data);
  } catch (error) {
    console.log(error);
  }
};
export { usersLogin, shops };
