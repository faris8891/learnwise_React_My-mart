import { configureStore } from "@reduxjs/toolkit";
import AdminSlice from "./AdminSlice";
import DealerSlice from "./DealerSlice";

const store = configureStore({
  reducer: {
    admin: AdminSlice,
    dealers: DealerSlice,
  },
});
export default store;
