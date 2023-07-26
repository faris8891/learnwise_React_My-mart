import { toast } from "react-toastify";
import { patchDealers } from "../AdminApi";

const disableDealers = async (id, dealerStatus, setTrigger, trigger) => {
  try {
    const dealerData = {
      dealerId: id,
      dealerStatus: !dealerStatus,
    };
    console.log(dealerData);
    const res = await patchDealers(dealerData);
    setTrigger(!trigger);
    toast.success(res.data, { position: "top-center" });
  } catch (error) {
    console.log(error);
    toast.error(error, { position: "top-center" });
  }
};
export { disableDealers };
