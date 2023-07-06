import { createSlice, current } from "@reduxjs/toolkit";
const initialState = {
  name: "",
  mobile: "",
  email: "",
  role: "",
  dealers: [],
  users: [],
};

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    setAdminDetails: (state, action) => {
      const data = state;
      data.name = action.payload.name;
      data.email = action.payload.email;
      data.mobile = action.payload.mobile;
      data.role = action.payload.role;
    },
    setDealers: (state, action) => {
      const data = state;
      data.dealers = action.payload;
    },
    setUsers: (state, action) => {
      const data = state;
      data.users = action.payload;
    },
    setUserStatus: (state, action) => {
      const user = state.users.find((e) => e._id == action.payload.userId);
      user.active = action.payload.userStatus;
    },
  },
});
export const {
  setAdminDetails,
  setAdminSignOutState,
  setDealers,
  setUsers,
  setUserStatus,
} = adminSlice.actions;
export default adminSlice.reducer;
