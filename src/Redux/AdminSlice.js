import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  id: "",
  login: "",
  token: "",
};

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    setAdminDetails: (state, action) => {},
    setAdminSignOutState: (state, action) => {},
  },
});
export const { setAdminDetails, setAdminSignOutState } = adminSlice.actions;
export default adminSlice.reducer;
