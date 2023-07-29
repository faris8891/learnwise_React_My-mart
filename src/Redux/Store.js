import { configureStore } from "@reduxjs/toolkit";
import AdminSlice from "./AdminSlice";
import DealerSlice from "./DealerSlice";
import UserSlice from "./UserSlice";

const store = configureStore({
  reducer: {
    admin: AdminSlice,
    dealers: DealerSlice,
    users: UserSlice,
  },
});
export default store;
