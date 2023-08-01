import { toast } from "react-toastify";
import { patchDealers, patchTopShops, putDealers } from "../AdminApi";

const updateDealers = async (dealersData, setTrigger, trigger) => {
  try {
    console.log(dealersData);
    const res = await putDealers(dealersData);
    toast.success(res.data, { position: "top-center" });
    setTrigger(!trigger);
  } catch (error) {
    toast.error(error, { position: "top-center" });
  }
};

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
    toast.error(error, { position: "top-center" });
  }
};
const setTopShops = async (dealerId, values, setTrigger, trigger) => {
  try {
    const topShops = {
      dealerId: dealerId,
      isTopShops: !values,
    };
    const res = await patchTopShops(topShops);
    if (res) {
      setTrigger(!trigger);
    }
    toast.success(res.data, { position: "top-center" });
  } catch (error) {
    toast.error(error, { position: "top-center" });
  }
};
export { disableDealers, updateDealers, setTopShops };
