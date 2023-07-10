import { toast } from "react-toastify";
import { addUsers, deleteUsers, patchUsers, putUsers } from "../AdminApi";

const addUser = async (data, setTrigger, trigger) => {
  try {
    const res = await addUsers(data);
    setTrigger(!trigger);
    toast.success(res.data, { position: "top-center" });
  } catch (error) {
    toast.error(error, { position: "top-center" });
  }
};

const editUser = async (id, data, setTrigger, trigger) => {
  try {
    const userData = data;
    userData.userId = id;
    const res = await putUsers(userData);
    setTrigger(!trigger);
    toast.success(res.data, { position: "top-center" });
  } catch (error) {
    toast.error(error, { position: "top-center" });
  }
};
const disableUser = async (id, userStatus, setTrigger, trigger) => {
  try {
    const userData = {
      userId: id,
      userStatus: !userStatus,
    };
    const res = await patchUsers(userData);
    setTrigger(!trigger);
    toast.success(res.data, { position: "top-center" });
  } catch (error) {
    toast.error(error, { position: "top-center" });
  }
};
const deleteUser = async (id, setTrigger, trigger) => {
  try {
    const userData = { userId: id };
    const res = await deleteUsers(userData);
    setTrigger(!trigger);
    toast.success(res.data, { position: "top-center" });
  } catch (error) {
    toast.error(error, { position: "top-center" });
  }
};

export { deleteUser, disableUser, editUser, addUser };
